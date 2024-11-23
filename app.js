const url = "https://icanhazdadjoke.com/";

// select elements

const btn = document.querySelector(".btn");
const p = document.querySelector("p");

const fetchData = async () => {
  p.textContent = "Loading...";
  try {
    const resp = await fetch(url, {
      headers: {
        Accept: "Application/json",
        "User-agent": "dad joke project",
      },
    });
    if (!resp.ok) {
      throw new Error("there was an error");
    }
    const data = await resp.json();
    p.textContent = data.joke;
  } catch (error) {
    p.textContent = "there was an error...";
  }
};
fetchData();

btn.addEventListener("click", fetchData);
