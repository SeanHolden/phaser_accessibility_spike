module Accessibility {
    interface ElementParams {
       tag: string,
       text: string, 
       attributes: any,
       parent: HTMLElement,
       focusOnSprite?: Phaser.Sprite
    }

    export class Element {
        game: Phaser.Game;
        params: ElementParams;
        focusRing: FocusRing;

        constructor(game: Phaser.Game, params: ElementParams, focusRing?: FocusRing) {
            this.game = game;
            this.params = params;
            if(focusRing) {
                this.focusRing = focusRing;
            }
        }

        create() {
            const el = document.createElement(this.params.tag);
            const elText = document.createTextNode(this.params.text);
            for (let key in this.params.attributes) {
                el.setAttribute(key, this.params.attributes[key]); 
            }
            el.appendChild(elText);

            this.params.parent.appendChild(el);
            if (this.params.focusOnSprite) {
                const self = this;
                const sprite = this.params.focusOnSprite;

                el.addEventListener("focus", function() {
                    self.focusRing.focusOn(sprite);
                });
            }
        }
    }
}