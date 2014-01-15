$(function(){
	var $nav = $('#main-header nav'),
		$select = $('<select id="dropdown-menu" />');;

	// Create default option 'Go to...'
	$('<option />', {
		'selected': 'selected',
		'value'   : '',
		'text'    : 'Go to...'
	}).appendTo($select);

	// Populate dropdown with menu items
	$nav.find('a').each(function() {
		var el = $(this);
		$('<option />', {
			'value'   : el.attr('href'),
			'text'    : el.text()
		}).appendTo($select);
	});

	$select.change(function() {
		console.log($(this).find('option:selected').val());
		window.location = $(this).find('option:selected').val();
	});

	$nav.append($select);
});
