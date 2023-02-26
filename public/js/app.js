const greeting = document.getElementById('greeting');
const developmentyear = document.getElementById('developmentyear');
const date = new Date();
setGreeting();
setYear();

// greeting
function setGreeting() {
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

function setYear() {
    let year = date.getFullYear() - 2019;
    developmentyear.innerHTML = year < 10 ? `0${year}+` : `${year}+`;
}
