sketch.js
let bagerpigeImgs = [], kager = [], klammeTing = [], backgrounds = [];
let bagerpige, backgroundImg;
let kagerObjects = [], klammeObjects = [];

function preload() {
    // Indlæs bagerpige variationer
    bagerpigeImgs.push(loadImage('path/to/Bagerpige.svg'));
    bagerpigeImgs.push(loadImage('path/to/Bagerpige1.svg'));
    bagerpigeImgs.push(loadImage('path/to/Bagerpige2.svg'));

    // Indlæs kagebilleder
    for (let i = 1; i <= 26; i++) {
        kager.push(loadImage(`path/to/kage${i}.svg`));
    }

    // Indlæs billeder for klamme ting
    klammeTing.push(loadImage('path/to/bad5.svg'));
    klammeTing.push(loadImage('path/to/bad6.svg'));
    klammeTing.push(loadImage('path/to/bad7.svg'));
    klammeTing.push(loadImage('path/to/banana.svg'));

    // Indlæs baggrunde
    backgrounds.push(loadImage('path/to/Background.svg'));
    backgrounds.push(loadImage('path/to/Background2.svg'));
}

function setup() {
    createCanvas(800, 600);
    // Vælg en tilfældig bagerpige og baggrund
    bagerpige = new Spiller(random(bagerpigeImgs), 100, height - 150);
    backgroundImg = random(backgrounds);

    // Tilføjelsesfunktion til at generere spilobjekter
    setInterval(() => {
        let kage = new Kage(random(kager), random(width), -50);
        let klam = new Kage(random(klammeTing), random(width), -50);
        kagerObjects.push(kage);
        klammeObjects.push(klam);
    }, 1500);
}

function draw() {
    background(backgroundImg);
    bagerpige.vis();
    bagerpige.flyt();

    handleObjects(kagerObjects);
    handleObjects(klammeObjects);
}

function handleObjects(objects) {
    for (let i = objects.length - 1; i >= 0; i--) {
        objects[i].vis();
        objects[i].flyt();
        if (objects[i].y > height) {
            objects.splice(i, 1);
        }
    }
}

class Spiller {
    constructor(img, x, y) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.bredde = 80;
        this.højde = 80;
    }

    flyt() {
        if (keyIsDown(LEFT_ARROW) && this.x > 0) {
            this.x -= 5;
        }
        if (keyIsDown(RIGHT_ARROW) && this.x < width - this.bredde) {
            this.x += 5;
        }
    }

    vis() {
        image(this.img, this.x, this.y, this.bredde, this.højde);
    }
}

class Kage {
    constructor(img, x, y) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.speed = 2;
    }

    flyt() {
        this.y += this.speed;
    }

    vis() {
        image(this.img, this.x, this.y, this.size, this.size);
    }
}
