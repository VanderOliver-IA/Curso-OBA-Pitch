<!-- Floating Elements Injected via PHP -->
<div id="floating-elements-container">

        <!-- WhatsApp Float -->
        <a href="https://wa.me/5521976406960" target="_blank" rel="noopener" class="float-wa" aria-label="Contato pelo WhatsApp">
            <i class="fab fa-whatsapp" aria-hidden="true"></i>
        </a>

        <!-- Scroll Top -->
        <div class="scroll-top" id="scrollTop" role="button" aria-label="Voltar ao topo" tabindex="0">
            <svg width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true">
                <circle class="progress-background" cx="50" cy="50" r="48" stroke-width="4" fill="none"></circle>
                <circle class="progress-bar" cx="50" cy="50" r="48" stroke-width="4" fill="none" stroke-dasharray="301.59" stroke-dashoffset="301.59"></circle>
            </svg>
            <i class="fas fa-arrow-up" aria-hidden="true"></i>
        </div>

        <!-- MOBILE APP BAR -->
        <div class="mobile-app-bar glass">
            <a href="<?php echo $root; ?>index.php#inicio" class="app-item active">
                <i class="fas fa-home"></i>
                <span>Início</span>
            </a>
            <a href="<?php echo $root; ?>index.php#cursos" class="app-item" id="mobile-courses-btn">
                <i class="fas fa-paint-brush"></i>
                <span>Cursos</span>
            </a>
            <a href="https://wa.me/5521976406960" class="app-item highlight">
                <div class="highlight-circle">
                    <i class="fas fa-calendar-check"></i>
                </div>
                <span>Agendar</span>
            </a>
            <a href="<?php echo $root; ?>index.php#localizacao" class="app-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Local</span>
            </a>
            <a href="<?php echo $root; ?>parceiro.php" class="app-item">
                <i class="fas fa-handshake"></i>
                <span>Parceiro</span>
            </a>
        </div>

        <!-- MOBILE COURSES MENU -->
        <div id="mobile-courses-menu" class="mobile-menu-overlay glass">
            <div class="mobile-menu-header">
                <h3>Nossos Cursos</h3>
                <button id="close-mobile-menu" class="close-btn" aria-label="Fechar menu de cursos"><i class="fas fa-times" aria-hidden="true"></i></button>
            </div>
            <div class="mobile-menu-grid">
                <a href="<?php echo $root; ?>cursos/manga.php" class="mobile-menu-item"><i class="fas fa-book-open" style="color: #FFD700;"></i> Mangá</a>
                <a href="<?php echo $root; ?>cursos/realismo.php" class="mobile-menu-item"><i class="fas fa-eye" style="color: #00bcd4;"></i> Realismo</a>
                <a href="<?php echo $root; ?>cursos/cartoon.php" class="mobile-menu-item"><i class="fas fa-pencil-alt" style="color: #ff9800;"></i> Cartoon</a>
                <a href="<?php echo $root; ?>cursos/hq.php" class="mobile-menu-item"><i class="fas fa-comment-dots" style="color: #5a5a5a;"></i> HQ</a>
                <a href="<?php echo $root; ?>cursos/pintura-em-tela.php" class="mobile-menu-item"><i class="fas fa-palette" style="color: #ff5722;"></i> Pintura</a>
                <a href="<?php echo $root; ?>cursos/moda.php" class="mobile-menu-item"><i class="fas fa-tshirt" style="color: #c2185b;"></i> Moda</a>
                <a href="<?php echo $root; ?>cursos/cenario-e-ambientacao.php" class="mobile-menu-item"><i class="fas fa-building" style="color: #1976d2;"></i> Cenário</a>
                <a href="<?php echo $root; ?>cursos/comunicacao-visual.php" class="mobile-menu-item"><i class="fas fa-bullhorn" style="color: #388e3c;"></i> Com. Visual</a>
            </div>
        </div>

        <!-- DRAGGABLE FLOATING LOGO -->
        <div id="floating-logo" class="floating-logo" style="display: flex;">
            <button id="hide-logo-btn" class="close-logo" aria-label="Ocultar logo flutuante"><i class="fas fa-times" aria-hidden="true"></i></button>
            <img src="<?php echo $root; ?>images/logo-oba-arty.png" alt="OBA Logo">
        </div>
    
</div>
<!-- Footer Injected via PHP -->

    <footer class="footer section-padding">
        <div class="container">
            <div class="footer-grid">
                <!-- Brand Info Card -->
                <div class="footer-col footer-card brand-card">
                    <img src="<?php echo $root; ?>images/logo-oba-arty.png" alt="OBA" class="footer-logo" loading="lazy">
                    <p class="footer-desc">Desperte o artista que existe em você em um ambiente seguro, divertido e sem julgamentos. "A arte é para todos."</p>
                    <div class="socials">
                        <a href="https://www.instagram.com/oba.meier/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/oba.meier/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                        <a href="https://wa.me/5521976406960" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <!-- Units Card -->
                <div class="footer-col footer-card units-card">
                    <h4>Nossas Unidades</h4>
                    <div class="unit-info">
                        <h5><i class="fas fa-map-marker-alt"></i> Méier</h5>
                        <p>R. Ana Barbosa, 47<br>Méier - RJ</p>
                        <p class="footer-phone"><i class="fab fa-whatsapp"></i> (21) 97640-6960</p>
                    </div>
                    <div class="unit-info">
                        <h5><i class="fas fa-map-marker-alt"></i> Tijuca</h5>
                        <p>R. Maj. Ávila, 371<br>Tijuca - RJ</p>
                        <p class="footer-phone"><i class="fab fa-whatsapp"></i> (21) 96726-1725</p>
                    </div>
                </div>

                <!-- Quick Links Card -->
                <div class="footer-col footer-card links-card">
                    <h4>Acesso Rápido</h4>
                    <ul class="footer-links">
                        <li><a href="<?php echo $root; ?>index.php#inicio">Início</a></li>
                        <li><a href="<?php echo $root; ?>index.php#proposito">Propósito</a></li>
                        <li><a href="<?php echo $root; ?>index.php#metodologia">Metodologia</a></li>
                        <li><a href="<?php echo $root; ?>index.php#cursos">Cursos</a></li>
                        <li><a href="<?php echo $root; ?>parceiro.php">Parceiro</a></li>
                        <li><a href="<?php echo $root; ?>index.php#localizacao">Agendar Aula</a></li>
                    </ul>
                </div>
            </div>

            <div class="copyright">
                <p>&copy; 2026 Oficina Belas Artes. Todos os direitos reservados.</p>
                <div class="footer-dev-info">
                    <p class="creator">Criado por <a href="https://www.olamundodigital.com.br" target="_blank" rel="noopener" class="omd-link">
                        <img src="<?php echo $root; ?>images/logo-olamundodigital.png" alt="OMD" class="omd-mini-logo"> OláMundoDigital
                    </a></p>
                    <a href="https://wa.me/5521998743505?text=Ol%C3%A1%2C%20vimos%20o%20site%20da%20OBA%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site%20similar%21" target="_blank" class="dev-cta omd-gradient-btn" rel="noopener">
                        <i class="fab fa-whatsapp"></i> Quer um site igual a esse?
                    </a>
                </div>
            </div>
        </div>
    </footer>
    
