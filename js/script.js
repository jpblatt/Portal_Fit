// Consulta interativa de serviço - página servicos.html
// Encontra os elementos no DOM pelos mesmos ids usados no HTML
const campoServico = document.querySelector("#servico");
const botaoConsultar = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");

// Escuta o clique no botão e decide qual mensagem mostrar
botaoConsultar.addEventListener("click", () => {
    const escolha = campoServico.value;

    if (escolha === "") {
        resultado.textContent = "Escolha um serviço antes de consultar.";
    } else if (escolha === "treino") {
        resultado.textContent = "Treino personalizado: agende uma avaliação inicial para montarmos seu plano de treino sob medida.";
    } else if (escolha === "avaliacao") {
        resultado.textContent = "Avaliação física: traga roupas leves. A bioimpedância é feita em jejum de 2 horas para maior precisão.";
    } else if (escolha === "nutricao") {
        resultado.textContent = "Acompanhamento nutricional: leve seus exames recentes, se tiver, para a primeira consulta com o nutricionista parceiro.";
    } else {
        resultado.textContent = "Serviço não identificado.";
    }
});
