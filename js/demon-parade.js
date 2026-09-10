/* =========================================================
   DEMON PARADE
   Randomly selects and displays parade figures
   ========================================================= */

const paradeImages = [
    "dp01.png",
    "dp02.png",
    "dp03.png",
    "dp04.png",
    "dp05.png",
    "dp06.png",
    "dp07.png",
    "dp08.png",
    "dp09.png",
    "dp10.png",
    "dp11.png",
    "dp12.png",
    "dp13.png",
    "dp14.png",
    "dp15.png",
    "dp16.png",
    "dp17.png",
    "dp18.png",
    "dp19.png",
    "dp20.png",
    "dp21.png"
    // Add more filenames here as you upload them.
];

const parade = document.getElementById("demon-parade");

if (parade) {

    function shuffle(array) {
        const shuffled = [...array];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }

    function getImageCount() {
        const width = window.innerWidth;

        if (width <= 420) {
            return 2;
        }

        if (width <= 700) {
            return 3;
        }

        if (width <= 1000) {
            return 5;
        }

        return 8;
    }

    const shuffledImages = shuffle(paradeImages);
    const imageCount = Math.min(getImageCount(), shuffledImages.length);

    for (let i = 0; i < imageCount; i++) {

        const img = document.createElement("img");

        img.src = "assets/" + shuffledImages[i];
        img.alt = "";
        img.setAttribute("aria-hidden", "true");

        parade.appendChild(img);
    }
}
