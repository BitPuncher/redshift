(function(root) {
	var Game = function () {
		var _paused = true;
		var _speed = 1;
		var timers = [];
		var that = this;

		var _setSpeed = function (speed) {
			var validSpeed = false;
			[1, 10, 100].forEach(function (el) {
				if (speed == el) {
					validSpeed = true;
				}
			});

			if (validSpeed) {
				_speed = speed;
			}

			return that.getSpeed();
		};

		var _setPaused = function (bool) {
			_paused = bool;
		};

		this.init = function() {
			//eventually I'll need to be able to pull down user game data.
		}

		this.getSpeed = function() {
			return _speed;
		}

		this.getPaused = function() {
			return _paused;
		};

		this.setSpeed = function(speed) {
			return _setSpeed(speed);
		};

		this.setPaused = function(bool) {
			_setPaused(bool);
		};

		timers.push(window.setInterval(function() {
			if (that.getPaused()) { return; }
			Redshift.Systems.each(function(system) {
				system.planets.each(function(planet) {
					planet.tick(that.getSpeed());
				});
				system.tick(that.getSpeed());
			})
		}, 1000/30));
	};

	var Redshift = root.Redshift = (root.Redshift || {});

	Redshift.Game = new Game();

})(this);