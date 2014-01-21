Redshift.Views.TimeControlView = Backbone.View.extend({
	initialize: function (options) {
		this.baseFPS = options.baseFPS;
		this.$el = options.$el
	},

	render: function () {
		this.$el.append('<div class="button time play">></div>');
		this.$el.find('.play').on('click', function(event) {
			if ($(event.target).hasClass('pause')) {
				Redshift.Game.setPaused(true);
			} else {
				Redshift.Game.setPaused(false);
			}

			$(event.target).toggleClass('play');
			$(event.target).toggleClass('pause');
		});

		this.$el.append('<div class="button time 1x">1x</div>');
		this.$el.find('.1x').on('click', function(){
			Redshift.Game.setSpeed(1);
		});

		this.$el.append('<div class="button time 10x">10x</div>');
		this.$el.find('.10x').on('click', function(){
			Redshift.Game.setSpeed(10);
		});

		this.$el.append('<div class="button time 100x">100x</div>');
		this.$el.find('.100x').on('click', function() {
			Redshift.Game.setSpeed(100);
		});

		return this;
	},
})