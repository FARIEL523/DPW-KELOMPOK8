(function() {
            const track = document.getElementById('sliderTrack');
            const slides = track.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');
            let current = 0;
            let timer;

            function goTo(index) {
                slides[current].classList.remove('active');
                current = (index + slides.length) % slides.length;
                slides[current].classList.add('active');
                track.style.transform = `translateX(-${current * 100}%)`;
                dots.forEach((d, i) => d.classList.toggle('active', i === current));
            }

            function next() { goTo(current + 1); }
            function prev() { goTo(current - 1); }

            function startAuto() {
                clearInterval(timer);
                timer = setInterval(next, 4500);
            }

            document.getElementById('sliderNext').addEventListener('click', () => { next(); startAuto(); });
            document.getElementById('sliderPrev').addEventListener('click', () => { prev(); startAuto(); });
            dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.index); startAuto(); }));

            startAuto();
        })();

        (function() {
            const toggler = document.getElementById('navToggle');
            const menu = document.getElementById('navbarMenu');

            toggler.addEventListener('click', () => {
                menu.classList.toggle('open');
            });

            const navItems = menu.querySelectorAll('.nav-item.has-dropdown');
            navItems.forEach(item => {
                const link = item.querySelector('.nav-link');
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        item.classList.toggle('open');
                    }
                });
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.navbar')) {
                    menu.classList.remove('open');
                }
            });
        })();

        (function() {
            const btn = document.getElementById('backToTop');
            window.addEventListener('scroll', () => {
                btn.classList.toggle('visible', window.scrollY > 400);
            });
            btn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        })();

        (function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
        })();

        (function() {
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.style.boxShadow = '0 4px 30px rgba(100,0,0,0.45)';
                } else {
                    navbar.style.boxShadow = '0 4px 20px rgba(173,0,0,0.3)';
                }
            });
        })();