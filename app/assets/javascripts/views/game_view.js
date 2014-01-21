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

		var galaxyShape = new createjs.Shape();
		galaxyShape.x = this.container.x;
		galaxyShape.y = this.container.y;
		galaxyShape.graphics.f('black').r(-this.container.x, -this.container.y, width, height);
		// galaxyShape.name = this.model.get('name');
		galaxyShape.alpha = .01;
		galaxyShape.setBounds(-galaxyShape.x, -galaxyShape.y, galaxyShape.x * 2, galaxyShape.y * 2);

		galaxyShape.addEventListener('click', function(event) {
			Redshift.Focus.set(event.target);
		});



		this.stage.addChild(galaxyShape);

		this.stage.addChild(this.container);
	}
})