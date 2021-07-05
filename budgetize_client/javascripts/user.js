class User{

    static signupForm = document.getElementById("signup-form")
    static loginForm = document.getElementById("login-form")

    constructor(id, username, email){
        this.id = id
        this.username = username
        this.email = email
    }

    
    static renderSignupForm(){
        User.signupForm.innerHTML += `
        <form class="signup-form">
          <h3>Sign Up:</h3>
            <div class='wrapper'>
                Email: <input type="text" id="email" name="email"/><br>
                Username: <input type="text" id="username" name="username"/><br>
                Password: <input type="password" id="password" name="password" /><br>

                <div class='centered-button'>
                    <input type="submit" value="Sign Up" class='button' /> 
                    or <button class="log-in button">Log In</button>
                </div>
            </div>
        </form>
        `
    }

    static renderLoginForm(){
        User.loginForm.innerHTML += `
        <form class="login-form">
          <h3>Log In:</h3>
            <div class='wrapper'>
                Username: <input type="text" id="username" name="username"/><br>
                Password: <input type="password" id="password" name="password" /><br>

                <div class='centered-button'>
                    <input type="submit" value="Log In" class='button' /> 
                    or <button class="sign-up button">Sign Up</button>
                </div>
            </div>
        </form>
        `
    }

    handleClick = () => {
        if (event.target.innerText === 'Delete'){
            this.element.remove()
            budgetService.deleteBudget(this.id)
        }
    }

}