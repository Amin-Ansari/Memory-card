import "../styles/styles.css";
import { renderEachItem } from "./functions";
import { placeTheImages } from "./functions";
import { remainNumber } from "./elements";
import { remainButton } from "./elements";

let clickedCards = {
  firstCard: undefined,
  secondCard: undefined,
  clickedTimes: 0,
  isRightClicked: function () {
    if (
      this.firstCard.lastElementChild.firstElementChild.src !=
      this.secondCard.lastElementChild.firstElementChild.src
    ) {
      this.firstCard.classList.add("shake");
      this.secondCard.classList.add("shake");
    }
    this.clickedTimes = 0;
    this.firstCard = undefined;
    this.secondCard = undefined;
  },
};

let revelation = {
  remaintime: 3,
  seconds: 5,
  takeALook: function () {
    this.remaintime -= 1;
    this.refreshRemain;
    remainButton.innerHTML = `${revelation.seconds} Seconds`;
    remainButton.disabled = true;
    document
      .querySelectorAll(".back-view, .question-view")
      .forEach(function (item) {
        if (!item.classList.contains("fliped")) {
          item.lastElementChild.classList.add("temp-fliped");
          item.firstElementChild.classList.add("temp-fliped");
        }
      });
    let timer = setInterval(function () {
      revelation.seconds -= 1;
      remainButton.innerHTML = `${revelation.seconds} Seconds`;
      if (revelation.seconds == 0) {
        remainButton.innerHTML = `Take a look`;
        remainButton.disabled = false;
        clearInterval(timer);
        revelation.seconds = 5;
        document
          .querySelectorAll(".back-view, .question-view")
          .forEach(function (item) {
            if (!item.classList.contains("temp-fliped")) {
              item.firstElementChild.classList.remove("temp-fliped");
              item.lastElementChild.classList.remove("temp-fliped");
            }
          });
      }
    }, 1000);
  },
  refreshRemain: function () {
    remainNumber.innerHTML = revelation.remaintime;
  },
};

renderEachItem();
placeTheImages();
revelation.refreshRemain();

document.querySelectorAll("li").forEach(function (item) {
  item.addEventListener("click", function () {
    item.lastElementChild.classList.add("fliped");
    item.firstElementChild.classList.add("fliped");
    clickedCards.clickedTimes += 1;
    if (clickedCards.clickedTimes == 1) {
      clickedCards.firstCard = item;
    } else {
      clickedCards.secondCard = item;
      clickedCards.isRightClicked();
      const shakedElements = document.querySelectorAll(".shake");
      if (shakedElements) {
        setTimeout(function () {
          for (let item of shakedElements) {
            item.firstElementChild.classList.remove("fliped");
            item.lastElementChild.classList.remove("fliped");
            item.classList.remove("shake");
          }
        }, 500);
      }
    }
  });
});

remainButton.addEventListener("click", revelation.takeALook);
