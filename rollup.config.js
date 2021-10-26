// Конфиг переместился в gulpfile.js
// Но пока полежит здесь закомментированным.
/*
// rollup.config.js
import scss from 'rollup-plugin-scss'
import html from '@rollup/plugin-html'
import fs from 'fs';

const template = ({attributes, bundle, files, publicPath, title}) => {
    return fs.readFileSync('./index.html')
}

export default {
    input: 'src/app.js',
    output: {
        file: 'dist/app.js',
        format: 'esm'
    },
    plugins: [
        scss(), // will output compiled styles to output.css
        html({ template }),
    ]
}*/
