const codes = {
  "&#039;": "'",
  "&quot;": '"',
  "&ldquo;": '"',
  "&rdquo;": '"',
  "&hellip;": "…",
  "&aacute;": "á",
  "&Ntilde;": "Ñ",
  "&Oacute;": "Ó",
  "&amp;": "&",
  "&eacute;": "é",
  "&aring;": "å",
};

export default function decode(text) {
  return text.replaceAll(/&#?\w+;/g, (match) => codes[match]);
}
