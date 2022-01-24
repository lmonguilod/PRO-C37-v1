class Form {

  //adicionar como propriedade: input, button, greeting;
  constructor() {

    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');

  }

  //quando o estado do jogo mudar a função hide será chamada para ocultar os elementos;
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);

    //LEMBRETE: this se refere ao objeto que está chamando a função. Ou seja, se refere a um objeto de formulário.
    //Função de seta vincula a função ao objeto orignal que a chama;
    this.button.mousePressed(()=>{  //garante que this permaneça vinculado ao objeto de formulário;

      this.input.hide();  //lembrar do THIS.
      this.button.hide(); //lembrar do THIS.
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name); //lembrar do THIS. 
      this.greeting.position(130, 100);

    });
    
  }
}
