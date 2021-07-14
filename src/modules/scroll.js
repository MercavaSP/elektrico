const scroll = () => {
    const links = document.querySelectorAll('.smooth-scroll');

     for (let i=0; i<links.length; i++) {
        links[i].addEventListener('click', (event) => {
            event.preventDefault();

            console.log(event.target.getAttribute("href").substr(1));
        });
    }   

};

export default scroll;