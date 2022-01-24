class Player {
  constructor(){

    this.index = null; //indice do jogador;
    this.distance = 0; //distância percorrida;
    this.name = null; //nome do jogador;

  }

  //permanece a mesma
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  //permanece a mesma
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //atualizar o nome, a distância do jogador e também a referência do BD
  update(){
    var playerIndex = "players/player" + this.index; //index atualiza valores de um jogador específico no BD
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }


  //obter todas as informações dos jogadores e armazená-las;
  
  //função declarada como estática: não são anexadas a cada objeto da classe;
  //São chamadas pela própria classe em vez de ser chamada pelos objetos da classe;
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players'); //referência PLAYERS (geral), não é anexada a nenhum jogador específico.
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
