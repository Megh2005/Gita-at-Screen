function fetchGitaVerse() {
  const chapter = document.getElementById("chapter").value;
  const verse = document.getElementById("verse").value;
  const url = `https://bhagavadgitaapi.in/slok/${chapter}/${verse}`;

  fetch(url)
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
