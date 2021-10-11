const joke = document.getElementById("joke");
const btn = document.getElementById("btn");
btn.addEventListener("click", getjoke);

getjoke();

function getjoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    });
}

const container = document.querySelector(".container");
const body = document.querySelector(".body");

btn.addEventListener("click", () => {
  container.classList.add("aylan");
  body.classList.add("body2");
  btn.classList.add("btn2");
});
