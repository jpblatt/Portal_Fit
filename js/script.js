// ===================================================
// AULA 08 - Consulta interativa de serviço
// ===================================================

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

// ===================================================
// AULAS 09 e 10 - Catálogo dinâmico de serviços
// ===================================================

// Lista de serviços do Portal Fit, organizada como array de objetos
const servicos = [
    {
        nome: "Treino personalizado",
        descricao: "Montagem de treino individual de acordo com seu objetivo."
    },
    {
        nome: "Avaliação física",
        descricao: "Bioimpedância e acompanhamento de evolução corporal periódico."
    },
    {
        nome: "Acompanhamento nutricional",
        descricao: "Orientação alimentar integrada ao seu plano de treino."
    }
];

// Testes dos dados no Console (checkpoint 1 da atividade)
console.table(servicos);
console.log(servicos[0].nome);
console.log(servicos[1].descricao);

servicos.forEach((servico) => {
    console.log(servico.nome);
});

// Container do DOM onde os cards serão inseridos
const listaServicos = document.querySelector("#listaServicos");

// Monta um card para cada serviço do array e insere no DOM
function renderizarServicos() {
    listaServicos.innerHTML = "";

    servicos.forEach((servico) => {
        const card = document.createElement("article");
        card.classList.add("card");

        const titulo = document.createElement("h3");
        titulo.textContent = servico.nome;

        const descricao = document.createElement("p");
        descricao.textContent = servico.descricao;

        card.append(titulo, descricao);
        listaServicos.appendChild(card);
    });
}

renderizarServicos();
