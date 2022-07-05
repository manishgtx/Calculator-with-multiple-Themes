const selector = document.querySelector('.main-selector');
const selectBtn = document.querySelector('.selector-btn');
const heading = document.querySelector('.calc');
const selectNumbers = document.querySelector('.select-numbers');
const display = document.querySelector('.input-screen');
const theme = document.querySelector('.theme-selector').querySelector('h6');
const buttons = document.querySelector('.buttons');
const numberButtons = document.querySelectorAll('.num-btn');
const clearbtns = document.querySelectorAll('.theme-2');
const calculate = document.querySelector('.calculate');
selector.addEventListener('click',() => {
    if (selectBtn.classList.contains("position-1")) {
      selectBtn.classList.remove("position-1");
      selectBtn.classList.add("position-2","selector-color");
      document.body.classList.add('calc-bg');
      heading.classList.add('calc-2');
      theme.classList.add('calc-2');
      display.classList.add('display-2');
      selectNumbers.classList.add('calc-2');
      selector.classList.add('selector-2');
      buttons.classList.add('keycontainer-2')
      numberButtons.forEach((btn)=> {
        btn.classList.add('keys')
      });
      clearbtns.forEach((btn)=> {
        btn.classList.add('theme-2-buttons');
      });
      calculate.classList.add('calculate-2')
    } else if (selectBtn.classList.contains("position-2")) {
      selectBtn.classList.remove("position-2");
      selectBtn.classList.add("position-3","selector-color-3");
      document.body.classList.add("calc-bg-3");
      heading.classList.add("calc-3");
      theme.classList.add("calc-3");
      display.classList.add("display-3");
      selectNumbers.classList.add("calc-3");
      selector.classList.add("selector-3");
      buttons.classList.add("keycontainer-3");
      numberButtons.forEach((btn) => {
        btn.classList.add("keys-3");
      });
      clearbtns.forEach((btn) => {
        btn.classList.add("theme-3-buttons");
      });
      calculate.classList.add("calculate-3");
    }
    else {
        selectBtn.classList.remove('position-3');
        selectBtn.classList.add("position-1");
        selectBtn.classList.remove(
          "position-3",
          "selector-color",
          "selector-color-3"
        );
        document.body.classList.remove("calc-bg","calc-bg-3");
        heading.classList.remove("calc-2","calc-3");
        theme.classList.remove("calc-2","calc-3");
        display.classList.remove("display-2","display-3");
        selectNumbers.classList.remove("calc-2","calc-3");
        selector.classList.remove("selector-2","selector-3");
        buttons.classList.remove("keycontainer-2","keycontainer-3");
        numberButtons.forEach((btn) => {
          btn.classList.remove("keys","keys-3");
        });
        clearbtns.forEach((btn) => {
          btn.classList.remove("theme-2-buttons","theme-3-buttons");
        });
        calculate.classList.remove("calculate-2","calculate-3");
    }
});