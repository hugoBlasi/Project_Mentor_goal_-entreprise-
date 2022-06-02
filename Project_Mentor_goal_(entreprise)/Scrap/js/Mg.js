var nbr = 0;

ExtensionStart();
btnExt();

function ExtensionStart() {

    if (nbr == 0){

    var ExtDiv = document.createElement('div');
    ExtDiv.id = "all";
    document.body.appendChild(ExtDiv);
    Extensiontxt();
}
else if (nbr%2 == 0) {

    document.getElementById("all").style.visibility = 'visible';
    document.getElementById("close").style.visibility = 'visible';

 }

 else if(nbr%2 == 1){
    document.getElementById("all").style.visibility = 'hidden';
    document.getElementById("close").style.visibility = 'hidden';
 }

 nbr += 1;
 console.log(nbr);


  

    
}

function btnExt(){

  var close = document.createElement("img");
    close.id = "close";
    close.src = "https://cdn.discordapp.com/attachments/754702170938671135/920267520252985414/IMG_8736.png"
   close.width = 40;
   close.onclick = ExtensionStart;
 
    document.body.appendChild(close);

    var image = document.createElement("img");
    image.id = "opnext";
    image.src = "https://s3-eu-west-1.amazonaws.com/tpd/logos/611ea1cfaca4c3001d6d3390/0x0.png"
    image.width = 40;
    image.onclick = ExtensionStart;

    document.body.appendChild(image);

}



function Extensiontxt() {

var content = document.createElement('div');
content.id = 'content';

var image = document.createElement('img');
image.id = "logo";
image.src = "https://s3-eu-west-1.amazonaws.com/tpd/logos/611ea1cfaca4c3001d6d3390/0x0.png";
image.width = 40;


    var h1 = document.createElement('h1');

    h1.textContent = "C'est parti !"
    

    var h2 = document.createElement('h2');
    h2.textContent = "L'extension Mentor Goal est prête."
    h2.style.fontSize= "1.2rem";

    var p = document.createElement('div');
    p.id= "poriginel";
   

    var p1 = document.createElement('p');
    p1.textContent = "1. Trouve une offre d'emploi en ligne";

    var p2 = document.createElement('p');
    p2.textContent = "2. Clique sur l'extension Mentor Goal";
    
    var p3 = document.createElement('p');
    p3.textContent = "3.  Enregistre ta candidature dans 'Mes candidatures'";

    document.getElementById("all").appendChild(content);
    document.getElementById("content").appendChild(image);
    document.getElementById("content").appendChild(h1);
    document.getElementById("content").appendChild(h2);
    document.getElementById("content").appendChild(p);
    document.getElementById("poriginel").appendChild(p1);
    document.getElementById("poriginel").appendChild(p2);
    document.getElementById("poriginel").appendChild(p3);
}