Redshift.Models.Planet = Backbone.Model.extend({
	tick: function(fps) {
		var new_orbit = (this.get('current_orbit') + (5/fps)) % this.get('orbit_duration');
		this.set('current_orbit', new_orbit);
	},

	parse: function (data, options) {
		this.system = options['system'];
		return data;
	},
})