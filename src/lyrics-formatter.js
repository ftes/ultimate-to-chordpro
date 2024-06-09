import ChordSheetJS, { ChordLyricsPair } from 'chordsheetjs'

const NEW_LINE = '\n'

/**
 * Formats song to OPS format
 */
class LyricsFormatter extends ChordSheetJS.ChordProFormatter {
    format(song) {
        const { lines, metadata } = song;

        // skip end_of_chorus and end_of_verse items
        return lines
            .filter((line) => line.items.filter((item) => ["end_of_verse", "end_of_chorus", "end_of_tab"].includes(item.originalName)).length == 0)
            .map((line) => this.formatLine(line, metadata))
            .join(NEW_LINE);
    }

    formatItem(item, metadata) {
        if (item instanceof ChordLyricsPair) {
            return this.formatChordLyricsPairLyrics(item);
        }

        return super.formatItem(item, metadata)
    }

    formatTag(tag) { // if tag exists in OPS

        if (tag.name == "start_of_chorus") {
            return "Chorus:"
        }
        if (["start_of_verse", "start_of_tab"].includes(tag.name)) {
            return "Verse:"
        }
        if (tag.hasValue()) {
            return `${tag.value}:`;
        }
        return `${tag.originalName}:`
    }
}

export default LyricsFormatter
