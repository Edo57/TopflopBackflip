const input= document.forms.search
input.addEventListener('submit',search, false);

function search(event) {
    alert("You Searched for" + input.value)
    event.preventDefault();
    
}
input.value = "Search Here"