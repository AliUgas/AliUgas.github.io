class Flappy {
    constructor (game, x, y) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/world.png"), 3, 491, 17, 12, 3, 0.2, 11, false, true);
        this.x = x;
        this.y = y;
        this.downVelocity = 0;
        this.upVelocity = -10000;
        this.fallAcc = 562.5;
        this.jump = false;
        this.dead = false;
        this.time = Date.now();
        this.updateBB();

    };
    die() {
        this.dead = true;
        this.game.entities.unshift(new EndScreen(this.game));
        this.game.entities.unshift(new Replay(this.game));
        this.game.camera.playing = false;
    };
    updateBB() {
        this.lastBB = this.BB;

        this.BB = new BoundingBox(this.x, this.y, 17*4, 12*4)
    };
  
    update() {
        
        if(!(this.game.keys[" "]) ){
            this.jump = false;
            console.log("jump enabled");
        }
        if(!(this.jump)&& !(this.dead)){
            if (this.game.keys[" "]) {
                this.downVelocity = 0;
                this.y += this.upVelocity*this.game.clockTick;
                
                this.jump = true;
                console.log("jump disabled");
        }
        }
        this.downVelocity += this.fallAcc * this.game.clockTick;
        this.y += this.downVelocity*this.game.clockTick;
        this.updateBB();
        var that = this;
        this.game.entities.forEach(function (entity) {
            if(entity instanceof PipeUp && that.BB.exteriorcollide(entity.BB) && !(that.dead)) {
                if(entity.BB.left < that.BB.right){
                    that.die();
                }
                else if(entity.BB.right > that.BB.left){
                   that.die();
                }
                else if(entity.BB.top < that.BB.bottom){
                    that.die();
                }
                else if(entity.BB.bottom > that.BB.top){
                    that.die();  
                }
                
            } 
            if(entity instanceof PipeDown && that.BB.exteriorcollide(entity.BB)&& !(that.dead)) {
                if(entity.BB.left < that.BB.right){
                    that.die();
                }
                else if(entity.BB.right > that.BB.left){
                   that.die();
                }
                else if(entity.BB.top < that.BB.bottom){
                    that.die();
                }
                else if(entity.BB.bottom > that.BB.top){
                    that.die();  
                }
                
            } 
        });
        if(Date.now() - this.time > 3000 && this.game.camera.playing) {
            this.time = Date.now();
            let randHeight = randomInt(450);
            
            this.game.entities.unshift(new PipeUp(this.game, 450, 250 + randHeight));
            this.game.entities.unshift(new PipeDown(this.game, 450, (250 + randHeight) - (250 + 640)));
            
        }
    };
    

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 4); 
        if(document.getElementById("debug").checked){
            this.BB.draw(ctx, 'red');
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x , this.BB.y , this.BB.width, this.BB.height);
        }
    };
     

};