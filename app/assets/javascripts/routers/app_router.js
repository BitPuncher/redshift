Redshift.Routers.App = Backbone.Router.extend({
	routes: {
		"": "game",
	},

	game: function() {
		Redshift.Systems = new Redshift.Collections.Systems();
		Redshift.Systems.fetch({ 'parse': true,
			success: function () {

				//make this not global eventually, when I'm done testing
				stage = new createjs.Stage('canvas');

				// var ctx = document.getElementById('canvas').getContext("2d");
				var gameView = new Redshift.Views.GameView({
					collection: Redshift.Systems,
					stage: stage,
				});

				gameView.render();

				createjs.Ticker.setFPS(30);
				createjs.Ticker.addEventListener('tick', function () {
					if (!createjs.Ticker.getPaused()){
						stage.update();
					}
				});

			},
		});
	},
})