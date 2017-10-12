module Accessibility {
    export class FocusRing extends Phaser.Graphics {
        constructor(game: Phaser.Game) {
            super(game);

            game.add.existing(this);
        }

        focusOn(sprite: Phaser.Sprite) {
            this.clear();
            this.lineStyle(2, 0x0000FF, 1);
            this.drawRect(sprite.x-5, sprite.y-5, sprite.width+10, sprite.height+10);
        }
    }
}