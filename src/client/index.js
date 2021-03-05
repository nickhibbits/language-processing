import { handleSubmit } from './js/formHandler'
import { update } from './js/updateUi'
import { postData } from './js/postLang'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
 update,
 postData,
 handleSubmit
}

alert("I EXIST")
console.log("CHANGE!!");

window.addEventListener("DOMContentLoaded", (e) => {
	// get reference to the form elemet
	const form = document.getElementById("form");
	// Add submit event listener on this form
	form.addEventListener("submit", handleSubmit);
});
