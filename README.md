# PokeFront

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

**Guia Rápido — Como rodar (PowerShell)**

- Pré-requisitos:
	- `Node.js`
	- `npm`

- Passos mínimos para rodar o projeto:

```powershell
# abrir PowerShell na pasta do projeto
npm install
npm start
# alternativa: usar o Angular CLI local via npx (não precisa instalar globalmente)
npx ng serve --open
```

- Bootstrap: o projeto usa Bootstrap (já listado em `package.json`). Caso os estilos não apareçam, rode:

```powershell
npm install
# caso não tenha o bootstrap
npm install bootstrap@5
```

# PokeFront

PokeFront é um projeto front-end em Angular criado como trabalho da disciplina "Desenvolvimento Web Frontend". A aplicação consome/mostra informações de Pokémons e apresenta uma lista e página de detalhes para cada item.

**Objetivo:** implementar uma interface responsiva em Angular que liste Pokémons e apresente detalhes, demonstrando conhecimento de componentes, serviços e roteamento.

**Ferramentas e versões:**
- Angular CLI (conforme gerado originalmente neste repositório)
- Node.js & npm

**Principais funcionalidades**
- Listagem de Pokémons
- Página de detalhes do Pokémon selecionado
- Estrutura organizada por componentes e serviços

**Instalação (rápida)**
Abra um terminal (PowerShell no Windows) na pasta do projeto e execute:

```powershell
npm install
npm start
```

Depois de executar `npm start`, abra seu navegador em `http://localhost:4200/`.

Se preferir usar o Angular CLI local/global diretamente:

```powershell
ng serve --open
```

**Bootstrap (necessário)**
O projeto usa Bootstrap para estilos. Caso ainda não tenha executado `npm install`, instale as dependências primeiro:

```powershell
npm install
# (ou, para garantir que o Bootstrap esteja instalado separadamente)
npm install bootstrap@5
```

Depois de instalar, você precisa incluir o CSS do Bootstrap na sua aplicação. Há duas formas comuns — escolha uma e reinicie o servidor (`npm start`) após alterar os arquivos:

- Opção A — adicionar em `angular.json` (recomendado):

	Abra `angular.json` e na seção `projects -> poke-front -> architect -> build -> options -> styles` adicione (ou verifique) a entrada:

	```json
	"styles": [
		"node_modules/bootstrap/dist/css/bootstrap.min.css",
		"src/styles.css"
	]
	```

- Opção B — importar no `src/styles.css`:

	Adicione no topo de `src/styles.css`:

	```css
	@import "bootstrap/dist/css/bootstrap.min.css";
	```

Se sua aplicação usar componentes do Bootstrap que dependam de JavaScript (ex.: dropdowns, modals), adicione também o bundle JS no `angular.json` em `projects -> poke-front -> architect -> build -> options -> scripts`:

```json
"scripts": [
	"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

Observações:
- Após instalar ou alterar `angular.json`/`styles.css`, pare e inicie novamente o servidor (`npm start`).
- Este projeto já inclui `bootstrap` nas dependências (`package.json`) e referência em `angular.json` — se você clonou o repositório, apenas rode `npm install` antes de `npm start`.

**Autor / Trabalho acadêmico**
- Aluno: Aristides Jeronimo de Brito Neto
- Disciplina: Desenvolvimento Web Frontend
- Instituição: IFRN Campus Parnamirim₢