//Vari�veis globais

//---------------------------------------


//Fun��o que esconde as combos da p�gina
function escondeSelects()
{
	var i;
	for(i = 0; i < document.getElementsByTagName("select").length; i++)
		document.getElementsByTagName("select")[i].style.visibility = "hidden";	
}


//---------------------------------------

//Fun��o que mostra as combos da p�gina
function mostraSelects()
{
	var i;
	for(i = 0; i < document.getElementsByTagName("select").length; i++)
		document.getElementsByTagName("select")[i].style.visibility = "visible";	
}		

//---------------------------------------

//Fun��o que desmarca os checkboxes da p�gina
function desmarcaChecks()
{
	var i;
	var inputs = document.getElementsByTagName("input");
	for(i = 0; i < inputs.length; i++)
	{
		if(inputs[i].type == "checkbox")
			document.getElementsByTagName("input")[i].checked = false;
	}
}		

//---------------------------------------

//Fun��o que marca os checkboxes da p�gina
function marcaChecks()
{
	var inputs = document.getElementsByTagName("input");
	for(i = 0; i < inputs.length; i++)
	{
		if(inputs[i].type == "checkbox")
			document.getElementsByTagName("input")[i].checked = true;
	}
}

//---------------------------------------

// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
function getInternetExplorerVersion()
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
	 var ua = navigator.userAgent;
	 var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	 if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

//---------------------------------------

function alteraFonte(strTipo)
{
	// strTipo = + --> Significa que o bot�o de aumentar a fonte foi selecionado
	// strTipo = - --> Significa que o bot�o de diminuir a fonte foi selecionado

	var elem = $(".fonteResizable");
	var fonte;
	var posTitulo;
	
	if(strTipo == "+"){
		fonte = new Array("10px","11px","12px","13px","14px","15px","16px","17px","18px","19px","20px","21px","22px","23px","24px","25px","26px","27px","28px","29px","30px");
		posTitulo = 0;
	}
        else if(strTipo == "-"){
		fonte = new Array("30px","29px","28px","27px","26px","25px","24px","23px","22px","21px","20px","19px","18px","17px","16px","15px","14px","13px","12px","11px","10px");
		posTitulo = fonte.length - 1;
	}

	for (var iTotalElem = 0; iTotalElem < elem.length ; iTotalElem++)
	{

		for (var i = 0;i < fonte.length ; i++)
		{
			if(elem[iTotalElem].style.fontSize == fonte[i])
				posTitulo = i;
		}

		if ((posTitulo + 2) < fonte.length)
			elem[iTotalElem].style.fontSize = fonte[posTitulo+2];

	}
	curvyCorners.redraw();
}

//---------------------------------------

//Fun��o para formatar valor de pre�o 
function ajustaPreco(preco)
{
	preco = String(preco);
	preco = preco.replace(".", "");
	preco = preco.replace(",", ".");
	preco = new Number(preco);
	preco = preco.toFixed(2);
	preco = preco.replace(".", ",");
	
	return 'R$ ' + preco;
}

//---------------------------------------

//Fun��o para retornar c�digo do v�deo do youtube
function strRetCodigoYoutube(string) 
{
    var pattern = new RegExp('v=.*?&|v=.*?$', 'i');
    return String(pattern.exec(string)).substr(2).replace('&', '');
}

//---------------------------------------

//Metodos para login 
function readCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}

//------------------------------------
$(document).ready(function () {
	if ($('.menuPrincipal td').length == 5) {
		$('.menuPrincipal').parent().css({ 'padding-right': '61px' })
	} else if ($('.menuPrincipal td').length == 4) {
		$('.menuPrincipal').parent().css({ 'padding-right': '130px' })
	}
});


