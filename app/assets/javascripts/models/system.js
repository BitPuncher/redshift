Redshift.Models.System = Backbone.Model.extend({
	// initialize: function (options) {
	// 	this.system_id = options['system_id'];
	// },

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