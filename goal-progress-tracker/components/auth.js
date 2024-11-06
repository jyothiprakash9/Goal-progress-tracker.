export function handleAuth() {
    const authSection = document.getElementById("auth-section");
    const appSection = document.getElementById("app");

    function authenticateUser() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password.length >= 6) {
            localStorage.setItem("user", JSON.stringify({ email, password }));
            authSection.style.display = "none";
            appSection.style.display = "block";
        } else {
            document.getElementById("auth-message").innerText = "Please enter valid credentials.";
        }
    }

    document.getElementById("auth-form").onsubmit = authenticateUser;
}
