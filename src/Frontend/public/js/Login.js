function checkLogin() {
    var EMAIL = $("#log").val();
    var PASSWORD = $("#pass").val();

    var url = "http://127.0.0.1:1234/checkLogin/" + EMAIL;

    $.get(url, function (resultado) { //confere os dados da tela de login e, caso o email e senha inseridos estejam no banco de dados e a senha seja do respectivo email, o usuário ganha acesso a área do seu login, seja de admin ou de hoteleiro

        var objeto = JSON.parse(resultado);
        console.log(objeto);
        console.log(objeto[0].Estabelecimento_id);
        //console.log(Object.keys(objeto).length);

        localStorage.clear();
        localStorage.setItem("id_used", objeto[0].Estabelecimento_id);


        if (objeto[0].Senha == PASSWORD) { loadPage(objeto[0].Estabelecimento_id); }

    });
}

function loadPage(id) { //direciona o usuário a tela da área de seu login, sendo a área de admin ou de hoteleiro
    if (id) { location.replace("MenuParceiro.html"); }

    else { location.replace("MenuAdmin.html"); }
}