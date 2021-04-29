function darkModeToggle(){
    if (document.getElementById("darkmodecheckbox").checked){
        document.getElementById("darkmodecheckbox").checked=true;
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = 'stylesheets/darkmode.css';
        link.id = "darkmode";
        document.head.appendChild(link);
        setCookie("darkmode","y",14)
    }else{
        document.getElementById("darkmode").remove();
        setCookie("darkmode","n",14)
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function ready(){
    if (getCookie("darkmode")=="y"){
        darkModeToggle()
    }
}
ready()