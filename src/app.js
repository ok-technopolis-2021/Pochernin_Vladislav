// Если будет нужен импорт такого рода, надо будет поставить rollup scss plugin.
// В остальных случаях все стили подтянет gulp, просто по маске src/styles/**/*.less
// и скомпилирует их в единый css файл

// import './styles/style.scss'

// alert('Javascript Works!');

function changeTheme() {
    document.body.classList.toggle("__dark")
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.body.addEventListener('click', changeTheme);
});
