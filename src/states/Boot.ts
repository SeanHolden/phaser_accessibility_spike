module Accessibility {
    export class Boot extends Phaser.State {
        preload() {
            this.input.maxPointers = 1;
        }

        create() {
            this.state.start('Preloader', true, false);
        }
    }
}