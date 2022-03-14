const form = document.forms.hero
form.addEventListener("submit",makeHero, false)

function makeHero(event) {
    event.preventDefault()
    const hero = form.name.value
    hero.realName = form.realName.value
    alert(JSON.stringify(hero))
  


 hero.powers = [];

for(i=0; i < form.powers.length; i++) {
    
    if(form.powers[i].checked) {
        hero.powers.push(form.powers[i].value)
    
    }
}
for(i = 0; i < form.value.length; i++) {
    if(form.type[i].checked) {
        hero.type = form.type[i].value
        break;
    }
}
}


