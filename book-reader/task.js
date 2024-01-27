// task.js

document.addEventListener('DOMContentLoaded', function () {
    let fontSizeElements = document.querySelectorAll('.font-size');
    let bookElement = document.getElementById('book');

    fontSizeElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();

            fontSizeElements.forEach(function (el) {
                el.classList.remove('font-size_active');
            });

            element.classList.add('font-size_active');

            let fontSize = element.getAttribute('data-size');

            bookElement.classList.remove('book_fs-small', 'book_fs-big');

            if (fontSize === 'small') {
                bookElement.classList.add('book_fs-small');
            } else if (fontSize === 'big') {
                bookElement.classList.add('book_fs-big');
            }
        });
    });
});
