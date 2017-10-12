module Accessibility {
    export class Level extends Phaser.State {
        buttonLeft: Phaser.Sprite;
        buttonRight: Phaser.Sprite;
        focusRing: FocusRing;
        linkOne: Accessibility.Element
        linkTwo: Accessibility.Element;

        create() {
            this.buttonLeft = this.game.add.sprite(100, 100, 'buttonOff');
            this.buttonRight = this.game.add.sprite(350, 100, 'buttonOff');
            this.focusRing = new FocusRing(this.game);

            const canvas = this.game.canvas;

            this.linkOne = new Accessibility.Element(this.game, {
                tag: 'a',
                text: 'Left Button',
                attributes: {
                    tabindex: '1',
                    href: '#thingone'
                },
                parent: canvas,
                focusOnSprite: this.buttonLeft
            }, this.focusRing);

            this.linkTwo = new Accessibility.Element(this.game, {
                tag: 'a',
                text: 'Right Button',
                attributes: {
                    tabindex: '2',
                    href: '#thingtwo'
                },
                parent: canvas,
                focusOnSprite: this.buttonRight
            }, this.focusRing);

            this.linkOne.create();
            this.linkTwo.create();
        }
    }
}