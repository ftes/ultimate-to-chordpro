/* global gtag */
import ChordSheetJS from "chordsheetjs";
import LatexFormatter from "./latex-formatter";
import "./style/index.css";

const parsers = {
  chordpro: new ChordSheetJS.ChordProParser(),
  ultimate: new ChordSheetJS.UltimateGuitarParser({
    preserveWhitespace: false,
  }),
};
const formatters = {
  chordpro: new ChordSheetJS.ChordProFormatter(),
  latex: new LatexFormatter(),
  ultimate: new ChordSheetJS.TextFormatter(),
};

let formatTracked = false;

function trackFormatConversion() {
  if (formatTracked) return;
  const input = document.getElementById("ultimate").value;
  if (!input.trim()) return;
  formatTracked = true;
  const fromFormat = document.getElementById("from-format").value;
  const toFormat = document.getElementById("to-format").value;
  gtag("event", "format_conversion", {
    from_format: fromFormat,
    to_format: toFormat,
  });
}

function resetFormatTracking() {
  formatTracked = false;
}

function convert() {
  const input = document.getElementById("ultimate").value;

  const fromFormatEl = document.getElementById("from-format");
  const toFormatEl = document.getElementById("to-format");
  const fromFormat = fromFormatEl.options[fromFormatEl.selectedIndex].value;
  const toFormat = toFormatEl.options[toFormatEl.selectedIndex].value;

  const parsed = parsers[fromFormat].parse(input);
  const output = formatters[toFormat].format(parsed);
  document.getElementById("chordpro").value = output;
}

function convertAndTrack() {
  convert();
  trackFormatConversion();
}

function convertAndTrackIfToggled() {
  if (toggleState) {
    convertAndTrack();
  }
}

let toggleState = document.getElementById("toggle").checked;
function setToggle(e) {
  toggleState = e.target.checked;
}

document.getElementById("convert").addEventListener("click", convertAndTrack);
document.getElementById("toggle").addEventListener("change", setToggle);
document
  .getElementById("ultimate")
  .addEventListener("keyup", convertAndTrackIfToggled);
document.getElementById("from-format").addEventListener("change", function () {
  resetFormatTracking();
  convertAndTrack();
});
document.getElementById("to-format").addEventListener("change", function () {
  resetFormatTracking();
  convertAndTrack();
});
convert();
