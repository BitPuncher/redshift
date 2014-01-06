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
		this._lastAdjustX = null;
		this._lastAdjustY = null;
	}

	var refocus = Focus.prototype.refocus = function () {
		var object = this._currentFocus;
		if (object == null) { return };

		var adjustX = 0;
		var adjustY = 0;

		while (object.parent.parent != null) {
			adjustX -= object.x;
			adjustY -= object.y;
			object = object.parent;
		}

		object.x += (adjustX - (this._lastAdjustX || 0));
		object.y += (adjustY - (this._lastAdjustY || 0));

		this._lastAdjustX = adjustX;
		this._lastAdjustY = adjustY;
	}

	var Redshift = root.Redshift = (root.Redshift || {});

	Redshift.Utils = (Redshift.Utils || {});

	Redshift.Utils.Focus = Focus;
})(this)