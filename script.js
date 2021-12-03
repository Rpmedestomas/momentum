//START OPEN PROMPT

 // Get the modal
 var modal = document.getElementById("open-modal");

//  // Get the <span> element that closes the modal
//  var span = document.getElementsByClassName("open-modal-close")[0];

//  // When the user clicks on <span> (x), close the modal
//  span.onclick = function() {
//    modal.style.display = "none";
//  }

//  // When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//    if (event.target == modal) {
//      modal.style.display = "none";
//    }
//  }

 ///////START NAME INPUT
 function welcomegreeting() {
  var t = document.getElementById("open-modal-input").value;
  if (t === '') {
    alert("Please introduce yourself");
  } else {
    document.getElementById("welcome-greeting").innerText = 'Welcome,' + ' ' + t;
    document.getElementById("open-modal").style.zIndex = '-1'
    document.getElementById("open-modal").style.opacity = '0'
  }   
}

///START MAIN

//START TIME FUNCTION

function timenow(){
let t = new Date();
let time = t.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
document.getElementById('time').innerHTML = time;
}
timenow();

//////////////END TIME FUNCTION

//START FOCUS 
function focusoutput() {
  let f = document.getElementById("focus-question-input").value;
  if (f === '') {
    alert("Please input today's focus");
  } else {
    document.getElementById("focus-output").innerText = f;
    document.getElementById("focus-question-container").style.zIndex = '-1';
    document.getElementById("focus-question-container").style.opacity = '0';
    document.getElementById("focus-output-container").style.zIndex = '0';
    document.getElementById("focus-output-container").style.opacity = '100';
  }  
}

//////////////END FOCUS 

///END MAIN



//START QUOTES

var quotation = [
  "He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying. ~ Friedrich Nietzsche", 
  "The last of human freedoms the ability to choose one\’s attitude in a given set of circumstances. ~ Viktor E. Frankl",
  "When you do the common things in life in an uncommon way, you will command the attention of the world. ~ George Washington Carver",
  "It is during our darkest moments that we must focus to see the light. ~ Aristotle",
  "You will never do anything in this world without courage. It is the greatest quality of the mind next to honor. ~ Aristotle",
  "History will be kind to me for I intend to write it. - Winston Churchill",
  "Mystery creates wonder and wonder is the basis of man’s desire to understand. ~ Neil Armstrong"
]
const text = document.getElementById("quote");
const rand = Math.floor(Math.random()*quotation.length);
const quote = quotation[rand];
text.innerHTML = quote;

//////////////END QUOTES



//START TODO
//START MODAL

      // Get the modal
      var modal = document.getElementById("todo-modal");

      // Get the button that opens the modal
      var button = document.getElementById("open-todo-modal");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on the button, open the modal
      button.onclick = function() {
        modal.style.display = "block";
      }

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
//END MODAL

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
//////////////END TODO

///END FOOTER