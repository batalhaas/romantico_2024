"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const dogImg = document.querySelector(".dog-img");
const dogImgYes = document.querySelector(".yes-img")

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "BOOYAH!!";
  buttonsContainer.classList.add("hidden");
  dogImg = `/pedido/images/yes-0${changeImage}.jpg`;
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;

}

function generateMessage(noCount) {
  const messages = [
    "Não.",
    "Tem certeza?",
    "Por favor...",
    "Estou que nem esse cachorro...",
    "Estou chorando...",
    "Estou sentindo o mesmo que o Noah sentiu quando perdeu a Allie...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  dogImg.src = `/pedido/images/dog-0${image}.jpg`;   
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}