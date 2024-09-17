// Função para carregar opções de animais e responsáveis no modal
function carregarOpcoesModal() {
    const animalSelect = document.getElementById('animalSelect');
    const responsavelSelect = document.getElementById('responsavelSelect');

    // Preencher opções de animais
    const pets = listarPets(); // Função do data.js
    animalSelect.innerHTML = '<option value="">Escolher Animal...</option>';
    pets.forEach(pet => {
        const option = document.createElement('option');
        option.value = pet.nomePet;
        option.textContent = `${pet.nomePet} (${pet.tipoPet})`;
        animalSelect.appendChild(option);
    });

    // Preencher opções de responsáveis
    const responsaveis = listarResponsaveis(); // Função do data.js
    responsavelSelect.innerHTML = '<option value="">Escolher Responsável...</option>';
    responsaveis.forEach(responsavel => {
        const option = document.createElement('option');
        option.value = responsavel.nomeResponsavel;
        option.textContent = `${responsavel.nomeResponsavel} - ${responsavel.telefoneResponsavel}`;
        responsavelSelect.appendChild(option);
    });
}

// Evento para abrir o modal de solicitação de serviço
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const service = this.getAttribute('data-service');
        document.getElementById('servicoModalLabel').textContent = `Solicitar ${service}`;
        $('#servicoModal').modal('show');
        carregarOpcoesModal();
    });
});

// Evento para enviar o formulário de solicitação de serviço
document.getElementById('solicitacaoServicoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const animal = document.getElementById('animalSelect').value;
    const responsavel = document.getElementById('responsavelSelect').value;
    const busca = document.querySelector('input[name="busca"]:checked').value;
    const dataServico = document.getElementById('dataServico').value;
    const horaServico = document.getElementById('horaServico').value;

    // Lógica para processar a solicitação
    console.log(`Serviço solicitado: ${document.getElementById('servicoModalLabel').textContent}`);
    console.log(`Animal: ${animal}`);
    console.log(`Responsável: ${responsavel}`);
    console.log(`Busca: ${busca}`);
    console.log(`Data do Serviço: ${dataServico}`);
    console.log(`Hora do Serviço: ${horaServico}`);

    // Fechar o modal e limpar o formulário
    $('#servicoModal').modal('hide');
    document.getElementById('solicitacaoServicoForm').reset();
});

