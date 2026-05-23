function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    const mainContent = document.querySelector('.main-content');

    mainContent.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Ajuste para detecção de scroll dentro do container main
            if (mainContent.scrollTop >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('onclick').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // Gráfico Financeiro Exato (Divisão de Sociedade)
    const financeCtx = document.getElementById('financeChart').getContext('2d');
    new Chart(financeCtx, {
        type: 'doughnut',
        data: {
            labels: ['Leonardo (35%)', 'Vanderson (35%)', 'Professor (20%)', 'Caixa (10%)'],
            datasets: [{
                data: [35, 35, 20, 10],
                backgroundColor: ['#00a093', '#d97d19', '#336987', '#f7c718'],
                borderColor: '#ffffff',
                borderWidth: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            cutout: '75%'
        }
    });

    // Gráfico de Escala de Preços (Barra Horizontal)
    const growthCtx = document.getElementById('growthChart').getContext('2d');
    new Chart(growthCtx, {
        type: 'bar',
        data: {
            labels: ['Módulos', 'Curso Completo', 'Vitalício'],
            datasets: [{
                label: 'Preço Médio (R$)',
                data: [97, 697, 1497],
                backgroundColor: ['#e9c9b4', '#00a093', '#d97d19'],
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            plugins: {
                label: { color: '#39231f' }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
