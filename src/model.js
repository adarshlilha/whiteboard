import { TOOL_TYPES } from './constants'

/**
 * class Model
 * Model contains all the application data and public methods to modify the data
 * Single source of truth
 */
export class Model {
    constructor() {
        this.color = '#000'
        this.tool = TOOL_TYPES.PEN
        this.lineWidth = 2
        this.highlightWidth = 5
        this.undoStack = []
        this.undoLimit = 3
    }

    updateColor(color) {
        this.color = color
    }

    updateTool(tool) {
        this.tool = tool
    }

    updateLineWidth(width) {
        this.lineWidth = width
    }

    addNewItem(item) {
        this.undoStack.push(item)
    }

    removeItem() {
        this.undoStack.shift()
    }

    removeLastItem() {
        this.undoStack.pop()
    }
}
