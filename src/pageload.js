// This function will check for the tab that is being passed and load the content
// accordingly to the current tab the user is in.

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
        let tableWrapper = document.createElement('table');
        let tableTitle = document.createElement('caption');

        tableTitle.textContent = 'Meals of the day!';

        tableContainer.classList.add('second-content');
        tableWrapper.classList.add('menu');

        tableWrapper.appendChild(tableTitle)
        tableContainer.appendChild(tableWrapper);
        contentHolder.appendChild(tableContainer);
        contentLoader.loadTableContent(contents);
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
    function loadTableContent(contents) {
        let table = document.querySelector('table');
        let tableHeader = document.createElement('thead');
        let tableBody = document.createElement('tbody');
        let rowHeader = document.createElement('tr');
        let headerData = ['Meals', 'Price'];

        headerData.forEach((value) => {
            let headerContent = document.createElement('th');
            headerContent.textContent = value;

            rowHeader.appendChild(headerContent);
        })

        rowHeader.classList.add('menu-header');

        tableHeader.appendChild(rowHeader);
        table.appendChild(tableHeader);
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

        table.appendChild(tableBody);
    }

    return {loadPost, unloadContent, loadTableContent, loadMap};
})();


export {mainLoad};