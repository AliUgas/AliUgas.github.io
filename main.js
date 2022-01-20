const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./res/flappy.png");
ASSET_MANAGER.queueDownload("./res/world.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new SceneManager(gameEngine));
	gameEngine.addEntity(new Flappy(gameEngine));
	gameEngine.addEntity(new PipeUp(gameEngine));
	gameEngine.addEntity(new PipeDown(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));
	
	gameEngine.init(ctx);
	ctx.imageSmoothingEnabled = false;


	gameEngine.start();
});
