import home from "./home";
import menu from "./menu";
import about from "./about";

import './styles/mainStyle.css'
import './styles/homeStyle.css';
import './styles/menuStyle.css'
import './styles/aboutStyle.css';

document.addEventListener('DOMContentLoaded', () => {
    
    home();

    const content = document.getElementById('content');
    const homePage = document.getElementById('homeBtn');
    const menuPage = document.getElementById('menuBtn');
    const aboutPage = document.getElementById('abtBtn');
    
    homePage.addEventListener('click', function () {
        content.innerHTML = '';
        home();
    });
    
    menuPage.addEventListener('click', function () {
        content.innerHTML = '';
        menu();

    });
    
    aboutPage.addEventListener('click', function () {
        content.innerHTML = '';
        about();

    });
});