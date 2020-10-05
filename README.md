# AngularJS Training:

* Pré-requisitos:
    - Node
    - NPM

 * Ambiente: 
    - Banco: MongoDB.
        ```javascript
         server.js
         require('./config/database')('mongodb://localhost:27017/user');
         database.js
         mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
         
        ```

* Rodar Projeto:
    * Instalar depedências:
    ```javascript
     npm install
    ```
    
    ```javascript
     npm start
    ```
## Atividades para mini aplicação:

*  [x] Subir aplicação usando Express/Node.
*  [x] Criar Home Page e Pagina de Cadastro.
    *  [ ] Validação do Form Usando AngularJS.
    *  [ ] Salvando Cadastro no Banco com POST.
        *    Simular Two-way x Data binding, no POST.
*  [ ] Lista Itens na Home (GET). **

- **Se der tempo**
- [ ] **Localizar Itens**
- [ ] Debugar  aplicação com Chrome.
- [ ] Delete.
- [ ] Update


### Conteúdos:

- [ ] SPA (single page application).
- [ ] Initial commit 
    - [ ] Estrutura do Projeto (rotas, ng-app, index.html).
- [ ] Modulo e Controller.
    - OBS:  uma view pode ter muitos controllers.
- [ ] angular expression. {{NOME_PROPRIEDADE}} / ng-bind="NOME_PROPRIEDADE"
    - **Data binding** significa associação de dado, isto é,
    podemos associar um dado (model) à view através de Angular Expression e
    qualquer mudança nesse dado refletirá na sua apresentação na view. 

- [ ] $Scope:
    - $scope: é o escope que o controlador vai enxergar definido nas TAGs html.

- [ ] Requisições com $http e $Resource.
- [ ] Filtro  usando Pipe |
- [ ] **Two-way Binding**
     - A **ng-model** diretiva fornece uma ligação bidirecional entre o modelo e a visualização.
     -  Quando os dados no modelo mudam, a visualização reflete a mudança e quando os dados na visualização mudam, o modelo também é atualizado. 




#### Validações fomulário:

* novalidate: remove validação do HTML.
* required: campo requerido.


1) Temos acesso ao objeto criado implicitamente pelo Angular, que representa nosso formulário através do valor que atribuímos ao name do formulário.

2) É a partir do objeto implícito que representa nosso formulário que temos acesso a todos os elementos de entrada, contanto que eles também possuam o atributo name devidamente preenchido.

3) Supondo que tenhamos um formulário com o name vendas, podemos em nossos controllers testar se ele é válido ou inválido através das propriedades $scope.vendas.$valid e $scope.vendas.$invalid, respectivamente.

4) É possível combinar a diretiva ng-disabled com o status de válido ou inválido do formulário, para desabilitar um botão caso o formulário esteja inválido.

______________________________________________________________

**Mongo CMD:**

* mongo
* show dbs
* create: use user
* db.cargos.insert({descricao:"Dev"});

- Referências:

- https://www.w3schools.com/angular/angular_databinding.asp
- https://medium.com/criciumadev/two-way-data-binding-fd5d71712d28
- https://getbootstrap.com/docs/3.3/components/



___________________________________________________________________________




**erro:**

- Error: user validation failed: office: Cast to Number failed for value "5f7a33d1a0bbb78324916e12" at path "office"