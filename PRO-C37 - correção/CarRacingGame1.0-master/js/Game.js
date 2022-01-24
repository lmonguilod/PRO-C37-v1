class Game {
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

  //precisamos concluir a consulta ao banco de dados para obter o playerCount;
  //a função assincrona vai aguardar o valor playerCount e somente então o formulário será criado e exibido;
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value"); //.once obtem 1 vez os dados do playerCount
                           /* ↓ faz a execução da função async*/         
     
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount(); //execulta o getCount() para configurar um ouvinte permanente;
      }
      form = new Form()
      form.display();
    }
  }

  //quando o estado do jogo mudar para 1;
  play(){

    form.hide();

    textSize(30);
    text("Game Start", 120, 100);

    Player.getPlayerInfo(); //pegar o dado dos jogadores

    //exibir os dados na tela
    if(allPlayers !== undefined){
      var display_position = 130;
      //analisar o jogador atual;
      for(var plr in allPlayers){
        if (plr === "player" + player.index)
          fill("red");
        
        else
          fill("black");
        

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, display_position);
      }
    }

    //alterando a distância com a tecla ↑
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50;
      player.update();
    }
  }
}
