// Dados do admin para o acesso
let adminEmail = "admin@email.com"
let adminSenha = 12345


function login() {
    // Input com os dados do usuário
    let userEmail = document.getElementById("userEmail").value
    let userSenha = document.getElementById("userPassword").value
    //Verificação
    if (userEmail == "" && userSenha == "") {
        alert("Digite quaisquer e-mail e senha válidos!")
    } else if (userEmail && userSenha == "" || userSenha && userEmail == "") {
        alert("Digite uma senha e um e-mail válidos!")
    } else {
        if (userEmail == adminEmail && userSenha == adminSenha) {
            // Acesso caso os dados do usuário sejam os mesmos do admin
            alert("Acesso liberado! Bem vindo ao sistema.")
        } else {
            alert("Acesso negado! Cadastre-se no sistema.")
        }
    }
}