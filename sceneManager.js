class SceneManager {
    constructor(game) {
        this.game = game;
        this.flappy = new Flappy(this.game, 150, 382);
        this.background = new Background(this.game);
        this.time = 0;
        this.loadLevel();
    };
    loadLevel() {
        this.game.addEntity(this.background);
        this.game.addEntity(this.flappy);
        let randHeight = randomInt(450);
        this.game.addEntity(new PipeUp(this.game, 450, 250 + randHeight));
        this.game.addEntity(new PipeDown(this.game, 450, (250 + randHeight) - (250 + 640)))
        this.time = Date.now();
        
        
        
    };
    update() {
        if(Date.now() - this.time > 3000) {
            this.time = Date.now();
            let randHeight = randomInt(450);
            this.game.addEntity(new PipeUp(this.game, 450, 250 + randHeight));
            this.game.addEntity(new PipeDown(this.game, 450, (250 + randHeight) - (250 + 640)))
        }
        
    };
    draw(ctx) {
        ctx.fillStyle = "White";

        ctx.fillStyle = "White";
        ctx.fillText("Press space to jump!", 170, 350, 500);

    };
};