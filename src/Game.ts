module Accessibility {
    export class Game extends Phaser.Game {
      constructor() {
        super(800, 600, Phaser.AUTO, '', null);

        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Level', Level, false);

        this.state.start('Boot', true, false);
      }
    }
} 

var game = new Accessibility.Game();