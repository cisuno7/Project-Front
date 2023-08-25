const BASE_URL = "http://localhost:8080";

export const listarFuncionarios = async () => {
    const response = await fetch(`${BASE_URL}/listar`);
    return response.json();
}

export const cadastrarFuncionario = async (funcionario) => {
    const response = await fetch(`${BASE_URL}/cadastrar`, {
        method: 'post',
        body: JSON.stringify(funcionario),
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return response.json();
}

export const alterarFuncionario = async (funcionario) => {
    const response = await fetch(`${BASE_URL}/alterar`, {
        method: 'put',
        body: JSON.stringify(funcionario),
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return response.json();
}

export const removerFuncionario = async (id) => {
    const response = await fetch(`${BASE_URL}/remover/${id}`, {
        method: 'delete',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return response.json();
}
