class PipeUp {
    constructor (game, x, y) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/world.png"), 84, 323, 26, 160, 1, 0.2, 0, false, true);
        this.x = 450
        this.y= 550
        this.velocity = { x: -100, y: 0 };
        this.scale = 4;

    };
  
    update() {
        this.x += this.velocity.x*this.game.clockTick;
        if (this.x < -28*this.scale) {
            this.x = 450;
        }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale); 
    };
     

};

class PipeDown {
    constructor (game, x, y) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/world.png"), 54, 323, 28, 160, 1, 0.2, 0, false, true);
        this.x = 450
        this.y= -300
        this.velocity = { x: -100, y: 0 };
        this.scale = 4;

    };
  
    update() {
        this.x += this.velocity.x*this.game.clockTick;
        if (this.x < -28*this.scale) {
            this.x = 450;
        }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale); 
    };
};