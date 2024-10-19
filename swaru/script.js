let countdown;// setInterval function for countdown clock
let serviceInSession;// setTimeout function for when event is live
const clock = document.getElementById('clock');// div that controls the clock container 
const livestreamButton = document.getElementById('door');// div that controls the button for the user to click to enter the live stream
const daysUnit = document.querySelector('.days');// span element that displays the amount of days
const hoursUnit = document.querySelector('.hours');// span element that displays the amount of hours
const minutesUnit = document.querySelector('.minutes');// span element that displays the amount of minutes
const secondsUnit = document.querySelector('.seconds');// span element that displays the amount of seconds

// Set target date for friend's birthday (22nd October 12 AM AEDT)
const targetDate = new Date('2024-10-22T00:00:00+11:00').getTime(); // Melbourne is in AEDT (UTC+11) in October

// Start the countdown
timer(targetDate);

// Timer function to initiate countdown
function timer(date) {
    countdown = setInterval(() => {
        const now = Date.now(); // current time in milliseconds
        const differenceInTime = date - now; // difference between target and current time

        // If countdown reaches zero or below, clear the interval
        if (differenceInTime <= 0) {
            clearInterval(countdown);
            // Optionally display a message or take another action here
            clock.textContent = "Happy Birthday!";
        } else {
            timeLeft(differenceInTime); // Update the display with remaining time
        }
    }, 1000); // every 1 second
}

// Function to calculate and display the time left
function timeLeft(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24)); // milliseconds to days
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // milliseconds to hours
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); // milliseconds to minutes
    const seconds = Math.floor((time % (1000 * 60)) / 1000); // milliseconds to seconds

    // Format display values with leading zeros for single digits
    const displayDays = `${days < 10 ? '0' : ''}${days}`;
    const displayHours = `${hours < 10 ? '0' : ''}${hours}`;
    const displayMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;
    const displaySeconds = `${seconds < 10 ? '0' : ''}${seconds}`;

    // Display the countdown on the page
    daysUnit.textContent = displayDays;
    hoursUnit.textContent = displayHours;
    minutesUnit.textContent = displayMinutes;
    secondsUnit.textContent = displaySeconds;
}
