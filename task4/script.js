const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

document.getElementById('loginform').addEventListener('submit', function (event) {
    event.preventDefault();

    let useremail = document.getElementById('emailuser').value;
    let password = document.getElementById('passuser').value;

    if (useremail === 'chetan' && password === 'javascript') {
        document.getElementById('loginStatus').textContent = 'Login successful!';
        // Redirect to the welcome page after successful login
        window.location.href = 'welcome.html';
    } else {
        document.getElementById('loginStatus').textContent = 'Invalid username or password';
    }
});
