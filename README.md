# Portal Fit

Portal de Serviços Digitais desenvolvido progressivamente ao longo da disciplina, aplicando os conteúdos estudados em cada aula: estrutura HTML, HTML semântico, navegação entre páginas, formulários, fundamentos de acessibilidade, CSS, JavaScript (DOM, eventos, arrays, objetos e funções) e versionamento no GitHub.

## Sobre o projeto

O Portal Fit é um site fictício de serviços de academia, com planos de treino personalizado, avaliação física e acompanhamento nutricional.

## Estrutura do projeto

```
Potal_Fit/
├── index.html         # Página inicial
├── servicos.html       # Página de serviços (consulta interativa + catálogo dinâmico)
├── contato.html        # Página de contato (com formulário)
├── css/
│   └── style.css       # Estilos do site
├── js/
│   └── script.js        # Consulta interativa + catálogo dinâmico de serviços
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
- CSS para identidade visual do portal.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (DOM, arrays, objetos, funções)

## Autor

João Pedro Wolff Blatt

## Publicação


