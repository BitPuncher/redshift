(function(root) {
	var Focus = function (centerX, centerY) {
		this._currentFocus = null;
		this._lastX = null;
		this._lastY = null;

		this._unfocus = function () {
			var object = this._currentFocus;
			if (object == null) { return };

			while (object.parent.parent != null) {
				object = object.parent;
			}

			object.x = centerX;
			object.y = centerY;
		}
	};

	var set = Focus.prototype.set = function (focus) {
		this.clear();
		this._currentFocus = focus;
	}

	var get = Focus.prototype.get = function () {
		return this._currentFocus;
	}

	var clear = Focus.prototype.clear = function () {
		this._unfocus();
		this._currentFocus = null;
		this._lastX = null;
		this._lastY = null;
	}

	var refocus = Focus.prototype.refocus = function () {
		var object = this._currentFocus;
		if (object == null) { return };

		var adjustX = object.x - (this._lastX || 0);
		var adjustY = object.y - (this._lastY || 0);
		this._lastX = object.x;
		this._lastY = object.y;

		while (object.parent != null) {
			object.x -= adjustX;
			object.y -= adjustY;
			object = object.parent;
		}
	}

	var Redshift = root.Redshift = (root.Redshift || {});

	Redshift.Utils = (Redshift.Utils || {});

	Redshift.Utils.Focus = Focus;
})(this)