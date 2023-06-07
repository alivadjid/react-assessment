export function removeEmoji(text) {
  return text.replace(/\p{Emoji}/u, "").trim();
}
