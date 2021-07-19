const scroll = () => {
    const links = document.querySelectorAll('.smooth-scroll');

     for (let i=0; i<links.length; i++) {
        links[i].addEventListener('click', (event) => {
            event.preventDefault();

            const blockID = event.target.getAttribute('href').substr(1);

            console.log(document.getElementById(blockID));
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
                
            });
        });
    }   

    const scrollBtn = document.querySelector('.isBtn');
    window.onscroll = () => {
        if (window.scrollY > 550) {
            scrollBtn.classList.remove('isBtn_hide');
        } else if (window.scrollY < 550) {
            scrollBtn.classList.add('isBtn_hide');
        }
    };
};

export default scroll;