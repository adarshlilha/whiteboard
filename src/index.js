import { Controller } from './controller'
import { Model } from './model'
import { View } from './view'
import { TOOL_TYPES } from './constants'

window.addEventListener('load', () => {
    // Start app
    new Controller(new Model(), new View())

    // Attach event listeners for active class
    document.querySelectorAll('[data-tool]').forEach((item) => {
        item.addEventListener('click', () => {
            document.querySelector('[data-tool].active').classList.toggle('active')
            item.classList.toggle('active')

            const currentTool = item.getAttribute('data-tool')
            switch (currentTool) {
                case TOOL_TYPES.PEN:
                    document.querySelector('#pen-size').style.display = 'block'
                    document.querySelector('#highlighter-size').style.display = 'none'
                    break
                case TOOL_TYPES.HIGHLIGHTER:
                    document.querySelector('#highlighter-size').style.display = 'block'
                    document.querySelector('#pen-size').style.display = 'none'
                    break
                default:
                    document.querySelector('#highlighter-size').style.display = 'none'
                    document.querySelector('#pen-size').style.display = 'none'
            }
        })
    })

    document.querySelectorAll('[data-linewidth]').forEach((item) => {
        item.addEventListener('click', () => {
            document.querySelector('[data-linewidth].active').classList.toggle('active')
            item.classList.toggle('active')
        })
    })
})
