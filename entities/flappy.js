class Flappy {
    constructor (game, x, y) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/flappy.png"), 0, 0, 115, 91, 4, 0.2, 0, false, true);
        this.x = x;
        this.y = y;
        this.downVelocity = 0;
        this.upVelocity = -1500;
        this.fallAcc = 562.5;

    };
  
    update() {
        this.downVelocity += this.fallAcc * this.game.clockTick;
        this.y += this.downVelocity*this.game.clockTick;
        if (this.game.keys[" "]) {
            this.y += this.upVelocity*this.game.clockTick;
            this.downVelocity = 0;
        }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.75); 
    };
     

};