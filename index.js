const holes = document.querySelectorAll(".hole");
const mouse = document.querySelector(".mouse");
const elapsedTime = document.querySelector("#elapsedTime");
const click = document.querySelector("#click");
const elementContainerScore = document.querySelector("#containerScore");
const button = document.querySelector("#button");
const win = document.querySelector("#win");

let currentTime = 0;
let currentClik = 0;
let totalClick;
let totalTime;
let hitPosition;
let intervalRandomHoles;
let intervalCountdown;

function randomHoles() {
    holes.forEach((hole) => {
        hole.classList.remove("mouse");
    });

    let randomPosiiton = holes[Math.floor(Math.random() * 3)];
    randomPosiiton.classList.add("mouse");

    hitPosition = randomPosiiton.id;
}

function countDown() {
    currentTime++;
    elapsedTime.textContent = currentTime;

    totalTime = elapsedTime.textContent;
}

function moveMouse() {
    intervalRandomHoles = setInterval(randomHoles, 200);
    intervalCountdown = setInterval(countDown, 1000);
}

holes.forEach((hole) => {
    hole.addEventListener("click", () => {
        currentClik += 1;
        click.textContent = currentClik;

        totalClick = click.textContent;

        if (hole.id == hitPosition) {
            alert(
                "Gotcha! time to catch " +
                    totalTime +
                    " seconds and " +
                    totalClick +
                    " clicks."
            );

            clearInterval(intervalRandomHoles);
            clearInterval(intervalCountdown);
            button.style.backgroundColor = "pink";

            win.textContent = "You Win!";
        }
    });
});

function start() {
    moveMouse();
    elementContainerScore.style.display = "flex";
    button.style.backgroundColor = "grey";
}
