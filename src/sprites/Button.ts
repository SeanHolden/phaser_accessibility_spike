module Accessibility {
    export class Button extends Phaser.Button {
        constructor(game: Phaser.Game, x: number, y: number, key: string) {
            super(game, x, y, key);
            this.onInputUp.add(this.toggle, this);

            this.game.add.existing(this);
        }

        toggle() {
            console.log('clicked');
        }
    }
}