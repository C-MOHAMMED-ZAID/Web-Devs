// Set the date and time for the event
const eventDate = new Date("December 31, 2024 23:59:59").getTime();

// Update the countdown every second
const countdownFunction = setInterval(() => {
    
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the difference between now and the event date
    const distance = eventDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerHTML = `${days}d`;
    document.getElementById("hours").innerHTML = `${hours}h`;
    document.getElementById("minutes").innerHTML = `${minutes}m`;
    document.getElementById("seconds").innerHTML = `${seconds}s`;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").style.display = 'none';
        document.getElementById("message").innerHTML = "The event has started!";
    }
}, 1000);