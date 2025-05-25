import shiny from 'eslint-config-shiny'

export default [
    ...await shiny({ configs: ['base', 'format', 'vitest'] }),
    {
        rules: {
            'no-empty': 0,
            'ts/no-unnecessary-condition': 0
        }
    }
]
