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
      alert("Your choice is wrong");
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
    clickedCards.clickedTimes += 1;
    console.log(item);
    if (clickedCards.clickedTimes == 1) {
      clickedCards.firstCard = item;
    } else {
      clickedCards.secondCard = item;
      console.log(clickedCards);
      clickedCards.isRightClicked();
    }
  });
});
