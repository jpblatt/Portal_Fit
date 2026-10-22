# Portal Fit

Portal de Serviços Digitais desenvolvido progressivamente ao longo da disciplina, aplicando os conteúdos estudados em cada aula: estrutura HTML, HTML semântico, navegação entre páginas, formulários, fundamentos de acessibilidade, CSS, JavaScript (DOM, eventos, arrays, objetos e funções) e versionamento no GitHub.

## Sobre o projeto

O Portal Fit é um site fictício de serviços de academia, com planos de treino personalizado, avaliação física e acompanhamento nutricional.

## Estrutura do projeto

```
Potal_Fit/
├── index.html         # Página inicial
├── servicos.html       # Página de serviços (consulta, catálogo com filtro, favorito)
├── contato.html        # Página de contato (com formulário)
├── css/
│   └── style.css       # Estilos do site
├── js/
│   ├── script.js        # Consulta, catálogo, filtro e serviço favorito (LocalStorage)
│   └── contato.js       # Validação do formulário de contato
└── img/
    └── treino-hero.svg  # Imagem ilustrativa da página inicial
```

## Funcionalidades

- Três páginas navegáveis: início, serviços e contato;
- Menu de navegação funcionando entre as páginas;
- Uso de HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`);
- Títulos, parágrafos, listas, links e imagem com texto alternativo;
- Formulário de contato com `label` associado a cada campo e validação HTML básica (`required`, `minlength`, tipos `email`/`tel`);
- Consulta interativa de serviço: seleciona um serviço e recebe uma orientação diferente para cada um, usando JavaScript (DOM, evento `click` e `if`/`else`);
- Catálogo dinâmico de serviços: os serviços são mantidos em um array de objetos (`nome`, `descricao`) e os cards são criados automaticamente no DOM com `forEach`, `document.createElement` e a função `renderizarServicos()`;
- Filtro interativo por categoria: cada serviço tem a propriedade `categoria`; ao trocar a opção do `select` (evento `change` + `value`), o `filter` cria uma nova lista e `renderizarServicos(lista)` atualiza os cards sem recarregar a página, com mensagem para categoria sem resultados;
- Validação do formulário de contato com JavaScript (evento `submit`, `preventDefault()`, `.value`/`.trim()` e `if` com `||`), mantendo a validação HTML e exibindo mensagem de orientação ou confirmação no DOM;
- Serviço favorito salvo no navegador com `localStorage.setItem()` e recuperado com `localStorage.getItem()` ao atualizar a página (sem armazenar dados pessoais);
- CSS para identidade visual do portal.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (DOM, eventos, arrays, objetos, funções, filter, validação de formulário, LocalStorage)

## Autor

João Pedro Wolff Blatt

## Publicação


