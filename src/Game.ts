module Accessibility {
    export class Game extends Phaser.Game {
      constructor() {
        super(800, 600, Phaser.AUTO, 'game-container', null);

        this.state.add('Preloader', Preloader, false);
        this.state.add('Level', Level, false);

        this.state.start('Preloader', true, false);
      }
    }
} 

var game = new Accessibility.Game();