let tileWidth = 50;
let tileHeight = 50;

let tiles = [];
let drawStrokes = false;

function setup() {
createCanvas(windowWidth, windowHeight);

  let strokeColorGlobal = color('#ff6600');

  for (let y = 0; y < height; y += tileHeight) {
    for (let x = 0; x < width; x += tileWidth) {

      let b = new Base(x, y, tileWidth, tileHeight, getRandomColor(2), strokeColorGlobal);
    tiles.push(b);



          let t = new Triangle(x, y, tileWidth, tileHeight, getRandomColor(1), strokeColorGlobal);
        //  if (random(1) > 0.01)
           tiles.push(t); // 50 % chance to have a  object


    var   mult = random(8) + 1; // create a variable to add some randomness to the diameter of the circles

      var c = new Circle(x + tileWidth / 2, y + tileHeight / 2, int(tileWidth / mult), int(tileHeight / mult), getRandomColor(2), strokeColorGlobal);
      if (random(1) > 0.2) tiles.push(c); // e 50 % chance to have a Circle object



       mult = random(5) + 1; // create a variable to add some randomness to the diameter of the circles

      var hc = new HalfCircle(x + tileWidth / 2, y + tileHeight / 2, int(tileWidth / mult), int(tileHeight / mult), getRandomColor(2),getRandomColor(2), strokeColorGlobal);
      if (random(1) > 0.5) tiles.push(hc); // e 50 % chance to have a Circle object





    }
  }

}

function draw() {
  background(220);

  for (let b of tiles) {
    b.show();
  }
}


function windowResized() {
setup();
}
