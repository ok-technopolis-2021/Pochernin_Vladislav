// Если будет нужен импорт такого рода, надо будет поставить rollup scss plugin.
// В остальных случаях все стили подтянет gulp, просто по маске src/styles/**/*.less
// и скомпилирует их в единый css файл

// import './styles/style.scss'

// alert('Javascript Works!');

function changeTheme() {
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.replace("dark-theme", "light-theme");
    } else {
        document.body.classList.replace("light-theme", "dark-theme");
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.body.addEventListener('click', changeTheme);
});
