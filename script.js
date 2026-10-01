/* =========================================
   START JOURNEY
========================================= */

function openJourney() {

    document.getElementById("photos").scrollIntoView({
        behavior: "smooth"
    });

    heartBurst();
}


/* =========================================
   FLOATING HEARTS
========================================= */

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const symbols = [
        "♥",
        "❤",
        "♡",
        "💕",
        "💗",
        "💖"
    ];

    heart.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 22) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);
}


/* Create hearts automatically */

setInterval(createFloatingHeart, 800);


/* =========================================
   LOVE METER
========================================= */

function startLoveMeter() {

    const progress =
        document.getElementById("loveProgress");

    const number =
        document.getElementById("loveNumber");

    const text =
        document.getElementById("meterText");

    let value = 0;

    progress.style.width = "0%";

    number.innerText = "0";

    text.innerText = "Calculating...";

    const interval = setInterval(() => {

        value++;

        progress.style.width = value + "%";

        number.innerText = value;

        if (value >= 100) {

            clearInterval(interval);

            text.innerText =
                "Error... it's actually TOO MUCH ❤️";

            heartBurst();
        }

    }, 25);
}


/* Start meter automatically */

window.addEventListener("load", () => {

    setTimeout(startLoveMeter, 1000);

});


/* =========================================
   REASON CARDS
========================================= */

function showReason(card) {

    card.classList.toggle("active");

    heartBurstSmall(card);
}


/* Small heart effect */

function heartBurstSmall(element) {

    const rect =
        element.getBoundingClientRect();

    for (let i = 0; i < 6; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "♥";

        heart.style.position = "fixed";

        heart.style.left =
            rect.left +
            rect.width / 2 +
            "px";

        heart.style.top =
            rect.top +
            rect.height / 2 +
            "px";

        heart.style.color = "#ff5797";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "2500";

        heart.style.fontSize = "18px";

        document.body.appendChild(heart);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            40 + Math.random() * 60;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            ${Math.cos(angle) * distance}px,
                            ${Math.sin(angle) * distance}px
                        )
                        scale(1.2)`,

                    opacity: 0
                }
            ],
            {
                duration: 800,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 800);
    }
}


/* =========================================
   YES / NO QUESTION
========================================= */

let noAttempts = 0;

function moveNoButton() {

    const noBtn =
        document.getElementById("noBtn");

    const messages = [
        "Nice try 😏",
        "Nope 😂",
        "You can't escape!",
        "Try again 👀",
        "That button is shy.",
        "Wrong button 😌",
        "Almost... 😂"
    ];

    const message =
        messages[
            noAttempts % messages.length
        ];

    noAttempts++;

    noBtn.innerText = message;

    const maxX =
        Math.min(
            window.innerWidth - 130,
            300
        );

    const maxY = 180;

    const x =
        Math.random() * maxX -
        maxX / 2;

    const y =
        Math.random() * maxY -
        maxY / 2;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

    heartBurst();
}


function yesAnswer() {

    const answer =
        document.getElementById("answerText");

    answer.innerHTML =
        "I knew it! ❤️";

    heartBurst();

    setTimeout(() => {

        answer.innerHTML =
            "Okay... now you're officially stuck with me. 🫶";

    }, 1800);
}


/* =========================================
   SURPRISE MODAL
========================================= */

function openSurprise() {

    const modal =
        document.getElementById("surpriseModal");

    modal.classList.add("active");

    heartBurst();
}


function closeSurprise() {

    const modal =
        document.getElementById("surpriseModal");

    modal.classList.remove("active");
}


/* Close modal outside box */

document
    .getElementById("surpriseModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeSurprise();

        }

    });


/* =========================================
   HEART BURST
========================================= */

function heartBurst() {

    const symbols = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "♥"
    ];

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className =
                "floating-heart";

            heart.innerHTML =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            heart.style.left =
                (20 + Math.random() * 60) + "vw";

            heart.style.bottom =
                (10 + Math.random() * 20) + "vh";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            document.body.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 7000);

        }, i * 60);

    }
}


/* =========================================
   ESCAPE KEY FOR MODAL
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeSurprise();

    }

});