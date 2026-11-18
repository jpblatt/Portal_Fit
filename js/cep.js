// ===================================================
// ATIVIDADE FINAL - Consulta de endereço por CEP (API ViaCEP)
// ===================================================

// Encontra os elementos no DOM pelos mesmos ids usados no HTML
const campoCep = document.querySelector("#cep");
const botaoBuscarCep = document.querySelector("#btnBuscarCep");
const statusCep = document.querySelector("#statusCep");
const resultadoCep = document.querySelector("#resultadoCep");

// Função assíncrona: pode esperar a resposta da API sem travar a página
async function buscarCep() {
    // Remove tudo que não for número (pontos, hífen, espaços...)
    const cep = campoCep.value.replace(/\D/g, "");

    // 1) Validação de formato: precisa ter exatamente 8 números
    if (cep.length !== 8) {
        statusCep.textContent = "Digite um CEP com 8 números.";
        resultadoCep.textContent = "";
        campoCep.focus();
        return; // encerra a função e não consulta a API
    }

    // 2) Carregamento: avisa o usuário enquanto espera a resposta
    statusCep.textContent = "Consultando CEP...";
    resultadoCep.textContent = "";
    botaoBuscarCep.disabled = true;

    try {
        // fetch faz uma requisição GET para a API do ViaCEP
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        // resposta.ok é falso quando o código HTTP não indica sucesso (ex.: 400, 500)
        if (!resposta.ok) {
            throw new Error("Falha na consulta ao serviço.");
        }

        // Converte o JSON recebido em um objeto JavaScript
        const dados = await resposta.json();

        // 3) CEP com formato válido, mas inexistente: o ViaCEP devolve { erro: true }
        if (dados.erro) {
            statusCep.textContent = "CEP não encontrado.";
            resultadoCep.textContent = "";
            return;
        }

        // 4) Sucesso: mostra o endereço no DOM
        statusCep.textContent = "CEP encontrado.";
        resultadoCep.textContent =
            `${dados.logradouro || "Logradouro não informado"} - ` +
            `${dados.bairro || "Bairro não informado"} - ` +
            `${dados.localidade}/${dados.uf}`;
    } catch (erro) {
        // 5) Falha de comunicação (sem internet, API fora do ar, erro HTTP)
        statusCep.textContent = "Não foi possível consultar o CEP agora.";
        resultadoCep.textContent = "";
        console.error(erro);
    } finally {
        // Executa sempre, com sucesso ou erro: libera o botão novamente
        botaoBuscarCep.disabled = false;
    }
}

// Quando o usuário clicar no botão, executa a função buscarCep
botaoBuscarCep.addEventListener("click", buscarCep);

// Permite buscar apertando Enter dentro do campo de CEP
campoCep.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        buscarCep();
    }
});
