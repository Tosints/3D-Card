const card = document.querySelector(".card");

const cardBounding = card.getBoundingClientRect();

card.addEventListener("mousemove", (e) => {
    const horizontal = e.clientX - cardBounding.x;
    const vertical = e.clientY - cardBounding.y;

    const center = {
        x: (horizontal - cardBounding.width / 2) * 0.02,
        y: (vertical - cardBounding.height / 2) * 0.02,
    };

    card.style.transform = `perspective(${cardBounding.width}px) rotateX(${
        center.y
    }deg) rotateY(${-center.x}deg) scale3d(1.05, 1.05, 1.05)`;

    const reflection = document.querySelector(".reflection");

    const reflectionX = (horizontal / cardBounding.width) * 100;
    const reflectionY = (vertical / cardBounding.height) * 100;

    reflection.style.background = `radial-gradient(circle at ${reflectionX}% ${reflectionY}%, #ffffff44,#0000000f)`;
});


card.addEventListener('mouseleave', ()=>{
    card.style.transform = ''
})