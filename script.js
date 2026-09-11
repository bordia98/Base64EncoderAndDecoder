(() => {
  "use strict";
  const root = document.documentElement;
  const source = document.querySelector("#source");
  const result = document.querySelector("#result");
  const sourceLabel = document.querySelector("#source-label");
  const resultLabel = document.querySelector("#result-label");
  const convertLabel = document.querySelector("#convert-label");
  const count = document.querySelector("#source-count");
  const status = document.querySelector("#status");
  const copy = document.querySelector("#copy-result");
  const modeButtons = [...document.querySelectorAll(".mode-button")];
  let mode = "encode";

  function encodeBase64(value) {
    const bytes = new TextEncoder().encode(value);
    let binary = "";
    bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
    return btoa(binary);
  }
  function decodeBase64(value) {
    const normalized = value.trim().replace(/\s/g, "").replace(/-/g, "+").replace(/_/g, "/");
    if (!normalized) return "";
    if (!/^[A-Za-z0-9+/]*={0,2}$/.test(normalized) || normalized.length % 4 === 1) throw new Error("Please enter valid Base64.");
    const binary = atob(normalized);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  }
  function setStatus(message = "", error = false) { status.textContent = message; status.classList.toggle("is-error", error); }
  function updateCount() { count.textContent = source.value.length.toLocaleString(); }
  function clearResult() { result.value = ""; copy.disabled = true; setStatus(); }
  function setMode(nextMode) {
    mode = nextMode;
    const encoding = mode === "encode";
    sourceLabel.textContent = encoding ? "Text to encode" : "Base64 to decode";
    resultLabel.textContent = encoding ? "Base64 output" : "Decoded text";
    source.placeholder = encoding ? "Type or paste text here…" : "Paste Base64 here…";
    result.placeholder = encoding ? "Your Base64 result will appear here…" : "Your decoded text will appear here…";
    convertLabel.textContent = encoding ? "Encode to Base64" : "Decode to text";
    modeButtons.forEach((button) => { const active = button.dataset.mode === mode; button.classList.toggle("is-active", active); button.setAttribute("aria-pressed", active); });
    clearResult();
  }
  function convert() {
    try { result.value = mode === "encode" ? encodeBase64(source.value) : decodeBase64(source.value); copy.disabled = !result.value; setStatus(result.value ? "Conversion complete." : "Nothing to convert."); }
    catch (error) { clearResult(); setStatus(error.message || "That input could not be decoded.", true); }
  }
  document.querySelector("#convert").addEventListener("click", convert);
  document.querySelector("#clear-source").addEventListener("click", () => { source.value = ""; updateCount(); clearResult(); source.focus(); });
  document.querySelector("#swap").addEventListener("click", () => { if (!result.value) return; source.value = result.value; updateCount(); setMode(mode === "encode" ? "decode" : "encode"); source.focus(); });
  source.addEventListener("input", () => { updateCount(); clearResult(); });
  source.addEventListener("keydown", (event) => { if ((event.metaKey || event.ctrlKey) && event.key === "Enter") { event.preventDefault(); convert(); } });
  modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
  copy.addEventListener("click", async () => { try { await navigator.clipboard.writeText(result.value); copy.textContent = "Copied!"; setTimeout(() => { copy.textContent = "Copy"; }, 1500); } catch { setStatus("Copy failed. Select the result and copy it manually.", true); } });
  document.querySelector(".theme-toggle").addEventListener("click", () => { const dark = root.dataset.theme !== "dark"; root.dataset.theme = dark ? "dark" : "light"; document.querySelector(".theme-toggle").setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`); document.querySelector(".theme-toggle").setAttribute("aria-pressed", String(dark)); });
  updateCount();
})();
