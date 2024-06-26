async function fetchGitaVerse() {
  const chapter = document.getElementById("chapter").value;
  const verse = document.getElementById("verse").value;
  const url = `https://bhagavadgitaapi.in/slok/${chapter}/${verse}`;

  await fetch(url, {
    referrerPolicy: "unsafe-url",
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("sanskrit").innerHTML = data.slok;
      document.getElementById("scon").innerHTML = data.puru.sc;
      document.getElementById("english").innerHTML = data.siva.et;
      document.getElementById("econ").innerHTML = data.raman.et;
      document.getElementById("hindi").innerHTML = data.tej.ht;
      document.getElementById("hcon").innerHTML = data.chinmay.hc;
    })
    .catch((error) => console.error(error));
}

window.addEventListener(`contextmenu`, (e) => {
  e.preventDefault();
});

alert(
  "This project is for innovation purposes. I don't have any intention to look down upon any belief. For information mail to iammeghdeb@gmail.com"
);
