/* =========================================================
   DEMON PARADE
   Randomly selects and displays parade figures
   ========================================================= */

const paradeImages = [
    "/assets/dp01.png",
    "/assets/dp02.png",
    "/assets/dp03.png",
    "/assets/dp04.png",
    "/assets/dp05.png",
    "/assets/dp06.png",
    "/assets/dp07.png",
    "/assets/dp08.png",
    "/assets/dp09.png",
    "/assets/dp10.png",
    "/assets/dp11.png",
    "/assets/dp12.png",
    "/assets/dp13.png",
    "/assets/dp14.png",
    "/assets/dp15.png",
    "/assets/dp16.png",
    "/assets/dp17.png",
    "/assets/dp18.png",
    "/assets/dp19.png",
    "/assets/dp20.png",
    "/assets/dp21.png"
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

    const shuffledImages = shuffle(paradeImages);

    for (let i = 0; i < shuffledImages.length; i++) {

        const img = document.createElement("img");

        img.src = "assets/" + shuffledImages[i];
        img.alt = "";
        img.setAttribute("aria-hidden", "true");

        parade.appendChild(img);
    }
}
