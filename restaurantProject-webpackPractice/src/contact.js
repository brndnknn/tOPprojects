
export default function contactPage() {
    const contactPageContent = document.createElement('div');
    contactPageContent.id = 'pageContent';
    let location = document.createElement('div');
    location.innerText = 'Take-out or Delivery in New New York';
    let phone = document.createElement('div');
    phone.innerText = 'Call 327-679-6784';
    contactPageContent.appendChild(location);
    contactPageContent.appendChild(phone);
    return contactPageContent;
}