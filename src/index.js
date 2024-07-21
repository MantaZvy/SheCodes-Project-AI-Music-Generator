function displayMusicSuggestions(response) {
  console.log("Poem generated!");

  new Typewriter("#music", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateMusicSuggestions(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fcd20cbab033a83d4912e96fcoedf8t4";
  let prompt = `User instructions: ${instructionsInput.value}`;
  let context =
    "You are a music expert who knows all songs from every genre and love to suggest great songs. Your mission is to generate any 5 song suggestions based on user instructions. Make sure to follow user instructions and also give new line for each song in html <br> format, thank you!.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let musicSuggestions = document.querySelector("#music");
  musicSuggestions.classList.remove("hidden");
  musicSuggestions.innerHTML = `<div class="blink">Generating ${instructionsInput.value} suggestions</div>`;

  console.log("generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayMusicSuggestions);
}

let musicButton = document.querySelector("#music-generator-form");
musicButton.addEventListener("submit", generateMusicSuggestions);
