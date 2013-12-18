Redshift.Views.GameView = Backbone.View.extend({
	initialize: function (options) {
		this.stage = options['stage'];
		this.container = new createjs.Container();
	},

	render: function () {
		this.container.x = this.stage.canvas.width / 2;
		this.container.y = this.stage.canvas.height / 2;

		// this.container.addEventListener('tick')

		var that = this;

		this.collection.forEach(function (system) {
			var systemView = new Redshift.Views.SystemView({ model: system });
			that.container.addChild(systemView.render());
		});

		// var star_shape = new createjs.Shape();

		// star_shape.x = 0;
		// star_shape.y = 0;

		// star_shape.star = this.system.star;

		// star_shape.graphics.f('yellow').dc(0, 0, star_shape.star.get('diameter') / 2);

		// star_shape.addEventListener('tick', function (event) {
		// 	//nothing for now	
		// });

		// this.system.star.shape = star_shape;

		// this.container.addChild(star_shape);

		this.stage.addChild(this.container);
	}
})