var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];
var password = "password"

setTimeout(function() {
  loopLines(banner, "", 80);
  loopLines(suggestion, "", 2500);
  textarea.focus(); 
  // It's used to set focus on a textarea element in HTML. 
  // When an element has focus, it is ready to receive input from the user
}, 100);

window.addEventListener("keyup", enterKey);
// This code sets up an event listener for the keyup event on the window object
// When the user releases a key on the keyboard, the enterKey function will be called

console.log(
  // %c is a placeholder for a style string
  "%cHa Ha, proud of you, my \"inspect\" warrior friend!",
  "color: #04ff00; font-weight: bold; font-size: 18px;"
);

console.log("%cVoila! The magical phrase you've been questing for! Password: '" + password + "' - I wonder what it does?🤔", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) { // Audio mute key
    document.location.reload(true); // the page will be reloaded with a hard reload
  }
  if (pw) {
    let et = "*"; // often used to mask passwords by replacing each character with an asterisk
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) { // 13: Enter key
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("guest@bbkxterminal.web.app:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) { // 38: Arrow Up Key
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) { // 40: Arrow Down Key
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "bbkx":
      loopLines(bbkx, "color2 margin", 80);
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
      break;
    case "rm -rf":
      addLine("HaHa, you really think you're going to make it, don't you?!", "color2", 80)
      setTimeout(function() {
        window.open('https://trollface.dk/');
      }, 1000); 
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "bmttuxd":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "password":
      addLine("<span class=\"inherit\"> Ha ha ha! Nice try, my friend, but I'm not easily fooled! </span>", "error", 100);
      addLine("<span class=\"inherit\"> You'll need to put on your best trickster hat if you want to pull one over on me! 😜 </span>", "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:bbkx226@gmail.com">bbkx226@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 80);
      newTab(linkedin);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "facebook":
      addLine("Opening Facebook...", "color2", 0);
      newTab(facebook);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      // If the current character and the next character are both spaces, 
      // &nbsp;&nbsp; is added to the t string to replace the two spaces.
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;
    // used to insert the new next element before the before element
    before.parentNode.insertBefore(next, before);
    // The window.scrollTo() method is called with two arguments: 0 as the first argument to scroll to the top of the page, 
    // and document.body.offsetHeight as the second argument to ensure that the new element is visible
    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
