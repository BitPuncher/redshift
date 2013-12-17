Redshift.Views.SystemView = Backbone.View.extend({
	initialize: function(options) {
		this.stage = options['stage'];
		this.system = options['system'];
		this.container = new createjs.Container();
	},

	// step: function (fps) {
	// 	this.system.planets.each(function(planet) {
	// 		planet.step(fps);
	// 	});
	// },

	// draw: function () {
	// 	var that = this;
	// 	this.ctx.clearRect(0,0, this.system.get('diameter'), 
	// 		this.system.get('diameter'));

	// 	this.system.planets.each(function(planet) {
	// 		planet.draw(that.ctx);
	// 	});
	// },

	render: function() {
		this.system.planets.forEach( function(planet) {
			var planet_shape = new createjs.Shape();
			
			planet_shape.graphics.f('black').dc(0, 0, planet.get('diameter') / 2);

			planet_shape.addEventListener('tick', function (event) {
				shape = event.currentTarget;
				shape.planet.tick(createjs.Ticker.getFPS());

				shape.x = Math.cos(((Math.PI * 2 * 
					(shape.planet.get('current_orbit') / shape.planet.get('orbit_duration'))) % 
					(2 * Math.PI))) * shape.planet.get('radius');

				shape.y = Math.sin(((Math.PI * 2 * 
					(shape.planet.get('current_orbit') / shape.planet.get('orbit_duration'))) % 
					(2 * Math.PI))) * shape.planet.get('radius');

			});
		})
	},
})