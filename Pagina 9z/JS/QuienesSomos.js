const card = document.querySelectorAll('.card__inner');
card.forEach(i =>
    i.addEventListener('click', function () {
        i.classList.toggle('is-flipped');
    }));


