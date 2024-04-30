const myHeading = document.querySelector("h1")
console.log(myHeading);
//console.log(myHeading.textContent);
//myHeading.textContent = "new paragraph";
//myHeading.style.backgroundColor = "limegreen";
//for (let i=0; i<3; i++)
{
    myHeading[i].textcontent ="new" + i;
    myHeading[i].style.backgroundcolor = "limegreen"
}

myHeading.foreach(changeMe);

function changeMe(item){
    //item.style.backgroundcolor = "coral"
    item.classlist.add("purple-box");
}

const myimage = document.querySelector("#my-image");
console.log(myimage);
myimage.classList.add("round");

const mybutton = document.querySelector("#my-button");
console.log(mybutton);

mybutton.addEventListener("click", toggleMe);

function toggleMe()
{
 const myimage = document.querySelector("#my-image");
console.log(myimage);
myimage.classList.add("round");

}

  

