(function () {

	$('html').addClass('js');

	contactForm = {

		formContainer: $('#contact'),

		config: {
			effect: 'slideToggle',
			speed: 500
		},
		
		init: function (conf) {
			
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
			// console.log('showing ...');
			event.preventDefault();

			var self = contactForm;

			self.close.call(self.formContainer);

			// console.log(self.config.speed);	
			self.formContainer[self.config.effect](self.config.speed);
			
		},

		close: function (event) {
			
			var self = contactForm;
			var $this = $(this);
			var spn = $this.find('span.close');
			// console.log(spn);

			// if ('span.close') { return; }

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
