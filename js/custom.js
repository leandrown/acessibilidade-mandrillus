function getCodAmbiente()
{
// bytCodAmbiente: 1 (PROD1); 2 (PROD2); 3 (HOMOL1); 4 (HOMOL2); 5 (DEV1); 6 (DEV2);

var astrCondicaoPROD1, astrCondicaoPROD2, astrCondicaoHOMOL1, astrCondicaoHOMOL2, astrCondicaoDEV1, astrCondicaoDEV2
var strHostName, bytCodAmbiente;

astrCondicaoPROD1		= ["www.", "moderna.", "richmond.", "santillana.", "mplus.moderna.", "189.36.6.55", "189.36.6.56"];
astrCondicaoPROD2		= [];
astrCondicaoHOMOL1	= ["homol.", "homolmplus.", "189.36.6.46"];
astrCondicaoHOMOL2	= ["hom.", "177.85.37.121"];
astrCondicaoDEV1		= ["aquaman.gm5."];
astrCondicaoDEV2		= ["localhost"];

strHostName = window.location.hostname.toLowerCase();
bytCodAmbiente = 0;

for (var i = 0; i < astrCondicaoPROD1.length; i++)
	if (strHostName.indexOf(astrCondicaoPROD1[i]) == 0) {
		bytCodAmbiente = 1;
		break;
	}

if (bytCodAmbiente == 0)
	for (var i = 0; i < astrCondicaoPROD2.length; i++)
		if (strHostName.indexOf(astrCondicaoPROD2[i]) == 0) {
			bytCodAmbiente = 2;
			break;
		}

if (bytCodAmbiente == 0)
	for (var i = 0; i < astrCondicaoHOMOL1.length; i++)
		if (strHostName.indexOf(astrCondicaoHOMOL1[i]) == 0) {
			bytCodAmbiente = 3;
			break;
		}

if (bytCodAmbiente == 0)
	for (var i = 0; i < astrCondicaoHOMOL2.length; i++)
		if (strHostName.indexOf(astrCondicaoHOMOL2[i]) == 0) {
			bytCodAmbiente = 4;
			break;
		}

if (bytCodAmbiente == 0)
	for (var i = 0; i < astrCondicaoDEV1.length; i++)
		if (strHostName.indexOf(astrCondicaoDEV1[i]) == 0) {
			bytCodAmbiente = 5;
			break;
		}

if (bytCodAmbiente == 0)
	for (var i = 0; i < astrCondicaoDEV2.length; i++)
		if (strHostName.indexOf(astrCondicaoDEV2[i]) == 0) {
			bytCodAmbiente = 6;
			break;
		}

if (bytCodAmbiente == 0)
	bytCodAmbiente = 6;

return bytCodAmbiente;
}

//------------------------------------------------

function getUrlModerna()
{
var astrUrl, bytCodAmbiente, strHref;

astrUrl = [];
astrUrl[0] = "";
astrUrl[1] = location.protocol + "//www.moderna.com.br/";
astrUrl[2] = "";
astrUrl[3] = "//homol.moderna.com.br/";
astrUrl[4] = location.protocol + "//hom.moderna.com.br/"
astrUrl[5] = window.location.origin + "/ModernaPortalNovo/";
astrUrl[6] = window.location.origin + "/ModernaPortalNovo/";
bytCodAmbiente = getCodAmbiente();
strHref = astrUrl[bytCodAmbiente];

return strHref;
}

//------------------------------------------------

function getUrlModernaPlus()
{
var astrUrl, bytCodAmbiente, strHref;

astrUrl = [];
astrUrl[0] = "";
astrUrl[1] = location.protocol + "//mplus.moderna.com.br/";
astrUrl[2] = "";
astrUrl[3] = "//homolmplus.moderna.com.br/";
astrUrl[4] = "";//location.protocol + "//hom.modernaplus.com.br/";
astrUrl[5] = window.location.origin + "/ModernaPortal/";
astrUrl[6] = window.location.origin + "/ModernaPortal/";
bytCodAmbiente = getCodAmbiente();
strHref = astrUrl[bytCodAmbiente];

return strHref;
}

//------------------------------------------------

function getUrlRichmond()
{
var astrUrl, bytCodAmbiente, strHref;

astrUrl = [];
astrUrl[0] = "";
astrUrl[1] = location.protocol + "//www.richmond.com.br/";
astrUrl[2] = "";
astrUrl[3] = "https://homol.richmond.com.br/";
astrUrl[4] = location.protocol + "//hom.richmond.com.br/"
astrUrl[5] = window.location.protocol + "//" + "moderna.richmond.gm5.com.br" + (window.location.port ? ":" + window.location.port : "") + "/ModernaPortalNovo/";
astrUrl[6] = location.protocol + "//moderna.richmond.gm5.com.br:8084" + "/ModernaPortalNovo/";
bytCodAmbiente = getCodAmbiente();
strHref = astrUrl[bytCodAmbiente];

return strHref;
}

//------------------------------------------------

function getUrlSantillana()
{
var astrUrl, bytCodAmbiente, strHref;

astrUrl = [];
astrUrl[0] = "";
astrUrl[1] = location.protocol + "//www.santillana.com.br/";
astrUrl[2] = "";
astrUrl[3] = "https://homol.santillana.com.br/";
astrUrl[4] = location.protocol + "//hom.santillana.com.br/"
astrUrl[5] = window.location.protocol + "//" + "moderna.santillana.gm5.com.br" + (window.location.port ? ":" + window.location.port : "") + "/ModernaPortalNovo/";
astrUrl[6] = location.protocol + "//moderna.santillana.gm5.com.br:8084" + "/ModernaPortalNovo/";
bytCodAmbiente = getCodAmbiente();
strHref = astrUrl[bytCodAmbiente];

return strHref;
}

//------------------------------------------------

function getUrlLiferay()
{
var astrUrl, bytCodAmbiente, strHref;

astrUrl = [];
astrUrl[0] = "";
astrUrl[1] = "https://web.moderna.com.br/";
astrUrl[2] = "";
astrUrl[3] = "https://homol2.moderna.com.br/";
astrUrl[4] = location.protocol + "//hom.web.moderna.com.br/"
astrUrl[5] = location.protocol + "//" + "moderna.liferay.gm5.com.br" + (window.location.port ? ":" + window.location.port : "") + "/";
astrUrl[6] = location.protocol + "//moderna.liferay.gm5.com.br:8084" + "/";
bytCodAmbiente = getCodAmbiente();
strHref = astrUrl[bytCodAmbiente];

return strHref;
}

//------------------------------------------------
