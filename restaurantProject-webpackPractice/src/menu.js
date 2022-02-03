


const menuItems = ['Planet: $9.99', 'Star: $12.99', 'Galaxy: 15.99'];

export default function menuPage() {
    const menuPageContent = document.createElement('div');
    menuPageContent.id = 'pageContent';
    // const header = document.createElement('h2');
    // header.innerText = 'Panucci\'s Pizza Menu';
    // menuPageContent.appendChild(header);
    const menuItemsList = document.createElement('ul');
    //const menuItems = ['Planet: $9.99', 'Star: $12.99', 'Galaxy: 15.99'];
    menuItems.forEach(element => {
        let item = document.createElement('li');
        item.innerText = element;
        menuItemsList.appendChild(item);
    });
    menuPageContent.appendChild(menuItemsList);
    
    return menuPageContent;
}