	# Boas vindas ao repositório do projeto Trybe Wallet

---

# Habilidades

Neste projeto, verificamos se voce é capaz de:

- Criar um store Redux em aplicações React

- Criar reducers no Redux em aplicações React

- Criar actions no Redux em aplicações React

- Criar dispatchers no Redux em aplicações React

- Conectar Redux aos componentes React

- Criar actions assíncronas na sua aplicação React que faz uso de Redux.

---

# Entregáveis

## O que deverá ser desenvolvido

Neste projeto você vai desenvolver uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de:

- Adicionar, remover e editar um gasto;
- Visualizar uma tabelas com seus gastos;
- Visualizar o total de gastos convertidos para uma moeda de escolha;

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre Git & GitHub no Course sempre que precisar!

## Desenvolvimento

Você deve desenvolver uma aplicação em React que use Redux como ferramenta de manipulação de estado.

Através dessa aplicação, será possível realizar as operações básicas de criação e manipulação de um estado de redux.

---

# Requisitos do projeto

:warning: **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.** :warning:

:warning: **Os gifs são meramente ilustrativos para visualizar o fluxo da aplicação, os nomes devem seguir os requisitos e não o gif.** :warning:

:warning: **Obs: Lembre-se de olhar a seção [Como desenvolver](#como-desenvolver) para entender como configurar a aplicação para desenvolver os requisitos.** :warning:

## Lista de requisitos

### Página de Login

Crie uma página para que a pessoa usuária se identifique, com email e senha. Esta página deve ser a página inicial de seu aplicativo.


#### 1. Crie uma página inicial de login com os seguintes campos e características

- A rota para esta página deve ser ‘/’.

- Você deve criar um local para que a pessoa usuária insira seu email e senha. Utilize o atributo `data-testid="email-input"` para o email e `data-testid="password-input"` para a senha.

- Crie um botão com o texto ‘Entrar’.

- Realize as seguintes verificações nos campos de email e senha, de modo que caso sejam falsas o botão fique desabilitado:

  - O email está no formato válido, como 'alguem@alguem.com'.

  - A senha possui 6 ou mais caracteres.

- Salve o email no estado global da aplicação, com a chave **_email_**, assim que a pessoa usuária logar.

- A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.

  **O que será verificado:**

- A rota para esta página é `"/"`
- É renderizado um elemento para que o usuário insira seu email e senha
- É renderizado um botão com o texto `"Entrar"`
- Foram realizadas as seguintes verificações nos campos de email, senha e botão:
  - É um e-mail no formato válido;
  - A senha tem 6 ou mais caracteres;
  - Desabilita o botão `Entrar` caso e-mail e/ou senha estiverem no formato inválido
  - Habilita o botão `Entrar` caso e-mail e senha sejam válidos
- Salva o email no estado da aplicação, com a chave email, assim que o usuário logar
- A rota é alterada para `"/carteira"` após o clique no botão

### Página da Carteira

Crie uma página para gerenciar a carteira de gastos em diversas moedas, e que traga a despesa total em real que é representado pelo código 'BRL'. Esta página deve ser renderizada por um componente chamado **_Wallet_**.


### Configurando sua página

#### 2. Crie uma página para sua carteira com as seguintes características

- A rota para esta página deve ser `/carteira`

- O componente deve se chamar Wallet e estar localizado na pasta `src/pages` no arquivo `Wallet.js`

  **O que será verificado:**

- A rota para esta página é `/carteira`.
- O componente se chama Wallet e está localizado na pasta `src/pages`.
- Não é renderizado o input que possui o `data-testid="email-input"`.

### Header

#### 3. Crie um header para a página de carteira contendo as seguintes características

- Um elemento que exiba o email da pessoa usuária que fez login.

  - Adicione o atributo `data-testid="email-field"`.

  ```
  Dica: você deve pegar o email do estado global da aplicação (no Redux).
  ```

- Um elemento com a despesa total gerada pela lista de gastos.

  - Adicione o atributo `data-testid="total-field"`.

  - Inicialmente esse elemento deve exibir o valor `0`.

- Um elemento que mostre qual câmbio está sendo utilizado, que neste caso será 'BRL'.

  - Adicione o atributo `data-testid="header-currency-field"`.

**O que será verificado:**

- O elemento com o `data-testid="email-field"` renderiza o email salvo no estado global.
- O elemento com o `data-testid="total-field"` inicialmente renderiza o valor `0`.
- O elemento com o `data-testid="header-currency-field` renderiza o texto `BRL`.

### Formulário de adição de Despesa

#### 4. Implemente a lógica para armazenar no estado global as siglas das moedas que vêm da API

  * Os valores da chave `currencies` no estado global devem ser puxados através de uma requisição à API, que deve ser feita ao entrar na página `/carteira`, sendo representado pela sigla de cada moeda, exemplo: 'USD', 'CAD', 'EUR'...

    * O endpoint utilizado deve ser: https://economia.awesomeapi.com.br/json/all

    * Remova das informações trazidas pela API a opção 'USDT' (Moeda Tether).

    * A chave `currencies` do estado global deve ser um array.

**O que será verificado:**

  - A API é chamada com o end point `https://economia.awesomeapi.com.br/json/all`
  - O valor da chave `currencies` no estado global é um array que possui as siglas das moedas que vieram da API.

#### 5. Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:


- Um campo para adicionar valor da despesa.

  - Adicione o atributo `data-testid="value-input"`.

- Um campo para adicionar a descrição da despesa.

  - Adicione o atributo `data-testid="description-input"`.
    
- Um campo para selecionar em qual moeda será registrada a despesa.

  - O campo deve ter a label `Moeda`.

  - As options devem ser preenchidas pelo valor da chave `currencies` do estado global, implementada no requisito anterior.

  - O campo deve ser um `<select>`.

- Um campo para adicionar qual método de pagamento será utilizado.

  - Adicione o atributo `data-testid="method-input"`.

  - Este campo deve ser um `<select>`. A pessoa usuária deve poder escolher entre os campos: 'Dinheiro', 'Cartão de crédito' e 'Cartão de débito'.

- Um campo para selecionar uma categoria (tag) para a despesa.

  - Adicione o atributo `data-testid="tag-input"`.

  - Este campo deve ser um dropdown. a pessoa usuária deve poder escolher entre os campos: 'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde'.

  - O campo deve ser um `<select>`.

**O que será verificado:**

  - O campo para adicionar o valor da despesa possui o `data-testid="value-input"`.
  - O campo para adicionar a descrição da despesa possui o `data-testid="description-input"`.
  - O campo para selecionar em qual moeda será registrada a despesa é um `<select>` com uma label com o texto `moeda`.
  - O campo para selecionar em qual moeda será registrada a despesa possui options com os valores iguais ao do array localizado na chave currencies do estado global.
  - O campo para selecionar qual método de pagamento será utilizado possui o `data-testid="method-input"`.
  - O campo para selecionar qual método de pagamento será utilizado possui options com os valores `Dinheiro`, `Cartão de crédito` e `Cartão de débito`.
  - O campo para selecionar uma categoria (tag) da despesa possui o `data-testid="tag-input"`
  - O campo para selecionar uma categoria (tag) da despesa possui options com os valores `Alimentação`, `Lazer`, `Trabalho`
, `Transporte`, `Saúde`

#### 6. Salve todas as informações do formulário no estado global

  * Crie um botão com o texto \'Adicionar despesa\' que salva as informações da despesa no estado global e atualiza a soma de despesas no header.

  - Desenvolva a funcionalidade do botão "Adicionar despesa" de modo que ao clicar no botão, as seguintes ações sejam executadas:

  - Os valores dos campos devem ser salvos no estado da aplicação, na chave **_expenses_**, dentro de um array contendo todos gastos que serão adicionados:

    - O `id` da despesa **deve** ser um número sequencial, começando em 0. Ou seja: a primeira despesa terá id 0, a segunda terá id 1, a terceira id 2, e assim por diante.

    - Você deverá salvar a cotação do câmbio feita no momento da adição para ter esse dado quando for efetuar uma edição do gasto. Caso você não tenha essa informação salva, o valor da cotação trazida poderá ser diferente do obtido anteriormente.

    ```
    Atenção nesse ponto: você deverá fazer uma requisição para API e buscar a cotação no momento que o botão de `Adicionar despesa` for apertado. Para isso você deve utilizar um thunk.
    ```

  - Após adicionar a despesa, atualize a soma total das despesas (utilize a chave `ask` para realizar essa soma). Essa informação deve ficar no header dentro do elemento com `data-testid="total-field"`.

  - Após adicionar a despesa, limpe o valor do campo `valor da despesa`.

    As despesas salvas no Redux ficarão com um formato semelhante ao seguinte:

    ```
    expenses: [{
      "id": 0,
      "value": "3",
      "description": "Hot Dog",
      "currency": "USD",
      "method": "Dinheiro",
      "tag": "Alimentação",
      "exchangeRates": {
        "USD": {
          "code": "USD",
          "name": "Dólar Comercial",
          "ask": "5.6208",
          ...
        },
        "CAD": {
          "code": "CAD",
          "name": "Dólar Canadense",
          "ask": "4.2313",
          ...
        },
        "EUR": {
          "code": "EUR",
          "name": "Euro",
          "ask": "6.6112",
          ...
        },
        "GBP": {
          "code": "GBP",
          "name": "Libra Esterlina",
          "ask": "7.2498",
          ...
        },
        "ARS": {
          "code": "ARS",
          "name": "Peso Argentino",
          "ask": "0.0729",
          ...
        },
        "BTC": {
          "code": "BTC",
          "name": "Bitcoin",
          "ask": "60299",
          ...
        },
        "LTC": {
          "code": "LTC",
          "name": "Litecoin",
          "ask": "261.69",
          ...
        },
        "JPY": {
          "code": "JPY",
          "name": "Iene Japonês",
          "ask": "0.05301",
          ...
        },
        "CHF": {
          "code": "CHF",
          "name": "Franco Suíço",
          "ask": "6.1297",
          ...
        },
        "AUD": {
          "code": "AUD",
          "name": "Dólar Australiano",
          "ask": "4.0124",
          ...
        },
        "CNY": {
          "code": "CNY",
          "name": "Yuan Chinês",
          "ask": "0.8278",
          ...
        },
        "ILS": {
          "code": "ILS",
          "name": "Novo Shekel Israelense",
          "ask": "1.6514",
          ...
        },
        "ETH": {
          "code": "ETH",
          "name": "Ethereum",
          "ask": "5184",
          ...
        },
        "XRP": {
          "code": "XRP",
          "name": "Ripple",
          "ask": "1.4",
          ...
        }
      }
    }]
    ```

**O que será verificado:**

  - É renderizado um botão com o texto "Adicionar despesa".
  - Ao clicar no botão "Adicionar despesa", é feita uma requisição a API.
  - Ao clicar no botão "Adicionar despesa", é salva uma nova despesa na chave `expenses` do estado global, consequetemente atualizando o elemento com o `data-testid="total-field"`.
  - Cada despesa tem um id.
  - Ao clicar no botão "Adicionar despesa", os inputs voltam ao valor inicial, o input com o `data-testid="value-input"` contendo algum desses valores `0`, `"0"` ou `""`.
  - Ao adicionar uma nova despesa, o elemento com o `data-testid="total-field"` é atualizado com a soma das despesas, levando em consideração a cotação localizada na chave `ask`.


### Tabela de Gastos

#### 7. Desenvolva uma tabela com os gastos contendo as seguintes características:

**O que será verificado:**

- A tabela possui um cabeçalho com elementos `<th>` com os valores `Descrição`, `Tag`, `Método de pagamento`,`Valor`, `Moeda`, `Câmbio utilizado`, `Valor convertido`, `Moeda de conversão` e `Editar/Excluir`.

#### 8. Implemente a lógica para que a tabela seja alimentada pelo estado da aplicação

- A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave **_expenses_** que vem do reducer `wallet`.

  - O campo de Moeda e Moeda de Conversão deverão conter o nome da moeda. Portanto, ao invés de 'USD' ou 'EUR', deve conter "Dólar Comercial" e "Euro", respectivamente.

  - Por padrão, o elemento que exibe a 'Moeda de conversão' deverá ser sempre 'Real'.

  - Atenção também às casas decimais dos campos. Como são valores contábeis, eles devem apresentar duas casas após a vírgula. Arredonde sua resposta somente na hora de renderizar o resultado, e para os cálculos utilize sempre os valores vindos da API (utilize o campo `ask` que vem da API).

  - Utilize sempre o formato `0.00` (número - ponto - duas casas decimais).

  **O que será verificado:**

  - A tabela é atualizada com as informações vindas da chave `expense` do estado global.
  - A tabela possui um corpo com um elemento `<tr>` para cada despesa.
  - O elemento `<tr>` possui elementos `<td>` com `Descrição`, `Tag`, `Método de pagamento`,`Valor`, `Moeda`, `Câmbio utilizado`, `Valor convertido`, `Moeda de conversão` de cada despesa.

#### 9. Crie um botão para deletar uma despesa da tabela contendo as seguintes características:

- O botão deve ser o último item da linha da tabela e deve possuir `data-testid="delete-btn"`.

- Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global e o header.

**O que será verificado:**

- O botão se encontra no último elemento `<td>` de cada elemento `<tr>`.
- O botão possui o `data-testid="delete-btn"`.
- Ao clicar no botão, a despesa é removida do estado global e consequentemente da tabela.
- Ao clicar no botão, a despesa total é atualizada no header, subtraindo o valor correspondente.

#### 10. Crie um botão para editar uma despesa da tabela contendo as seguintes características:


- O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="edit-btn"`

- Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global.

  - O formulário deverá ter os mesmos `data-testid` do formulário de adicionar despesa. Você pode reaproveitá-lo.

  - O botão para submeter a despesa para edição deverá conter **exatamente** o texto "Editar despesa"

  - Após a edição da despesa, a ordem das despesas na tabela precisa ser mantida.

  - Obs: para esse requisito, não é necessário popular os inputs com os valores prévios da despesa. A imagem do gif é apenas uma sugestão. 

    **Atenção**: o câmbio utilizado na edição deve ser o mesmo do cálculo feito na adição do gasto.

**O que será verificado:**

- O botão se encontra no último elemento `<td>` de cada elemento `<tr>`.
- O botão possui o `data-testid="edit-btn"`.
- Ao ser clicado, o formulário de adição passa a ser um formulário de edição.
- Ao ser clicado, o botão com o texto `"Adicionar Despesa"` é alterado para `"Editar despesa"`.
- Após editar uma despesa a chave `expenses` no estado global é atualizada com o novo valor.
- A ordem das despesas é mantida após a edição.
- O valor no campo com o `data-testid="total-field"` é atualizado após a edição de uma despesa.

---
