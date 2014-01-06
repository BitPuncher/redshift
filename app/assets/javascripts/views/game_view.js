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

		this.stage.addChild(this.container);
	}
})