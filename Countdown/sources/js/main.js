// Set the date we're counting down to
const targetDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update the count down every 1 second
function updateCountdown(){
    const now = new Date().getTime(); // Get today's date and time
    const timeRemaining = targetDate - now; // Find the distance between now and the count down date

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the result in the elements
    document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
    document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
}

updateCountdown(); // Update the count down every 1 second
setInterval(updateCountdown, 1000); // Update the count down every 1 second