function adicionarAmigo(){
   let nome = document.getElementById('amigo');
   if(nome.value === ''){
    alert('Por favor, Digite um nome valido');
    return;
   }
   amigos.push(nome.value);
   amigosOriginal.push(nome.value);
   nome.value = '';
   atualizarAmigos();
}

function sortearAmigo(){
   let tamanho = amigos.length;
    if(tamanho == 0){
        alert('Nenhum amigo cadastrado para sortear');
        return;
    }
    let numeroSorteado = Math.floor(Math.random() * tamanho); 
    let amigoSorteado = amigos[numeroSorteado];

    amigos.splice(numeroSorteado, 1);

    let resultado = document.getElementById('resultado');
    resultado.textContent = `Seu amigo Secreto é: ${amigoSorteado}`;

    if(amigos.length == 0){
        setTimeout(() => {
            resultado.textContent = 'Todos os amigos já foram sorteados!';
        }, 1500);
    }
    

}

function atualizarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(function(amigo){
        let li = document.createElement('li');
        let box = document.createElement('div');
        box.className = 'amigo-box'; // Classe especial para a caixa
        box.textContent = amigo;
        li.appendChild(box);
        lista.appendChild(li);
    }); 

}
let amigos = [];
let amigosOriginal = [];



