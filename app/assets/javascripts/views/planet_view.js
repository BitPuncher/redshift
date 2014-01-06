Redshift.Views.PlanetView = Backbone.View.extend({
	initialize: function () {
	},

	render: function () {
		var planetShape = new createjs.Shape();

		planetShape.graphics.f('black').dc(0, 0, this.model.get('diameter') / 2);
		planetShape.name = this.model.get('name');

		var that = this;

		planetShape.addEventListener('tick', function (event) {
			shape = event.currentTarget;
			that.model.tick(createjs.Ticker.getFPS());

			// probably should put shape position calculation in the model file

			shape.x = Redshift.Utils.OrbitMath.xOrbit(that.model.get('current_orbit'), 
				that.model.get('orbit_duration'), that.model.get('orbit_radius'));

			shape.y = Redshift.Utils.OrbitMath.yOrbit(that.model.get('current_orbit'), 
				that.model.get('orbit_duration'), that.model.get('orbit_radius'));
		});

		this.model.shape = planetShape;

		return planetShape;
	},
})