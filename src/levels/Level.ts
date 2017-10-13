module Accessibility {
    export class Level extends Phaser.State {
        create() {
            this.game.stage.backgroundColor = '#943021';
            const canvas = this.game.canvas;

            const buttonLeft = new Button(this.game, 100, 100, 'buttonOff');;
            const buttonRight = new Button(this.game, 350, 100, 'buttonOff');
            const focusRing = new FocusRing(this.game);

            const linkOne = new Element(this.game, {
                tag: 'a',
                text: 'Left Button',
                attributes: {
                    tabindex: '1',
                    href: '#thingone'
                },
                parent: canvas
            });
            const linkTwo = new Element(this.game, {
                tag: 'a',
                text: 'Right Button',
                attributes: {
                    tabindex: '2',
                    href: '#thingtwo'
                },
                parent: canvas
            });

            focusRing.linkUp(linkOne, buttonLeft);
            focusRing.linkUp(linkTwo, buttonRight);
        }
    }
}