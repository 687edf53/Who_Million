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

const newUserButton = document.getElementById('newUser');
const newUserForm = document.getElementById('newUserForm');
const newUserName = document.getElementById('userName')
const addUserButton = document.querySelector('#newUserForm > input[type=\'submit\']')

const past_levels = document.querySelector('.past-levels')

newUserButton.addEventListener('click', () => {
  newUserForm.style.display = `flex`;
})

addUserButton.addEventListener('click', () => {
  if(newUserName.value != '') {
    let obj = {
      title: newUserName.value,
      id: new Date(),
      exist: false
    }
    localStorage.setItem("user", JSON.stringify(obj));
    newUserForm.style.display = "none";
    newUserButton.style.display = "none";
    past_levels.classList.remove('none')
  }
  
})

// Start Magic Buttons
const magic_button = document.querySelectorAll(".btn-sq2").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    // place of mouse in x
    let x = e.offsetX;
    // place of mouse in y
    let y = e.offsetY;
    // width of button
    let btnWidth = btn.clientWidth;
    // height of button
    let btnHeight = btn.clientHeight;
    // mouse in x - button width / 2
    let transX = (x - btnWidth / 2);
    // mouse in y - button height / 2
    let transY = (y - btnHeight / 2);
    btn.style.transform = `translateX(${transX}px)  translateY(${transY}px)`;


    let mx = e.pageX - btn.offsetLeft;
    let my = e.pageY - btn.offsetTop;
    btn.style.setProperty('--x', mx + 'px')
    btn.style.setProperty('--y', my + 'px')
  });

  btn.addEventListener('mouseout', (e) => {
    btn.style.transform = ''
  })

  
});
magic_button.forEach((btn) => {
  btn.addEventListener("touchmove", (e) => {
    e.preventDefault(); // Prevent default touch action

    // Touch position relative to the button
    let touch = e.touches[0];
    let x = touch.clientX - btn.getBoundingClientRect().left;
    let y = touch.clientY - btn.getBoundingClientRect().top;

    // Button dimensions
    let btnWidth = btn.clientWidth;
    let btnHeight = btn.clientHeight;

    // Calculate translations
    let transX = x - btnWidth / 2;
    let transY = y - btnHeight / 2;

    btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

    // Set custom properties for animation (CSS Variables)
    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
  });

  btn.addEventListener("touchend", () => {
    btn.style.transform = "";
  });
});
// End Magic Buttons
