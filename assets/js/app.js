var bigCarContainer = document.getElementsByClassName('bigCarContainer');
var leftCarArrowBox = document.getElementsByClassName('leftCarArrowBox');
var rightCarArrowBox = document.getElementsByClassName('rightCarArrowBox');

var jsxImage;

var picNum = 2;
var imageMod = picNum * 10;
var imgaeModSet = imageMod % picNum;

function setJsxImageRight(){
  jsxImage = `<img class="big" src="assets/images/bigImages/${imageMod % picNum}.png" alt="">`;
  var newDiv = document.createElement('div');
  newDiv.innerHTML = jsxImage;
  bigCarContainer[0].insertAdjacentElement('beforeend', newDiv);
  setTimeout(function () {
    bigCarContainer[0].removeChild(bigCarContainer[0].children[0]);
  }, 10);
  console.log(imgaeModSet);
  imageMod++;
}

function setJsxImageLeft() {
  jsxImage = `<img class="big" src="assets/images/bigImages/${imageMod % picNum}.png" alt="">`;
  var newDiv = document.createElement('div');
  newDiv.innerHTML = jsxImage;
  bigCarContainer[0].insertAdjacentElement('afterbegin', newDiv);
  setTimeout(function () {
    bigCarContainer[0].removeChild(bigCarContainer[0].children[3]);
  }, 10);
  console.log(imgaeModSet);
  imageMod++;
}

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


rightCarArrowBox[0].addEventListener('click',()=>{
  setTimeout(function () {
    setJsxImageRight();
  }, 200);
  runDust();
});

leftCarArrowBox[0].addEventListener('click',()=>{
  setTimeout(function () {
    setJsxImageLeft();
  }, 200);
  runDust();
});
