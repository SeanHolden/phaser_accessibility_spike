module Accessibility {
    export class Game extends Phaser.Game {
        constructor() {
            super(800, 600, Phaser.AUTO, gmi.gameContainerId, null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('Level', Level, false);

            this.state.start('Boot', true, false);
        }
    }
} 

const echoStatsLabel = { name: 'accessibilitySpike', value: 'testValue'};
const echoStatsOptions = { statsLabel: echoStatsLabel };
const gmi = getGMI(echoStatsOptions);
const game = new Accessibility.Game();