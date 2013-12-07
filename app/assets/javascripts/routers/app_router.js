Redshift.Routers.App = Backbone.Router.extend({
	routes: {
		"": "game",
	},

	game: function() {
		Redshift.Terran = new Redshift.Models.System({ 'system_id':1 });
		Redshift.Terran.fetch({ 'parse': true,
			success: function () {
				var ctx = document.getElementById('canvas').getContext("2d");
				var gameView = new Redshift.Views.SystemView({
					"context": ctx,
					"system": Redshift.Terran,
				});

				var fps = 30

				Redshift.Timers['drawTimer'] = window.setInterval(function () {
					gameView.step(fps);
					gameView.draw();
				}, (1000/fps));
				//here create view to start drawing the stuff in canvas
			},
		});
	},
})