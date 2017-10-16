module Accessibility {
    interface ElementParams {
       tag: string,
       text: string, 
       attributes: any,
       parent: HTMLElement
    }

    export class Element {
        game: Phaser.Game;
        params: ElementParams;
        el: HTMLElement;

        constructor(game: Phaser.Game, params: ElementParams) {
            this.game = game;
            this.params = params;
            this.create();
        }

        create() {
            const el = document.createElement(this.params.tag);
            const elText = document.createTextNode(this.params.text);
            for (let key in this.params.attributes) {
                el.setAttribute(key, this.params.attributes[key]); 
            }
            el.appendChild(elText);

            this.params.parent.appendChild(el);
            this.el = el;
        }
    }
}