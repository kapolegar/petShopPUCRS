// Funções para manipulação de responsáveis
function salvarResponsavel(responsavel) {
    let responsaveis = JSON.parse(localStorage.getItem('responsaveis')) || [];
    responsaveis.push(responsavel);
    localStorage.setItem('responsaveis', JSON.stringify(responsaveis));
}

function listarResponsaveis() {
    return JSON.parse(localStorage.getItem('responsaveis')) || [];
}

// Funções para manipulação de pets
function salvarPet(pet) {
    let pets = JSON.parse(localStorage.getItem('pets')) || [];
    pets.push(pet);
    localStorage.setItem('pets', JSON.stringify(pets));
}

function listarPets() {
    return JSON.parse(localStorage.getItem('pets')) || [];
}
