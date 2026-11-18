# Portal Fit

Portal de Serviços Digitais desenvolvido progressivamente ao longo da disciplina de Programação Web Front-End, aplicando os conteúdos de cada aula: HTML semântico, navegação entre páginas, formulários, acessibilidade, CSS responsivo, JavaScript (DOM, eventos, arrays, objetos, funções, filtro, validação, LocalStorage), consumo de API pública e versionamento no GitHub.

## Sobre o projeto

O Portal Fit é um site fictício de uma academia que reúne, em um só lugar, os serviços de treino personalizado, avaliação física e acompanhamento nutricional.
Ele ajuda o aluno a entender rapidamente quais serviços existem, filtrar o que combina com o seu objetivo e receber orientações sobre como começar.
O visitante também pode salvar o seu serviço favorito no navegador, consultar o próprio endereço pelo CEP para verificar a região de atendimento e entrar em contato pelo formulário.

## Tecnologias utilizadas

- HTML5
- CSS3 (Flexbox e media queries)
- JavaScript (DOM, eventos, arrays, objetos, funções, `filter`, validação de formulário, LocalStorage, `fetch` e `async`/`await`)
- Git e GitHub
- GitHub Pages
- API ViaCEP

## Estrutura do projeto

```
Portal_Fit/
├── index.html          # Página inicial
├── servicos.html       # Página de serviços (consulta, catálogo com filtro, favorito e consulta de CEP)
├── contato.html        # Página de contato (com formulário)
├── css/
│   └── style.css       # Estilos do site
├── js/
│   ├── script.js       # Consulta, catálogo, filtro e serviço favorito (LocalStorage)
│   ├── contato.js      # Validação do formulário de contato
│   └── cep.js          # Consulta de endereço por CEP com a API ViaCEP
└── img/
    └── treino-hero.svg # Imagem ilustrativa da página inicial
```

## Funcionalidades

- **Navegação:** três páginas (início, serviços e contato) com menu funcionando entre elas e indicação da página atual (`aria-current`);
- **HTML semântico:** uso de `header`, `nav`, `main`, `section`, `article` e `footer`, com imagem acompanhada de texto alternativo;
- **Consulta interativa de serviço:** o usuário escolhe um serviço e recebe uma orientação diferente para cada um (evento `click` e `if`/`else`);
- **Catálogo dinâmico:** os serviços ficam em um array de objetos e os cards são criados no DOM com `forEach`, `document.createElement` e a função `renderizarServicos()`;
- **Filtro por categoria:** ao trocar a opção do `select` (evento `change`), o `filter` gera uma nova lista e os cards são atualizados sem recarregar a página, com mensagem quando a categoria não tem resultados;
- **Formulário com validação:** campos com `label`, `required`, `minlength` e tipos `email`/`tel`, além de validação em JavaScript (evento `submit`, `preventDefault()`, `.value.trim()`) com mensagem de erro ou sucesso no DOM;
- **Preferência com LocalStorage:** o serviço favorito é salvo com `localStorage.setItem()` e recuperado com `localStorage.getItem()` ao atualizar a página (sem armazenar dados pessoais);
- **Consulta de CEP com API:** o usuário digita um CEP e o Portal busca o endereço na API ViaCEP, com mensagem de carregamento e tratamento de CEP inválido, CEP inexistente e falha de comunicação;
- **Responsividade e acessibilidade:** layout com Flexbox e media query para telas pequenas, foco visível nos controles, navegação por teclado (TAB) e mensagens dinâmicas com `aria-live`.

## API utilizada

O Portal consome o **[ViaCEP](https://viacep.com.br/)**, um Web Service público e gratuito que recebe um CEP e devolve os dados do endereço no formato **JSON** (campos como `cep`, `logradouro`, `bairro`, `localidade` e `uf`).

Fluxo da consulta, implementado em `js/cep.js`:

1. O JavaScript remove tudo que não é número do campo (`replace(/\D/g, "")`) e confere se restaram exatamente 8 dígitos. Se não, mostra uma orientação e **não** chama a API;
2. Mostra "Consultando CEP..." e faz uma requisição **GET** com `fetch("https://viacep.com.br/ws/CEP/json/")`, esperando a resposta com `await`;
3. Confere `resposta.ok` (código HTTP de sucesso) e converte o corpo com `resposta.json()`;
4. Se o JSON tiver o campo `erro`, o CEP tem formato válido mas não existe: mostra "CEP não encontrado.";
5. Caso contrário, mostra o endereço no DOM (usando `||` para campos que vierem vazios);
6. Qualquer falha de comunicação (sem internet, API fora do ar, erro HTTP) cai no `catch`, que mostra "Não foi possível consultar o CEP agora." sem travar a página.

## Como testar

1. Abra `index.html` e navegue pelo menu até **Serviços** e **Contato**.
2. Em `servicos.html`:
   - **Consulte um serviço:** escolha uma opção e clique em "Consultar orientação";
   - **Catálogo:** troque a categoria no filtro e veja os cards mudarem (a opção "Recuperação" mostra a mensagem de categoria sem resultados);
   - **Meu serviço favorito:** salve um favorito, atualize a página (F5) e confira que a escolha continua lá;
   - **Consulta de CEP:** teste os casos abaixo.

| Entrada | Resultado esperado |
| --- | --- |
| campo vazio ou `123` | "Digite um CEP com 8 números." (a API não é chamada) |
| `01001-000` ou `01001000` | "CEP encontrado." + Praça da Sé - Sé - São Paulo/SP |
| `99999999` | "CEP não encontrado." |
| sem internet (DevTools → Network → Offline) | "Não foi possível consultar o CEP agora." |

3. Em `contato.html`, tente enviar o formulário vazio ou com dados inválidos para ver a validação, e depois envie com os dados corretos.
4. Teste o site em tela menor (F12 → modo dispositivo) e navegue pelos controles usando a tecla **TAB**.

## Publicação

Link do GitHub Pages: https://jpblatt.github.io/Portal_Fit/

Repositório: https://github.com/jpblatt/Portal_Fit

## Autor

João Pedro Wolff Blatt

## Panorama Front-End

**1. O que significa componentização e por que dividir uma interface em partes reutilizáveis?**
Componentizar é quebrar a interface em peças independentes (um card, um menu, um formulário) que podem ser usadas várias vezes. Isso evita repetir código, deixa a manutenção mais fácil (arrumo em um lugar só) e mantém o visual padronizado. No Portal, os cards do catálogo são um exemplo: todos são criados pela mesma função `renderizarServicos()`.

**2. Qual a diferença geral entre uma aplicação multipágina e uma SPA (Single Page Application)?**
Na multipágina, cada link carrega um novo arquivo HTML do servidor, como o Portal faz entre `index.html`, `servicos.html` e `contato.html`. Na SPA, a página é carregada uma vez e o JavaScript troca o conteúdo da tela sem recarregar, o que deixa a navegação mais fluida, mas exige mais JavaScript.

**3. O que é Bootstrap e em que situação ele pode acelerar a criação de uma interface responsiva?**
Bootstrap é um framework CSS com classes e componentes prontos (grid, botões, menus, cards). Ele acelera quando preciso montar um layout responsivo rápido, como um protótipo ou um painel, sem escrever todas as regras de CSS e media queries do zero.

**4. O que são React, Vue e Angular? Cite uma característica geral de cada um.**
São ferramentas JavaScript para construir interfaces baseadas em componentes, muito usadas em SPAs.
- **React:** biblioteca criada pelo Facebook (Meta) que monta a interface com componentes escritos em JSX (HTML dentro do JavaScript).
- **Vue:** framework progressivo, considerado mais simples de começar, que pode ser adotado aos poucos em um projeto.
- **Angular:** framework completo mantido pelo Google, usa TypeScript e já traz rotas, formulários e outras ferramentas embutidas.

**5. Por que frameworks não substituem o conhecimento de HTML, CSS e JavaScript?**
Porque no fim todo framework gera HTML, CSS e JavaScript para o navegador. Sem entender a base, fica difícil corrigir erros, cuidar da acessibilidade e da semântica ou mudar de framework. Quem conhece os fundamentos aprende qualquer framework mais rápido.

**6. Como a IA pode ajudar no desenvolvimento sem substituir a compreensão do código?**
A IA pode explicar erros, sugerir trechos de código, revisar e ajudar a escrever documentação, acelerando o trabalho. Mas a responsabilidade é de quem desenvolve: é preciso ler, testar e entender o que foi sugerido, porque a IA pode errar e quem apresenta e mantém o projeto tem que saber explicar cada parte.
