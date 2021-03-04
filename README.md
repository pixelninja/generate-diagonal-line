# Generate diagonal line

A javascript function that generates a diagonal line through an element


## Usage

`getDiagonal();`

Requires at least one element on the page with a class `line__diagonal`.

Styling is up to you.

### Optional

I would recommend adding a resize callback to update the angle when the user changes browser size.

For example (requires jQuery):

````
$(window).on('resize', () => {
	clearTimeout($.data(this, 'resizeTimer'));
	$.data(this, 'resizeTimer', setTimeout(function() {
		getDiagonal();
	}, 100));
});
````
