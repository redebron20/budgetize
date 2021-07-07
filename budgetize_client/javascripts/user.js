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
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email: input[0].value, password: input[1].value })
        }

        if (input[0].value !== "") { 
            fetch('http://localhost:3000/login', configObj)
            .then(response => response.json())
            .then(object => {
                if (object.errors) {
                    let p = document.createElement('p')
                    p.innerText = object.errors
                    logIn.prepend(p);
                } else {
                    loggedIn = object; 
                    localStorage.loggedIn = object.id;
                    User.renderLoggedInPage();
                }
            })
            .catch(function(error) {
                container.insertAdjacentHTML('beforebegin', `<p>Something went wrong. Please try again</p>`)
            })
        }
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
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email: input[0].value, password: input[1].value })
        }

        if (input[0].value !== "") { 
            fetch('http://localhost:3000/users', configObj)
            .then(response => response.json())
            .then(object => {
                if (object.errors) {
                    let ul = document.createElement('ul');
                    object.errors.map( (error) => { 
                        let li = document.createElement('li');
                        li.innerText = error;
                        ul.appendChild(li);
                    })
                    signUp.prepend(ul);
                } else {
                    loggedIn = object; 
                    localStorage.loggedIn = object.id;
                    User.renderLoggedInPage();
                }
            })
            .catch(error => {
                container.insertAdjacentHTML('beforebegin', `<p>Something went wrong. Please try again</p>`)
            })
        }
    })

        logIn.addEventListener('click', function(event) {
            event.preventDefault();
            container.innerHTML = '';
            User.renderLogInForm();
        })
    }

    static renderLoggedInPage(){
        console.log(localStorage.getItem('loggedIn'));
        let container = document.getElementsByClassName('container')[0];
        container.innerHTML = '',
        User.header();

        fetch(`http://localhost:3000/users/${loggedIn.id}/budgets`) 
        .then(resp => resp.json())
        .then(object => {
                listBudgets(object);
        })

    }

    static renderLoggedOutPage() {
        container.innerHTML = '';
        createSignInForm();
        header.style.visibility = 'hidden';
    }

    static header(){
        console.log('you are inside header')
        debugger
        let create = document.getElementsByClassName('create-budget');
        create = Array.from(create);
        let createBudgetDiv = create.find(node => node.nodeName === 'DIV')
        if (createBudgetDiv) {
            createBudgetDiv.innerHTML = '';
        } else {
            createBudgetDiv = document.createElement('div');
            createBudgetDiv.setAttribute('class', 'create-budget');
            createBudgetDiv.setAttribute('data-color', currentColor);
        }
        let divOne = document.createElement('div');
        divOne.setAttribute('class', 'create-and-sort');
        let addBudget = document.createElement('button');
        addBudget.setAttribute('class', 'create-budget button');
        addBudget.innerText = 'Create Budget';
        addBudget.addEventListener('click', function(event) {
            addBudget.style.display = 'none';
            renderBudgetForm();
        })
        let divTwo = document.createElement('div');
        let logOut = document.createElement('button');
        logOut.setAttribute('class', 'logout button');
        logOut.innerText = 'Log Out';
        logOut.addEventListener('click', function(event) {
            event.preventDefault();
            renderLoggedOutPage();
            loggedIn = null;
        })
        divOne.appendChild(addBudget);
        divTwo.appendChild(logOut);
        createBudgetDiv.appendChild(divOne);
        createBudgetDiv.appendChild(divTwo);
        container.prepend(createBudgetDiv);
    }
}      
        