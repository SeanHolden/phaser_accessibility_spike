module Accessibility {
    export class FocusRing extends Phaser.Graphics {
        constructor(game: Phaser.Game) {
            super(game);

            game.add.existing(this);
        }

        focusOn(sprite: Phaser.Sprite | Phaser.Button) {
            this.clear();
            this.lineStyle(2, 0x0000FF, 1);
            this.drawRect(sprite.x-5, sprite.y-5, sprite.width+10, sprite.height+10);
        }

        linkUp(accessibilityElement: Element, sprite: Button) {
            const self = this;

            accessibilityElement.el.addEventListener("focus", function () {
                self.focusOn(sprite);
            });

            accessibilityElement.el.addEventListener("click", function() {
                sprite.toggle();
            });
        }
    }
}