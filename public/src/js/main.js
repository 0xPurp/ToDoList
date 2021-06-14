// structure body html
let body = document.body;
let br = document.createElement('br');
let section = document.createElement('section');
body.prepend(section);
let divTitre = document.createElement('div');
let divContenu = document.createElement('div');
section.append(divTitre, divContenu);
let h1 = document.createElement('h1');
h1.innerHTML = "To Do List";
divTitre.append(h1);
let divc;
var divsC;
for (let i = 0; i < 3; i++) {
    divc = document.createElement('div');
    divContenu.append(divc);
    divsC = divContenu.querySelectorAll('div');
};
// ./structure

    // div 1 
let div1Label = document.createElement('label');
div1Label.innerHTML = "Ajouter une tâche :";

let div1Input = document.createElement('input');
div1Input.value = "";

let boutonAjout = document.createElement('button');
boutonAjout.innerHTML = "Ajouter";

divsC[0].append(div1Label, br, div1Input, boutonAjout);
    // ./div 1

    // div 2 
let bouton;
let boutonsC2;
for (let i = 0; i < 3; i++) {
    bouton = document.createElement('button');
    divsC[1].append(bouton);
    boutonsC2 = divsC[1].querySelectorAll('button');
    switch(i){
        case 0:
            boutonsC2[0].innerHTML = "À faire";
            break;
        case 1:
            boutonsC2[1].innerHTML = "Terminé";
            break;
        case 2:
            boutonsC2[2].innerHTML = "Tous";
            break;
    }
};
// ./div2

    // div 3 
    body.style.padding = "1%";
    body.style.margin = "0%";
    body.style.backgroundColor = "Linen";
    section.style.margin = "0% 10%";
    divTitre.style.backgroundColor = "purple";
    divTitre.style.padding = "0.5% 1%";
    divTitre.style.marginBottom = "2%";
    divTitre.style.borderRadius = "5px";
    h1.style.color = "cyan";
    h1.style.fontWeight = "bold";
    h1.style.fontFamily = "Impact"
    divContenu.style.backgroundColor = "white";
    divContenu.style.borderRadius = "5px";
    divContenu.style.padding = "2%";
    divContenu.style.borderTop = "5px solid purple";
    divsC[0].style.borderBottom = "solid 3px Linen";
    divsC[0].style.paddingBottom = "2%";
    div1Input.style.border = "2px solid Linen";
    div1Input.style.borderRadius = "5px";
    divsC[1].style.display = "flex";
    divsC[1].style.justifyContent = "flex-end";
    divsC[1].style.padding = "2% 0%";
    divsC[2].style.padding = "1% 0%"
    // ./div 3
// boutons
let allBoutons = document.querySelectorAll('button');
for (let i = 0; i < allBoutons.length; i++) {
    allBoutons[i].style.backgroundColor = "MediumPurple";
    allBoutons[i].style.color = "white";
    allBoutons[i].style.border = "none";
    allBoutons[i].style.borderRadius = "5px";
    allBoutons[i].style.margin = "0.5%";
    allBoutons[i].style.padding = "0.5% 1%"
}
div1Input.focus();

// Bouton ajouter
boutonAjout.addEventListener('click', function(){
    if (div1Input.value != ""){

        let divTache = document.createElement('div');
        divTache.setAttribute('class', "divTache");
        divTache.style.backgroundColor = "Gainsboro";
        divTache.style.height = "max-content";
        divTache.style.padding = "2%";
        divTache.style.margin = "1% 0%";
        divTache.style.borderRadius = "4px";
        divsC[2].append(divTache);

        let divSpan = document.createElement('div');
        let spanTache = document.createElement('span');
        spanTache.innerHTML = div1Input.value;
        divSpan.style.width = "75%"
        divSpan.append(spanTache);
// ./bouton ajouter

            // Icons
        let divIcon = document.createElement('div');
        let iconImportant = document.createElement('i');
        iconImportant.setAttribute('class', "fas fa-exclamation");
        iconImportant.style.marginRight = "25px";
        let iconCheck = document.createElement('i');
        iconCheck.setAttribute('class', "fas fa-check-circle");
        iconCheck.style.marginRight = "25px";
        iconCheck.style.color = "MediumTurquoise"
        let iconEdit = document.createElement('i');
        iconEdit.setAttribute('class', "fas fa-edit");
        iconEdit.style.marginRight = "25px";
        iconEdit.style.color = "Khaki"
        let iconDelete = document.createElement('i');
        iconDelete.setAttribute('class', "fas fa-trash-alt");
        iconDelete.style.marginRight = "25px";
        iconDelete.style.color = "red";
        iconDelete.setAttribute('id', "iconDel");
        divIcon.append(iconImportant,iconCheck, iconEdit, iconDelete);
        divTache.style.display = "flex";
        divTache.style.justifyContent = "space-between";
        let icons = divIcon.querySelectorAll('i');
        divTache.append(divSpan, divIcon)
        div1Input.value = "";
        
        iconImportant.addEventListener('click', function(){
            divsC[2].prepend(divTache);
            iconImportant.style.display = "none"
            let iconDanger = document.createElement('i');
            iconDanger.setAttribute('class', "fas fa-exclamation-triangle");
            iconDanger.style.color = "purple";
            iconDanger.style.marginRight = "25px";
            divIcon.prepend(iconDanger);

            iconDanger.addEventListener('click', function(){
                iconImportant.style.display = "inline-block";
                iconDanger.style.display = "none"
                divsC[2].append(divTache);
            })
        })
        // ./Icons

        // Valider la tache
        iconCheck.addEventListener('click', function(){
            if(divTache.style.backgroundColor == "green"){
                divTache.style.backgroundColor = "Gainsboro";
            } else {
                divTache.style.backgroundColor = "green";
            }
        });
        // ./Valider
    
        // Modifier la tache
        iconEdit.addEventListener('click', function(){
            spanTache.style.display = "none";
            iconImportant.style.display = "none";
            iconCheck.style.display = "none";
            iconEdit.style.display = "none";
            iconDelete.style.display = "none";
            let iconSave = document.createElement('i');
            iconSave.setAttribute('class', "fas fa-save");
            iconSave.style.marginRight = "20px";
            iconSave.style.color = "Khaki"
            divIcon.append(iconSave);
            let inputEdit = document.createElement('input');
            divSpan.append(inputEdit);
            inputEdit.focus();
        // ./Modifier


            // Sauvegarder
            iconSave.addEventListener('click', function(){
                inputEditValue = inputEdit.value;
                inputEdit.style.display = "none";
                spanTache.innerHTML = inputEditValue;
                spanTache.style.display = "block";
                iconImportant.style.display = "inline-block";
                iconCheck.style.display = "inline-block";
                iconEdit.style.display = "inline-block";
                iconDelete.style.display = "inline-block";
                iconSave.style.display = "none";
            });

            // Sauvegarder avec la touche ENTER
            body.addEventListener('keydown', function(e){
                if (e.keyCode === 13) {
                    if (inputEdit.value != ""){
                        iconSave.click();
                    };
                };
            });
        });
        // ./Sauvegarder

        // Supprimer la tache
        iconDelete.addEventListener('click', function(){
            spanTache.style.display = "none";
            iconImportant.style.display = "none";
            iconCheck.style.display = "none";
            iconEdit.style.display = "none";
            iconDelete.style.display = "none";
            let spanTache2 = document.createElement('span');
            spanTache2.innerHTML = "Êtes-vous sûr de vouloir supprimer cette tâche ?";
            spanTache2.style.color = "red";
            divSpan.append(spanTache2);
            let boutonOUI = document.createElement('button');
            boutonOUI.innerHTML = "OUI";
            boutonOUI.style.backgroundColor = "green";
            boutonOUI.style.color = "white";
            boutonOUI.style.marginRight = "5px";
            boutonOUI.style.borderRadius = "5px";
            boutonOUI.style.border = "none";
            let boutonNON = document.createElement('button');
            boutonNON.innerHTML = "NON";
            boutonNON.style.backgroundColor = "red";
            boutonNON.style.color = "white";
            boutonNON.style.marginRight = "5px";
            boutonNON.style.borderRadius = "5px";
            boutonNON.style.border = "none";
            divIcon.append(boutonOUI, boutonNON);

            boutonOUI.addEventListener('click', function(){
                divsC[2].removeChild(divTache);
            });
            boutonNON.addEventListener('click', function(){
                iconImportant.style.display = "inline-block";
                iconCheck.style.display = "inline-block";
                iconEdit.style.display = "inline-block";
                iconDelete.style.display = "inline-block";
                boutonOUI.style.display = "none";
                boutonNON.style.display = "none";
                spanTache.style.display = "block";
                spanTache2.style.display = "none";
            });
        });
        // ./Supprimer
        
        let tacheAll = divsC[2].querySelectorAll('.divTache');

        for (let i = 0; i < tacheAll.length; i++) {
            boutonsC2[0].addEventListener('click', function(){
                if (tacheAll[i].style.backgroundColor != "green") {
                    tacheAll[i].style.display = "flex";
                } else {
                    tacheAll[i].style.display = "none";
                };
            });
            boutonsC2[1].addEventListener('click', function(){
                if (tacheAll[i].style.backgroundColor != "green") {
                    tacheAll[i].style.display = "none";
                } else {
                    tacheAll[i].style.display = "flex";
                };
            });
            boutonsC2[2].addEventListener('click', function () {
                tacheAll[i].style.display = 'flex'
            });
        };
    };
});

body.addEventListener('keydown', function(e){
    if (e.keyCode === 13){
        if (div1Input.value != ""){
            boutonAjout.click()
        };
    };
});