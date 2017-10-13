module Accessibility {
    export class Boot extends Phaser.State {
        create() {
            this.input.maxPointers = 1;
            
            this.state.start('Preloader', true, false);
        }
    }
}