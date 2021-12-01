var canvas,bg;
var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //Imagen de fondo 
    bg = loadImage("Images/garden.png");

    //Gato acostado
    catImg1 = loadImage("Images/tomOne.png");
    //Gato caminando
    catImg2 = loadAnimation("Images/tomTwo.png","Images/tomThree.png");
    //Gato sentado
    catImg3 = loadAnimation("Images/tomFour.png");

    //Ratón buscando
    mouseImg1 = loadImage("Images/jerryFour.png");
    //Ratón burlandose 
    mouseImg2 = loadAnimation("Images/jerryTwo.png","Images/jerryThree.png");
    //Ratón con queso 
    mouseImg3 = loadAnimation("Images/jerryOne.png");
}

function setup(){
    createCanvas(1000,800);
    
    //Objeto - gato
    cat = createSprite(870,600);
    cat.addImage(catImg1);
    cat.scale = 0.2
     //Objeto - ratón
    mouse = createSprite(200,600);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.2

}

function draw() {
    //Fondo de pantalla 
    background(bg);

    //Cóndición para detactar colisión de los objetos 
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
       cat.velocityX = 0
       cat.addAnimation("catsit", catImg3);
       cat.x = 300;
       cat.scale = 0.2;
       cat.changeAnimation("catsit");
       mouse.addAnimation("ratwon", mouseImg3);
       mouse.scale = 0.2
       mouse.changeAnimation("ratwon");
    }

    drawSprites();
}


function keyPressed(){
    //Condición movimiento de gato - raton burlandose 
    if(keyDown(LEFT_ARROW)) {
        mouse.addAnimation("laugh", mouseImg2);
        mouse.changeAnimation("laugh");

        cat.velocityX = -5;
        cat.addAnimation("catmoving", catImg2);
        cat.changeAnimation("catmoving");
    }
    
}