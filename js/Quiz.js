class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //question.hide();
    background("yellow");
    fill("black");
    textSize(30);
    text("Result of the Quiz",270,40);
    Contestant.getPlayerInfo();
    if(allContestants!==undefined) {
      fill("red") ;
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!*",130,230);
      var displayanswers=220;

      for(var plr in allContestants){
      var correctAns="2";
     if(correctAns===allContestants[plr].answer)
      fill("green");
     else
      fill("red");
     

     
     displayanswers+=30;
     textSize(20);
     text(allContestants[plr].name+":"+allContestants[plr].answer,250,displayanswers);
     }
    }
    
    drawSprites();
  }

  

  }


