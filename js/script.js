// Henter alle elementer med klassen ".color".
// querySelectorAll returnerer en NodeList, som indeholder alle farveknapperne.
const colors = document.querySelectorAll(".color");

// Henter højtalerbilledet via dets id.
// Dette element skal vi ændre, når brugeren vælger en farve.
const speakerImage = document.getElementById("speakerImage");

// Gemmer den aktuelle billedsti som standardvalg.
// Variablen opdateres senere, når brugeren klikker på en ny farve.
let selectedImage = speakerImage.src;

// Gennemgår hver enkelt farveknap.
// For hver knap tilføjes forskellige events.
colors.forEach((color) => {

  // Mouseenter aktiveres når brugeren holder musen over en farve.
  // Henter den tilknyttede billedsti fra data-image attributten
  // og viser billedet som en midlertidig forhåndsvisning.
  color.addEventListener("mouseenter", () => {
    const hoverImage = color.getAttribute("data-image");
    speakerImage.src = hoverImage;
  });

  // Mouseleave aktiveres når musen forlader farveknappen.
  // Hvis brugeren ikke har klikket, vises det senest valgte billede igen.
  color.addEventListener("mouseleave", () => {
    speakerImage.src = selectedImage;
  });

  // Click aktiveres når brugeren vælger en farve.
  // Her gemmes brugerens valg permanent.
  color.addEventListener("click", () => {
    
    // Fjerner den aktive markering fra alle farveknapper,
    // så kun én farve kan være valgt ad gangen.
    colors.forEach((c) => {
      c.classList.remove("active");
    });

    // Tilføjer klassen "active" til den valgte farveknap.
    // Klassen bruges i CSS til at vise hvilken farve der er valgt.
    color.classList.add("active");

    // Gemmer det nye valgte billede
    // Dette bliver nu det nye standardbillede.

    selectedImage = color.getAttribute("data-image");

    // Opdaterer højtalerbilledet, så det matcher brugerens valg

    speakerImage.src = selectedImage;
  });
});
