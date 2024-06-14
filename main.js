
function insert(src,dest) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(dest).innerHTML = this.responseText;
            if (src == "footer") {
                createScript("/src/footer.js");
            }
        }
    
    };
    xhttp.open("GET", "/src/" + src + ".html", true);
    xhttp.send();
}

function createStyle(src) {
	var lnk = document.createElement('link');
	lnk.rel = "stylesheet";
	lnk.href = src;
	document.getElementsByTagName('head')[0].appendChild(lnk);
}

function createScript(src) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    
    document.getElementsByTagName('head')[0].appendChild(script);
}

function ready() {
	document.getElementById("loadholder").innerHTML = '';
}

function setup() {
    //alert("Loading Page.");
	createStyle("/src/navbar.css");
	createStyle("/src/footer.css");
	
	insert("navbar","navbar");
	insert("footer","main-footer");
	insert("rside","right_side");
	setTimeout(ready,200);
}



