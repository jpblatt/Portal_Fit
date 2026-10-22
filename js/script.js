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
// AULA 11 - cada objeto agora tem a propriedade categoria
const servicos = [
    {
        nome: "Treino personalizado",
        descricao: "Montagem de treino individual de acordo com seu objetivo.",
        categoria: "treino"
    },
    {
        nome: "Consultoria de treino online",
        descricao: "Planilha de treino e acompanhamento a distância pelo aplicativo.",
        categoria: "treino"
    },
    {
        nome: "Avaliação física",
        descricao: "Bioimpedância e acompanhamento de evolução corporal periódico.",
        categoria: "avaliacao"
    },
    {
        nome: "Reavaliação mensal",
        descricao: "Nova medição de peso, medidas e percentual de gordura para comparar a evolução.",
        categoria: "avaliacao"
    },
    {
        nome: "Acompanhamento nutricional",
        descricao: "Orientação alimentar integrada ao seu plano de treino.",
        categoria: "nutricao"
    }
];

// Testes dos dados no Console (checkpoint 1 da Aula 11)
console.table(servicos);
console.log(servicos[0].categoria);

// Container do DOM onde os cards serão inseridos
const listaServicos = document.querySelector("#listaServicos");

// Monta um card para cada serviço da lista recebida e insere no DOM
// AULA 11 - a função recebe a lista que deve aparecer na tela
function renderizarServicos(lista) {
    listaServicos.innerHTML = "";

    // Lista vazia: mostra uma orientação e encerra a função antes do forEach
    if (lista.length === 0) {
        listaServicos.textContent = "Nenhum serviço foi encontrado nesta categoria.";
        return;
    }

    lista.forEach((servico) => {
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

// Ao abrir a página, mostra o catálogo completo
renderizarServicos(servicos);

// ===================================================
// AULA 11 - Filtro interativo de serviços
// ===================================================

// Encontra o select do filtro e o parágrafo da mensagem
const filtroCategoria = document.querySelector("#filtroCategoria");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

// change: dispara quando o usuário troca a opção do select
filtroCategoria.addEventListener("change", () => {
    // value: devolve o value da option selecionada
    const categoriaEscolhida = filtroCategoria.value;
    console.log(categoriaEscolhida);

    if (categoriaEscolhida === "todos") {
        renderizarServicos(servicos);
        mensagemFiltro.textContent = "Mostrando todos os serviços.";
    } else {
        // filter cria uma NOVA lista só com os serviços da categoria escolhida
        // (o array servicos original não é modificado)
        const servicosFiltrados = servicos.filter((servico) => {
            return servico.categoria === categoriaEscolhida;
        });

        renderizarServicos(servicosFiltrados);
        mensagemFiltro.textContent = servicosFiltrados.length + " serviço(s) encontrado(s).";
    }
});

// ===================================================
// AULA 13 - Serviço favorito salvo no LocalStorage
// (guarda só uma preferência simples, nenhum dado pessoal ou sensível)
// ===================================================

// Encontra o select, o botão e o parágrafo da preferência
const campoFavorito = document.querySelector("#servicoFavorito");
const botaoFavorito = document.querySelector("#btnSalvarFavorito");
const mensagemFavorito = document.querySelector("#favoritoSalvo");

// Devolve o texto da opção (ex.: "Avaliação física") a partir do value (ex.: "avaliacao")
function nomeDoServico(valor) {
    const opcao = campoFavorito.querySelector(`option[value="${valor}"]`);
    return opcao ? opcao.textContent : valor;
}

// Ao clicar, lê a escolha e salva com setItem(chave, valor)
botaoFavorito.addEventListener("click", () => {
    const servico = campoFavorito.value;

    if (servico === "") {
        mensagemFavorito.textContent = "Escolha um serviço primeiro.";
        return;
    }

    localStorage.setItem("servicoFavorito", servico);
    mensagemFavorito.textContent = `Favorito salvo: ${nomeDoServico(servico)}`;
});

// Ao abrir/atualizar a página, recupera o valor com getItem(chave)
const favoritoSalvo = localStorage.getItem("servicoFavorito");

if (favoritoSalvo) {
    campoFavorito.value = favoritoSalvo;
    mensagemFavorito.textContent = `Seu serviço favorito é: ${nomeDoServico(favoritoSalvo)}`;
}
