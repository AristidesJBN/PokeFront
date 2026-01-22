# PokeFront

Projeto front-end em **Angular** desenvolvido como trabalho da disciplina **Desenvolvimento Web Frontend**. A aplicação consome dados de Pokémons, exibindo uma **lista** e uma **página de detalhes**, com foco em componentes, serviços e roteamento.

---

## 🧰 Tecnologias

* Angular (Angular CLI v20.3.4)
* Node.js e npm
* Bootstrap 5

---

## 🚀 Como rodar o projeto

### Pré-requisitos

* Node.js
* npm

### Execução (PowerShell)

```powershell
npm install
npm start
```

Acesse: **[http://localhost:4200/](http://localhost:4200/)**

### Alternativa (Angular CLI via npx)

```powershell
npx ng serve --open
```

---

## 🎨 Bootstrap

O projeto utiliza **Bootstrap 5** para estilização.

### Instalação

```powershell
npm install
# opcional, se necessário
npm install bootstrap@5
```

### Inclusão do CSS

**Via `angular.json` (recomendado):**

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

**Ou via `src/styles.css`:**

```css
@import "bootstrap/dist/css/bootstrap.min.css";
```

### JavaScript do Bootstrap (opcional)

Necessário apenas para componentes como modals e dropdowns:

```json
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

> Reinicie o servidor após alterações globais.

---

## ✨ Funcionalidades

* Listagem de Pokémons
* Página de detalhes
* Interface responsiva
* Arquitetura baseada em componentes e serviços

---

## 👤 Autor

* **Aluno:** Aristides Jeronimo de Brito Neto
* **Disciplina:** Desenvolvimento Web Front-End
* **Instituição:** IFRN — Campus Parnamirim
