Redshift.Views.SystemView = Backbone.View.extend({
	initialize: function(options) {
		this.container = new createjs.Container();
		var radius = this.model.get('diameter') / 2;
		this.container.setBounds(-radius, -radius, radius * 2, radius * 2);
	},

	render: function() {
		this._addSystemShape();
		this.model.planets.forEach( this._addPlanetAndOrbitShapes.bind(this) );

		var starView = new Redshift.Views.StarView({ model: this.model.star });
		this.container.addChild(starView.render());

		this.container.addEventListener('tick', this._adjustOrbit.bind(this) );
		this.container.addEventListener('click', function(event) {
			Redshift.Focus.set(event.target);
		});

		return this.container;
	},

	_adjustOrbit: function (event) {
		var container = event.currentTarget;
		this.model.tick(createjs.Ticker.getFPS());

		container.x = Redshift.Utils.OrbitMath.xOrbit(this.model.get('current_orbit'),
			this.model.get('orbit_duration'), this.model.get('orbit_radius'));

		container.y = Redshift.Utils.OrbitMath.yOrbit(this.model.get('current_orbit'),
			this.model.get('orbit_duration'), this.model.get('orbit_radius'));
	},

	_addPlanetAndOrbitShapes: function (planet) {
		var planetView = new Redshift.Views.PlanetView({ model: planet });
		this.container.addChild(planetView.render());

		var orbitView = new Redshift.Views.OrbitView({ model: planet });
		this.container.addChild(orbitView.render());
	},

	_addSystemShape: function () {
		var systemShape = new createjs.Shape();
		systemShape.graphics.f('black').dc(0, 0, (this.model.get('diameter') / 2) + 5);
		systemShape.name = this.model.get('name');
		systemShape.alpha = .01;

		this.container.addChild(systemShape);
	},
})