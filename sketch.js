var n1, n2;
var num1, num2;

var b1, b2;

function setup() {
  createCanvas(400, 400);

  num1 = createInput();
  num1.position(20, 50);

  num2 = createInput();
  num2.position(20, 100);

  //n1=parseInt(num1.value());
  //n2=parseInt(num2.value());

  b1 = createButton("ADD");
  b1.position(20, 150);
  b1.mousePressed(myadd);
}

function draw() {
  background(220);

  text("Enter number 1", 20, 40);
  text("Enter number 2", 20, 90);
}

function myadd() {
  n1 = parseInt(num1.value());
  n2 = parseInt(num2.value());

  console.log(n1 + n2);
}

/*var n1, n2;
var b1, b2, b3, b4;
var num1, num2;
function setup() {
  createCanvas(400, 400);

  num1 = createInput();
  num1.position(5, 60);

  num2 = createInput();
  num2.position(200, 60);

  b1 = createButton("ADD");
  b1.position(10, 200);
  b1.mousePressed(add);

  b2 = createButton("Multiply");
  b2.position(100, 200);
  b2.mousePressed(mul);

  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(200, 10, 200);
  text("Number 1", 70, 50);
  text("Number 2", 270, 50);
}
*/
