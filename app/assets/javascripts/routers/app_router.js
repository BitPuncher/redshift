Redshift.Routers.App = Backbone.Router.extend({
	routes: {
		"": "game",
	},

	game: function() {
		var baseFPS = 30;

		Redshift.Systems = new Redshift.Collections.Systems();
		Redshift.Systems.fetch({ 'parse': true,
			success: function () {

				//make this not global eventually, when I'm done testing
				stage = new createjs.Stage('canvas');

				var gameView = new Redshift.Views.GameView({
					collection: Redshift.Systems,
					stage: stage,
				});

				gameView.render();
				Redshift.Focus = new Redshift.Utils.Focus(gameView.container);

				createjs.Ticker.setFPS(baseFPS);
				createjs.Ticker.addEventListener('tick', function (event) {
					stage.update();
					if (Redshift.Focus.get()) {
						Redshift.Focus.refocus();
					}
				});

			},
		});

		var timeControls = new Redshift.Views.TimeControlView({ $el: $('#timeBox'), baseFPS: baseFPS });
		timeControls.render();
	},
})