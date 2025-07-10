const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=fKv1OFFYQQ8NRXdEIPUH6cePWOCXmAL6UJEwo6Ny'

fetch(nasaUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

async function carregarDados() {
    try {
        const resposta = await fetch(nasaUrl);
        const dados = await resposta.json();

        console.log(dados);

        const { date, explanation, hdurl, title, } = dados;

        document.querySelector('#date').textContent = date;
        document.querySelector('#explanation').textContent = explanation;
        document.querySelector('#title').textContent = title;
        document.querySelector('#image').src = hdurl;
        document.querySelector('#image').alt = title;

    } catch (erro) {
        console.error('Deu ruim na chamada da API', erro);
    }
}

carregarDados();
