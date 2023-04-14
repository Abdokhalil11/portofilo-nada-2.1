// show header links
let ul = document.querySelector("ul");
let bar = document.querySelector(".bar");
let header = document.querySelector("header");

let showLinks = () => {
  bar.addEventListener("click", () => {
    ul.classList.toggle("active");
  });
};

showLinks();

// dark mode

let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");

let darkMode = () => {
  moon.addEventListener("click", () => {
    document.body.classList.add("dark");
    moon.classList.remove("active");
    sun.classList.add("active");
  });
};
let lightmode = () => {
  sun.addEventListener("click", () => {
    document.body.classList.remove("dark");
    moon.classList.add("active");
    sun.classList.remove("active");
  });
};

darkMode();
lightmode();

// incearse the counter when scroll to scetion
let numbers = document.querySelectorAll(".number");
let about = document.querySelector(".about");
let go = false;
// started function
window.onscroll = () => {
  if (window.scrollY >= about.offsetTop) {
    // start for one time
    if (!go) {
      counter();
    }
    go = true;
  }
};

let counter = () => {
  numbers.forEach((num) => {
    let end = num.dataset.num;
    let start = 0;
    let s = setInterval(() => {
      num.innerHTML = "+" + start;
      start++;
      if (start > end) {
        clearInterval(s);
      }
    }, 100);
  });
};
// skills section
let skillsSection = document.querySelector(".skills");
let skills = document.querySelectorAll(".skills .box ");
let progress = document.querySelectorAll(".skills .box .body div div ");
let progressBar = document.querySelectorAll(".skills .box .body div div span ");
let start = false;
skills.forEach((skill) => {
  skill.onclick = () => {
    skill.classList.toggle("hide");
  };
});

window.onscroll = () => {
  if (window.scrollY >= skillsSection.offsetTop) {
    if (!start) {
      progressAnimation();
    }
    start = true;
  }
};
const progressAnimation = () => {
  progressBar.forEach((el) => {
    el.style.width = `${el.parentElement.dataset.progress}%`;
  });
};

// show career mode
let workcareer = document.querySelector(".qulify .state .work");
let educatecareer = document.querySelector(".qulify .state .educate");
let workMode = document.querySelector(".f-state.work");
let educateMode = document.querySelector(".f-state.educate");

const showWorkMode = () => {
  workcareer.onclick = () => {
    workcareer.classList.add("active");
    educatecareer.classList.remove("active");
    workMode.classList.remove("hide");
    educateMode.classList.add("hide");
  };
};

const showEducateMode = () => {
  educatecareer.onclick = () => {
    educatecareer.classList.add("active");
    workcareer.classList.remove("active");
    educateMode.classList.remove("hide");
    workMode.classList.add("hide");
  };
};

showWorkMode();
showEducateMode();

//div slider

let works = document.querySelector(".works");
let work = document.querySelectorAll(".works .work")[1];
let arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow) => {
  arrow.onclick = () => {
    arrow.className.includes("right")
      ? (works.scrollLeft += work.clientWidth)
      : (works.scrollLeft -= work.clientWidth);
  };
});
