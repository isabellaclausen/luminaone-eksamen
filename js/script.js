const colors = document.querySelectorAll(".color");
const speakerImage = document.getElementById("speakerImage");

let selectedImage = speakerImage.src;

colors.forEach((color) => {
  color.addEventListener("mouseenter", () => {
    const hoverImage = color.getAttribute("data-image");
    speakerImage.src = hoverImage;
  });

  color.addEventListener("mouseleave", () => {
    speakerImage.src = selectedImage;
  });

  color.addEventListener("click", () => {
    colors.forEach((c) => {
      c.classList.remove("active");
    });

    color.classList.add("active");

    selectedImage = color.getAttribute("data-image");
    speakerImage.src = selectedImage;
  });
});
