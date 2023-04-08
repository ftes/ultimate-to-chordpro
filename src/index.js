import ChordSheetJS from "chordsheetjs";
import LatexFormatter from "./latex-formatter";
import "./style/index.css";

const parsers = {
  chordpro: new ChordSheetJS.ChordProParser(),
  ultimate: new ChordSheetJS.UltimateGuitarParser({
    preserveWhitespace: false,
  }),
  ultimatepaste: new ChordSheetJS.UltimateGuitarParser({
    preserveWhitespace: false,
  }),
};
const formatters = {
  chordpro: new ChordSheetJS.ChordProFormatter(),
  latex: new LatexFormatter(),
  ultimate: new ChordSheetJS.TextFormatter(),
};

function convert() {

  const fromFormatEl = document.getElementById("from-format");
  const toFormatEl = document.getElementById("to-format");
  const fromFormat = fromFormatEl.options[fromFormatEl.selectedIndex].value;
  const toFormat = toFormatEl.options[toFormatEl.selectedIndex].value;

  var input = document.getElementById("ultimate").value;
  if (fromFormat == "ultimatepaste") {
    input = input.replaceAll("\n\n", "\n");
  }

  const parsed = parsers[fromFormat].parse(input);
  const output = formatters[toFormat].format(parsed);
  document.getElementById("chordpro").value = output;
}

let toggleState = document.getElementById("toggle").checked;
function setToggle(e) {
  toggleState = e.target.checked;
}
function convertIfToggled() {
  if (toggleState) {
    convert();
  }
}

document.getElementById("convert").addEventListener("click", convert);
document.getElementById("toggle").addEventListener("change", setToggle);
document.getElementById("ultimate").addEventListener("keyup", convertIfToggled);
document.getElementById("from-format").addEventListener("change", convert);
document.getElementById("to-format").addEventListener("change", convert);
convert();
