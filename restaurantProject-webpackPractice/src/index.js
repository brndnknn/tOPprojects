
import pizzaLogo from './pizzaLogo.jpg';


function navBar(){
    const navBar = document.createElement('div');
    navBar.className = 'navBar';
    const navElements = ['Home', 'Menu', 'Contact'];

    navElements.forEach(element => {
        let tab = document.createElement('div');
        tab.innerText = element;
        tab.id = element;
        tab.className = 'navElement';
        navBar.appendChild(tab);
    });

    return navBar;
}

function homePage() {
    const homePageContent = document.createElement('div');
    homePageContent.className = 'pageContent';
    homePageContent.innerText = 'Panucci\'s Pizza';
    const myIcon = new Image();
    myIcon.src = pizzaLogo;
    homePageContent.appendChild(document.createElement('br'));
    homePageContent.appendChild(myIcon);

    return homePageContent;
}

const content = document.getElementById('content');

content.before(navBar());
content.appendChild(homePage());