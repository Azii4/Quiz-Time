export default function decode(text) {
    return text.replaceAll("&#039;", "'").replaceAll("&quot;", '"').replaceAll("&ldquo;", '"').replaceAll("&rdquo;", '"').replaceAll("&hellip;", "…")
}