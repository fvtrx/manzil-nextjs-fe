import he from "he";

/**
 * Clean translation text by removing HTML tags, numbers, and special characters
 */
export function cleanTranslationText(text: string): string {
  if (!text) return "";

  // Decode HTML entities safely
  const decoded = he.decode(text);

  return decoded
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/\d+/g, "") // Remove numbers
    .replace(/[<>\/&;]/g, "") // Remove special chars
    .replace(/\s+/g, " ") // Clean spaces
    .trim();
}

/**
 * Format time in MM:SS format
 */
export function formatTime(time: number): string {
  if (!time || !isFinite(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
