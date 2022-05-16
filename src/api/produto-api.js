import api from './api';

function obterTodos(produtoRequest){

    const url = "autocomplete?source=nanook&content=" + produtoRequest;

    return new Promise((resolve, reject) => {
        return api.get(url)
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

export default {
    obterTodos
}