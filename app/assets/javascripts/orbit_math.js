(function(root) {
	var OrbitMath = root.OrbitMath = (root.OrbitMath || {});

	var xOrbit = OrbitMath.xOrbit = function (current_orbit, orbit_duration, radius) {
		return Math.cos(((Math.PI * 2 * (current_orbit / orbit_duration)) % 
			(2 * Math.PI))) * radius;
	};

	var yOrbit = OrbitMath.yOrbit = function (current_orbit, orbit_duration, radius) {
		return Math.sin(((Math.PI * 2 * 
			(current_orbit / orbit_duration)) % 
			(2 * Math.PI))) * radius;
	};
})(this);