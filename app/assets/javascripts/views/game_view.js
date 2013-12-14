Redshift.Views.GameView = Backbone.View.extend({
	initialize: function (options) {
		this.system = options['system'];
		this.stage = options['stage'];
		this.container = new createjs.Container();
	},

	render: function () {
		this.container.name = this.system.get('name');
		this.container.x = this.stage.canvas.width / 2;
		this.container.y = this.stage.canvas.height / 2;

		// this.container.addEventListener('tick')

		var that = this;
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

			planet_shape.planet = planet;

			that.container.addChild(planet_shape);

			var planet_orbit = new createjs.Shape();
			

			planet_orbit.x = 0;
			planet_orbit.y = 0;
			planet_orbit.graphics.ss(.1).s('black').dc(0, 0, planet.get('radius'));

			planet_orbit.addEventListener('tick', function (event) {
				
			});

			planet_orbit.planet = planet;

			that.container.addChild(planet_orbit);

			planet.orbit_shape = planet_orbit;
			planet.shape = planet_shape;
		});

		var star_shape = new createjs.Shape();
		// star_shape.graphics.arc(0, 0, this.system.star.get('diameter') / 2, 0, Math.PI * 2);

		star_shape.x = 0;
		star_shape.y = 0;

		star_shape.star = this.system.star;

		star_shape.graphics.f('yellow').dc(0, 0, star_shape.star.get('diameter') / 2);

		star_shape.addEventListener('tick', function (event) {
			//nothing for now	
		});

		this.system.star.shape = star_shape;

		this.container.addChild(star_shape);

		this.stage.addChild(this.container);
	}
})