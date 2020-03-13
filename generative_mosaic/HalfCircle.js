class HalfCircle extends Base {

  constructor(x, y, w, h, fillColor,fillColor2, strokeColor) {
    super(x, y, w, h, fillColor, strokeColor);
    
    
    this.diameter = min(w,h);
    this.fillColor2 = fillColor2;
            this.rotation = QUARTER_PI * floor(random(8));    // choose a random degree to rotate the arc 

  }
  
  
  show(){
    if (drawStrokes) {
      stroke(this.strokeColor);
    } else {
      noStroke();
    }
    fill(this.fillColor);
    
    push();
     translate(this.x, this.y);
      rotate(this.rotation);
      arc(0, 0, this.diameter, this.diameter, PI, TWO_PI, PIE);      /// draw first arc
     fill(this.fillColor2);
      arc(0, 0, this.diameter, this.diameter, 0, PI);                /// draw second arc
    pop();
    
  
  }
  
}