/*GLOBAL VARIABLES*/
const links = [];
const about = document.getElementById('nav-link-about');
/*let publications = document.getElementById('nav-link-publications');
let research = document.getElementById('nav-link-research');
let data = document.getElementById('nav-link-data');
let teaching = document.getElementById('nav-link-teaching');
*/

/*NONE function*/
const none = (element) => {
    element.target.style.display = 'none';
};

const navClick = () => {
    about.onclick = none(about);
};


/*//For Updating ACTIVE nav text
about.addEventListener('click', function(){
    about.style.display = 'none';
});
*/

/*publications.addEventListener('click', bold);
research.addEventListener('click', bold(research));
data.addEventListener('click', bold(data));
teaching.addEventListener('click', bold(teaching));
*/



