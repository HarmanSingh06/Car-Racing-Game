class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,5);
    car2 = createSprite(300,5);
    car3 = createSprite(500,5);
    car4 = createSprite(700,5);
    cars = [car1, car2, car3, car4];

    car1.addImage("Image of Car1", car1Img);
    car2.addImage("Image of Car2", car2Img);
    car3.addImage("Image of Car3", car3Img);
    car4.addImage("Image of Car4", car4Img)
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
  

    if(allPlayers !== undefined){
      //var display_position = 100;
      background(groundImg);
      //index of the array
      var index = 0;
      //imageMode(CENTER);
      image(trackImg,0,-displayHeight*2,displayWidth,displayHeight*13);

      //x and y position of the cars
      var x = 150;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        console.log(plr)
        //position the cars a little away from each other in x direction
        x = x + 250;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          //cars[index - 1].shapeColor = "red";
          textSize(13);
          stroke("White");
          strokeWeight(3);
          text(player.name, x-20, y+80);
          
          fill("red")
          ellipse(x,y,60,60);
          

          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          
        }

       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 2200){
      gameState = 2;
      player.rank +=1;
      Player.updateCarsAtEnd(player.rank);
      
    }

console.log(player.distance);
    drawSprites();
  }
  end(){
    console.log("Game Ended");
    console.log(player.rank);
    }
  }


