$('#maplink').on('paste', function () {
	  var element = this;
	  setTimeout(function () {
	    var text = $(element).val();
	    var result = text.replace('<iframe', '');
	    var resulta = result.replace('width="600" height="450" frameborder="0" style="border:0" ', '');
	    var resulta = resulta.replace('allowfullscreen', '');
	    var resulta = resulta.replace('></iframe>', '');
	    var resulta = resulta.replace('src="', '');
	    var resulta = resulta.replace('"', '');
	    var resulta = resulta.replace(' ', '');
	    var resultx = resulta.replace(' ', '');
	    $(element).val(resultx);
	  }, 10);
	});
