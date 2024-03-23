// To listen to event use addEventListiner() method, which accepts two parameters
//type of event to listen to.
// A function to run when event is triggered.

// Element.addEventListener(type, function);

// Chnaging text of a paragrapgh when a button element is clicked.
/*

<body> 
<p id = "myPragraph"> This is  an example of a paragraph </p>
<button id ="changeText"> Change Text </button>
<script>
const button = document.querySelecton('#changeText');


function newText(event){
    const p = document.querySelector('#myParagraph');
    p.innerText = ' The text has been changed';
}


button. addEventListener('click', newText);

</script>
<body> 


The button element is selected using document.querySelector() method, then the method addEventListener() is called on the element. This means you attach an event listener to the button.

First, you specify the type of event to listen to, which is a click event in this case. Next, you specify the function to run when that event happens.

In the code above, the newText function will be executed when the click event is triggered.

*/

function newText(event){
    console.log(event);
}


