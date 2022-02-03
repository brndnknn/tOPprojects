
// import pizzaLogo from './pizzaLogo.jpg';
import homePage from './homePage.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

// create navBar 
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

// create header
function header(){
    const header = document.createElement('h1');
    header.innerText = 'Panucci\'s Pizza';
    //header.className = 'heading';
    header.id = 'header';
    return header;
}

// page initialization
const content = document.getElementById('content');
const heading = document.createElement('div');
content.before(heading);
heading.className = 'heading';
heading.appendChild(header());
heading.appendChild(navBar());
content.appendChild(homePage());

// function to switch between pages

function pageFlipper(tab) {
    let currContent = document.getElementById('pageContent');
    currContent.remove();

    switch (tab.id) {
        case 'Home':
            content.appendChild(homePage());
            break;
        
        case 'Menu':
            content.appendChild(menuPage());
            break;
    
        case 'Contact':
            content.appendChild(contactPage());
            break

        default:
            break;
    }



}




// event listener for pageFlipper function
const navTabs = document.querySelectorAll('.navElement');
navTabs.forEach(element =>{ element.addEventListener('click', e=> pageFlipper(e.target) ) })