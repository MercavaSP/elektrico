const togglePopup = () => {
    
    const popup = document.querySelector('.modal-callback'),
        overlay = document.querySelector('.modal-overlay'),
        popupBtn = document.querySelectorAll('.callback-btn'),
        popupClose = document.querySelector('.modal-close'),
        order = document.querySelectorAll('.img-wrapper_s');
    
    
    
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });
    
    
    console.log(order);
    order.forEach((e) => {
        e.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
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



