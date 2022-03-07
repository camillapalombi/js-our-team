/*Viene fornito un layout di base. Come prima cosa nel file js
definitevi un array di oggetti che rappresentano i membro del team
(prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie
per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html,
stampiamo dinamicamente una card per ogni membro del team.*/

 //1. definisco array di oggetti che rappresentato i membri (nome,ruolo,img);

 //2. stampiamo nel DOM le varie card dei membri tramite js;

 
 //1:
const arrObjMembers = [
     {
        name : 'Wayne Barnett',
        profession : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg'
     },
     {
        name : 'Angela Caroll',
        profession : 'Chief Editor',
        img : 'angela-caroll-chief-editor-jpg'
     },
     {
        name : 'Walter Gordon',
        profession : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg'
     },
     {
        name : 'Angela Lopez',
        profession : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg'
     },
     {
        name : 'Scott Estrada',
        profession : 'Developer',
        img : 'scott-estrada-developer.jpg'
     },
     {
        name : 'Barbara Ramos',
        profession : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg'
     }
 ];
 console.log(arrObjMembers);