class User{

    constructor(id, email){
        this.id = id
        this.email = email
    }

    static renderLogInForm() {
        let container = document.getElementsByClassName('container')[0];

        container.innerHTML += `
        <div class="log-in">
            <form class="login-form">
                <h3>Log In:</h3>
                <div class='wrapper'>
                    Email: <input type="text" id="email" name="email"/><br>
                    Password: <input type="password" id="password" name="password" /><br>
                    <div class='centered-button'>
                        <input type="submit" value="Log In" class='button' /> 
                        or <button class="sign-up-button">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>`

    let logIn = document.getElementsByClassName('log-in')[0];
    let input = document.getElementsByTagName('input');
    let signUp = document.getElementsByClassName('sign-up-button')[0];

    logIn.addEventListener('submit', function(event) {
        event.preventDefault();

        const bodyData = {user: {
            email: input[0].value, 
            password: input[1].value
            }
        }
          
            fetch("http://localhost:3000/login", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(bodyData)
            })
            .then(response => response.json())
            .then(json => {
                localStorage.setItem('jwt_token', json.jwt)
                User.renderUserProfile()
            })
    })

    signUp.addEventListener('click', function(event) {
        event.preventDefault();
        container.innerHTML = '';
        User.renderSignUpForm();
    })      
}

    static renderSignUpForm() {
        let container = document.getElementsByClassName('container')[0];
        container.insertAdjacentHTML('afterbegin', `
            <div class="sign-up">
                <form id="signup-form">
                <h3>Sign Up:</h3>
                    <div class='wrapper'>
                        Email: <input type="text" id="email" name="email"/><br>
                        Password: <input type="password" id="password" name="password" /><br>
                        <div class='centered-button'>
                            <input type="submit" value="Sign Up" class='button' /> 
                            or <button class="log-in-button">Log In</button>
                        </div>
                    </div>
                </form>
            </div>
        `)

    let signUp = document.getElementsByClassName('sign-up')[0];
    let input = document.getElementsByTagName('input');
    let logIn = document.getElementsByClassName('log-in-button')[0];

    signUp.addEventListener('submit', function(event) {
        event.preventDefault();
        let user = {
            email: input[0].value, 
            password: input[1].value
          }

        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then(resp => resp.json())
          .then(user => {
            new User(user.id, user.email, user.password)
            
        })
        
    })

        logIn.addEventListener('click', function(event) {
            event.preventDefault();
            container.innerHTML = '';
            User.renderLogInForm();
        })
    }

    static renderUserProfile() {
        console.log('Welcome Back, User!')
        console.log(localStorage.getItem('jwt_token'));
        fetch('http://localhost:3000/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
          }
        })
        .then(response => response.json())
        .then(json => {
            let user = new User(json.user.id, json.user.email)
            let container = document.getElementsByClassName('container')[0];
         
  
            let card = document.createElement('div')
            card.setAttribute("id", `user-id-${user.id}`)
            container.appendChild(card)
        
            let h1 = document.createElement('h1')
            h1.setAttribute("style", "text-shadow: 2px 2px #00000044")
            h1.innerText = `Welcome back!`
            card.appendChild(h1)
    
            let logIn = document.getElementsByClassName('log-in')[0];
            logIn.remove()

            let logOut = document.createElement('button');
            logOut.setAttribute('class', 'logout button');
            logOut.innerText = 'Log Out';
            logOut.addEventListener('click', function(event) {
                event.preventDefault();
                User.renderLoggedOutPage();

            })
            container.appendChild(logOut)
         
          })
        }

    static renderLoggedOutPage() {
        let container = document.getElementsByClassName('container')[0];
        container.innerHTML = '';
        User.renderLogInForm();
    }

}      
        