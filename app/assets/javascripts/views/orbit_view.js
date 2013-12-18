Redshift.Views.OrbitView = Backbone.View.extend({
	initialize: function (options) {

	},

	render: function () {
		var orbit_shape = new createjs.Shape();

		orbit_shape.x = 0;
		orbit_shape.y = 0;
		orbit_shape.graphics.ss(.1).s('black').dc(0, 0, this.model.get('orbit_radius'));

		orbit_shape.addEventListener('tick', function (event) {
		});

		this.model.orbit = orbit_shape;

		return orbit_shape;
	}
})