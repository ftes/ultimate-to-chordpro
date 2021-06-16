# Ultimate guitar to ChordPro converter

[![Netlify Status](https://api.netlify.com/api/v1/badges/3f239499-a02a-44d7-a5de-3b687bd98718/deploy-status)](https://app.netlify.com/sites/ultimate-to-chordpro/deploys)

https://ultimate.ftes.de

Static website that converts chords between different formats.

Supported formats:

| Format          | Input | Output |
| --------------- | ----- | ------ |
| ChordPro        | ✅    | ✅     |
| Ultimate Guitar | ✅    | ✅     |
| Latex           | ❌    | ✅     |

![Screenshot](./docs/screenshot.png)

## Details

Uses [ChordSheetJS](https://github.com/martijnversluis/ChordSheetJS) to parse and format the chords and lyrics.

A basic Latex formatter is provided in this repo, [MR pending](https://github.com/martijnversluis/ChordSheetJS/pull/107).
