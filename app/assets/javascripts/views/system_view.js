Redshift.Views.SystemView = Backbone.View.extend({
	initialize: function(options) {
		this.stage = options['stage'];
		this.system = options['system'];
		this.container = new createjs.Container();
	},

	step: function (fps) {
		this.system.planets.each(function(planet) {
			planet.step(fps);
		});
	},

	draw: function () {
		var that = this;
		this.ctx.clearRect(0,0, this.system.get('diameter'), 
			this.system.get('diameter'));

		this.system.planets.each(function(planet) {
			planet.draw(that.ctx);
		});
	},

	// render: function() {

	// },
})