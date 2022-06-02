Extension();

var nbr = 0;

function ExtensionRight() {

   if (c == 1 & nbr % 2 == 1) {

      document.getElementById("allcontacts").style.visibility = "hidden";
   }
   if (s == 1 & nbr % 2 == 1) {

      document.getElementById("allsettings").style.visibility = "hidden";
   }
   if (onaddc > 0 & nbr % 2 == 1) {
      document.getElementById("onAddContact").style.visibility = 'hidden';
   }
   if (onaddc > 0 & nbr % 2 == 1) {
      document.getElementById("end").style.visibility = 'hidden';
   }

   if (nbr == 0) {
      var ExtDiv = document.createElement('div');
      ExtDiv.id = "all";
      document.body.appendChild(ExtDiv);
      ExtensionChild();
      document.getElementById("opnext").style.visibility = 'hidden';
   }

   else if (nbr % 2 == 0) {
      document.getElementById("all").style.visibility = 'visible';
      document.getElementById("opnext").style.visibility = 'hidden';
   }

   else if (nbr % 2 == 1) {
      document.getElementById("all").style.visibility = 'hidden';
      document.getElementById("opnext").style.visibility = 'visible';

   }

   nbr += 1;
   console.log(nbr);


}

function ExtensionChild() {
   //Div d'ajout de contact + image user//  
   var divl1 = document.createElement('div')
   divl1.id = "imgajout"
   divl1.onclick = addcontact;

   var imgl1 = document.createElement('img')
   imgl1.id = "User"
   imgl1.src = "https://cdn.discordapp.com/attachments/754702170938671135/920321114465529876/user_1.png"

   var txtl1 = document.createElement('div')
   txtl1.id = "ajout"
   txtl1.textContent = "Ajouter le contact"



   document.getElementById("all").appendChild(divl1);
   document.getElementById("imgajout").appendChild(imgl1);
   document.getElementById("imgajout").appendChild(txtl1);
   //Fin de div ajout de contact + image user//


   //Div pour accéder à mes candidatures//
   var divl2 = document.createElement('a'); //div pour accéder à mes candidatures------------------------------
   divl2.id = "imgaccess";
   divl2.target = "blank";
   divl2.href = "https://app.mentorgoal.com/";

   var imgl2 = document.createElement('img');
   imgl2.id = "share";
   imgl2.src = "https://cdn.discordapp.com/attachments/754702170938671135/920335394527133796/partage.png";

   var txtl2 = document.createElement('div');
   txtl2.id = "access";
   txtl2.textContent = "Accéder à mes candidatures";

   document.getElementById("all").appendChild(divl2);
   document.getElementById("imgaccess").appendChild(imgl2);
   document.getElementById("imgaccess").appendChild(txtl2);
   //fin accéder à mes candidatures//

   var divl3 = document.createElement('div');
   divl3.id = "ecroupara";
   divl3.onclick = setting;

   var imgl3 = document.createElement('img');
   imgl3.id = "ecrou";
   imgl3.src = "https://cdn.discordapp.com/attachments/754702170938671135/920337775612526652/setting.png";

   var txtl3 = document.createElement('div');
   txtl3.id = "para";
   txtl3.textContent = "Paramètres";

   document.getElementById("all").appendChild(divl3);
   document.getElementById("ecroupara").appendChild(imgl3);
   document.getElementById("ecroupara").appendChild(txtl3);
}


function Extension() {
   var close = document.createElement("img")
   close.id = "croix";
   close.src = "https://cdn.discordapp.com/attachments/754702170938671135/920267520252985414/IMG_8736.png"
   close.width = 40;
   close.onclick = ExtensionRight;

   document.body.appendChild(close);




   var image = document.createElement("img");
   image.id = "opnext";
   image.src = "https://s3-eu-west-1.amazonaws.com/tpd/logos/611ea1cfaca4c3001d6d3390/0x0.png"
   image.width = 40;
   image.onclick = ExtensionRight;



   document.body.appendChild(image);
}

var s = 0;

function setting() {
   if (s == 0) {
      var settings = document.createElement('div');
      settings.id = "allsettings";
      document.body.appendChild(settings);
      s += 1;

      var stxtl1 = document.createElement('div')
      stxtl1.id = "stxl1"
      stxtl1.textContent = "Paramètres"
      document.getElementById("allsettings").appendChild(stxtl1);

      var labell1 = document.createElement('label')
      labell1.id = "alllabel"
      labell1.for = "labsel"
      labell1.textContent = "Statue par default pour l'ajout de candidature"
      document.getElementById("allsettings").appendChild(labell1);

      var selectl1 = document.createElement('select')
      selectl1.id = "selectl1"
      selectl1.name = "labsel"


      var option1 = document.createElement('option')
      option1.textContent = "Prêt à postuler"

      var option2 = document.createElement('option')
      option2.textContent = "Pas prêt à postuler"

      document.getElementById("allsettings").appendChild(selectl1);

      document.getElementById("selectl1").appendChild(option1);
      document.getElementById("selectl1").appendChild(option2);


      var labell2 = document.createElement('label')
      labell2.id = "alllabel"
      labell2.for = "labsel2"
      labell2.textContent = "Type de contrat par défaut"
      document.getElementById("allsettings").appendChild(labell2);

      var selectl2 = document.createElement('select')
      selectl2.id = "selectl2"
      selectl2.name = "labsel2"

      var option1 = document.createElement('option')
      option1.textContent = "Alternance"

      var option2 = document.createElement('option')
      option2.textContent = "Stage"

      var option3 = document.createElement('option')
      option3.textContent = "CDI"

      var option4 = document.createElement('option')
      option4.textContent = "CDD"

      var option5 = document.createElement('option')
      option5.textContent = "Graduate Program"

      var option6 = document.createElement('option')
      option6.textContent = "VIE/VIA"

      document.getElementById("allsettings").appendChild(selectl2);

      document.getElementById("selectl2").appendChild(option1);
      document.getElementById("selectl2").appendChild(option2);
      document.getElementById("selectl2").appendChild(option3);
      document.getElementById("selectl2").appendChild(option4);
      document.getElementById("selectl2").appendChild(option5);
      document.getElementById("selectl2").appendChild(option6);


      var labell3 = document.createElement('label')
      labell3.id = "alllabel"
      labell3.for = "labsel3"
      labell3.textContent = "Email associé"
      document.getElementById("allsettings").appendChild(labell3);

      var inputl3 = document.createElement('input')
      inputl3.type = "Email"

      document.getElementById("allsettings").appendChild(inputl3);

      var decol4 = document.createElement('button')
      decol4.id = "boutondeco"
      decol4.textContent = "Se déconnecter"
      document.getElementById("allsettings").appendChild(decol4);




   }
   else if (s == 1) {
      document.getElementById("allsettings").style.visibility = 'visible';
   }


}


var c = 0;

function addcontact() {

   var information_json = 0;
   var new_information_json = 0;
 
   var information = {
     nom: 0,
     prenom: 0,
     entreprise: 0,
     poste: 0,
     lieu: 0,
     contrat: 0,
     url: 0,
     description: 0,
   }
   function separation_nom(str) {
      let length = str.length
      information.nom = " ";
      for (let i = 1; i < length; i++) {
         information.prenom = str[0];
         if (length == 2) {
           information.nom = str[1];
   
         } else {
            information.nom = information.nom + str[i] + " ";
      }

    }
   }
   //  information.nom = information.nom.trim();
    function selection_entreprise_linkedin(str) {
      let length = str.length - 2;
      let new_str = " ";
      for (let i = 0; i < length; i++) {
         new_str = new_str + str[i] + " ";
      }
      return (new_str.trim());
    }
      
    
     
        

            separation_nom(document.querySelector(".text-heading-xlarge.inline.t-24.v-align-middle.break-words").innerHTML.split(" "));
            information.url = window.location.href;
      
            if (document.querySelector("div.ph5.pb5 > div.mt2.relative > ul > li:nth-child(1) > a > h2 > div") == null) {
              information.entreprise = "Aucun"
            } else {
              information.entreprise = selection_entreprise_linkedin(document.querySelector("div.ph5.pb5 > div.mt2.relative > ul > li:nth-child(1) > a > h2 > div").innerHTML.trim().split(" "));
            }
            if (document.querySelector(".text-body-medium.break-words" == null)) {
              information.poste = "Aucun"
            } else {
              information.poste = document.querySelector(".text-body-medium.break-words").innerHTML;
            }
            
         
      
   


   // var recup_nom = document.querySelector(".text-heading-xlarge.inline.t-24.v-align-middle.break-words");
   // var recup_ent = document.querySelector("div.ph5.pb5 > div.mt2.relative > ul > li:nth-child(1) > a > h2 > div").innerHTML.trim().split(" ");
   // var recup_poste = document.querySelector(".text-body-medium.break-words");
   // var recup_url = window.location.href;

  

   // var information = {
   //    nom: recup_nom.innerHTML,
   //    entreprise: recup_ent,
   //    poste: recup_poste.innerHTML,
   //    url: recup_url,
   // };

   console.log(information.nom);
   console.log(information.entreprise);
   console.log(information.poste);
   console.log(information.url);

   var information_json = JSON.stringify(information);
   var new_information_json = JSON.parse(information_json);

   console.log(new_information_json.nom);
   console.log(new_information_json.entreprise);
   console.log(new_information_json.poste);
   console.log(new_information_json.url);



   // Recup_Linkedin();
   // Recup_indeed();
   // Recup_wttj();
   // Recup_monster();
   // Recup_region_job();
   // Recup_lesjeudis();
   // Recup_APEC();
   // Recup_etudiant();
   // Recup_walt();
   // Recup_jobirl();
   // Recup_wizbii();
   // Recup_cadremploi();
   // Recup_cadreo();
   // Recup_keljob();
   // Recup_makesense();
   // Recup_jobhunter();
   // Recup_optioncarriere();
   // Recup_jobteaser();
   // Recup_pe();
   // Recup_publique();


   if (c == 0) {
      var addcontacts = document.createElement('div');
      addcontacts.id = "allcontacts";
      document.body.appendChild(addcontacts);
      c += 1;

      var addctxtl1 = document.createElement('div')
      addctxtl1.id = "addctxtl1"
      addctxtl1.textContent = "Ajouter le contact"
      document.getElementById("allcontacts").appendChild(addctxtl1);

      var labelcl1 = document.createElement('label')
      labelcl1.id = "alllabelc"
      labelcl1.textContent = "Prénom"
      document.getElementById("allcontacts").appendChild(labelcl1);

      var inputcl1 = document.createElement('input')
      inputcl1.type = "text"
      inputcl1.value = information.prenom;
      document.getElementById("allcontacts").appendChild(inputcl1);

      var labelcl2 = document.createElement('label')
      labelcl2.id = "alllabelc"
      labelcl2.textContent = "Nom"
      document.getElementById("allcontacts").appendChild(labelcl2);

      var inputcl2 = document.createElement('input')
      inputcl2.type = "text"
      inputcl2.value = information.nom;
      document.getElementById("allcontacts").appendChild(inputcl2);

      var labelcl3 = document.createElement('label')
      labelcl3.id = "alllabelc"
      labelcl3.textContent = "Poste occupé"
      document.getElementById("allcontacts").appendChild(labelcl3);

      var inputcl3 = document.createElement('input')
      inputcl3.type = "text"
      inputcl3.value = information.poste.trim();
      document.getElementById("allcontacts").appendChild(inputcl3);


      var labelcl4 = document.createElement('label')
      labelcl4.id = "alllabelc"
      labelcl4.textContent = "Entreprise"
      document.getElementById("allcontacts").appendChild(labelcl4);

      var inputcl4 = document.createElement('input')
      inputcl4.type = "text"
      inputcl4.value = information.entreprise;
      document.getElementById("allcontacts").appendChild(inputcl4);

      var labelcl5 = document.createElement('label')
      labelcl5.id = "alllabelc"
      labelcl5.textContent = "URL du profil LinkedIn"
      document.getElementById("allcontacts").appendChild(labelcl5);

      var inputcl5 = document.createElement('input')
      inputcl5.type = "text"
      inputcl5.value = information.url;
      document.getElementById("allcontacts").appendChild(inputcl5);

      var labelcl6 = document.createElement('label')
      labelcl6.id = "alllabelc"
      labelcl6.textContent = "Adresse mail"
      document.getElementById("allcontacts").appendChild(labelcl6);

      var inputcl6 = document.createElement('input')
      inputcl6.type = "Email"

      document.getElementById("allcontacts").appendChild(inputcl6);

      var labelcl7 = document.createElement('label')
      labelcl7.id = "alllabelc"
      labelcl7.textContent = "Téléphone"
      document.getElementById("allcontacts").appendChild(labelcl7);

      var inputcl7 = document.createElement('input')
      inputcl7.type = "text"

      document.getElementById("allcontacts").appendChild(inputcl7);

      var ajoutl8 = document.createElement('button')
      ajoutl8.id = "boutonadd"
      ajoutl8.textContent = "Ajouter"
      ajoutl8.onclick = OnAddContact;

      document.getElementById("allcontacts").appendChild(ajoutl8);

   }


   else if (c == 1) {
      document.getElementById("allcontacts").style.visibility = 'visible';
   }
}

var onaddc = 0;

function OnAddContact() { /* boite de chargement en appuyant sur ajouter */

   if (onaddc == 0) {

      var OnAddContact = document.createElement("div");
      OnAddContact.id = "onAddContact";
      document.body.appendChild(OnAddContact)

      document.getElementById("allcontacts").style.visibility = 'hidden';
      onaddc += 1;

      var mycontact = document.createElement("div");
      mycontact.id = "mc";
      mycontact.textContent = "Ajouter le contact";

      document.getElementById('onAddContact').appendChild(mycontact);

      var loadaddcontact = document.createElement("div");
      loadaddcontact.id = "loader";

      document.getElementById('onAddContact').appendChild(loadaddcontact);
      my_timer(x);


   }
   else {
      my_timer(x);
      document.getElementById("allcontacts").style.visibility = 'hidden';
      document.getElementById("onAddContact").style.visibility = 'visible';
   }
}

var x = 0;
function my_timer(x) {
   setInterval(function () { /* affiche le contact ajouter après 5 sec */
      x += 1;

      if (x == 5) {
         afterload();
         document.getElementById("onAddContact").style.visibility = 'hidden';

         return;
      }
   }, 1000);
}

var after = 0;
function afterload() { /* boite final */
   if (after == 0) {
      var end = document.createElement("div");
      end.id = "end";
      document.body.appendChild(end)
      after += 1;

      var validation = document.createElement("img");
      validation.id = "validé"
      validation.src = "https://cdn.discordapp.com/attachments/889552369002631168/920749315792699432/Vector.png";
      validation.width = 40;
      document.getElementById('end').appendChild(validation);

      var wasadd = document.createElement("div");
      wasadd.id = "wasadd"
      wasadd.textContent = "Le contact a été ajouté dans : "

      document.getElementById('end').appendChild(wasadd);

      var mesct = document.createElement("div");
      mesct.id = "mesct"
      mesct.textContent = "Mes contacts "

      document.getElementById('end').appendChild(mesct);

      var openimg = document.createElement('a'); //div pour accéder à mes contact
      openimg.id = "openimg";
      openimg.target = "blank";
      openimg.href = "https://app.mentorgoal.com/";

      var imgmg = document.createElement('img');
      imgmg.id = "imgmg";
      imgmg.src = "https://cdn.discordapp.com/attachments/781494703148761128/920760747724767302/Vector.png";
      imgmg.width = 40;

      var opnmg = document.createElement('div');
      opnmg.id = "opnmg";
      opnmg.textContent = "Ouvrir Mentor Goal";

      document.getElementById("end").appendChild(openimg);
      document.getElementById("openimg").appendChild(imgmg);
      document.getElementById("openimg").appendChild(opnmg);
   }
   else {
      document.getElementById("end").style.visibility = 'visible';
   }

}


