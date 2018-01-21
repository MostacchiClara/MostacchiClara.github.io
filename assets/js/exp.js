$(document).ready(function(){

	$('#btn-block').click(function(){
		$.get( 'https://api.blockcypher.com/v1/btc/main/blocks/' +$('#input-block').val(), function(data) {
				var sortie = '';
			if(data.error != undefined){
				sortie += data.error;
			}
			else{
				sortie += '</p><p><b>Hash:</b> '+data.hash+'<p><b>Hauteur: </b>'+data.height+'</p><p><b>Time: </b>'+data.time +'</p><p><b>Taille: </b>' +data.size + ' bytes </p>';

			}
			$('#resultat').html( sortie );
			});
	});

	$('#btn-trx').click(function(){
		$.get( 'https://api.blockcypher.com/v1/btc/main/txs/' +$('#input-trx').val(), function(data) {
				var sortie = '';
			if(data.error != undefined){
				sortie += data.error;
			}
			else{
				sortie += '</p><p><b>Adresses bitcoin impliquées dans la transaction:</b> '+data.addresses
				+'<p><b>Hash: </b>'+data.hash+'</p><p><b>Time: </b>'+data.time +'</p><p><b>Size: </b>' +data.size + 'bytes' 
				+'</p><p><b> Hauteur du block (-1 si transaction non validée) : </b>' + data.block_height 
				+ '</p><p><b> Block Hash : </b>' + data.block_hash;

			}
			$('#resultat').html( sortie );
			});
	});

	$('#btn-add').click(function(){
		$.get( 'https://api.blockcypher.com/v1/btc/main/addrs/' +$('#input-add').val(), function(data) {
				var sortie = '';
			if(data.error != undefined){
				sortie += data.error;
			}
			else{
				sortie += '</p><p><b>Adresse:</b> '+data.address +'<p><b>Nombre de satoshis reçus : </b>'+data.total_received 
				+'</p><p><b>Nombre de satoshis envoyés : </b>'+ data.total_sent  +'</p><p><b>Balance : </b>' +data.balance 
				+'</p><p><b> Nombre de transactions associées : </b>' + data.n_tx 

			}
			$('#resultat').html( sortie );
			});
	});
});
	