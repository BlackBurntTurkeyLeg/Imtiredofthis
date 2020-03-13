class Triangle extends Base {

  constructor(x, y, w, h, fillColor, strokeColor) {
    super(x, y, w, h, fillColor, strokeColor);


        this.direction = floor(random(4));
  }

show() {
    if (drawStrokes) {
      stroke(this.strokeColor);
    } else {
      noStroke();
    }
    fill(this.fillColor);

  push();
  translate(this.x,this.y);
 beginShape();

    switch (this.direction) {
          case 0:
            vertex(0, 0);      // upper left triangle
            vertex(this.w, 0);
            vertex(this.w, this.h);
            break;
          case 1:
            vertex(this.w, this.h);      // lower left triangle
            vertex(0, this.h);
            vertex(0, 0);
            break;
          case 2:
            vertex(0, 0);      // upper right triangle
            vertex(this.w, 0);
            vertex(0, this.h);
            break;
          case 3:
            vertex(this.w, 0);      // lower right triangle
            vertex(this.w, this.h);
            vertex(0, this.h);
            break;
          }

 endShape();
pop();

}

}
