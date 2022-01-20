class Background {
    constructor (game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/world.png"), 146, 1, 140, 255, 1, 0.2, 0, false, true);
    };
  
    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 0, 0, 3); 
    };
     

};