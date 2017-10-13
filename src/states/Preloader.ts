module Accessibility {
    export class Preloader extends Phaser.State {
        create() {
            this.state.start('Level', true, false);
        }
    }
}