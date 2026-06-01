// Finder alle farveknapperne og billedet af højtaleren
const colors = document.querySelectorAll(".color");
const speakerImage = document.getElementById("speakerImage");

// Gemmer det billede, der er valgt som standard
let selectedImage = speakerImage.src;

// Gennemgår alle farveknapper
colors.forEach((color) => {
  // Viser den tilhørende højtalerfarve, når musen holdes over knappen
  color.addEventListener("mouseenter", () => {
    const hoverImage = color.getAttribute("data-image");
    speakerImage.src = hoverImage;
  });

  // Går tilbage til den valgte farve, når musen fjernes
  color.addEventListener("mouseleave", () => {
    speakerImage.src = selectedImage;
  });

  // Vælger en ny farve, når brugeren klikker
  color.addEventListener("click", () => {
    // Fjerner markeringen fra alle farveknapper
    colors.forEach((c) => {
      c.classList.remove("active");
    });

    // Tilføjer markering til den valgte farve
    color.classList.add("active");

    // Gemmer det nye valgte billede
    selectedImage = color.getAttribute("data-image");

    // Opdaterer højtalerbilledet
    speakerImage.src = selectedImage;
  });
});
