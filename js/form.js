(function () {

	$('html').addClass('js');

	contactForm = {

		formContainer: $('#contact'),
		
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

			var $self = contactForm;

			// $self.close();
			
			$self.close.call($self.formContainer);

			$self.formContainer.show();

			// $self.call.close();
			
		},

		close: function (event) {
			
			$('<span/>', {
				text: "X",
				'class': "close"
			})
				.prependTo(this);

			// console.log(this);
		}

	}



})();
