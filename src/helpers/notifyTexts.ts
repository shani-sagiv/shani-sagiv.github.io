// src/helpers/notifyTexts.ts

export const notifyMessage = (sender: string, text: string) =>
  `💬 ${sender} sent a message: "${text}"`;

export const notifyComment = (
  sender: string,
  destinationId: string,
  itemId: string,
  text: string
) =>
  `📝 ${sender} commented on ${destinationId}/${itemId}: "${text}"`;

export const notifyLikeComment = (
  sender: string,
  destinationId: string,
  itemId: string
) =>
  `👍 ${sender} liked a comment in ${destinationId}/${itemId}`;

export const notifyLikeAttraction = (
  sender: string,
  destinationId: string,
  itemId: string
) =>
  `⭐ ${sender} liked the attraction ${itemId} in ${destinationId}`;

export const notifyPageView = (sender: string, path: string) =>
  `👁️ ${sender} visited page: ${path}`;
