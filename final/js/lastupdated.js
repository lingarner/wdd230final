// local storage

localStorage.setItem("msg1", "Hello Permanent");

sessionStorage.setItem("vsitDate", Date.now());
let message = localStorage.getItem("msg1");
let visitDate = localStorage.getItem("visitDate");

console.log(visitDate);

if (!localStorage.getItem("lastVisit")) {
  localStorage.setItem("lastVisit", Date.now());
  document.getElementById("diff").textContent = "This is your first visit";
} else {
  setStyles();
}

function setStyles() {
  let prevDate = localStorage.getItem("lastVisit");
  let currDate = Date.now();
  // let currDate = new Date("2022-12-1")

  let difference = currDate - prevDate;
  console.log(difference);
  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

  document.getElementById("diff").textContent = daysDifference;
  localStorage.getItem("lastVisit", Date.now());
}
