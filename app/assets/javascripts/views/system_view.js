Redshift.Views.SystemView = Backbone.View.extend({
	initialize: function(options) {
		this.container = new createjs.Container();
	},

	render: function() {
		this._addSystemShape();
		this.model.planets.forEach( this._addPlanetAndOrbitShapes.bind(this) );

		var starView = new Redshift.Views.StarView({ model: this.model.star });
		this.container.addChild(starView.render());

		this.container.addEventListener('tick', this._adjustOrbit.bind(this) );

		//this bubbles down to all children, which is fine, except for orbit routes
		

		return this.container;
	},

	_adjustOrbit: function (event) {
		if (createjs.Ticker.getPaused()) { return }

		var container = event.currentTarget;
	
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

		var radius = this.model.get('diameter');
		systemShape.graphics.f('black').dc(0, 0, (radius / 2) + 5);
		systemShape.name = this.model.get('name');
		systemShape.alpha = .01;
		systemShape.setBounds(-radius, -radius, radius * 2, radius * 2);
		
		systemShape.addEventListener('click', function(event) {
			Redshift.Focus.set(event.target);
		});

		this.container.addChild(systemShape);
	},
})