const togglePopup = () => {
    
    const popup = document.querySelector('.modal-callback'),
        overlay = document.querySelector('.modal-overlay'),
        popupBtn = document.querySelectorAll('.callback-btn'),
        popupClose = document.querySelector('.modal-close'),
        order = document.querySelectorAll('.slide-card');
    
    
    
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });
    
    
    order.forEach((e) => {
        e.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
};

export default togglePopup;



