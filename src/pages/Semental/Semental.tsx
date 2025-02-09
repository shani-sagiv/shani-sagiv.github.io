import React, { useState } from "react";
import {
  getSemanticWord,
  setSemanticWord,
} from "../../helpers/localStorage.helpers";
import { Button } from "components/Button";
import TextField from "../../components/TextField/TextField";

const API_URL =
  "https://api-inference.huggingface.co/models/sentence-transformers/paraphrase-multilingual-mpnet-base-v2";
const API_KEY = "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";

export interface wordScore {
  word: string;
  score: number;
}
const RANDOM_WORDS = [
  "הרפתקה",
  "שקיעה",
  "תרמיל",
  "דרכון",
  "טוק-טוק",
  "פגודה",
  "מקדש",
  "בודדה",
  "קוקוס",
  "סירה",
  "שוק",
  "ריקשה",
  "קטנוע",
  "מסיבה",
  "פירות",
  "גלויה",
  "מסאז'",
  "גסטהאוס",
  "צניחה",
  "צלילה",
  "מסלול",
  "בונגלו",
  "חוף",
  "אטרקציה",
  "קריוקי",
  "תיק",
  "תאילנד",
  "וייטנאם",
  "קמבודיה",
  "אנגקור",
  "מים",
  "יוגה",
  "שייק",
  "גשם",
  "טרופי",
  "כרטיס",
  "שנורקל",
  "חוויות",
  "גשר",
  "מסורת",
  "קפה",
  "אורז",
  "בירה",
  "ביקיני",
  "פלפל",
  "כובע",
  "מקדשים",
  "שמש",
  "תרבות",
  "פסטיבל",
  "נהר",
  "ספארי",
  "שיט",
  "מנדרינה",
  "מפה",
  "נמל",
  "איים",
  "מסלול",
  "גולש",
  "ג'ונגל",
  "טרקים",
  "מעבורת",
  "מונית",
  "בזאר",
  "לונג טייל",
  "מזכרות",
  "שפתיים",
  "עגור",
  "סנדלים",
  "מים רותחים",
  "באמבו",
  "פרפר",
  "רוח",
  "תמרים",
  "נענע",
  "קטיפה",
  "מקדש עתיק",
  "רוחניות",
  "מדיטציה",
  "תיק גב",
  "תאורה",
  "זיקוקים",
  "סיר",
  "שק שינה",
  "ספה",
  "חבל",
  "ציור",
  "מרק",
  "טיול",
  "ריח",
  "סחלבים",
  "אביב",
  "עונה",
  "אופניים",
  "חולצה",
  "מטוס",
  "זיכרון",
  "טעמים",
  "שמשיה",
  "שוקולד",
  "חופשה",
  "מים מתוקים",
  "ברווז",
];

const Semental: React.FC = () => {
  const [similarityScore, setSimilarityScore] = useState<number | null>(null);
  const [currentInputWord, setCurrentInputWord] = useState<string>("");
  const [currentWord, setCurrentWord] = useState<string>("");
  const [history, setHistory] = useState<wordScore[]>([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    getSemanticWordFromLs();
  }, []);
  const getSimilarity = async (sourceword1: string, word2: string) => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: {
            source_sentence: sourceword1,
            sentences: [word2],
          },
        }),
      });

      const result = await response.json();

      if (result.error) {
        console.error("Error:", result.error);
      } else {
        const score = result[0] * 100;
        setSimilarityScore(score); // המרה לאחוזים
        setHistory([...history, { word: word2, score }]);
        console.log(
          "Similarity Score:",
          (result[0]?.score * 100).toFixed(2) + "%",
        );
      }
    } catch (error) {
      console.error("Error fetching similarity:", error);
    }
    setLoading(false);
  };
  const getSemanticWordFromLs = () => {
    let word = getSemanticWord();
    if (!word) {
      word = getRandomWord();
      setSemanticWord(word);
    }
    setCurrentWord(word);
  };
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_WORDS.length);
    return RANDOM_WORDS[randomIndex];
  };

  return (
    <div
      className="Semental"
      style={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Button
        onClick={() => {
          let word = getRandomWord();
          setSemanticWord(word);

          setCurrentWord(word);
        }}
      >
        רענון מילה
      </Button>
      <TextField
        value={currentInputWord}
        onChange={(e) => setCurrentInputWord(e.target.value)}
      />
      <Button onClick={() => getSimilarity(currentWord, currentInputWord)}>
        בדוק
        {/*{`בדוק דמיון בין "${currentInputWord}" ל-"${currentWord}"`}*/}
      </Button>
      {loading && <p>טוען...</p>}
      {similarityScore !== null && (
        <p>רמת דמיון: {similarityScore.toFixed(2)}%</p>
      )}
      {history
        .sort((a, b) => b.score - a.score)
        .map((r) => (
          <div style={{ marginTop: 5, marginRight: 10 }}>
            {r.word}:{r.score.toFixed(2)}
          </div>
        ))}
      <div style={{ marginTop: "300vh" }}>
        <h1>{currentWord}</h1>
      </div>
    </div>
  );
};

export default Semental;
