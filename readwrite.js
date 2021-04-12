var field_array = [
	"cam_bio",
	"cam_status",
	"cam_kotd",
	"cam_news",
	"allie_bio",
	"allie_status",
	"allie_kotd",
	"cam_top8",
	"allie_top8"
];

	//read from TXT files on page load
	$(document).ready(function() {

		console.log('ajax read function running...');
		var i;

		for (i = 0; i < field_array.length; i++) {
			var field = field_array[i];

				console.log('retrieving ' + field + '...');

				$.ajax({
					type: "GET",
					async: false,
					url: "read.php?field=" + field,
				}).done(function( msg ) {
					console.log( "read the following from the TXT files: " + msg );
					document.getElementById(field).innerHTML = msg;
				});

		//end loop
		}

	//end read function
	});



	//write changes to file on click-out
	$(document).click(function(event) {

	var $target = $(event.target);
	if(!$target.closest('#bio').length &&
		!$('#bio').is(':empty')) {

		console.log('ajax write bio/status function ran');

		//initialize array of field values
		var field_value_array = new Array(field_array.length);

		//fill field values array with the values currently in the field
		var i;
		for (i = 0; i < field_array.length; i++) {
			field_value_array[i] = document.getElementById(field_array[i]).innerHTML;
		}

		//make AJAX call to write the values to write.php to store the values in the TXT files
		$.ajax({
			type: "POST",
			url: "write.php",
		 data: {fieldnames: field_array, fields: field_value_array}
		}).done(function( msg ) {
			console.log( "wrote the following to the TXT files: " + msg);
		});

	}
});
