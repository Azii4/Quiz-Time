export default function decode(text) {
  return text
    .replaceAll("&#039;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&ldquo;", '"')
    .replaceAll("&rdquo;", '"')
    .replaceAll("&hellip;", "…")
    .replaceAll("&aacute;", "á")
    .replaceAll("&Ntilde;", "Ñ")
    .replaceAll("&Oacute;", "Ó")
    .replaceAll("&amp;", "&");
}
