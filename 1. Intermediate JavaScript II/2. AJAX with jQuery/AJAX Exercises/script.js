var form = document.querySelector("form");
var newGifInput = document.querySelector("input");
var mainElem = document.querySelector("main");
var delAllGifsBtn = document.querySelector("#delete-gifs");

form.addEventListener("submit", getGif);
delAllGifsBtn.addEventListener("click", deleteAll);

function getGif(event) {
  event.preventDefault();
  let XHR = new XMLHttpRequest();
  if (newGifInput.value === "") {
    alert("Please enter an expression");
  } else {
    XHR.onreadystatechange = function () {
      if (XHR.readyState === 4 && XHR.status === 200) {
        let resObj = JSON.parse(XHR.responseText);
        if (resObj.data.length < 1) {
          alert("Unable to fetch gif, Please enter another expression");
        } else {
          let randomNum = Math.floor(Math.random() * 50);
          let gifSrc = resObj.data[randomNum].images.original.url;
          displayGifInDOM(newGifInput.value, gifSrc);
          console.log(resObj);
        }
      }
    };
    XHR.open(
      "GET",
      `http://api.giphy.com/v1/gifs/search?q=${newGifInput.value}&api_key=guHXsN0bwpEyzbxRosmqk04IhcPpjI7k`
    );
    XHR.send();
  }
}

function elementFactory() {
  if (arguments.length < 2) {
    return document.createElement(arguments[0]);
  }

  let factoryProd = [];
  for (let elem of arguments) {
    factoryProd.push(document.createElement(elem));
  }
  return factoryProd;
}

function displayGifInDOM(input, img) {
  let [gifSecElem, gifDivElem, gifImageElem] = elementFactory(
    "section",
    "div",
    "img"
  );

  gifSecElem.setAttribute("id", "gif-displays");

  if (mainElem.childElementCount < 2) {
    mainElem.appendChild(gifSecElem);
  }
  gifDivElem.classList.add("gifs");
  mainElem.children[1].appendChild(gifDivElem);
  gifImageElem.setAttribute("alt", `${input}`);
  gifImageElem.setAttribute("src", `${img}`);
  gifImageElem.setAttribute("height", `200px`);
  gifImageElem.setAttribute("width", `200px`);
  gifDivElem.appendChild(gifImageElem);
}

function deleteAll() {
  if (mainElem.childElementCount > 1) {
    mainElem.removeChild(mainElem.children[1]);
  }
}
