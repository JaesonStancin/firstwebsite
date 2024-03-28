function setup(){
createCanvas(800,700);

}

function draw(){
    tri(width/2, 0, width, height);
}

function tri(x, y, w, h){

trinagle(x, y, x+w/2, y+h, x-w/2, y+h);
tri(x, y, w/2, h/2);
}