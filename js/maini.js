$(function (){
	
	var $kanalet = $('#kanalet');
	var $kanali = $('#kanali');
	var $linku = $('#linku');
 $.ajax({
  type: 'GET',
  url: 'https://api.myjson.com/bins/18742j',
  success: function(kanalet) {
    console.log("Tabela:", kanalet);
	$.each(kanalet, function(i, kanal) {
	$kanalet.append('<a href="intent:'+ kanal.linku +'#Intent;package=co.wuffy.player;end"><div class="card"><h3 class="card-header">'+ kanal.kanali +'</h3><div class="card-block"><img src="'+ kanal.logo +'"></img><h4 class="card-title">description</h4><a href="" class="btn btn-primary">Shiko</a></div></div></a>');	
	});
	},
  	error: function() {
		alert('Error loading the first database');
	}
	});
	
	$('#add-kanal').on('click', function () {
		var kanal = {
		kanali: $kanali.val(),
		linku: $linku.val(),
		};
		
		$.ajax({
		type: 'POST',
		url: 'https://api.myjson.com/bins/ijlun',
		data: kanal,
		succes: function(KanaliShtese){
		$kanalet.append('<li>id: '+ KanaliShtese.kanali +' linku: '+ KanaliShtese.linku +'</li>');	
		},
		error: function() {
		alert('Eror saving the database');
		}
	});
  });
});