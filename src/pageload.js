// This function will check for the tab that is being passed and load the content
// accordingly to the current tab the user is in.

import { contacts } from "./config";

function mainLoad(tab, contents) {
    const contentHolder = document.getElementById('content');
    contentHolder.textContent = '';

    let currentTab;

    if (currentTab === tab) {
        return true;
    }

    currentTab = tab;

    if (tab === 'Home') {
        let contentWrapper = document.createElement('div');
        contentWrapper.classList.add('main-content');

        contentHolder.appendChild(contentWrapper);
        contentLoader.loadPost(contents);
        contentLoader.loadMap();
    }

    if (tab === 'Order') {
        let tableContainer = document.createElement('div');
        tableContainer.classList.add('second-content');
        contentHolder.appendChild(tableContainer);

        contentLoader.loadTableContent(contents);
    }

    if (tab === 'Contact') {
        let title = document.createElement('p');
        let contactContainerWrapper = document.createElement('div');
        let contactContainer = document.createElement('div');

        title.classList.add('contact-title');
        contactContainer.classList.add('contact-wrapper');
        contactContainerWrapper.classList.add('contact-container-wrapper');

        title.textContent = 'Meet our teams...'

        contactContainerWrapper.appendChild(title);
        contactContainerWrapper.appendChild(contactContainer);
        contentHolder.appendChild(contactContainerWrapper);

        contentLoader.loadContact(contents);
    }
    
}


// This content loader module will give the function the ability to load the type of post
// according to the tab presented above.

const contentLoader = (function() {
    // For front page post blog-ish type.
    function unloadContent(content) {
        content.textContent = '';
    }
    function loadPost(contents) {
        contents.forEach((content) => {
            const contentWrapper = document.querySelector('.main-content');
            if ( content['type'] === 'main' ) {
                let h1 = document.createElement('h1');
                let p = document.createElement('p');

                h1.classList.add('title');
                p.classList.add('main-text');

                h1.textContent = content['title'];
                p.textContent = content['content'];

                contentWrapper.appendChild(h1)
                contentWrapper.appendChild(p)
            } else if ( content['type'] === 'sub') {
                let span = document.createElement('span');
                let h2 = document.createElement('h2');

                span.textContent = content['title'];

                h2.appendChild(span);
                contentWrapper.appendChild(h2)
                if (content['content']) {
                    let p = document.createElement('p');
                    p.innerHTML = content['content'];
                    contentWrapper.appendChild(p)
                }
            }
        })
    }

    // Load iframe map
    function loadMap() {
        const contentWrapper = document.querySelector('.main-content');
        let mapWrapper = document.createElement('div');
        let iframeMap = document.createElement('iframe');

        mapWrapper.classList.add('map-wrapper');
        iframeMap.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.11711592949!2d104.88549924033948!3d11.583470858516003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519e61e7251b%3A0x308b0c2e593ce8b8!2sWestern%20International%20School%20-%20Stadium%20Campus!5e0!3m2!1sen!2skh!4v1642911058871!5m2!1sen!2skh");
        iframeMap.setAttribute('width', '600');
        iframeMap.setAttribute('height', '450');
        iframeMap.setAttribute('style', 'border:0');
        iframeMap.setAttribute('allowfullscreen', "");
        iframeMap.setAttribute('loading', 'lazy');

        mapWrapper.appendChild(iframeMap);
        contentWrapper.appendChild(mapWrapper);
    }

    // Load table content
    function loadTableContent(category) {
        category.forEach((contents) => {
            let tableWrapper = document.createElement('table');
            let tableTitle = document.createElement('caption');
            let tableHeader = document.createElement('thead');
            let tableBody = document.createElement('tbody');
            let rowHeader = document.createElement('tr');
            let headerData;

            tableWrapper.classList.add('menu');
            
            tableWrapper.appendChild(tableTitle)

            if ( category[0] === contents ) {
                tableTitle.textContent = 'Valueable Sets!';
                headerData = ['Sets', 'Price'];
            } else if ( category[1] === contents ) {
                tableTitle.textContent = 'Meals of the day!';
                headerData = [ 'Meals', 'Price']
            } else if ( category[2] === contents ) {
                tableTitle.textContent = 'Satiate your appetite';
                headerData = [ 'Appetizers', 'Price']
            } else if ( category[3] === contents) {
                tableTitle.textContent = 'Lactated by Puthyrath :D';
                headerData = [ 'Drinks', 'Price']
            } else if ( category[4] === contents) {
                tableTitle.textContent = 'Always room for it...';
                headerData = [ 'Desserts', 'Price']
            }

            headerData.forEach((value) => {
                let headerContent = document.createElement('th');
                headerContent.textContent = value;

                rowHeader.appendChild(headerContent);
            })

            rowHeader.classList.add('menu-header');

            tableHeader.appendChild(rowHeader);
            tableWrapper.appendChild(tableHeader);

            contents.forEach((content) => {
                let firstRow = document.createElement('tr');
                let secondRow = document.createElement('tr');

                for ( let value in content ) {
                    let data = document.createElement('td');
                    if ( value === 'name' || value === 'price' ) {
                        data.textContent = content[value];
                        firstRow.appendChild(data);
                    } else if ( value === 'recipe' ) {
                        data.textContent = content[value];
                        secondRow.appendChild(data);
                    }
                }
                
                tableBody.appendChild(firstRow);
                tableBody.appendChild(secondRow);
            })

            tableWrapper.appendChild(tableBody);
            document.querySelector('.second-content').appendChild(tableWrapper);
        })
    }

    function loadContact(contents) {
        contents.forEach((content) => {
            let contactWrapper = document.querySelector('.contact-wrapper')
            let contactBox = document.createElement('span');
            let name = document.createElement('p');
            let position = document.createElement('p');
            let number = document.createElement('p');

            contactBox.classList.add('contact-box');
            name.classList.add('name');
            position.classList.add('position');
            number.classList.add('number');

            name.textContent = content['name'];
            position.textContent = content['position'];
            number.textContent = content['contact'];

            contactBox.appendChild(name);
            contactBox.appendChild(position);
            contactBox.appendChild(number);
            contactWrapper.appendChild(contactBox);
        })
    }

    return {loadPost, unloadContent, loadTableContent, loadContact, loadMap};
})();


export {mainLoad};