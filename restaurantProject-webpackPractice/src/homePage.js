import pizzaLogo from './pizzaLogo.jpg';

export default function homePage() {
    const homePageContent = document.createElement('div');
    homePageContent.id = 'pageContent';
    // const header = document.createElement('h2');
    // header.innerText = 'Panucci\'s Pizza';
    // homePageContent.appendChild(header);
    const myIcon = new Image();
    myIcon.src = pizzaLogo;
    homePageContent.appendChild(document.createElement('br'));
    homePageContent.appendChild(myIcon);

    return homePageContent;
}

