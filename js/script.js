// Actualiza el año del pie de página.
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

// Controla el fondo de la navegación según la página y el desplazamiento.
const nav = document.getElementById('nav');
if (nav) {
  const updateNavOnScroll = () => {
    const shouldBeSolid = window.scrollY > 20 || nav.classList.contains('force-solid');
    nav.classList.toggle('scrolled', shouldBeSolid);
  };

  if (document.body.dataset.home !== '1') {
    nav.classList.add('scrolled');
  } else {
    updateNavOnScroll();
    window.addEventListener('scroll', updateNavOnScroll);
  }
}

// Abre y cierra el menú móvil.
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });

  navMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
    });
  });
}

// Servicios que se muestran en la página de servicios.
const services = [
  {
    icon: '🧭',
    title: 'Ingeniería y Desarrollo de Proyectos',
    desc: 'Diseñamos soluciones técnicas eficientes y adaptadas a cada cliente. Desarrollamos ingeniería conceptual, básica y de detalle.',
    items: [
      'Estudios y diseño de líneas de transmisión',
      'Ingeniería de subestaciones eléctricas',
      'Cálculos y especificaciones técnicas',
      'Integración de sistemas de protección y control',
    ],
  },
  {
    icon: '⛑️',
    title: 'Construcción de Líneas de Transmisión',
    desc: 'Proyectos de líneas de transmisión en alta y media tensión hasta 500 kV con altos estándares de calidad y seguridad.',
    items: [
      'Montaje de estructuras y torres',
      'Tendido y tensado de conductores',
      'Obras civiles asociadas',
      'Puesta en servicio',
    ],
  },
  {
    icon: '⚙️',
    title: 'Construcción y Montaje de Subestaciones',
    desc: 'Subestaciones eléctricas desde la obra civil hasta la energización: nuevas, ampliaciones y modernizaciones.',
    items: [
      'Obras civiles (fundaciones, salas de control)',
      'Montaje electromecánico',
      'Instalación de equipos de potencia',
      'Sistemas de protección y automatización',
    ],
  },
  {
    icon: '🔧',
    title: 'Mantenimiento de Infraestructura Eléctrica',
    desc: 'Continuidad operativa y confiabilidad mediante mantenimiento preventivo, correctivo y predictivo.',
    items: [
      'Mantenimiento de líneas de transmisión',
      'Mantenimiento de subestaciones',
      'Inspecciones técnicas',
      'Diagnóstico y optimización de activos',
    ],
  },
  {
    icon: '🍃',
    title: 'Energías Renovables',
    desc: 'Desarrollo de proyectos de energías limpias e integración de generación renovable a la red.',
    items: [
      'Infraestructura para parques eólicos',
      'Infraestructura para sistemas fotovoltaicos',
      'Subestaciones y líneas asociadas',
    ],
  },
  {
    icon: '📋',
    title: 'Inspección, Supervisión y Fiscalización',
    desc: 'Cumplimiento técnico, normativo y contractual en cada fase del proyecto como soporte técnico independiente.',
    items: [
      'Supervisión técnica de proyectos',
      'Control de calidad',
      'Verificación de cumplimiento normativo',
      'Seguimiento de avance de obra',
    ],
  },
  {
    icon: '📈',
    title: 'Gestión Integral de Proyectos',
    desc: 'Coordinación y gestión eficiente desde la planificación hasta la entrega final, orientada a resultados.',
    items: [
      'Planificación y control de proyectos',
      'Gestión de contratos',
      'Coordinación de equipos',
      'Control documental y trazabilidad',
    ],
  },
  {
    icon: '👥',
    title: 'Suministro de Personal Técnico',
    desc: 'Profesionales cualificados para proyectos de infraestructura energética con experiencia internacional.',
    items: [
      'Ingenieros eléctricos',
      'Supervisores de obra',
      'Especialistas en subestaciones y líneas',
      'Personal técnico de campo',
    ],
  },
  {
    icon: '🛡️',
    title: 'Consultoría en Sistemas ISO',
    desc: 'Implementación y mejora de sistemas de gestión bajo estándares internacionales aplicados al sector energético.',
    items: [
      'ISO 9001 (Calidad)',
      'ISO 14001 (Medio Ambiente)',
      'ISO 45001 (Seguridad y Salud)',
      'ISO 50001 (Energía) · ISO 27001',
    ],
  },
];

const servicesGrid = document.getElementById('servicesGrid');
if (servicesGrid) {
  servicesGrid.innerHTML = services
    .map(
      (service, index) => `
        <article class="service">
          <div class="service-num">${String(index + 1).padStart(2, '0')}</div>
          <div class="service-icon">${service.icon}</div>
          <h3>${service.title}</h3>
          <p class="service-desc">${service.desc}</p>
          <ul>${service.items.map((item) => `<li>${item}</li>`).join('')}</ul>
        </article>
      `,
    )
    .join('');
}

// Valores corporativos que se muestran en las páginas que incluyen valuesGrid.
const values = [
  {
    icon: '🛡️',
    title: 'Seguridad',
    desc: 'Priorizamos la integridad de personas, instalaciones y entorno con cultura de prevención.',
  },
  {
    icon: '🏆',
    title: 'Calidad',
    desc: 'Altos estándares técnicos y de gestión, con resultados confiables y sostenibles.',
  },
  {
    icon: '🤝',
    title: 'Compromiso',
    desc: 'Responsabilidad y orientación a resultados, cumpliendo plazos y objetivos.',
  },
  {
    icon: '🔨',
    title: 'Excelencia Técnica',
    desc: 'Equipo calificado con experiencia internacional para proyectos complejos.',
  },
  {
    icon: '📜',
    title: 'Integridad',
    desc: 'Principios éticos y alineación con normativas y estándares internacionales.',
  },
  {
    icon: '🌱',
    title: 'Sostenibilidad',
    desc: 'Desarrollo energético responsable e integración de energías renovables.',
  },
  {
    icon: '💡',
    title: 'Innovación',
    desc: 'Soluciones tecnológicas y metodologías avanzadas para optimizar proyectos.',
  },
];

const valuesGrid = document.getElementById('valuesGrid');
if (valuesGrid) {
  valuesGrid.innerHTML = values
    .map(
      (value) => `
        <div class="value">
          <div class="value-icon">${value.icon}</div>
          <div class="value-title">${value.title}</div>
          <p>${value.desc}</p>
        </div>
      `,
    )
    .join('');
}