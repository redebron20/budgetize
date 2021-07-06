// class UserService{
//     constructor(endpoint){
//         this.endpoint = endpoint
//     }

//     loginUserHandler(){
//         let logInForm = document.getElementsById('login-form');
//         let input = document.getElementsByTagName('input');
//         let signUpButton = document.getElementsByClassName('sign-up-button');

//         logInForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             let configObj = {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 body: JSON.stringify({ username: input[0].value, password: input[1].value})
//             }

//             if (input[0].value !== "") { 
//                 fetch('${this.endpoint}/login', configObj)
//                 .then(function(response) {
//                     return response.json();
//                 })
//                 .then(function(object) {
//                     if (object.errors) {
//                         let p = document.createElement('p')
//                         p.innerText = object.errors
//                         logIn.prepend(p);
//                     } else {
//                         loggedIn = object; 
//                         localStorage.loggedIn = object.id;
//                         renderLoggedInPage();
//                     }
//                 })
//                 .catch(function(error) {
//                     container.insertAdjacentHTML('beforebegin', `<p>Something went wrong. Please try again</p>`)
//                 })
//             }
//         })

//         signUpButton.addEventListener('click', function(event) {
//             event.preventDefault();
//             container.innerHTML = '';
//             renderLoginForm();
//         })
//     }

//     createUserHandler(){
//         let signUpForm = document.getElementsById('signup-form');
//         let input = document.getElementsByTagName('input');
//         let logInButton = document.getElementsByClassName('log-in-button');

//         signUpForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             let configObj = {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 body: JSON.stringify({ email: input[0].value, username: input[1].value, password: input[2].value })
//             }

//             if (input[0].value !== "") { 
//                 fetch('${this.endpoint}/users', configObj)
//                 .then(function(response) {
//                     return response.json();
//                 })
//                 .then(function(object) {
//                     if (object.errors) {
//                         let ul = document.createElement('ul');
//                         object.errors.map( (error) => { 
//                             let li = document.createElement('li');
//                             li.innerText = error;
//                             ul.appendChild(li);
//                         })
//                         signUp.prepend(ul);
//                     } else {
//                         loggedIn = object; 
//                         localStorage.loggedIn = object.id;
//                         renderLoggedInPage();
//                     }
//                 })
//                 .catch(function(error) {
//                     container.insertAdjacentHTML('beforebegin', `<p>Something went wrong. Please try again</p>`)
//                 })
//             }
//         })

//         logInButton.addEventListener('click', function(event) {
//             event.preventDefault();
//             container.innerHTML = '';
//             renderLoginForm();
//         })
//     }
    
// }