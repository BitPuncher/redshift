Redshift.Views.PlanetView = Backbone.View.extend({
	initialize: function () {
	},

	render: function () {
		var planetShape = new createjs.Shape();

		var radius = this.model.get('diameter');

		planetShape.graphics.f('black').dc(0, 0, radius / 2);
		planetShape.name = this.model.get('name');
		planetShape.setBounds(-radius, -radius, radius * 2, radius * 2);

		var that = this;

		planetShape.addEventListener('click', function(event) {
			Redshift.Focus.set(event.target);
		});

		planetShape.addEventListener('tick', function (event) {
			if (createjs.Ticker.getPaused()) { return }

			var shape = event.currentTarget;
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