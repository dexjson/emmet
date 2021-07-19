const fs = require('fs')

const css = require('../snippets/css.json')
const html = require('../snippets/html.json')
const pug = require('../snippets/pug.json')
const variables = require('../snippets/variables.json')
const xsl = require('../snippets/xsl.json')

const combined = {
    'css': {
        'snippets': css
    },
    'html': {
        'snippets': html
    },
    'pug': {
        'snippets': pug
    },
    'variables': {
        'snippets': variables
    },
    'xsl': {
        'snippets': xsl
    }
}

fs.writeFile('./vscode-snippets/emmet/default/snippets.json', JSON.stringify(combined, null, 2), err => {
    if (err) throw err
    console.log('combined json files as "snippets.json"')
})
