function displayPoem(response) {
  console.log(response.data.answer);

  // Animate the generated poem with Typewriter effect
  new Typewriter("#poemOutput", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let apiKey = "9c6308te7d4bf50b79ca37c634bbafo5";
  let context =
    "You are a creative AI poet. Generate short and beautiful poems. The poem must always be returned in clean HTML format using <p> for each line.";
  
  // Get user input
  let themeInput = document.querySelector("#themeInput").value.trim();
  let prompt = `Write a unique poem about ${themeInput || "life"}.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poemOutput");
  poemElement.innerHTML = `<p class="text-white/60">Generating a poem for you... please wait ✨</p>`;

  console.log("Calling the AI API for poem...");
  axios.get(apiUrl).then(displayPoem);
}

// Attach event listener
let generatorButton = document.querySelector("#generateBtn");
generatorButton.addEventListener("click", generatePoem);
