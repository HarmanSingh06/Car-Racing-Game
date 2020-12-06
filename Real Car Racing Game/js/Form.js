class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Dump The ");
    this.title.position(400, 0);

    this.input.position(400 , 400);
    this.button.position(400, 400);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      gameState = 'PLAY';
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
  }
}
