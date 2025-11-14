function countdownTimer(startTime, interval) {
  // Initialize the remaining time
  let remainingTime = startTime;

  // Set up a timer using setInterval
  const timerId = setInterval(() => {
    console.log(remainingTime);      // Log the remaining time
    remainingTime--;                 // Decrement it

    // Stop the timer when time reaches 0
    if (remainingTime < 0) {
      clearInterval(timerId);
    }
  }, interval);

  // Return the timer ID for validation
  return timerId;
}

module.exports = { countdownTimer };

