var sidemenu=document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-200px"
}






const scriptURL = 'https://script.google.com/macros/s/AKfycbz07uATG3GuLcwF_64j4ljnfxNbFswL9K4C_wWJnv0L0dt6wmauJSat6FXLRqR8BimH/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});