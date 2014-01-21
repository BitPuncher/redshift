Redshift.Models.Planet = Backbone.Model.extend({
	tick: function(speed) {
		var new_orbit = (this.get('current_orbit') + (1/6*speed)) % this.get('orbit_duration');
		this.set('current_orbit', new_orbit);
	},

	parse: function (data, options) {
		this.system = options['system'];
		return data;
	},
})