class EndScreen {
    constructor (game) {
        this.game = game;
        this.sprite = ASSET_MANAGER.getAsset("./res/world.png")
        
        this.scale = 4;

        

    };
  
    update() {
        
    };

    draw(ctx) {
        ctx.drawImage(this.sprite, 3, 259, 113, 58, 50, 270, 113*3, 56*3); 
        
    };
};

class Replay {
    constructor (game) {
        this.game = game;
        this.sprite = ASSET_MANAGER.getAsset("./res/world.png")
        this.reload = false;
        this.scale = 4;
        this.pressed = false;
        this.time = Date.now();
        // var that = this;
        // this.ctx.canvas.addEventListener("click", function (e) {
        //     that.game.camera.loadLevel();
        //     console.log("im loading level");
        // }, false);
        

    };
  
    update() {
        if(Date.now()-this.time > 1000){
            if(!(this.game.keys[" "]) ){
                this.pressed = false;
                
            }
            if(!(this.pressed)){
                if (this.game.keys[" "]) {
                    this.game.camera.loadLevel();
                    this.pressed = true;
                    
                }
            }
        }
        
    };

    draw(ctx) {
        ctx.drawImage(this.sprite, 334, 142, 13, 14, 200, 330, 13*4, 14*4); 
        
    };
};
