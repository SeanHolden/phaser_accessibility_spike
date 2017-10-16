module Accessibility {
    export class Preloader extends Phaser.State {
        preload() {
            this.load.image('buttonOff', 'assets/button.png');
            this.load.image('buttonOn', 'assets/buttonDown.png');
        }

        create() {
            this.state.start('Level', true, false);
        }
    }
}