function generateMusicSuggestions(event) {
  event.preventDefault();

  new Typewriter("#music", {
    strings: "Hello there, this is a music suggestion",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let musicButton = document.querySelector("#music-generator-form");
musicButton.addEventListener("submit", generateMusicSuggestions);
