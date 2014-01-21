(function(root) {
	var Focus = function (topContainer) {
		this._currentFocus = topContainer;
		this._topContainer = topContainer;
	};

	var unfocus = Focus.prototype.unfocus = function () {
		this._topContainer.regX = 0;
		this._topContainer.regY = 0;
		this._topContainer.scaleX = 1;
		this._topContainer.scaleY = 1;
	}

	var set = Focus.prototype.set = function (focus) {
		this._currentFocus = focus;
		this.refocus();
		var scale = this._topContainer.getBounds()['height'] / this._currentFocus.getBounds()['height'];
		this._topContainer.scaleX = scale;
		this._topContainer.scaleY = scale;
	}

	var get = Focus.prototype.get = function () {
		return this._currentFocus;
	}

	var clear = Focus.prototype.clear = function () {
		this.unfocus();
		this._currentFocus = null;
	}

	var refocus = Focus.prototype.refocus = function (scale) {
		var focus = this._currentFocus;
		var adjustment = new createjs.Point();

		while (focus.parent != null) {
			adjustment.x += focus.x;
			adjustment.y += focus.y;
			focus = focus.parent;
		}

		this._topContainer.regX = adjustment.x - this._topContainer.x;
		this._topContainer.regY = adjustment.y - this._topContainer.y;
	}

	var Redshift = root.Redshift = (root.Redshift || {});

	Redshift.Utils = (Redshift.Utils || {});

	Redshift.Utils.Focus = Focus;
})(this)