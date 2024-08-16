async function getData() {
  const response = await fetch("https://api.adviceslip.com/advice");

  if (!response.ok) {
    throw new Error("Response is not ok");
  }

  const json = await response.json();
  return json.slip;
}

async function updateAdvice() {
  const advice = await getData();
  const p = document.getElementById("para");
  id.innerHTML = `ADVICE #${advice.id}`;
  p.innerHTML = ` "${advice.advice}"`;
}

updateAdvice();

const container = document.getElementById("container");
const id = document.getElementById("id");
const p = document.getElementById("para");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getData();
  updateAdvice();
});

container.appendChild(p);
container.appendChild(btn);
