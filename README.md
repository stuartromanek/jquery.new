# jQuery.new

Utility that returns a new jQuery element ready 2 go

` var $e = $.new(settings) `

## Settings

```
settings: {
	tag: 'h2', // default is div
	class: 'app-subhead',
	id: 'subheading',
	data: 'data-something',
	data: { data-something: 'true' }, // or pass an attribute key/value
	html: 'The contents of your element's innerHTML!'
}
```