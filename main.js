document.querySelectorAll(".menu .lista .li_links a").forEach((link) => {
    link.addEventListener("click", () => {
        document.getElementById("menu_r").checked = false;
    });
});


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("color-button")
const fonts = ["Arial", "Verdana", "Times New Roman", "Georgia", "Courier New", "Comic Sans MS", "Trebuchet MS", "Impact"];;

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }  
  //console.log("Color generado:", hexColor);
  document.body.style.backgroundColor = hexColor;  
  setTextColor(hexColor);
  setRandomFont();
  setCookie("bgColor", hexColor, 1);
    
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function setTextColor(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);

  if (luminance > 186) { 
    document.body.style.color = "#000000";
    const links = document.querySelectorAll(".link");
    links.forEach(link => {
        link.style.color = "#000000";
        setCookie("textColor", "#000000", 1);
    });
  } else {
    document.body.style.color = "#FFFFFF";
    const links = document.querySelectorAll(".link");
    links.forEach(link => {
      link.style.color = "#FFFFFF";
      setCookie("textColor", "#FFFFFF", 1);
    });
  }
}
function setRandomFont() {
    const randomIndex = Math.floor(Math.random() * fonts.length);
    const randomFont = fonts[randomIndex];
    //console.log("Fuente seleccionada:", randomFont); 
    const allElements = document.querySelectorAll("*");
    allElements.forEach(el => {
      el.style.fontFamily = randomFont;
    });
    document.body.style.fontFamily = randomFont;
    setCookie("fontFamily", randomFont, 1);
  }


  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
window.onload = function() {
    const savedBgColor = getCookie("bgColor");
    const savedTextColor = getCookie("textColor");
    const savedFontFamily = getCookie("fontFamily");

    if (savedBgColor && savedTextColor && savedFontFamily) {
        document.body.style.backgroundColor = savedBgColor;
        document.body.style.color = savedTextColor;
        document.body.style.fontFamily = savedFontFamily;
        const links = document.querySelectorAll(".link");
            links.forEach(link => {
            link.style.color = savedTextColor;
        });
        const allElements = document.querySelectorAll("*");
        allElements.forEach(el => {
            el.style.fontFamily = savedFontFamily; 
        });
    }
}