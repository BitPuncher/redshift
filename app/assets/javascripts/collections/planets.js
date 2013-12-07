Redshift.Collections.Planets = Backbone.Collection.extend({
	model: Redshift.Models.Planet,
	url: "system/:system_id/planets",
})