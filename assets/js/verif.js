function verifForm(){
    const  nom = document.getElementById('nom').Value;
    const  prenom = document.getElementById('prenom').Value;
    const  email = document.getElementById('email').Value;
    const  telephone = document.getElementById('telephone').Value;
    const  sujet = document.getElementById('sujet').Value;
    const  message = document.getElementById('message').Value;
    if(!nom){
        alert('Veuiller renseigner votre nom');
        return false;
    }
    if(!prenom){
        alert('Veuillez écrire votre prenom');
        return false;
    }
    if(!email){
        alert('Veuillez écrire votre email');
        return false;
    }
    if(!telephone){
        alert('Veuillez écrire votre téléphone');
        return false;
    }
    if(!sujet){
        alert('Veuillez écrire votre sujet');
        return false;
    }
    if(!message || mess == 'votre message'){
        alert('Veuillez écrire votre message');
        return false;
    }
    return true;
}
function verifMessage(champ){
    if(this.Value == 'votre message'){
         this.value == "";
    }
    else if(this.value == "")
{
    this.value = "votre message"
}
}

const formulaire = document.getElementById('verif');
formulaire.addEventListener('submit', verifForm);
// Pour notre champs messaage
const verif_message = document.getElementById('message');
verif_message.addEventListener('click',verifMessage(verif_message));

// Des qu'on quitte
verif_message.addEventListener('blur',verifMessage(verif_message));
verif_message.addEventListener('keyup',function(){
    let str_message = verif_message.value;
    const nombre_car = document.getElementById('cmax').value;
    let operation = nombre_car-str_message.length;
    console.log(str_message.length);
    document.getElementById('number').value = operation;
});