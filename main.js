

 // TEST CODE:
  // let searchButton = document.querySelector(".search-bar .btn-search button");
  // let whereSelection = document.querySelector(".where-search select")
  // let value = whereSelection.value

  // searchButton.onclick = function (e) {
  //     // alert(whereSelection.options[whereSelection.selectedIndex].text)
  //     alert(Math.round(Math.random() * 10))
  // }



// body1-search-bar:

// slider move
window.addEventListener("load", function () {
  const slider = document.querySelector("#slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLength = sliderItems.length;
  let positionX = 0;
  let index = 0;

  nextBtn.addEventListener("click", function () {
    changeSlide(1);
  });

  prevBtn.addEventListener("click", function () {
    changeSlide(-1);
  });

  function changeSlide(direction) {
    if (direction === 1) {
      if (index >= slidesLength - 1) {
        index = slidesLength - 1;
        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index++;
    } else if (direction === -1 && direction !== 0) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index--;
    }
  }
});

// add alert
const btnSearch = document.querySelector("#submit");
const whereSearch = document.querySelector("#where-selector");
const typeSearch = document.querySelector("#type-selector");

btnSearch.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(
    whereSearch,
    typeSearch,
    document.querySelector("#date-selector").value
  );
  alert(
    `Tour: ${whereSearch.value} |  Type of Tours: ${typeSearch.value} |  Time: ${
      document.querySelector("#date-selector").value
    }. Congratulations, you have successfully registered!!`
  );
});

// Adult
const minusAdult = document.querySelector(".input-adult .minus");
const plusAdult = document.querySelector(".input-adult .plus");
const numberAdult = document.querySelector("#number-adult");
var countAdult = 0;
numberAdult.innerHTML = countAdult;

const incrementAdult = () => {
  countAdult++;
  numberAdult.innerHTML = countAdult;
};

const decrementAdult = () => {
  if (countAdult < 0) {
    countAdult === 0;
  } else {
    numberAdult.innerHTML = countAdult;
    countAdult--;
  }
};
// Add click event to buttons
minusAdult.addEventListener("click", decrementAdult);
plusAdult.addEventListener("click", incrementAdult);

// young
const minusYouth = document.querySelector(".input-youth .minus");
const plusYouth = document.querySelector(".input-youth .plus");
const numberYouth = document.querySelector("#number-youth");
var countYouth = 0;
numberYouth.innerHTML = countYouth;

const incrementYouth = () => {
  countYouth++;
  numberYouth.innerHTML = countYouth;
};

const decrementYouth = () => {
  if (countYouth < 0) {
    countYouth === 0;
  } else {
    numberYouth.innerHTML = countYouth;
    countYouth--;
  }
};
// Add click event to buttons
minusYouth.addEventListener("click", decrementYouth);
plusYouth.addEventListener("click", incrementYouth);

// children
const minusChildren = document.querySelector(".input-children .minus");
const plusChildren = document.querySelector(".input-children .plus");
const numberChildren = document.querySelector("#number-children");
var countChildren = 0;
numberChildren.innerHTML = countChildren;

const incrementChildren = () => {
  countChildren++;
  numberChildren.innerHTML = countChildren;
};

const decrementChildren = () => {
  if (countChildren < 0) {
    countChildren === 0;
  } else {
    numberChildren.innerHTML = countChildren;
    countChildren--;
  }
};
// Add click event to buttons
minusChildren.addEventListener("click", decrementChildren);
plusChildren.addEventListener("click", incrementChildren);



// -----------------------------
// linh tinh:
let chatButton = document.querySelector(".fixed-chat")

chatButton.onclick = function (){
  alert ("tính năng hiện chưa khả dụng !")
}


