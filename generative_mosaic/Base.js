class Base {


  constructor(x, y, w, h, fillColor, strokeColor) {

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;

  }

  show() {
    if (drawStrokes) {
      stroke(this.strokeColor);
    } else {
      noStroke();
    }
    fill(this.fillColor);
    rect(this.x, this.y, this.w, this.h);


  }


}