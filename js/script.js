/*Viene fornito un layout di base. Come prima cosa nel file js
definitevi un array di oggetti che rappresentano i membro del team
(prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie
per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html,
stampiamo dinamicamente una card per ogni membro del team.*/

 
//1. definisco array di oggetti che rappresentato i membri (nome,ruolo,img);
const arrObjMembers = [
     {
        name : 'Wayne Barnett',
        profession : 'Founder & CEO',
        img : 'img/wayne-barnett-founder-ceo.jpg'
     },
     {
        name : 'Angela Caroll',
        profession : 'Chief Editor',
        img : 'img/angela-caroll-chief-editor.jpg'
     },
     {
        name : 'Walter Gordon',
        profession : 'Office Manager',
        img : 'img/walter-gordon-office-manager.jpg'
     },
     {
        name : 'Angela Lopez',
        profession : 'Social Media Manager',
        img : 'img/angela-lopez-social-media-manager.jpg'
     },
     {
        name : 'Scott Estrada',
        profession : 'Developer',
        img : 'img/scott-estrada-developer.jpg'
     },
     {
        name : 'Barbara Ramos',
        profession : 'Graphic Designer',
        img : 'img/barbara-ramos-graphic-designer.jpg'
     }
 ];
 

//2. stampiamo nel DOM le varie card dei membri tramite js;
let containerCards = document.querySelector('.team-container'); //contenitore di tutte le card nel DOM

 //inserisco il codice nel container

 let arrSaveCards = [];
  
for (let chiave = 0; chiave < arrObjMembers.length; chiave++) {

    let cardsCode = `<div class="team-card">
    <div class="card-image">
    <img
    src="${arrObjMembers[chiave].img}"
    alt="Wayne Barnett"
    />
    </div>
    <div class="card-text">
   <h3>${arrObjMembers[chiave].name}</h3>
   <p>${arrObjMembers[chiave].profession}</p>
    </div>
    </div>`;

 arrSaveCards.push(cardsCode);

containerCards.innerHTML = arrSaveCards; //stampo le carte

}
 

