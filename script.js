// Credentials zako
const validUser = "Zamer";
const validPass = "admin123";

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('login-message');
    const card = document.querySelector('.card');

    if (user === validUser && pass === validPass) {
        msg.innerText = "Inapakia... Subiri kidogo";
        msg.style.color = "#03dac6";
        
        setTimeout(() => {
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('dashboard-page').style.display = 'block';
        }, 1200);
    } else {
        msg.innerText = "Ety nimekosea! Angalia tena.";
        msg.style.color = "#ff4444";
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 400);
    }
});

function logout() {
    location.reload(); // Inakurudisha mwanzo
  
}
