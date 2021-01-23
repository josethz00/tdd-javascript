const uuid = require('uuid');


class Todo {

    constructor ({ text, when }) {

        this.text = text;
        this.when = when;
        this.status = '';
        this.id = uuid.v4();

    }

    isValid () {

        return !!this.text && !isNaN(this.when.valueOf());
        //valueOf retorna a data em milissegundos, então nesse exemplo verifica se a data é válida, vendo se o número da data em milissegndos é verdadeiro  

    }

}

module.exports = Todo;