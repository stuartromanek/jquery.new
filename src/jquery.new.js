"use strict";

$.extend({

	new: function(options) {
		var defaults = {
			tag: 'div'
		};

		var o = $.extend(defaults, options);
		var $e = $(document.createElement(o.tag));
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