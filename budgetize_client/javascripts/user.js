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
                    
                    localStorage.setItem('loggedIn', object.id)
                    const user = new User(object)
                    const budget = new Budget(object.budget)
                    object.expenses.forEach(expense => {
                        new Expense(expense)
                    })
                    // User.renderLoggedInPage();
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

        let container = document.getElementsByClassName('container')[0];
        container.innerHTML = ''

        // fetch(`http://localhost:3000/users/${loggedIn.id}/budgets`, configObj)
        // .then(resp => resp.json())
        // .then(object => {
        //     debugger
        // })
        
        // budgetService.getBudgets()
        // Budget.addBudget()

    }

    // static renderLoggedOutPage() {
    //     container.innerHTML = '';
    //     createSignInForm();
    //     header.style.visibility = 'hidden';
    // }


}      
        