/* option 1 example of how i want */

/* const picture = document.querySelector(`.hover`);
picture.addEventListener("mouseenter",boxExpand);
picture.addEventListener("mouseleave",boxExpand);

function boxExpand(event){
    const newBox = document.createElement("div");
    newBox.classList.add('box-expand');

    picture.classList.toggle("hover-ani");
} */



/* option2 it works when touch banner*/

/* const hover = document.querySelector(`.hover`);
const border = document.querySelector('.secret');

border.addEventListener("mouseenter",boxExpand);
border.addEventListener("mouseleave",boxExpand);

function boxExpand(event){
    const newChild = document.createElement("div");
    border.classList.toggle("secrett");
    
} */




/* Option 3 shitty*/
/* const hover = document.querySelector(`.hover`);
hover.addEventListener("mouseenter",boxExpand);
hover.addEventListener("mouseleave",boxExpand);

function boxExpand(event){
    const newBox = document.createElement("div");
    newBox.classList.add('box-expand');
    hover.classList.toggle("hover-ani");
    hover.appendChild(newBox);
} */
/* function boxNormal(event){
    hover.classList.toggle("ani-out");
} */




/* Option 4  it works when touched picture*/

/* const picture = document.querySelector(`.hover`);
const border = document.querySelector('.secret');
const parentt = document.querySelector('.banner');

picture.addEventListener("mouseenter",boxExpand);
picture.addEventListener("mouseleave",boxExpand);

function boxExpand(event){
    const hoverItem = event.target;
    console.log(hoverItem);

    
    const newChild = document.createElement("div");
    newChild.classList.add("child");
    parentt.appendChild(newChild);
    picture.classList.toggle("child");
    
    border.classList.toggle("secrett");
}; */



/* option 5 */

const picture = document.querySelector('.hover');
const banner = document.querySelector(".banner")

picture.addEventListener("mouseenter",boxExpand);
picture.addEventListener("mouseleave",boxExpand);

function boxExpand(event){
    banner.classList.toggle("secrett");
}