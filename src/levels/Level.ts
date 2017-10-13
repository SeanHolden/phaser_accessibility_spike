module Accessibility {
    export class Level extends Phaser.State {
        create() {
            this.game.stage.backgroundColor = '#943021';

            this.input.onDown.add(this.clicker, this);
        }

        clicker() {
            console.log('clicked the screen');
        }
    }
}