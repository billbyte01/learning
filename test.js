;(function () {
	document.querySelector('body').addEventListener('mousedown', function (e) {
		var emailValue = document.querySelector('.newsletter__email-field')
		var submitButton = document.querySelector(
			'#wpcf7-f156386-o1 > form > div.newsletter > div.newsletter__submit > input'
		)
		var subscriptionCheckbox = document.querySelector(
			'.newsletter__acceptance-field'
		)
		var eventPath = e.path || e.composedPath()
		var userAgent = navigator.userAgent
		if (localStorage.getItem('sub') === null) {
			document.addEventListener('keydown', (event) => {
				if (event.key === 'Enter') {
					if (emailValue) {
						_edrone.email = emailValue.value
						_edrone.action_type = 'subscribe'
						_edrone.customer_tags = 'Footer'
						if (subscriptionCheckbox && subscriptionCheckbox.checked) {
							_edrone.init()
							localStorage.setItem('sub', '1')
						}
					}
				}
			})
			if (eventPath.includes(submitButton)) {
				if (emailValue) {
					_edrone.email = emailValue.value
					_edrone.action_type = 'subscribe'
					_edrone.customer_tags = 'Footer'
					if (subscriptionCheckbox && subscriptionCheckbox.checked) {
						_edrone.init()
						localStorage.setItem('sub', '1')
					}
				}
			}
		} else {
			setTimeout(function () {
				localStorage.removeItem('sub')
			}, 5000)
		}
	})
})()
