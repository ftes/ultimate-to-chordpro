import ChordSheetJS from "@ftes/chordsheetjs";
import "./style/index.css";

const parser = new ChordSheetJS.UltimateGuitarParser({
  preserveWhitespace: false
});
const formatter = new ChordSheetJS.ChordProFormatter();

function convert() {
  const input = document.getElementById("ultimate").value;
  const parsed = parser.parse(input);
  const output = formatter.format(parsed);
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
convert();
