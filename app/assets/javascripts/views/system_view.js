Redshift.Views.SystemView = Backbone.View.extend({
	initialize: function(options) {
		this.ctx = options['context'];
		this.system = options['system'];
	},

	step: function (fps) {
		this.system.planets.each(function(planet) {
			planet.step(fps);
		});
	},

	draw: function () {
		var that = this;
		this.ctx.clearRect(0,0, 600, 600);

		this.system.planets.each(function(planet) {
			planet.draw(that.ctx);
		});
	},

	// render: function() {

	// },
})