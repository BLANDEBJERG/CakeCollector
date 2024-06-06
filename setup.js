setup.js
function setup() {
    createCanvas(800, 600);
    // Vælg en tilfældig bagerpige og baggrund
    bagerpige = new Spiller(random(bagerpigeImgs), 100, height - 150);
    backgroundImg = random(backgrounds);
}

function draw() {
    background(backgroundImg);
    bagerpige.vis();
    bagerpige.flyt();

    // Tegn kager og klamme ting
    handleObjects(kager);
    handleObjects(klammeTing);
}

function handleObjects(objects) {
    objects.forEach((obj, index) => {
        obj.vis();
        obj.flyt();
        if (obj.y > height) {
            objects.splice(index, 1);
        }
    });
}
