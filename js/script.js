// Year
var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

// Nav scroll
var nav = document.getElementById('nav');
if (nav) {
  var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 20 || nav.classList.contains('force-solid')); };
  // Always solid on inner pages (no hero behind), keep dynamic on home
  if (document.body.dataset.home !== '1') nav.classList.add('scrolled');
  else { onScroll(); window.addEventListener('scroll', onScroll); }
}

// Mobile nav
var toggle = document.getElementById('navToggle');
var mobile = document.getElementById('navMobile');
if (toggle && mobile) {
  toggle.addEventListener('click', function(){ mobile.classList.toggle('open'); });
  mobile.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ mobile.classList.remove('open'); }); });
}

// Services
var services = [
  { icon:'馃Л', title:'Ingenier铆a y Desarrollo de Proyectos', desc:'Dise帽amos soluciones t茅cnicas eficientes y adaptadas a cada cliente. Desarrollamos ingenier铆a conceptual, b谩sica y de detalle.', items:['Estudios y dise帽o de l铆neas de transmisi贸n','Ingenier铆a de subestaciones el茅ctricas','C谩lculos y especificaciones t茅cnicas','Integraci贸n de sistemas de protecci贸n y control']},
  { icon:'鉀戯笍', title:'Construcci贸n de L铆neas de Transmisi贸n', desc:'Proyectos de l铆neas de transmisi贸n en alta y media tensi贸n hasta 500 kV con altos est谩ndares de calidad y seguridad.', items:['Montaje de estructuras y torres','Tendido y tensado de conductores','Obras civiles asociadas','Puesta en servicio']},
  { icon:'鈿欙笍', title:'Construcci贸n y Montaje de Subestaciones', desc:'Subestaciones el茅ctricas desde la obra civil hasta la energizaci贸n: nuevas, ampliaciones y modernizaciones.', items:['Obras civiles (fundaciones, salas de control)','Montaje electromec谩nico','Instalaci贸n de equipos de potencia','Sistemas de protecci贸n y automatizaci贸n']},
  { icon:'馃敡', title:'Mantenimiento de Infraestructura El茅ctrica', desc:'Continuidad operativa y confiabilidad mediante mantenimiento preventivo, correctivo y predictivo.', items:['Mantenimiento de l铆neas de transmisi贸n','Mantenimiento de subestaciones','Inspecciones t茅cnicas','Diagn贸stico y optimizaci贸n de activos']},
  { icon:'馃崈', title:'Energ铆as Renovables', desc:'Desarrollo de proyectos de energ铆as limpias e integraci贸n de generaci贸n renovable a la red.', items:['Infraestructura para parques e贸licos','Infraestructura para sistemas fotovoltaicos','Subestaciones y l铆neas asociadas']},
  { icon:'馃搵', title:'Inspecci贸n, Supervisi贸n y Fiscalizaci贸n', desc:'Cumplimiento t茅cnico, normativo y contractual en cada fase del proyecto como soporte t茅cnico independiente.', items:['Supervisi贸n t茅cnica de proyectos','Control de calidad','Verificaci贸n de cumplimiento normativo','Seguimiento de avance de obra']},
  { icon:'馃搱', title:'Gesti贸n Integral de Proyectos', desc:'Coordinaci贸n y gesti贸n eficiente desde la planificaci贸n hasta la entrega final, orientada a resultados.', items:['Planificaci贸n y control de proyectos','Gesti贸n de contratos','Coordinaci贸n de equipos','Control documental y trazabilidad']},
  { icon:'馃懃', title:'Suministro de Personal T茅cnico', desc:'Profesionales cualificados para proyectos de infraestructura energ茅tica con experiencia internacional.', items:['Ingenieros el茅ctricos','Supervisores de obra','Especialistas en subestaciones y l铆neas','Personal t茅cnico de campo']},
  { icon:'馃洝锔?, title:'Consultor铆a en Sistemas ISO', desc:'Implementaci贸n y mejora de sistemas de gesti贸n bajo est谩ndares internacionales aplicados al sector energ茅tico.', items:['ISO 9001 (Calidad)','ISO 14001 (Medio Ambiente)','ISO 45001 (Seguridad y Salud)','ISO 50001 (Energ铆a) 路 ISO 27001']},
];
var sg = document.getElementById('servicesGrid');
if (sg) sg.innerHTML = services.map(function(s,i){ return '<article class="service"><div class="service-num">'+String(i+1).padStart(2,'0')+'</div><div class="service-icon">'+s.icon+'</div><h3>'+s.title+'</h3><p class="service-desc">'+s.desc+'</p><ul>'+s.items.map(function(it){return '<li>'+it+'</li>';}).join('')+'</ul></article>'; }).join('');

// Values
var values = [
  {i:'馃洝锔?,t:'Seguridad',d:'Priorizamos la integridad de personas, instalaciones y entorno con cultura de prevenci贸n.'},
  {i:'馃弳',t:'Calidad',d:'Altos est谩ndares t茅cnicos y de gesti贸n, con resultados confiables y sostenibles.'},
  {i:'馃',t:'Compromiso',d:'Responsabilidad y orientaci贸n a resultados, cumpliendo plazos y objetivos.'},
  {i:'馃敤',t:'Excelencia T茅cnica',d:'Equipo calificado con experiencia internacional para proyectos complejos.'},
  {i:'馃摐',t:'Integridad',d:'Principios 茅ticos y alineaci贸n con normativas y est谩ndares internacionales.'},
  {i:'馃尡',t:'Sostenibilidad',d:'Desarrollo energ茅tico responsable e integraci贸n de energ铆as renovables.'},
  {i:'馃挕',t:'Innovaci贸n',d:'Soluciones tecnol贸gicas y metodolog铆as avanzadas para optimizar proyectos.'},
];
var vg = document.getElementById('valuesGrid');
if (vg) vg.innerHTML = values.map(function(v){ return '<div class="value"><div class="value-icon">'+v.i+'</div><div class="value-title">'+v.t+'</div><p>'+v.d+'</p></div>'; }).join('');

