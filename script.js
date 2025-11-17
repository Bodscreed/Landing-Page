const btn = document.getElementById('cta-btn');

// btn.addEventListener('click', () => {
//     document.getElementById("sobre").scrollIntoView(({ behavior: 'smooth' }));
// });

const btn2 = document.getElementById('cta2-btn');

btn2.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

// animção rolar pagina

function animarScroll() {
    const elementos = document.querySelectorAll('.animar');

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        const tamanhoTela = window.innerHeight * 0.8;

        if(posicao < tamanhoTela) {
            el.classList.add('aparecer');
        }
    });
}
window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);

// debounce para melhorar performance

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later  = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

    };
}

document.getElementById('cta-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = "imagens\Curriculo_Ruan_Baiao.pdf";
    link.download = 'Curriculo_Ruan_Baiao.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});



