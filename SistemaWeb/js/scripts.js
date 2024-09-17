// Função para carregar os responsáveis cadastrados e exibi-los na lista
function carregarResponsaveis() {
    const responsavelList = document.getElementById('responsavelList');
    responsavelList.innerHTML = '';

    // Recuperar a lista de responsáveis do localStorage
    const responsaveisCadastrados = listarResponsaveis();

    responsaveisCadastrados.forEach((responsavel) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `Nome: ${responsavel.nomeResponsavel}, Telefone: ${responsavel.telefoneResponsavel}`;
        responsavelList.appendChild(li);
    });
}

// Função para cadastrar um novo responsável
document.getElementById('cadastroResponsavelForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeResponsavel = document.getElementById('nomeResponsavel').value;
    const telefoneResponsavel = document.getElementById('telefoneResponsavel').value;
    const enderecoResponsavel = document.getElementById('enderecoResponsavel').value;

    const novoResponsavel = {
        nomeResponsavel: nomeResponsavel,
        telefoneResponsavel: telefoneResponsavel,
        enderecoResponsavel: enderecoResponsavel
    };

    // Salvar o novo responsável no localStorage
    salvarResponsavel(novoResponsavel);

    // Recarregar a lista de responsáveis após o cadastro
    carregarResponsaveis();

    // Fechar o modal
    $('#cadastroResponsavelModal').modal('hide');

    // Limpar o formulário
    document.getElementById('cadastroResponsavelForm').reset();
});

// Função para carregar os pets cadastrados e exibi-los na lista
function carregarPets() {
    const petList = document.getElementById('petList');
    petList.innerHTML = '';

    // Recuperar a lista de pets do localStorage
    const petsCadastrados = listarPets();

    petsCadastrados.forEach((pet) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `Nome: ${pet.nomePet}, Tipo: ${pet.tipoPet}, Temperamento: ${pet.temperamento}`;
        petList.appendChild(li);
    });
}

// Função para cadastrar um novo pet
document.getElementById('cadastroPetForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomePet = document.getElementById('nomePet').value;
    const tipoPet = document.getElementById('tipoPet').value;
    const temperamento = document.querySelector('input[name="temperamento"]:checked').value;

    const novoPet = {
        nomePet: nomePet,
        tipoPet: tipoPet,
        temperamento: temperamento
    };

    // Salvar o novo pet no localStorage
    salvarPet(novoPet);

    // Recarregar a lista de pets após o cadastro
    carregarPets();

    // Fechar o modal
    $('#cadastroPetModal').modal('hide');

    // Limpar o formulário
    document.getElementById('cadastroPetForm').reset();
});

// Evento para abrir o modal de cadastro de responsável
document.getElementById('btnCadastrarResponsavel').addEventListener('click', function () {
    $('#cadastroResponsavelModal').modal('show');
});

// Evento para abrir o modal de cadastro de pet
document.getElementById('btnCadastrarPet').addEventListener('click', function () {
    $('#cadastroPetModal').modal('show');
});

// Carregar as listas de responsáveis e pets quando a página for carregada
window.onload = function () {
    carregarResponsaveis();
    carregarPets();
};


