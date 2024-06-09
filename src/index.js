import ChordSheetJS from 'chordsheetjs'
import LatexFormatter from './latex-formatter'
import PlanningcenterFormatter from './planningcenter-formatter'
import LyricsFormatter from "./lyrics-formatter"
import './style/index.css'

function convert() {
  const parsers = {
    chordpro: new ChordSheetJS.ChordProParser(),
    ultimate: new ChordSheetJS.UltimateGuitarParser({
      preserveWhitespace: false
    })
  }
  const formatters = {
    chordpro: new ChordSheetJS.ChordProFormatter(),
    chordpro_planningcenter: new PlanningcenterFormatter(),
    lyrics: new LyricsFormatter(),
    latex: new LatexFormatter(),
    ultimate: new ChordSheetJS.TextFormatter()
  }

  let input = document.getElementById('ultimate').value

  const fromFormatEl = document.getElementById('from-format')
  const toFormatEl = document.getElementById('to-format')
  const fromFormat = fromFormatEl.options[fromFormatEl.selectedIndex].value
  const toFormat = toFormatEl.options[toFormatEl.selectedIndex].value

  let whitespaceToggleState = document.getElementById('whitespace-toggle').checked
  if (whitespaceToggleState) {
    input = input.replaceAll("\n\n", "\n");
  }

  const tranposeAmount = document.getElementById("transpose-amount").value

  const parsed = parsers[fromFormat].parse(input).transpose(tranposeAmount)
  const output = formatters[toFormat].format(parsed)
  document.getElementById('chordpro').value = output
}

let toggleState = document.getElementById('toggle').checked
function setToggle(e) {
  toggleState = e.target.checked
}
function convertIfToggled() {
  if (toggleState) {
    convert()
  }
}

document.getElementById('convert').addEventListener('click', convert)
document.getElementById('toggle').addEventListener('change', setToggle)
document.getElementById('ultimate').addEventListener('keyup', convertIfToggled)
document.getElementById('from-format').addEventListener('change', convert)
document.getElementById('whitespace-toggle').addEventListener('change', convert)
document.getElementById('to-format').addEventListener('change', convert)
document.getElementById("transpose-amount").addEventListener('change', convert)
convert()
