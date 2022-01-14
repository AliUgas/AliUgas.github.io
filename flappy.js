class Flappy {
    constructor (game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./flappy.png"), 0, 0, 115, 91, 4, 0.2, 0, false, true);
    };
  
    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25, 1); 
    };
     

};