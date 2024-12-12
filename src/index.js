// selected first paragraph and styled it
let go=document.getElementById("line1");
go.style.backgroundColor=("blue");

//created a function for the 3rd line
function changemore1(){
    let is=document.getElementById("line2");
is.style.backgroundColor=("red");
is.style.color=("black");
is.innerHTML=("I know now what DOM is🙌");
}
let you =document.getElementById("line2");
you.addEventListener("click",changemore1);


 //created a function for 4rd line
function changemore2(){
    let its=document.getElementById("line3");
its.style.backgroundColor=("red");
its.style.color=("black");
its.innerHTML=("I know how to access/ select elements in a DOM🐒");
}
let him  =document.getElementById("line3");
him.addEventListener("dblclick",changemore2);


    //created a function for 5th line
function changemore3(){
    let she=document.getElementById("line4");
she.style.backgroundColor=("red");
she.style.color=("black");
she.innerHTML=("I know how to use the style methods to change the style of an element in the DOM✅");
}
let she  =document.getElementById("line4");
she.addEventListener("click",changemore3);


    //created function for 6th line
function changemore4(){
    let me=document.getElementById("line5");
me.style.backgroundColor=("red");
me.style.color=("black");
me.innerHTML=("I know how the styling properties differ in JS from CSS");
}
let me  =document.getElementById("line5");
me.addEventListener("dblclick",changemore4);

   //created function for 7th line
   function changemore5(){
    let they=document.getElementById("line6");
they.style.backgroundColor=("red");
they.style.color=("black");
they.innerHTML=("Yes i did it!! I manipulated the DOM and style my elements 🥰🥰🥰🥰");
}
let they  =document.getElementById("line6");
they.addEventListener("click",changemore5);

  //function to call pic
  function openbutton(){
    let pic = document.getElementById("pic");
    pic.style.display = "block";
  }
let button = document.getElementById("button1");
button.addEventListener("click" ,openbutton);


function closebutton(){
    let pic = document.getElementById("pic");
    pic.style.display = "none";
  }
let button2 = document.getElementById("button2");
button2.addEventListener("click", closebutton);
 


