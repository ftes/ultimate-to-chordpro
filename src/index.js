import ChordSheetJS from '@ftes/chordsheetjs';

const parser = new ChordSheetJS.UltimateGuitarParser({
  preserveWhitespace: false
})
const formatter = new ChordSheetJS.ChordProFormatter()

function convert() {
  const input = document.getElementById('ultimate').value
  const parsed = parser.parse(input)
  const output = formatter.format(parsed);
  document.getElementById('chordpro').value = output
}

document.getElementById('convert').addEventListener('click', convert)
convert()
