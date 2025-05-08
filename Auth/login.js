async function handleLoginSubmit(event) {
    event.preventDefault ();
console.log(event);
const Form = event.target ;
const FormData = new FormData (Form);
const UserName = FormData.get ('username');
const Password =FormData.get ('password');

const body = {
    nombreUsuario: UserName,
    contraseña: Password,

};

try {

    const body = "https://localhost:7027/api/Users/AuthenticateUser";
    const response = await fetch(Url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if(response.status !== 200) {
        throw new Error("Usuario no valido")
    }

    const json = await response.json();
    localStorage.setItem("authToken", json.token);
    const adminPanelUrl = `${window.location.origin}/admin/index.html`;
    window.location.href = adminPanelUrl;
} catch (error) {
    alert(error.message); 
}
}