"use strict";

$.extend({

	new: function(options) {
		var defaults = {
			element: 'div',
			html: 'Pass me HTML!'
		};

		var o = $.extend(defaults, options);
		var $e = $(document.createElement(o.element));
		$e.attr({
			'class': o.class,
			'id': o.id
		});

		if (typeof o.data === 'object') {
			$e.attr(o.data);
		} else if (typeof o.data === 'string') {
			$e.attr({
				[o.data]: ''
			})
		}

		$e.html(o.html);

		return $e;
	}
	
 });