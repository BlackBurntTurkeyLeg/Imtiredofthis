

let colors = ['#0000FF', '#FFF3CE', '#3a006b', '#ff0058', '#7a7a7a'];

function getRandomColor( n) {

  //if (n < random(colors.length)){
  
  let randomIndex = floor(random(n));
  //} 
 //let randomIndex = floor(random(colors.length));
  
  return colors[randomIndex];


}