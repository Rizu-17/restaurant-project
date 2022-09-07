let submit = document.querySelector(".submit-button");
let username = document.querySelector(".name");
let password = document.querySelector(".password");
let output = document.querySelector(".output");

submit.addEventListener("click", handleLogin);

async function handleLogin(e) {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:3000/api/admin/login", {
      name: username.value,
      password: password.value,
    });
    if (res.status === 200) {
      window.location.replace("./admin_panel.html");
    }
  } catch (err) {
    output.innerHTML = "<p>Login Failed</p>";
  }
}
