var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];


var portfolio = "https://www.bbkx.live/"
var linkedin = "https://www.linkedin.com/in/bbkx/"
var github = "https://github.com/bbkx226"
var facebook = "https://www.facebook.com/bbkx.0226/"
var instagram = "https://www.instagram.com/bbkx_/"
var discord = "https://discord.com/oauth2/authorize?client_id=816611024362668122&permissions=156766824512&scope=bot"
var aimagenerator = "https://imagegeneratorai-6e92d.web.app/"
var blockchain = "https://blockchainapp-4e293.web.app/"
var guzheng = "https://app.engati.com/static/standalone/bot.html?bot_key=63ef367dfa364830&env=p"
var iserv = "https://www.figma.com/proto/utxhK2W3AYMe2FVdEgIaGw/SAAD-Prototype?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=10%3A138&show-proto-sidebar=1"
var aqualert = "https://www.figma.com/proto/XKmlWK1PPpaWHPGONSpZfn/OH-Water-Pollution?node-id=431%3A371&scaling=scale-down&page-id=414%3A2&starting-point-node-id=431%3A371"
var connectfour = "https://github.com/bbkx226/Games/blob/main/connectfour.py"
var pong = "https://github.com/bbkx226/Games/blob/main/pong.py"
var snake = "https://github.com/bbkx226/Games/blob/main/snake.py"
var tetris = "https://github.com/bbkx226/Games/blob/main/tetris.py"
var password = "password"
var email ="mailto:bbkx226@gmail.com"

help = [
    '+========================================================================================+',
    '| Commands   | Descriptions                                                              |',
    '+========================================================================================+',
    '| whois      | Who is Brandon Ban?                                                       |',
    '| bbkx       | Discover more about me                                                    |',
    '| projects   | View Coding Projects                                                      |',
    '| social     | Display Social Networks                                                   |',
    '| history    | View command history                                                      |',
    '| help       | Ah, yes. You\'re a command whisperer! You already know what this one does. |',
    '| email      | Please don\'t spam my email                                                |',
    '| clear      | Clear terminal                                                            |',
    '| banner     | Display the header                                                        |',
    '| LinkedIn   | Checkout my LinkedIn profile for the latest updates!                      |',
    '| GitHub     | Discover more projects on my GitHub profile                               |',
    '| Facebook   | Contact me via Facebook                                                   |',
    '| Instagram  | Don\'t expect much on it as I didn\'t post anything xD                      |',
    '| bmttuxd    | Unveil the obscurity that lies within me.                                 |',
    '+========================================================================================+',
]

whois = [
    "<br>",
    "Welcome to my Terminal Website, I'm <span class=\"command\">Brandon</span>!😎",
    "<br>",
    "- I am currently studying computer science at the Asia Pacific University of Technology and Innovation.",
    "- Born in Johore, Malaysia.",
    "<br>",
    "- As a <span class=\"command\">highly motivated</span> and <span class=\"command\">disciplined</span> computer science student, I am deeply committed to pursuing a career in full stack development.",
    "<br>",
    "- Through a combination of <span class=\"command\">self-study</span> and collaboration with my peers,",
    "  I am continuously working to hone my skills and achieve my goal of becoming a full-fledged <span class=\"command\">full stack developer</span>.",
    "<br>",
    "- I am also keen to <span class=\"command\">challenge myself</span> by venturing beyond my comfort zone and embracing new opportunities and challenges.",
    "<br>",
    "- One of the things I enjoy about programming is the opportunity to develop something that will <span class=\"command\">make our lives easier and more efficient</span>.",
    "<br>",
    "- Apart from that, it allows me to collaborate with people from various disciplines who share my interests.",
    "<br>",
    "- It's fantastic to collaborate with other professionals who are striving toward the same goal.",
    "<br>",
]

bbkx = [
    "<br>",
    'For a comprehensive overview of my qualifications and expertise, I kindly direct you to my <a href="' + portfolio + '" target="_blank">portfolio website.' + "</a>",
    "<br>"
]

projects = [
    "<br>",
    "<span class=\"command\">Code Projects</span>",
    '<a href="' + discord + '" target="_blank">Discord Bot' + "</a>",
    '<p class="terminal">Terminal Website (The one you\'re using right now!)</p>',
    '<a href="' + aimagenerator + '" target="_blank">AI Image Generator' + "</a>",
    '<a href="' + blockchain + '" target="_blank">Blockchain Web3 Application' + "</a>",
    '<a href="' + guzheng + '" target="_blank">Guzheng Chatbot' + "</a>",
    "<br>",
    "<span class=\"command\">Figma Prototypes</span>",
    '<a href="' + iserv + '" target="_blank">Cleaning Service System Prototype' + "</a>",
    '<a href="' + aqualert + '" target="_blank">Aqua Alert' + "</a>",
    "<br>",
    "<span class=\"command\">Mini games</span>",
    '<a href="' + connectfour + '" target="_blank">Connect Four' + "</a>",
    '<a href="' + pong + '" target="_blank">Pong' + "</a>",
    '<a href="' + snake + '" target="_blank">Snake' + "</a>",
    '<a href="' + tetris + '" target="_blank">Tetris' + "</a>",
    "<br>",
]

social = [
    "<br>",
    '<span class=\"command\">LinkedIn</span>       <a href="' + linkedin + '" target="_blank">LinkedIn/bbkx226' + "</a>",
    '<span class=\"command\">GitHub</span>        <a href="' + github + '" target="_blank">GitHub/bbkx226' + "</a>",
    '<span class=\"command\">Facebook</span>       <a href="' + facebook + '" target="_blank">Facebook/Brandon Ban' + "</a>",
    '<span class=\"command\">Instagram</span>      <a href="' + instagram + '" target="_blank">Instagram/Brandon Ban' + "</a>",
    "<br>"
]

banner = [
  '██████╗░██████╗░░█████╗░███╗░░██╗██████╗░░█████╗░███╗░░██╗  ██████╗░░█████╗░███╗░░██╗',
  '██╔══██╗██╔══██╗██╔══██╗████╗░██║██╔══██╗██╔══██╗████╗░██║  ██╔══██╗██╔══██╗████╗░██║',
  '██████╦╝██████╔╝███████║██╔██╗██║██║░░██║██║░░██║██╔██╗██║  ██████╦╝███████║██╔██╗██║',
  '██╔══██╗██╔══██╗██╔══██║██║╚████║██║░░██║██║░░██║██║╚████║  ██╔══██╗██╔══██║██║╚████║',
  '██████╦╝██║░░██║██║░░██║██║░╚███║██████╔╝╚█████╔╝██║░╚███║  ██████╦╝██║░░██║██║░╚███║',
  '╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░░╚════╝░╚═╝░░╚══╝  ╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝',
  '                                                                                     ',
  '                                                                                     ',
  '                                                                                     ',
  '.-----------------------------------------------------------------------------.                                      ue$$$$$$$$$e.',
  '||Es| |F1 |F2 |F3 |F4 |F5 | |F6 |F7 |F8 |F9 |F10|                  BRANDON_   |                                   o$$$P""     "#$$$b',
  '||__| |___|___|___|___|___| |___|___|___|___|___|                             |                                 d$$$"            ?$$N',
  '| _____________________________________________     ________    ___________   |                                x$$$"               $$$',
  '||~  |! |" |§ |$ |% |& |/ |( |) |= |? |` || |<-|   |Del|Help|  |{ |} |/ |* |  |                               d$$$     .ueeeeeeeeee$$$beeeeeu',
  '||`__|1_|2_|3_|4_|5_|6_|7_|8_|9_|0_|ß_|\´_|\\_|__|   |___|____|  |[ |]_|__|__|  |                            @$$$     d$            $>      $$',
  '||<-  |Q |W |E |R |T |Z |U |I |O |P |Ü |* |   ||               |7 |8 |9 |- |  |                             $$$$      $$            $>      4$',
  '||->__|__|__|__|__|__|__|__|__|__|__|__|+_|_  ||               |__|__|__|__|  |          $$$.             .$$$P       $$            $>      4$',
  '||Ctr|oC|A |S |D |F |G |H |J |K |L |Ö |Ä |^ |< |               |4 |5 |6 |+ |  |          ?$$$L           z$$$"        $$eeeeeeeeeeee$beeeeeed$',
  '||___|_L|__|__|__|__|__|__|__|__|__|__|__|#_|__|       __      |__|__|__|__|  |            *$$$e..   .z$$$$"          $$                    4$',
  '||^    |> |Y |X |C |V |B |N |M |; |: |_ |^     |      |A |     |1 |2 |3 |E |  |              ^#R$$$$$$$*"             $$                    4$',
  '||_____|<_|__|__|__|__|__|__|__|,_|._|-_|______|    __||_|__   |__|__|__|n |  |                                       $$                    4$',
  '|   |Alt|A  |                       |A  |Alt|      |<-|| |->|  |0    |. |t |  |                                       $$                    4$',
  '|   |___|___|_______________________|___|___|      |__|V_|__|  |_____|__|e_|  |                                       $$                    4$',
  '|                                                                             |                                       $$                    4$',
  '.-----------------------------------------------------------------------------.                                       9$                    d$',
  '                                                                                                                       $k                   $F',
  '                                                                                                                        $N                z$" ',
  '                                                                                                                         \'*$o.         .e$"  ',
  '                                                                                                                              "#*$$$$P*""     ',
]

suggestion = [
  "<p class>",
  "<span class=\"color2\">Welcome to my terminal website! This website was inspired by <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=KtYby2QN0kQ&list=RDCMUC2WHjPDvbE6O328n17ZGcfg&start_radio=1&rv=KtYby2QN0kQ&t=15&ab_channel=ForrestKnight\">ForrestKnight~</a><br>For a list of available commands, type <span class=\"command\">help</span> .",
  "</span>",
  "</p>",
]

secret = [
  "<br>",
  '<span class=\"command\">sudo</span>       Only admin can type this command',
  '<span class=\"command\">rm -rf</span>     This will remove all files and directories of this website',
  "<br>"
]

setTimeout(function() {
  loopLines(banner, "", 80);
  loopLines(suggestion, "", 2500);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "%cHa Ha, proud of you, my \"inspect\" warrior friend!",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log("%cVoila! The magical phrase you've been questing for! Password: '" + password + "' - I wonder what it does?🤔", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
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
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
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
      addLine("HaHa, you really think you're going to make it, don't you?!", 80)
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

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
