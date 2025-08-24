const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(require("./shanisagiv-d644a-firebase-adminsdk-fbsvc-3ff8347578.json")),
});
const db = admin.firestore();

async function migrate() {
  const likesSnap = await db.collection("attractionLikes").get();
  const commentsSnap = await db.collection("comments").get();

  // שמירה באובייקט זמני לכל אטרקציה שיש בה פעילות
  const attractions = {};

  // לייקים
  
  
likesSnap.forEach((doc) => {
  const data = doc.data();
  const [destinationId, ...rest] = doc.id.split("_");
  const itemId = rest.join("_");
  if (!destinationId || !itemId) return;

  const key = `${destinationId}_${itemId}`;
  if (!attractions[key]) {
    attractions[key] = {
      destinationId,
      itemId,
      likedBy: [],
      likesCount: 0,
      comments: [],
    };
  }

  (data.likedBy || []).forEach((who) => {
    attractions[key].likedBy.push({ displayName: who });
    attractions[key].likesCount += 1;
  });
});

  // תגובות
  commentsSnap.forEach((doc) => {
    const data = doc.data();
    if (!data.destinationId || !data.itemId) return;
    const key = `${data.destinationId}_${data.itemId}`;
    if (!attractions[key]) {
      attractions[key] = {
        destinationId: data.destinationId,
        itemId: data.itemId,
        likedBy: [],
        likesCount: 0,
        comments: [],
      };
    }
    attractions[key].comments.push({
      id: doc.id,
      uid: data.uid || null,
      displayName: data.sender || "Unknown",
      text: data.text,
      likesCount: data.likes || 0,
      likedBy: data.likedBy || [],
      createdAt: data.createdAt || admin.firestore.FieldValue.serverTimestamp(),
    });
  });

  // כתיבה ל־Firestore
  for (const [key, value] of Object.entries(attractions)) {
    const docRef = db.collection("attractions").doc(key);
    await docRef.set({
      destinationId: value.destinationId,
      itemId: value.itemId,
      likesCount: value.likesCount,
      likedBy: value.likedBy,
      commentsCount: value.comments.length,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    for (const c of value.comments) {
      const commentRef = docRef.collection("comments").doc(c.id);
      await commentRef.set(c);
    }
  }

  console.log("Migration done ✅");
}

migrate().catch(console.error);
