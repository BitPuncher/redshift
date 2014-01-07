Redshift.Views.GameView = Backbone.View.extend({
	initialize: function (options) {
		this.stage = options['stage'];
		this.container = new createjs.Container();
	},

	render: function () {
		var width = this.stage.canvas.width;
		var height = this.stage.canvas.height;

		this.container.x = width / 2;
		this.container.y = height / 2;

		var that = this;

		this.collection.forEach(function (system) {
			var systemView = new Redshift.Views.SystemView({ model: system });
			that.container.addChild(systemView.render());

			var orbitView = new Redshift.Views.OrbitView({ model: system });
			that.container.addChild(orbitView.render());
		});

		this.container.setBounds(-width / 2, -height / 2, width, height);

		this.stage.addChild(this.container);
	}
})