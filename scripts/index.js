import "../styles/styles.css";
import { renderEachItem } from "./functions";
import { placeTheImages } from "./functions";

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

renderEachItem();
placeTheImages();

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
