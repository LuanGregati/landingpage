function toggleMode() {
    // documentElement é a tag HTML
    const html = document.documentElement;

    html.classList.toggle('light'); // Utilizo uma função interna que adiciona a classe se não tiver, remove se tiver.

    // Pego a tag da imagem usando query selector
    const img = document.querySelector('#profile img');

    // Verifico se na lista de classes atribuídas ao elemento, eu possuo a classe "light"
    // if (html.classList.contains('light')) {
    //     img.setAttribute('src', './assets/luan-light.jpg');
    // }else{
    //     img.setAttribute('src', './assets/moon-stars-svgrepo-com.svg');
    // }
}