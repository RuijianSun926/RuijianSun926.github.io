// console.log("hello again")
// let city = prompt("waht is this city called?");
// console,log("this city is,ciy", city);

// // this is a cooment

// let assignment1 = "20";
// let assignment2 = "30";
// let assignment3 = "20";

// let total = parseInt assignment1 + assignment2 +assignment3
// console.log("my total score is ", total)


let body = document.querySelector("body");
function checkWeather(){ 
let temp = document.querySelector("#temperature");
let temperature = temp.value;

if(temperature>=10 && temperature<20)
{
    console.log("it feels cold");
    body.style.backgroundColor = "lighttable";
}

else if(temperature>=20 && temperature<30)
{
    console.log("it feels warm and sunny");
    body.style.backgroundColor = "orange";
}

else if(temperature>30)
{
    console.log("it is boiling");
    body.style.backgroundColor = "red";
}

else if(temperature<10)
{
    console.log("it is freezing");
    body.style.backgroundColor = "gray";
}
}
