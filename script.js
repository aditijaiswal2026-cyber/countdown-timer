let timer;
let targetTime;
let remainingTime = 0;

function startTimer() {

    let input = document.getElementById("dateInput").value;

    if (input == "") {
        alert("Please select date and time!");
        return;
    }

    targetTime = new Date(input).getTime();

    clearInterval(timer);

    timer = setInterval(function() {

        let currentTime = new Date().getTime();

        remainingTime = targetTime - currentTime;

        if (remainingTime <= 0) {

            clearInterval(timer);

            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";

            document.getElementById("message").innerHTML =
                "🎉 Time's Up!";

            return;
        }

        let days = Math.floor(
            remainingTime / (1000 * 60 * 60 * 24)
        );

        let hours = Math.floor(
            (remainingTime / (1000 * 60 * 60)) % 24
        );

        let minutes = Math.floor(
            (remainingTime / (1000 * 60)) % 60
        );

        let seconds = Math.floor(
            (remainingTime / 1000) % 60
        );

        document.getElementById("days").innerHTML =
            String(days).padStart(2, "0");

        document.getElementById("hours").innerHTML =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").innerHTML =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").innerHTML =
            String(seconds).padStart(2, "0");

    }, 1000);
}


function pauseTimer() {
    clearInterval(timer);
}


function resetTimer() {

    clearInterval(timer);

    document.getElementById("dateInput").value = "";

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    document.getElementById("message").innerHTML = "";
}