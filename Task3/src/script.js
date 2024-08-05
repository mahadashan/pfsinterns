const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const calculator = document.querySelector(".calculator");
const body = document.body;

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      let expression = display.innerText.replace(/x/g, "*").replace(/÷/g, "/");
      try {
        display.innerText = eval(expression);
      } catch {
        display.innerText = "Error";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Kuch likh to le pehle!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      if (item.id == "x") {
        display.innerText += "x";
      } else if (item.id == "÷") {
        display.innerText += "÷";
      } else {
        display.innerText += item.id;
      }
    }
  };
});
