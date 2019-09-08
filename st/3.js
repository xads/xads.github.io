var U,SKIN;
window.onload = function() {
	U = document.cookie.replace(/(?:(?:^|.*;\s*)U\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	SKIN = U&3;
	Ch= document.getElementById("skinCh").firstChild;
	Ch.selectedIndex= SKIN;
}
function chSkin(o){
	dC= new Date(); dC.setDate(400);//~ 1Year
	document.cookie='U='+(U^SKIN|o.selectedIndex)+';path=/;expires='+dC.toUTCString();
	document.location.reload(true);
}
