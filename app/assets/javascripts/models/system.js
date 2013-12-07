Redshift.Models.System = Backbone.Model.extend({
	// initialize: function (options) {
	// 	this.system_id = options['system_id'];
	// },

	url: function() {
		return "api/systems/" + this.get('system_id');
	},

	parse: function (response) {
		this.planets = new Redshift.Collections.Planets(response['planets']);
		delete response['planets'];

		this.star = new Redshift.Models.Star(response['star']);
		delete response['star'];

		return response;
	}
})