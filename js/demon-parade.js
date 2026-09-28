/* =========================================================
   DEMON PARADE
   Randomly selects and displays parade figures
   ========================================================= */

const paradeImages = [
    "/asura/assets/dp01.png",
    "/asura/assets/dp02.png",
    "/asura/assets/dp03.png",
    "/asura/assets/dp04.png",
    "/asura/assets/dp05.png",
    "/asura/assets/dp06.png",
    "/asura/assets/dp07.png",
    "/asura/assets/dp08.png",
    "/asura/assets/dp09.png",
    "/asura/assets/dp10.png",
    "/asura/assets/dp11.png",
    "/asura/assets/dp12.png",
    "/asura/assets/dp13.png",
    "/asura/assets/dp14.png",
    "/asura/assets/dp15.png",
    "/asura/assets/dp16.png",
    "/asura/assets/dp17.png",
    "/asura/assets/dp18.png",
    "/asura/assets/dp19.png",
    "/asura/assets/dp20.png",
    "/asura/assets/dp21.png"
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
