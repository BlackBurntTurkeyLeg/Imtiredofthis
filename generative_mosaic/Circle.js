class Circle extends Base {

  constructor(x, y, w, h, fillColor, strokeColor) {
    super(x, y, w, h, fillColor, strokeColor);
    
    
    this.diameter = min(w,h);
    
  }
  
  show() {
    if (drawStrokes) {
      stroke(this.strokeColor);
    } else {
      noStroke();
    }
    fill(this.fillColor);
    
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }
}








