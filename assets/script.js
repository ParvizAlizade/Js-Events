let lastcontext;
let lastnewdiv;
let lastinput;

let body = document.querySelector("body");
body.style.height = "400vh";


window.oncontextmenu = function (event) {
  event.preventDefault();
  lastcontext ? lastcontext.remove() : "null";
  let div = document.createElement("div");
  div.className = "box";
  div.style.width = "330px";
  div.style.height = "544px";
  div.style.border = "1px solid rgb(207, 207, 207)";
  div.style.borderRadius = "2%";
  div.style.zIndex = "11111";
  div.style.boxShadow = "-2px 1px 15px -1px rgba(90, 90, 90, 0.48)";

 
  let ul = document.createElement("ul");
  ul.style.paddingLeft = "0px";
  ul.style.paddingTop = "9px";
  div.append(ul);
 
  for (let i = 0; i < 17; i++) {
    let i = document.createElement("i");
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.append(i, span);
    ul.appendChild(li);
    li.style.cursor = "pointer";
    li.style.height = "30px";
    li.style.display = "flex";
    li.style.alignItems = "center";
    i.style.marginLeft = "25px";
    i.style.color = "rgb(94, 93, 93)";
    span.style.marginLeft = "18px";
    
    li.onmouseenter = function () {
      li.style.backgroundColor = " rgba(186, 186, 186, 0.444)";
    };
    li.onmouseleave = function () {
      li.style.backgroundColor = "transparent";
    };
   
  }

  ul.children.item(0).onclick = function () {
    lastnewdiv ? lastnewdiv.remove() && lastinput.remove() : "null";
    let newdiv = document.createElement("div");
    let input = document.createElement("input");
    newdiv.style.display = "flex";
    newdiv.style.alignItems = "center";
    newdiv.style.height = "100vh";
    input.className = "form-control";
    newdiv.className = "col-lg-2";
    newdiv.style.margin = "0 auto";
    newdiv.style.justifyContent = "center";
    newdiv.append(input);
    body.append(newdiv);
    lastnewdiv = newdiv;
    lastinput = input;
    
    
    input.onkeydown = function (event) {
      if (event.keyCode === 13) {
        body.style.backgroundColor = input.value;
      }
    };
  };
  ul.children.item(0).children.item(0).className = "fa-solid fa-eye";
  ul.children.item(0).children.item(1).innerText = "Preview";
  ul.children.item(1).children.item(0).className = "fa-brands fa-codepen";
  ul.children.item(1).children.item(1).innerText = "Open with";
  ul.children.item(2).children.item(0).className = "fa-solid fa-user-plus";
  ul.children.item(2).children.item(1).innerText = "Share";
  ul.children.item(3).children.item(0).className = "fa-solid fa-link";
  ul.children.item(3).children.item(1).innerText = "Get link";
  ul.children.item(4).children.item(0).className = "fa-solid fa-plus";
  ul.children.item(4).children.item(1).innerText = "Add to workspace";
  ul.children.item(5).children.item(0).className = "fa-regular fa-folder";
  ul.children.item(5).children.item(1).innerText = "Show file location";
  ul.children.item(6).children.item(0).className = "fa-brands fa-google-drive";
  ul.children.item(6).children.item(1).innerText = "Add Shortcut to Drive";
  ul.children.item(7).children.item(0).className = "fa-solid fa-folder-plus";
  ul.children.item(7).children.item(1).innerText = "Move to";
  ul.children.item(8).children.item(0).className = "fa-regular fa-star";
  ul.children.item(8).children.item(1).innerText = "Add to Starred";
  ul.children.item(9).children.item(0).className = "fa-solid fa-pen";
  ul.children.item(9).children.item(1).innerText = "Rename";
  ul.children.item(10).children.item(0).className = "fa-solid fa-circle-info";
  ul.children.item(10).children.item(1).innerText = "View Details";
  ul.children.item(11).children.item(0).className =
    "fa-solid fa-closed-captioning";
  ul.children.item(11).children.item(1).innerText = "View Caption tracks";
  ul.children.item(12).children.item(0).className =
    "fa-solid fa-clock-rotate-left";
  ul.children.item(12).children.item(1).innerText = "Manage versions";
  ul.children.item(13).children.item(0).className = "fa-solid fa-copy";
  ul.children.item(13).children.item(1).innerText = "Make a copy";
  ul.children.item(14).children.item(0).className =
    "fa-regular fa-circle-question";
  ul.children.item(14).children.item(1).innerText = "Report abuse";
  ul.children.item(15).children.item(0).className = "fa-solid fa-download";
  ul.children.item(15).children.item(1).innerText = "Download";
  ul.children.item(16).children.item(0).className = "fa-solid fa-trash-can";
  ul.children.item(16).children.item(1).innerText = "Move to Trash";
  
  
  div.style.position = "fixed";
  
  if (window.innerHeight - event.clientY >= 540) {
    div.style.top = `${event.clientY}px`;
    div.style.left = `${event.clientX}px`;
  } 
  
  else {
    div.style.top = `${210}px`;
    div.style.left = `${event.clientX}px`;
  }
  
  document.body.prepend(div);
  lastcontext = div;
};

window.onclick = function () {
  lastcontext ? lastcontext.remove() : "null";
};
