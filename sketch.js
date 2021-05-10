//Create variables here
var database ;
var dog , dogImage,  happydog , happydogimg, foodS ,foodStock ;


function preload()

{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(700, 700);
  
dog = createSprite(350,400 , 50 , 50)
dog.addImage(dogImage)
dog.scale="0.2"

database= firebase.database()
foodStock = database.ref('Food')
foodStock.on("value",readStock)


}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)) {
writeStock(foodS)
dog.changeImage(happydogimg)

}





  drawSprites();
  //add styles here
  fill("white")
text("PRESS UP ARROW KEY TO FEED ROBBY DOGFOOD" , 50, 100)





  

}


//var x = foodStock;

function readStock(data) {
foodS= data.val();



}

function writeStock(x){

if(x<=0){
x = 0
}
else{
x = x-1


}




database.ref('/').update({

Food:x


})


}



