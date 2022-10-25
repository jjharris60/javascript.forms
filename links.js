'strict mode'
console.log("Hello world");
const body = document.querySelector('body');
console.log(body);
body.style.backgroundColor = "#0059FF";
const links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
    // console.log(links[i]);
    links[i].style.color = 'white';

}