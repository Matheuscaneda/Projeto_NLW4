// UUID => universally unique identifier

interface DadosDeEnvioEmail{
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail){
    //Biblioteca para enviar emails
    
    console.log( para, id, assunto, texto);

}

class EnviarEmailParaUsuario{

    send(){
        enviarEmail({
            para:"matheuscacorreia@gmail.com",
            id: "9899",
            assunto: "Olá",
            texto: "Tudo bem?"});
    }
}