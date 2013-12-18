Redshift.Models.System = Backbone.Model.extend({
	// initialize: function (options) {
	// 	this.system_id = options['system_id'];
	// },

	tick: function(fps) {
		var new_orbit = (this.get('current_orbit') + (5/fps)) % this.get('orbit_duration');
		this.set('current_orbit', new_orbit);
	},

	url: function() {
		return "api/systems/" + this.get('system_id');
	},

	parse: function (data) {
		var that = this;

		this.planets = new Redshift.Collections.Planets(data['planets'],
		 { parse:true, system:that });
		delete data['planets'];

		this.star = new Redshift.Models.Star(data['star']);
		delete data['star'];

		return data;
	}
})