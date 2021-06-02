const greeting = document.getElementById('greeting');
setGreeting();

// responsive navbar
const menueBtn = document.querySelector(".hamburgur");
const nav = document.querySelector('nav');

menueBtn.addEventListener("click", () => {
  nav.classList.toggle("visibal");
  menueBtn.classList.toggle("on");
});

// greeting
function setGreeting() {
    const date = new Date();
    const dayNo = date.getDay();
    let day;
    switch (dayNo) {
        case 0: day = 'Sunday';
            break;
        case 1: day = 'Monday';
            break;
        case 2: day = 'Tuesday';
            break;
        case 3: day = 'Wednesday';
            break;
        case 4: day = 'Thursday';
            break;
        case 5: day = 'Friday';
            break;
        case 6: day = 'Saturday';
            break;
        default: day = 'day';
            break;
    }
    console.log(day);
    greeting.append(`Have a great ${day}.`);
}