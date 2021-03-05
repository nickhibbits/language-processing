import { update } from './updateUi'
import { postData } from './postLang'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    postData('http://localhost:8081/language', {formText})
    .then(() => update());
    // if (update() != false && postData() != false) {
    //   // return 'success'
    //   console.log("Call and update successful")
    // }
    // else{console.log("error")}
}


export { handleSubmit }
