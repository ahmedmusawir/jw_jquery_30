(function () {

	$('html').addClass('js');

	contactForm = {

		formContainer: $('#contact'),


		config: {
			effect: 'slideToggle',
			speed: 500
		},
		
		init: function (extConf) {

			$.extend(true, this.config, extConf);

			
			$('<a/>', {
				text: "Push Me",
				'class': "btn btn-danger",
				'id': "myButton",
				'href': "http://google.com" 
			})
			.insertAfter('article')
			.on('click', this.show);
		},

		show: function (event) {

			event.preventDefault();

			var self = contactForm;

			if ( self.formContainer.is(':hidden') ){

				self.close.call(self.formContainer);
				self.formContainer[self.config.effect](self.config.speed);

			}
			
		},

		close: function (event) {
			
			var self = contactForm;
			var $this = $(this);
			var spn = $this.find('span.close').length;
			console.log(spn);

			if ( $this.find('span.close').length )  return; 

			$('<span/>', {
				text: "X",
				'class': "close"
			})
				.prependTo(this)
				.on('click', function (event) {
					$this[self.config.effect](self.config.speed);
				});

		}

	}



})();
