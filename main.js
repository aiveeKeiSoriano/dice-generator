const ADVICE_GENERATOR_API = "https://api.adviceslip.com/advice";

const adviceCard = document.querySelector(".advice-card");
const adviceNumber = document.querySelector(".advice-number");
const adviceBody = document.querySelector(".advice-body");
const dice = document.querySelector(".advice-dice");

const getRandomAdvice = async () => {
  const response = await fetch(ADVICE_GENERATOR_API);
  const { slip } = await response.json();
  return slip;
};

const generateRandomAdvice = async () => {
  const slip = await getRandomAdvice();
  adviceNumber.innerText = `Advice #${slip.id}`;
  adviceBody.innerText = `“${slip.advice}”`;
  adviceCard.style.display = "flex";
};

dice.addEventListener("click", generateRandomAdvice);

generateRandomAdvice();
