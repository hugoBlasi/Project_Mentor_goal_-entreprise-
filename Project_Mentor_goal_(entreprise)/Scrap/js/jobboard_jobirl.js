Extension();

var nbr = 0;


function Extension() { /* bouton ouvrir fermer */
   var close = document.createElement("img");
   close.id = "close";
   close.src = "https://cdn.discordapp.com/attachments/754702170938671135/920267520252985414/IMG_8736.png"
   close.width = 40;
   close.onclick = ExtensionRight;

   document.body.appendChild(close);
   //---------------------------------------------------------------------

   var image = document.createElement("img");
   image.id = "opnext";
   image.src = "https://s3-eu-west-1.amazonaws.com/tpd/logos/611ea1cfaca4c3001d6d3390/0x0.png"
   image.width = 40;
   image.onclick = ExtensionRight;

   document.body.appendChild(image);
}

function ExtensionRight() { /* first boite*/

   if (s == 1 & nbr%2 ==1) {
      document.getElementById("allsettings").style.visibility = 'hidden';
   }
   if (c == 1 & nbr%2 ==1) {
      document.getElementById("allcandidat").style.visibility = 'hidden';
   }
   if (onaddc > 0 & nbr%2 ==1) {
      document.getElementById("onAddContact").style.visibility = 'hidden';
   }
   if (onaddc > 0 & nbr%2 ==1) {
      document.getElementById("end").style.visibility = 'hidden';
   }

   if (nbr == 0) {
      var ExtDiv = document.createElement('div');
      ExtDiv.id = "all";
      document.body.appendChild(ExtDiv);
      document.getElementById("opnext").style.visibility = 'hidden';
      ExtensionChild();
   }

   else if (nbr%2 == 0) {

      document.getElementById("all").style.visibility = 'visible';
      document.getElementById("opnext").style.visibility = 'hidden';

   }

   else if (nbr%2 ==1) {
      document.getElementById("all").style.visibility = 'hidden';
      document.getElementById("opnext").style.visibility = 'visible';

   }

   nbr += 1;
   console.log(nbr);
}

function ExtensionChild() { /* boite parametres + ajouter le contact + mes candidatures */

   var divl1 = document.createElement('div'); //div pour ajouter le contact---------------------------------
   divl1.id = "imgajout";
   divl1.onclick = addContact;

   var imgl1 = document.createElement('img');
   imgl1.id = "user";
   imgl1.src = "https://cdn.discordapp.com/attachments/889552369002631168/921018145370673242/open-book.png";

   var txtl1 = document.createElement('div');
   txtl1.id = "ajout";
   txtl1.textContent = "Ajouter à mes candidatures";

   document.getElementById("all").appendChild(divl1);
   document.getElementById("imgajout").appendChild(imgl1);
   document.getElementById("imgajout").appendChild(txtl1); //fin ajouter le contact-------------------------------------


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
   document.getElementById("imgaccess").appendChild(txtl2); //fin accéder à mes candidatures-------------------------------

   var divl3 = document.createElement('div'); //div settings ---------------------
   divl3.id = "divsettings";
   divl3.onclick = settings;

   var imgl3 = document.createElement('img');
   imgl3.id = "settings";
   imgl3.src = "https://cdn.discordapp.com/attachments/754702170938671135/920337775612526652/setting.png";

   var txtl3 = document.createElement('div');
   txtl3.id = "txtsettings";
   txtl3.textContent = "Paramètres";

   document.getElementById("all").appendChild(divl3);
   document.getElementById("divsettings").appendChild(imgl3);
   document.getElementById("divsettings").appendChild(txtl3); //fin ssettings-----------------------------
}

var s = 0;

function settings() {      /* boite parametres */
   if (s == 0) {
      var setting = document.createElement('div');
      setting.id = "allsettings";
      document.body.appendChild(setting);
      s += 1;

      var stxt1 = document.createElement('div'); /* texte en haut de la boite */
      stxt1.id = "stxt1";
      stxt1.textContent = "Paramètres"
      document.getElementById('allsettings').appendChild(stxt1);

      var lbl1 = document.createElement('label'); /* premier label/section */
      lbl1.id ="lbl1";
      lbl1.htmlFor ="one"
      lbl1.textContent = "Statut par défaut pour l'ajout de candidature";
      document.getElementById('allsettings').appendChild(lbl1);

      var select1 = document.createElement('select');
      select1.name = "one";
      select1.id = "one";
      document.getElementById('allsettings').appendChild(select1);

      var l1opt1 =  document.createElement('option');
      l1opt1.textContent = 'Prêt à postuler';
      document.getElementById("one").appendChild(l1opt1);

      var l1opt2 =  document.createElement('option');
      l1opt2.textContent = 'Pas prêt à postuler';
      document.getElementById("one").appendChild(l1opt2); /* fin premier label/section */

      var lbl2 = document.createElement('label'); /* 2ème label/section */
      lbl2.id ="lbl2";
      lbl2.htmlFor ="two"
      lbl2.textContent = "Type de contrat par défaut";
      document.getElementById('allsettings').appendChild(lbl2);

      var select2 = document.createElement('select');
     select2.name = "two";
     select2.id = "two";
      document.getElementById('allsettings').appendChild(select2);

      var l2opt1 =  document.createElement('option');
      l2opt1.textContent = 'Alternance';
      document.getElementById("two").appendChild(l2opt1);

      var l2opt2 =  document.createElement('option');
      l2opt2.textContent = 'Stage';
      document.getElementById("two").appendChild(l2opt2);
      
      var l2opt3 =  document.createElement('option');
      l2opt3.textContent = 'CDI';
      document.getElementById("two").appendChild(l2opt3);
      
            var l2opt4 =  document.createElement('option');
      l2opt4.textContent = 'CDD';
      document.getElementById("two").appendChild(l2opt4);
      
      var l2opt5 =  document.createElement('option');
      l2opt5.textContent = 'Graduate Program';
      document.getElementById("two").appendChild(l2opt5);
      
      var l2opt6 =  document.createElement('option');
      l2opt6.textContent = 'VIE/VIA';
      document.getElementById("two").appendChild(l2opt6);/* fin 2ème  label/section */

      var lblemail = document.createElement('label');/* email label/input */
      lblemail.id ="lblemail";
      lblemail.htmlFor ="mail"
      lblemail.textContent = "Email associé";
      document.getElementById('allsettings').appendChild(lblemail);

      var inpemail = document.createElement('input');
      inpemail.type = "email";
      inpemail.name = "mail";
      inpemail.id = "mail";
      document.getElementById('allsettings').appendChild(inpemail);

      var btndeco = document.createElement('button')
    btndeco.textContent = "Se déconnecter"
    document.getElementById("allsettings").appendChild(btndeco);
      

   




   }
   else if (s == 1) {
      document.getElementById("allsettings").style.visibility = 'visible';
   }

}


var c = 0;

function addContact() {

   
 
            Entreprise = document.querySelector("#full_stage > main > section:nth-child(3) > div.container.mb-5.pt-4 > div > div.col-lg-9.col-12.order-md-1.order-2 > div:nth-child(2) > div");
            Poste = document.querySelector('#full_stage > main > section:nth-child(2) > div > div:nth-child(2) > div.col-sm-9.col-12 > h1');
            Lieu = document.querySelector("#full_stage > main > section:nth-child(2) > div > div:nth-child(2) > div.col-sm-9.col-12 > div.row.mt-2 > div:nth-child(2) > div > span");
            Description = document.querySelector(":#full_stage > main > section:nth-child(3) > div.container.mb-5.pt-4 > div > div.col-lg-9.col-12.order-md-1.order-2 > div:nth-child(4) > div > div > p:nth-child(7)")
            Type_de_Contrat = document.querySelector("#full_stage > main > section:nth-child(2) > div > div:nth-child(2) > div.col-sm-9.col-12 > div.row.mt-2 > div:nth-child(1) > div > span");
            Url = window.location.href;



     

         function selection(str) {
            let length = str.length - 2;
            var new_str = " ";

            for (var i = 0; i < length; i++) {
               new_str = new_str + str[i] + " ";

            }

            return (new_str.trim());
         }

         //recup_ent = selection(recup_ent);
        
         var information = {
            lieu : Lieu,
            contrat : Type_de_Contrat,
            description :Description ,
            entreprise : Entreprise,
            poste : Poste,
            url : Url,
         };

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
         var addContacts = document.createElement('div');
         addContacts.id = "allcandidat";
         document.body.appendChild(addContacts);
   
         var ctxt1 = document.createElement('div'); /* texte en haut de la boite */
         ctxt1.id = "ctxt1";
         ctxt1.textContent = "Ajouter à mes candidatures"
         document.getElementById('allcandidat').appendChild(ctxt1);
   
         var lblc1 = document.createElement('label'); /* premier label/input */
         lblc1.id ="lblc1";
         lblc1.htmlFor ="firstinp"
         lblc1.textContent = "Entreprise";
         document.getElementById('allcandidat').appendChild(lblc1);
   
         var inp1 = document.createElement("input");
         inp1.type = "firstinp";
         inp1.name = "firstinp";
         inp1.id = "firstinp";
         inp1.value = Entreprise.innerHTML;    
         document.getElementById('allcandidat').appendChild(inp1); /* fin premier label/input */
   
         var lblc2 = document.createElement('label'); /* deuxième label/input */
         lblc2.id ="lblc2";
         lblc2.htmlFor ="firstinp"
         lblc2.textContent = "Poste";
         document.getElementById('allcandidat').appendChild(lblc2);
   
         var inp2 = document.createElement("input");
         inp2.type = "secondinp";
         inp2.name = "secondinp";
         inp2.id = "secondinp";
         inp2.value =Poste.innerHTML;   
         document.getElementById('allcandidat').appendChild(inp2); /* fin deuxième label/input */
   
         var lblc3 = document.createElement('label'); /* troisième label/input */
         lblc3.id ="lblc3";
         lblc3.htmlFor ="thirdinp"
         lblc3.textContent = "Lieu";
         document.getElementById('allcandidat').appendChild(lblc3);
   
         var inp3 = document.createElement("input");
         inp3.type = "thirdinp";
         inp3.name = "thirdinp";
         inp3.id = "thirdinp";
         inp3.value =Lieu.innerHTML;   
         document.getElementById('allcandidat').appendChild(inp3); /* fin troisième label/input */
   
         
         var lblc4 = document.createElement('label'); /* quatrième label/input */
         lblc4.id ="lblc4";
         lblc4.htmlFor ="fourthinp"
         lblc4.textContent = "URL de l'offre";
         document.getElementById('allcandidat').appendChild(lblc4);
   
         var inp4 = document.createElement("input");
         inp4.type = "fourthinp";
         inp4.name = "fourthinp";
         inp4.id = "fourthinp";
         inp4.value =Url;    
         document.getElementById('allcandidat').appendChild(inp4); /* fin quatrième label/input */
   
         var lblc5 = document.createElement('label'); /* cinquième label/selector */
         lblc5.id ="lblc5";
         lblc5.htmlFor ="fifthinp"
         lblc5.textContent = "Type";
         document.getElementById('allcandidat').appendChild(lblc5);
   
         var selectc2 = document.createElement('select');
         selectc2.name = "fifthinp";
         selectc2.id = "fifthinp";
          document.getElementById('allcandidat').appendChild(selectc2);
    
          var l2copt1 =  document.createElement('option');
          l2copt1.textContent = 'Alternance';
          document.getElementById("fifthinp").appendChild(l2copt1);
    
          var l2copt2 =  document.createElement('option');
          l2copt2.textContent = 'Stage';
          document.getElementById("fifthinp").appendChild(l2copt2);
          
          var l2copt3 =  document.createElement('option');
          l2copt3.textContent = 'CDI';
          document.getElementById("fifthinp").appendChild(l2copt3);
          
                var l2copt4 =  document.createElement('option');
          l2copt4.textContent = 'CDD';
          document.getElementById("fifthinp").appendChild(l2copt4);
          
          var l2copt5 =  document.createElement('option');
          l2copt5.textContent = 'Graduate Program';
          document.getElementById("fifthinp").appendChild(l2copt5);
          
          var l2copt6 =  document.createElement('option');
          l2copt6.textContent = 'VIE/VIA';
          document.getElementById("fifthinp").appendChild(l2copt6); /* fin cinquième label/selector */
   
         var lblc6 = document.createElement('label'); /* sixième label/selector */
         lblc6.id ="lblc6";
         lblc6.htmlFor ="sixth"
         lblc6.textContent = "Statut";
         document.getElementById('allcandidat').appendChild(lblc6);
   
         var selectc1 = document.createElement('select');
         selectc1.name = "sixth";
         selectc1.id = "sixth";
         document.getElementById('allcandidat').appendChild(selectc1);
   
         var l1copt1 =  document.createElement('option');
         l1copt1.textContent = 'Prêt à postuler';
         document.getElementById("sixth").appendChild(l1copt1);
   
         var l1copt2 =  document.createElement('option');
         l1copt2.textContent = 'Pas prêt à postuler';
         document.getElementById("sixth").appendChild(l1copt2); /* fin sixième label/selector */
   
         var lblc7 = document.createElement('label'); /* septième label/input */
         lblc7.id ="lblc7";
         lblc7.htmlFor ="seventhinp"
         lblc7.textContent = "Description";
         document.getElementById('allcandidat').appendChild(lblc7);
   
         var inp7 = document.createElement("input");
         inp7.type = "seventhinp";
         inp7.name = "seventhinp";
         inp7.id = "seventhinp";
         inp7.value =Description.innerHTML;    
         document.getElementById('allcandidat').appendChild(inp7); /* fin septième label/input */
   
         
   
   
         var btnadd = document.createElement('button');
         btnadd.textContent = "Ajouter";
         btnadd.onclick = OnAddContact;
   
         document.getElementById("allcandidat").appendChild(btnadd);
     
   
         c += 1;
      }
      else if (c == 1) {
         document.getElementById("allcandidat").style.visibility = 'visible';
      }
   
   }
   
   var onaddc = 0;
   
   function OnAddContact(){ /* boite de chargement en appuyant sur ajouter */
   
   if (onaddc == 0) {
   
   var OnAddContact = document.createElement("div");
   OnAddContact.id = "onAddContact";
   document.body.appendChild(OnAddContact)
   
   document.getElementById("allcandidat").style.visibility = 'hidden';
   onaddc += 1;
   
   var mycontact = document.createElement("div");
   mycontact.id = "mc";
   mycontact.textContent="Ajouter le contact";
   
   document.getElementById('onAddContact').appendChild(mycontact);
   
   var loadaddcontact = document.createElement("div");
   loadaddcontact.id = "loader";
   
   document.getElementById('onAddContact').appendChild(loadaddcontact);
   my_timer(x);
   
   
   }
   else{
      my_timer(x);
      document.getElementById("allcandidat").style.visibility = 'hidden';
      document.getElementById("onAddContact").style.visibility = 'visible';
   }
   }
   
   var x = 0;
   function my_timer(x){setInterval(function(){ /* affiche la derniere page apres 5 secondes */
       x+= 1;
   
      if (x == 5) {
         afterload();
         document.getElementById("onAddContact").style.visibility = 'hidden';
   
         return;
      }
     },1000);}
   
     var after = 0;
     function afterload(){ /* boite final */
        if (after == 0){
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
         wasadd.textContent= "L'offre a été ajoutée à tes candidatures, dans la colonne :  "
         
         document.getElementById('end').appendChild(wasadd);
   
         var mesct = document.createElement("div");
         mesct.id = "mesct"
         mesct.textContent= "Prêt à postuler "
         
         document.getElementById('end').appendChild(mesct);
   
         var openimg = document.createElement('a'); //div pour accéder à mes candidatures------------------------------
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
        else{
         document.getElementById("end").style.visibility = 'visible';
        }
     }