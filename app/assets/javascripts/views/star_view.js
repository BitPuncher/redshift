Redshift.Views.StarView = Backbone.View.extend({
	initialize: function () {
	},

	render: function () {
		var starShape = new createjs.Shape();

		var radius = this.model.get('diameter');

		starShape.graphics.f('yellow').dc(0, 0, this.model.get('diameter') / 2);
		starShape.name = this.model.get('name');
		starShape.setBounds(-radius, -radius, radius * 2, radius * 2);

		starShape.addEventListener('tick', function (event) {

		});

		return starShape;
	},
})