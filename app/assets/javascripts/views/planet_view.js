Redshift.Views.PlanetView = Backbone.View.extend({
	initialize: function () {
	},

	render: function () {
		planet_shape = new createjs.Shape();

		planet_shape.graphics.f('black').dc(0, 0, this.model.get('diameter') / 2);

		var that = this;

		planet_shape.addEventListener('tick', function (event) {
			shape = event.currentTarget;
			that.model.tick(createjs.Ticker.getFPS());

			// probably should put shape position calculation in the model file

			shape.x = OrbitMath.xOrbit(that.model.get('current_orbit'), 
				that.model.get('orbit_duration'), that.model.get('orbit_radius'));

			shape.y = OrbitMath.yOrbit(that.model.get('current_orbit'), 
				that.model.get('orbit_duration'), that.model.get('orbit_radius'));
		});

		this.model.shape = planet_shape;

		return planet_shape;
	},
})