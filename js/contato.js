// ===================================================
// AULA 12 - Validação do formulário de contato com JavaScript
// (a validação HTML com required, minlength e type="email" continua ativa)
// ===================================================

// Encontra o formulário, os campos e o parágrafo da mensagem pelos ids do HTML
const formulario = document.querySelector("#formContato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoServico = document.querySelector("#servico");
const campoMensagem = document.querySelector("#mensagem");
const mensagemForm = document.querySelector("#mensagemForm");

// submit: dispara quando o formulário é enviado (botão ou Enter)
formulario.addEventListener("submit", (evento) => {
    // impede o envio/recarregamento padrão da página enquanto tratamos os dados
    evento.preventDefault();
    console.log("Formulário enviado");

    // .value lê o conteúdo do campo; .trim() remove espaços do começo e do fim
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const servico = campoServico.value;
    const mensagem = campoMensagem.value.trim();

    console.log(nome, email, servico, mensagem);

    // Se algum campo obrigatório estiver vazio (|| = OU), orienta e para com return
    if (nome === "" || email === "" || servico === "" || mensagem === "") {
        mensagemForm.textContent = "Preencha os campos obrigatórios antes de continuar.";
        mensagemForm.classList.remove("sucesso");
        mensagemForm.classList.add("erro");
        return;
    }

    // Tudo preenchido: mostra a confirmação usando template string
    mensagemForm.textContent = `Obrigado, ${nome}! Sua solicitação foi registrada e nossa equipe vai responder no e-mail ${email}.`;
    mensagemForm.classList.remove("erro");
    mensagemForm.classList.add("sucesso");

    // Limpa os campos depois da confirmação
    formulario.reset();
});
