import { cardList } from "./elements";

// const generateRandomNumber = function (alreadyGen) {
//   let genList = alreadyGen;
//   let randomIndex = Math.floor(Math.random() * 16) + 1;
//   for (let number of genList) {
//     if (Number(number) != Number(randomIndex)) {
//     } else {
//       randomIndex = Math.floor(Math.random() * 16) + 1;
//     }
//   }
//   return randomIndex;
// };

function allIndex() {
  let generatedNumbers = [];
  for (let i = 0; i <= 15; i++) {
    generatedNumbers.push(i);
  }
  return generatedNumbers;
}
export function placeTheImages() {
  const addedImages = document.querySelectorAll("img");
  const numberList = allIndex();
  let indexList = [];
  for (let b = 0; b < Math.floor(addedImages.length / 2); b++) {
    for (let j = 0; j <= 1; j++) {
      indexList.push(
        numberList.splice(Math.floor(Math.random() * numberList.length), 1)[0]
      );
      const theIndex = indexList[indexList.length - 1];
      addedImages[theIndex].src = `../images/img-${b + 1}.png`;
    }
  }
}
export const renderEachItem = function () {
  for (let i = 0; i < 16; i++) {
    cardList.innerHTML += `<li class="card-item">
        <div class="item-content question-view">
          <i class="fa-solid fa-question"></i>
        </div>
        <div class="item-content back-view">
          <img src="" alt="Card image" />
        </div>
        </li>`;
  }
};
