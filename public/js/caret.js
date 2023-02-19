function $(elid) { // This is a helper function that takes an ID string as its argument
  return document.getElementById(elid);
}

var cursor;

// This line of code sets the init function to be called when the window finishes loading.
window.onload = init;

function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

function nl2br(txt) { // used to replace newline characters (\n) in a string with an empty string
  return txt.replace(/\n/g, ''); // uses the replace() method with a regular expression /\n/g to globally replace all occurrences of the newline character with an empty string
}

function typeIt(from, e) { // used to update the content of an HTML element, based on the input provided by the user in a text area.
  e = e || window.event; 
  // window.event: the current event that is being handled by the browser
  // e: the event that was triggered by the user action (such as a key press)
  var w = $("typer");
  var tw = from.value;
  if (!pw){
    w.innerHTML = nl2br(tw);
  }
}

function moveIt(count, e) { // move the cursor to the left or right based on the keyboard input
  // count: represents the number of characters in the text being typed
  e = e || window.event;
  var keycode = e.keyCode || e.which; // represent the key code of the key that was pressed, `keyCode` is newer version. `which` is older version
  if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) { 
    // 37 = left arrow key
    // parses the `left` property value of the cursor element as an integer
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) { 
    // 39 = right arrow key
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}