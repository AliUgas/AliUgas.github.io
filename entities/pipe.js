class PipeUp {
    constructor (game, x, y) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/world.png"), 84, 323, 28, 160, 1, 0.2, 0, false, true);
        this.x = x; //450;
        this.y= y; //550;
        this.velocity = { x: -150, y: 0 };
        this.scale = 4;
        this.updateBB();

    };
    updateBB() {
        this.lastBB = this.BB;

        this.BB = new BoundingBox(this.x, this.y, 26*this.scale, 160*this.scale)
    };
  
    update() {
        this.x += this.velocity.x*this.game.clockTick;
        this.updateBB();
        
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale); 
        if(document.getElementById("debug").checked){
            this.BB.draw(ctx, 'red');
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x , this.BB.y , this.BB.width, this.BB.height);
        }
    };
     

};

class PipeDown {
    constructor (game, x, y) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/world.png"), 56, 323, 28, 160, 1, 0.2, 0, false, true);
        this.x = x; //450
        this.y= y; //-300
        this.velocity = { x: -150, y: 0 };
        this.scale = 4;

        this.updateBB();

    };
    updateBB() {
        this.lastBB = this.BB;

        this.BB = new BoundingBox(this.x, this.y, 26*this.scale, 160*this.scale)
    };
  
    update() {
        this.x += this.velocity.x*this.game.clockTick;
        this.updateBB();
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale); 
        if(document.getElementById("debug").checked){
            this.BB.draw(ctx, 'red');
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x , this.BB.y , this.BB.width, this.BB.height);
        }
    };
};