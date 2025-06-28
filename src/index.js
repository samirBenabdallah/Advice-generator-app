const adviceId = document.getElementById("advice-id");
const advice = document.getElementById("advice-text");
const button = document.getElementById("advice-button");

const API_URL = "https://api.adviceslip.com/advice";
async function handleNewAdvice() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    adviceId.innerText = data.slip.id;
    advice.innerText = data.slip.advice;
  } catch (error) {
    console.error("Error fetching advice:", error);
    adviceId.innerText = "Error";
    advice.innerText = "Could not fetch advice. Please try again later.";
  }
}

document.body.onload = (e) => {
  handleNewAdvice();
};

button.addEventListener("click", (e) => {
  handleNewAdvice(123);
});
