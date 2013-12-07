Redshift.Models.Planet = Backbone.Model.extend({
	draw: function(ctx) {
		ctx.strokeStyle = 'black';
		ctx.beginPath();

		ctx.arc(
			this.system.get('diameter') / 2,
			this.system.get('diameter') / 2,
			this.get('radius'),
			0,
			2 * Math.PI,
			false);

		ctx.stroke();

		ctx.beginPath();

		ctx.arc(
			this.system.get('diameter') / 2 + Math.cos(((Math.PI * 2 * (this.get('current_orbit') / this.get('orbit_duration'))) % (2 * Math.PI))) * this.get('radius'),
			this.system.get('diameter') / 2 + Math.sin(((Math.PI * 2 * (this.get('current_orbit') / this.get('orbit_duration'))) % (2 * Math.PI))) * this.get('radius'),
			this.get('diameter') / 2,
			0,
			2 * Math.PI,
			false);
		ctx.stroke();
	},

	step: function(fps) {
		var new_orbit = this.get('current_orbit') + (5/fps);
		this.set('current_orbit', new_orbit);
	},

	parse: function (data, options) {
		this.system = options['system'];
		return data;
	},
})