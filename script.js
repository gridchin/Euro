$(document).ready(function(){	
	
	$('body').append('<section></section>');
	
	var i=1;	
	
	for (i=0;i<=14;i++) {	
		var f=i+1;
		$('section').append('<figure class="f' + f + '"></figure>');	
	}
        
    $("select").change(function () {
          var euro = $("select option:selected").val().toLowerCase();
          $("section").removeClass().addClass(euro);
    })
    .change();

});