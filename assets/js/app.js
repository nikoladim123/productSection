var bigCarContainer = document.getElementsByClassName('bigCarContainer');
var leftCarArrowBox = document.getElementsByClassName('leftCarArrowBox');
var rightCarArrowBox = document.getElementsByClassName('rightCarArrowBox');

var jsxImage;

var picNum = 3;
var imageMod = 31;

function setJsxImageRight(){
  imageMod++;
  jsxImage = `<img class="big" src="assets/images/bigImages/${imageMod % picNum}.png" alt="">`;
  var newDiv = document.createElement('div');
  newDiv.innerHTML = jsxImage;
  bigCarContainer[0].insertAdjacentElement('beforeend', newDiv);
  setTimeout(function () {
    bigCarContainer[0].removeChild(bigCarContainer[0].children[0]);
  }, 10);
  console.log(imageMod % picNum);

}

function setJsxImageLeft() {
  imageMod--;
  jsxImage = `<img class="big" src="assets/images/bigImages/${imageMod % picNum}.png" alt="">`;
  var newDiv = document.createElement('div');
  newDiv.innerHTML = jsxImage;
  bigCarContainer[0].insertAdjacentElement('beforeend', newDiv);
  setTimeout(function () {
    bigCarContainer[0].removeChild(bigCarContainer[0].children[0]);
  }, 10);
  console.log(imageMod % picNum);

}

// function setJsxImageLeft() {
//   imageMod--;
//   jsxImage = `<img class="big" src="assets/images/bigImages/${imageMod % picNum}.png" alt="">`;
//   var newDiv = document.createElement('div');
//   newDiv.innerHTML = jsxImage;
//   bigCarContainer[0].insertAdjacentElement('afterbegin', newDiv);
//   setTimeout(function () {
//     bigCarContainer[0].removeChild(bigCarContainer[0].children[2]);
//   }, 10);
//   console.log(imageMod % picNum);
// }

// dust
var dust = document.getElementsByClassName('dust');
function runDust() {
  dust[0].style.opacity = '0';
  dust[0].style.transform = 'rotate(0deg)';
  setTimeout(function () {
    dust[0].style.transition = '0s';
    setTimeout(function () {
      dust[0].style.width = '0vw';
      setTimeout(function () {
        dust[0].style.transition = '1s';
        setTimeout(function () {
          dust[0].style.width = '50.1029vw'
          dust[0].style.opacity = '1';
          dust[0].style.transform = 'rotate(360deg)';
        }, 100);
      }, 100);
    }, 100);
  }, 500);
};


// small images Car
var carPickBox = document.getElementsByClassName('carPickBox');
var smallPicMod = 10;
var smallJsx;

function smallRightJsx() {
  smallJsx = `<img class="smallImg" data-image="0" src="assets/images/smImages/${imageMod  % picNum }.png" alt="">`
  var newDiv = document.createElement('div');
  newDiv.innerHTML = smallJsx;
  newDiv.className = 'smallProdBox';
  carPickBox[0].insertAdjacentElement('beforeend', newDiv);
  setTimeout(function () {
    carPickBox[0].removeChild(carPickBox[0].children[0]);
  }, 10);
}

// function smallLeftJsx() {
//   smallJsx = `<img class="smallImg" data-image="0" src="assets/images/smImages/${imageMod  % picNum +1 }.png" alt="">`
//   var newDiv = document.createElement('div');
//   newDiv.innerHTML = smallJsx;
//   newDiv.className = 'smallProdBox';
//   carPickBox[0].insertAdjacentElement('afterbegin', newDiv);
//   setTimeout(function () {
//     carPickBox[0].removeChild(carPickBox[0].children[5]);
//   }, 10);
// }

// butons handlers
rightCarArrowBox[0].addEventListener('click',()=>{
  smallRightJsx();
  setTimeout(function () {
    setJsxImageRight();
  }, 200);
  runDust();
});

leftCarArrowBox[0].addEventListener('click',()=>{
  // smallLeftJsx();
  smallRightJsx();
  setTimeout(function () {
    setJsxImageLeft();
  }, 200);
  runDust();
});
