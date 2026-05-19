const colors = document.querySelectorAll(".color");
const speakerImage = document.getElementById("speakerImage");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    colors.forEach((c) => {
      c.classList.remove("active");
    });

    color.classList.add("active");

    const newImage = color.getAttribute("data-image");

    speakerImage.src = newImage;
  });
});
