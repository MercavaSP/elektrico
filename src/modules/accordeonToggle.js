const accordeonToggle = () => {
    const accordeons = document.querySelectorAll('.accordeon .element');
    let item,
        elem;

    for (item of accordeons) {
        item.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                for (elem of accordeons) {
                    elem.classList.remove('active');
                }
                this.classList.add('active');
            }
        });
    }
};


export default accordeonToggle;