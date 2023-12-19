window.addEventListener('scroll', function() {
    var fixedBlock = document.getElementById('fixedBlock');
    var stopPoint = document.getElementById('stopPoint').getBoundingClientRect().top;

    // Позиция прокрутки страницы, где блок должен остановиться
    var stopPosition = window.innerHeight;

    // Если мы достигли точки остановки, меняем позиционирование блока
    if (stopPoint < stopPosition) {
        fixedBlock.classList.add('sticky-stop');
    } else {
        fixedBlock.classList.remove('sticky-stop');
    }
});
