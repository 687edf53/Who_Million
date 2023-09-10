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
    adiyaSection.style.display = "flex";
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

// newUser Section

const newUserButton = document.getElementById("newUser");
const newUserForm = document.getElementById("newUserForm");
const newUserName = document.getElementById("userName");
const addUserButton = document.querySelector(
  "#newUserForm > input[type='submit']"
);

const past_levels = document.querySelector(".past-levels");

newUserButton.addEventListener("click", () => {
  newUserForm.style.display = `flex`;
});

addUserButton.addEventListener("click", () => {
  if (newUserName.value != "") {
    let obj = {
      title: newUserName.value,
      id: new Date(),
      exist: false,
    };
    localStorage.setItem("user", JSON.stringify(obj));
    newUserForm.style.display = "none";
    newUserButton.style.display = "none";
    past_levels.classList.remove("none");
    location.reload()
  }
});

let button_options = document.querySelector('.button_options')

if (localStorage.getItem("user")) {
  newUserButton.style.display = `none`;
  past_levels.style.display = `block`;
  let userNameWelcome = document.getElementById('userNameWelcome')
  userNameWelcome.textContent = `hello ${JSON.parse(localStorage.getItem('user')).title}`
  let deleteNewButton = document.createElement('button')
  deleteNewButton.classList.add('removeAccount')
  deleteNewButton.textContent = `حذف الحساب`
  button_options.appendChild(deleteNewButton)
  deleteNewButton.addEventListener('click', () => {
    location.reload()
    localStorage.removeItem('user')
    this.style.display = `none`
  })
}
