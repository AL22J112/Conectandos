// JavaScript Document
function LoginConectar(U,P)
{
	datos="usuario="+U+"& password="+P
	$.ajax({
		type:"POST",
		url:"http://192.168.1. /Sitio6/Log_in_m.php",
		data: datos
	}).done(function(msg){
		alert(msg);
		if (msg==""|| msg== null)
		{
			alert("Usuario Incorrecto");
		}
		else
		{
			alert("Bienvenido")
		}
	});
}
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('.Enviar').tap(function(){
			var formulario=$(this).parents('form');
			var usuario=formulario.children('input:eq(0)').val();
			var password=formulario.children('input:eq(0)').val();
			LoginConectar(usuario,password);
		});//tap
		});//device ready
});//ready