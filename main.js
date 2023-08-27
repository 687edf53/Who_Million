// Starting Animation
let StartingAnimation = document.getElementById("starting_animation");

// Start Button and adiya
let adiyaParagraph = document.getElementById("adiya");
let adiyaSection = document.querySelector(".start_button");

// Game Section
let Game_Section = document.querySelector(".game");

window.addEventListener("load", () => {
  setTimeout(() => {
    StartingAnimation.style.display = "none";
    // End Animation
    adiyaSection.style.display = "block";
  }, 3750);

  // Start Button and adiya
  fetch("Data/adkar.json")
    .then((res) => res.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data["تسابيح"].length);
      adiyaParagraph.textContent += data["تسابيح"][randomIndex]["content"];
    })
    .catch((err) => console.log(err));
  // End Button and adiya
});

// Start Game Section

let Start_Button_Section = document.querySelector(".start_button");
let Start_Button = document.querySelector(".start_button button");

Start_Button.addEventListener("click", () => {
  Start_Button_Section.style.display = `none`;
  Game_Section.style.display = `flex`;
});

// End Game Section
