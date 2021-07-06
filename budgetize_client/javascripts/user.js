class User{

    static container = document.getElementsByClassName('container');

    constructor(id, username, email){
        this.id = id
        this.username = username
        this.email = email
    }

    static renderLoginForm(){
        User.container.innerHTML += `
        <div class="log-in">
            <form class="login-form">
            <h3>Log In:</h3>
                <div class='wrapper'>
                    Username: <input type="text" id="username" name="username"/><br>
                    Password: <input type="password" id="password" name="password" /><br>

                    <div class='centered-button'>
                        <input type="submit" value="Log In" class='button' /> 
                        or <button class="sign-up-button">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
        `
    }

    static renderSignupForm(){
        User.container.innerHTML += `
        <div class="sign-up">
            <form id="signup-form">
            <h3>Sign Up:</h3>
                <div class='wrapper'>
                    Email: <input type="text" id="email" name="email"/><br>
                    Username: <input type="text" id="username" name="username"/><br>
                    Password: <input type="password" id="password" name="password" /><br>

                    <div class='centered-button'>
                        <input type="submit" value="Sign Up" class='button' /> 
                        or <button class="log-in-button">Log In</button>
                    </div>
                </div>
            </form>
        </div>
        `
    }

}