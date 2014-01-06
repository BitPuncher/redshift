Redshift.Views.SystemView = Backbone.View.extend({
	initialize: function(options) {
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

		// var orbit_shapes = new createjs.Container();
		// var planet_shapes = new createjs.Container();
		var shapes = new createjs.Container();

		this.model.planets.forEach( function(planet) {
			var planetView = new Redshift.Views.PlanetView({ model: planet });
			// planet_shapes.addChild(planetView.render());
			shapes.addChild(planetView.render());

			var orbitView = new Redshift.Views.OrbitView({ model: planet });
			// orbit_shapes.addChild(orbitView.render());
			shapes.addChild(orbitView.render());
		});

		// this.container.addChild(orbit_shapes);
		// this.container.addChild(planet_shapes);
		this.container.addChild(shapes);

		// something about suns

		// something about system orbit

		var that = this;

		this.container.addEventListener('tick', function(event) {
			var container = event.currentTarget;
			that.model.tick(createjs.Ticker.getFPS());

			container.x = Redshift.Utils.OrbitMath.xOrbit(that.model.get('current_orbit'),
				that.model.get('orbit_duration'), that.model.get('orbit_radius'));

			container.y = Redshift.Utils.OrbitMath.yOrbit(that.model.get('current_orbit'),
				that.model.get('orbit_duration'), that.model.get('orbit_radius'));
		});

		return this.container;
	},
})