import './style.css';
import './background.jpg';
import { frontPagePost, secondPagePost } from './config';
import { mainLoad } from './pageload';

const navTab = ['Home', 'Order', 'About'];

// initial page load will present the user the front page.
mainLoad('Home', frontPagePost);

// load the list of navigations that is presented in navtab, add a divider in between.
const navFunction = (function() {
    function loadNav(btn) {
        let navBar = document.createElement('nav');
        let navList = document.createElement('ul');
        let navContent = btn;
        
        for ( let i = 0; i < navContent.length; i++) {
            let navBox = document.createElement('li');
            navBox.classList.add('tab')
            navBox.textContent = navContent[i];
            navList.appendChild(navBox);

            if (!(navContent.length-1 === i)) {
                let navDivider = document.createElement('li');
                navDivider.classList.add('line');
                navList.appendChild(navDivider);
            }
        }

        navList.classList.add('nav-content')
        navBar.classList.add('nav-bar');

        navBar.appendChild(navList);
        document.body.appendChild(navBar);
    }
    return {loadNav};
})();

//load nav at all time.
navFunction.loadNav(navTab);

document.querySelectorAll('.tab').forEach((tabs) => {
    tabs.addEventListener('click', (tab) => {
        if ( tab.target.textContent === 'Home') {
            mainLoad('Home', frontPagePost);
        } else if ( tab.target.textContent === 'Order' ) {
            mainLoad('Order', secondPagePost);
        }
    })
})

