function setup() {
  createCanvas( windowWidth , windowHeight ); 
}

function draw() {
  rect( mouseX , mouseY , 300 , 100 );
  fill( 255 , 0 , 0 );
  stroke( 0 , 255 , 0 );
  ellipse( mouseX , mouseY , 250 , 250 );
  fill( 175 , 15 , 170 );
  stroke( 175 , 15 , 170 );

} 


