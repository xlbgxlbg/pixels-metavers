const tailwindcss = require('tailwindcss');
console.log(tailwindcss)
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
    ],
}