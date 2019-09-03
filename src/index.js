import ChordSheetJS from "@ftes/chordsheetjs";
import "./style/index.css";

const parser = new ChordSheetJS.UltimateGuitarParser({
  preserveWhitespace: false
});
const formatters = {
  chordpro: new ChordSheetJS.ChordProFormatter(),
  latex: new ChordSheetJS.LatexFormatter()
};

function convert() {
  const input = document.getElementById("ultimate").value;
  const parsed = parser.parse(input);
  const formatEl = document.getElementById("format");
  const format = formatEl.options[formatEl.selectedIndex].value;
  const output = formatters[format].format(parsed);
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
document.getElementById("format").addEventListener("change", convert);
convert();
