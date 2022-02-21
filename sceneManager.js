class SceneManager {
    constructor(game) {
        this.game = game;
        this.time = 0;
        this.playing = true;
        this.game.camera = this;
        this.loadLevel();
    };
    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };
    loadLevel() {
        this.clearEntities();
        console.log(this.game.entities);
        this.playing = true;
        this.time = Date.now();
        this.game.camera = this;
        this.game.addEntity(new Flappy(this.game, 150, 382)); 
        let randHeight = randomInt(450);
        this.game.addEntity(new PipeUp(this.game, 450, 250 + randHeight));
        this.game.addEntity(new PipeDown(this.game, 450, (250 + randHeight) - (250 + 640)))
        this.time = Date.now();
        this.game.addEntity(new Background(this.game));
        
        
        
    };
    update() {
        
        
    };
    draw(ctx) {
        ctx.fillStyle = "White";

        ctx.fillStyle = "White";
        ctx.fillText("Press space to jump!", 170, 350, 500);

    };
};