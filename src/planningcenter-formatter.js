import ChordSheetJS from 'chordsheetjs'
import {
    START_OF_CHORUS,
    END_OF_CHORUS,
    START_OF_VERSE,
    END_OF_VERSE,
    END_OF_TAB,
    START_OF_TAB
} from 'chordsheetjs/lib/chord_sheet/tag'

const NEW_LINE = '\n'

/**
 * Formats song to planningcenter format
 */
class PlanningcenterFormatter extends ChordSheetJS.ChordProFormatter {
    format(song) {
        const { lines, metadata } = song;

        // skip end_of_chorus and end_of_verse items
        return lines
            .filter((line) => line.items.filter((item) => [END_OF_VERSE, END_OF_CHORUS, END_OF_TAB].includes(item.originalName)).length == 0)
            .map((line) => this.formatLine(line, metadata))
            .join(NEW_LINE);
    }

    formatTag(tag) {

        if (tag.name == START_OF_CHORUS) {
            return "Chorus"
        }
        if ([START_OF_VERSE, START_OF_TAB].includes(tag.name)) {
            return "Verse"
        }
        if (tag.hasValue()) {
            return `<b>${tag.value}</b>`;
        }
        return `<b>${tag.originalName}</b>`
    }
}

export default PlanningcenterFormatter
