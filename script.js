// Dataset ficticio expandido
const rawData = [
  { codigo: "2410-38-LE26", nombre: "Mantención de áreas verdes sector norte", municipalidad: "Municipalidad de Temuco", region: "La Araucanía", estado: "Publicada", monto: 48500000, fecha: "2026-10-14", ofertas: 3 },
  { codigo: "1502-12-LP26", nombre: "Servicio de recolección de residuos domiciliarios", municipalidad: "Municipalidad de Santiago", region: "Metropolitana", estado: "Adjudicada", monto: 120000000, fecha: "2026-09-20", ofertas: 5 },
  { codigo: "3301-45-LE26", nombre: "Reparación luminarias públicas sector centro", municipalidad: "Municipalidad de Valparaíso", region: "Valparaíso", estado: "Cerrada", monto: 18200000, fecha: "2026-10-01", ofertas: 2 },
  { codigo: "4102-08-LE26", nombre: "Adquisición de insumos de oficina y papelería", municipalidad: "Municipalidad de Concepción", region: "Biobío", estado: "Desierta", monto: 5000000, fecha: "2026-08-15", ofertas: 0 },
  { codigo: "2410-40-LP26", nombre: "Construcción techado cancha comunitaria", municipalidad: "Municipalidad de Temuco", region: "La Araucanía", estado: "Publicada", monto: 85000000, fecha: "2026-10-28", ofertas: 4 },
  { codigo: "1502-99-LE26", nombre: "Auditoría externa de estados financieros", municipalidad: "Municipalidad de Santiago", region: "Metropolitana", estado: "Publicada", monto: 25000000, fecha: "2026-11-05", ofertas: 1 },
  { codigo: "3301-88-LP26", nombre: "Restauración fachada edificio consistorial", municipalidad: "Municipalidad de Valparaíso", region: "Valparaíso", estado: "Publicada", monto: 92000000, fecha: "2026-10-30", ofertas: 6 },
  { codigo: "4102-22-LE26", nombre: "Renovación licencias de software institucional", municipalidad: "Municipalidad de Concepción", region: "Biobío", estado: "Adjudicada", monto: 14500000, fecha: "2026-09-12", ofertas: 3 },
  { codigo: "2410-52-LE26", nombre: "Instalación de cámaras de televigilancia", municipalidad: "Municipalidad de Temuco", region: "La Araucanía", estado: "Adjudicada", monto: 63000000, fecha: "2026-09-28", ofertas: 4 },
  { codigo: "1502-30-LE26", nombre: "Suministro de cajas de alimentos de emergencia", municipalidad: "Municipalidad de Santiago", region: "Metropolitana", estado: "Cerrada", monto: 35000000, fecha: "2026-10-02", ofertas: 8 },
  { codigo: "3301-14-LE26", nombre: "Mantención de red de semáforos viales", municipalidad: "Municipalidad de Valparaíso", region: "Valparaíso", estado: "Desierta", monto: 22000000, fecha: "2026-08-30", ofertas: 0 },
  { codigo: "4102-61-LP26", nombre: "Construcción ciclofaja Avenida O'Higgins", municipalidad: "Municipalidad de Concepción", region: "Biobío", estado: "Publicada", monto: 110000000, fecha: "2026-11-15", ofertas: 2 },
  { codigo: "1502-77-LE26", nombre: "Arriendo de maquinaria pesada para obras", municipalidad: "Municipalidad de Santiago", region: "Metropolitana", estado: "Publicada", monto: 42000000, fecha: "2026-10-22", ofertas: 3 },
  { codigo: "2410-91-LE26", nombre: "Mejoramiento plazas de juegos infantiles", municipalidad: "Municipalidad de Temuco", region: "La Araucanía", estado: "Cerrada", monto: 19800000, fecha: "2026-10-05", ofertas: 5 },
  { codigo: "3301-99-LE26", nombre: "Servicio de limpieza de playas urbanas", municipalidad: "Municipalidad de Valparaíso", region: "Valparaíso", estado: "Adjudicada", monto: 28000000, fecha: "2026-09-18", ofertas: 4 },
  { codigo: "4102-33-LE26", nombre: "Adquisición de vehículos operativos para inspección", municipalidad: "Municipalidad de Concepción", region: "Biobío", estado: "Publicada", monto: 54000000, fecha: "2026-10-19", ofertas: 2 },
  { codigo: "1502-44-LP26", nombre: "Conservación de pavimentos comunales", municipalidad: "Municipalidad de Santiago", region: "Metropolitana", estado: "Adjudicada", monto: 210000000, fecha: "2026-08-25", ofertas: 7 },
  { codigo: "2410-11-LE26", nombre: "Servicio de seguridad para eventos culturales", municipalidad: "Municipalidad de Temuco", region: "La Araucanía", estado: "Desierta", monto: 9500000, fecha: "2026-09-01", ofertas: 0 },
  { codigo: "5201-15-LE26", nombre: "Adquisición de contenedores de reciclaje comunitario", municipalidad: "Municipalidad de Antofagasta", region: "Antofagasta", estado: "Publicada", monto: 31000000, fecha: "2026-10-25", ofertas: 2 },
  { codigo: "5201-28-LP26", nombre: "Pavimentación y aceras sector El Olivar", municipalidad: "Municipalidad de Antofagasta", region: "Antofagasta", estado: "Adjudicada", monto: 175000000, fecha: "2026-09-05", ofertas: 4 },
  { codigo: "6104-03-LE26", nombre: "Servicio de mantención preventiva de la red de alcantarillado", municipalidad: "Municipalidad de La Serena", region: "Coquimbo", estado: "Publicada", monto: 38000000, fecha: "2026-11-02", ofertas: 3 },
  { codigo: "6104-19-LE26", nombre: "Habilitación de iluminación LED en parque Gabriel Coll", municipalidad: "Municipalidad de La Serena", region: "Coquimbo", estado: "Cerrada", monto: 24500000, fecha: "2026-09-29", ofertas: 5 },
  { codigo: "7302-11-LP26", nombre: "Construcción de centro comunitario Villa Las Flores", municipalidad: "Municipalidad de Rancagua", region: "O'Higgins", estado: "Publicada", monto: 98000000, fecha: "2026-10-27", ofertas: 3 },
  { codigo: "7302-44-LE26", nombre: "Adquisición de equipamiento médico para CESFAM comunal", municipalidad: "Municipalidad de Rancagua", region: "O'Higgins", estado: "Adjudicada", monto: 45000000, fecha: "2026-09-14", ofertas: 6 },
  { codigo: "8205-09-LE26", nombre: "Servicio de transporte escolar para sectores rurales", municipalidad: "Municipalidad de Talca", region: "Maule", estado: "Publicada", monto: 29000000, fecha: "2026-10-18", ofertas: 2 },
  { codigo: "8205-31-LE26", nombre: "Reparación y pintura de techumbres en liceo municipal", municipalidad: "Municipalidad de Talca", region: "Maule", estado: "Desierta", monto: 16000000, fecha: "2026-08-20", ofertas: 0 },
  { codigo: "9101-05-LE26", nombre: "Suministro e instalación de refugios peatonales", municipalidad: "Municipalidad de Puerto Montt", region: "Los Lagos", estado: "Publicada", monto: 33500000, fecha: "2026-11-10", ofertas: 1 },
  { codigo: "9101-24-LP26", nombre: "Mejoramiento del borde costero sector Pelluco", municipalidad: "Municipalidad de Puerto Montt", region: "Los Lagos", estado: "Adjudicada", monto: 185000000, fecha: "2026-09-08", ofertas: 4 },
  { codigo: "1002-18-LE26", nombre: "Servicio de desratización y sanitización en edificios municipales", municipalidad: "Municipalidad de Iquique", region: "Tarapacá", estado: "Cerrada", monto: 12000000, fecha: "2026-10-04", ofertas: 4 },
  { codigo: "1002-42-LE26", nombre: "Adquisición de uniformes para personal de operaciones", municipalidad: "Municipalidad de Iquique", region: "Tarapacá", estado: "Publicada", monto: 17800000, fecha: "2026-10-21", ofertas: 3 },
  { codigo: "1105-07-LE26", nombre: "Mantención y calibración de plantas elevadoras de agua", municipalidad: "Municipalidad de Valdivia", region: "Los Ríos", estado: "Adjudicada", monto: 41000000, fecha: "2026-09-22", ofertas: 2 },
  { codigo: "1105-33-LP26", nombre: "Construcción de ciclovía Avenida España", municipalidad: "Municipalidad de Valdivia", region: "Los Ríos", estado: "Publicada", monto: 76000000, fecha: "2026-11-01", ofertas: 5 },
  { codigo: "1503-14-LE26", nombre: "Servicio de podas y tala de árboles de alto riesgo", municipalidad: "Municipalidad de Providencia", region: "Metropolitana", estado: "Publicada", monto: 39000000, fecha: "2026-10-16", ofertas: 4 },
  { codigo: "1503-88-LP26", nombre: "Renovación integral de luminarias a tecnología LED sector sur", municipalidad: "Municipalidad de Providencia", region: "Metropolitana", estado: "Adjudicada", monto: 135000000, fecha: "2026-09-02", ofertas: 6 },
  { codigo: "1504-02-LE26", nombre: "Servicio de banquettería para actividades del adulto mayor", municipalidad: "Municipalidad de Maipú", region: "Metropolitana", estado: "Cerrada", monto: 8500000, fecha: "2026-09-27", ofertas: 3 },
  { codigo: "1504-61-LP26", nombre: "Reparación de matriz principal de agua potable rural", municipalidad: "Municipalidad de Maipú", region: "Metropolitana", estado: "Publicada", monto: 94000000, fecha: "2026-10-29", ofertas: 2 },
  { codigo: "1505-23-LE26", nombre: "Arriendo de tótems digitales informativos para atención de público", municipalidad: "Municipalidad de La Florida", region: "Metropolitana", estado: "Desierta", monto: 15000000, fecha: "2026-08-28", ofertas: 0 },
  { codigo: "1505-79-LE26", nombre: "Mejoramiento de accesibilidad universal en sede municipal", municipalidad: "Municipalidad de La Florida", region: "Metropolitana", estado: "Adjudicada", monto: 27500000, fecha: "2026-09-17", ofertas: 4 },
  { codigo: "3302-12-LE26", nombre: "Adquisición de camión aljibe para distribución de agua potable", municipalidad: "Municipalidad de Viña del Mar", region: "Valparaíso", estado: "Publicada", monto: 68000000, fecha: "2026-10-24", ofertas: 3 },
  { codigo: "3302-55-LP26", nombre: "Construcción mirador turístico sector Reñaca", municipalidad: "Municipalidad de Viña del Mar", region: "Valparaíso", estado: "Publicada", monto: 115000000, fecha: "2026-11-12", ofertas: 2 },
  { codigo: "4103-04-LE26", nombre: "Servicio de patrullaje de seguridad ciudadana nocturno", municipalidad: "Municipalidad de Talcahuano", region: "Biobío", estado: "Adjudicada", monto: 52000000, fecha: "2026-09-11", ofertas: 5 },
  { codigo: "4103-39-LE26", nombre: "Mantención de bombas de achique en pasos desniveles", municipalidad: "Municipalidad de Talcahuano", region: "Biobío", estado: "Cerrada", monto: 19000000, fecha: "2026-09-30", ofertas: 2 },
  { codigo: "2411-08-LE26", nombre: "Adquisición de juguetes para entrega navideña comunal", municipalidad: "Municipalidad de Padre Las Casas", region: "La Araucanía", estado: "Publicada", monto: 21000000, fecha: "2026-10-15", ofertas: 4 },
  { codigo: "2411-47-LP26", nombre: "Construcción de sede social junta de vecinos El Bosque", municipalidad: "Municipalidad de Padre Las Casas", region: "La Araucanía", estado: "Adjudicada", monto: 64000000, fecha: "2026-08-19", ofertas: 3 },
  { codigo: "1201-03-LE26", nombre: "Suministro de leña y pellets para hogares vulnerables", municipalidad: "Municipalidad de Punta Arenas", region: "Magallanes", estado: "Cerrada", monto: 32000000, fecha: "2026-10-03", ofertas: 3 },
  { codigo: "1201-19-LE26", nombre: "Servicio de limpieza y despeje de nieve en vías principales", municipalidad: "Municipalidad de Punta Arenas", region: "Magallanes", estado: "Adjudicada", monto: 88000000, fecha: "2026-09-25", ofertas: 2 },
  { codigo: "1301-05-LE26", nombre: "Adquisición de kits de emergencia alimentaria y abrigo", municipalidad: "Municipalidad de Arica", region: "Arica y Parinacota", estado: "Publicada", monto: 18500000, fecha: "2026-10-31", ofertas: 1 },
  { codigo: "1301-22-LE26", nombre: "Mantención de sombreaderos y paseo peatonal chinchorro", municipalidad: "Municipalidad de Arica", region: "Arica y Parinacota", estado: "Desierta", monto: 14000000, fecha: "2026-09-03", ofertas: 0 },
  { codigo: "5201-15-LE26", nombre: "Adquisición de contenedores de reciclaje comunitario", municipalidad: "Municipalidad de Antofagasta", region: "Antofagasta", estado: "Publicada", monto: 31000000, fecha: "2026-10-25", ofertas: 2 },
  { codigo: "5201-28-LP26", nombre: "Pavimentación y aceras sector El Olivar", municipalidad: "Municipalidad de Antofagasta", region: "Antofagasta", estado: "Adjudicada", monto: 175000000, fecha: "2026-09-05", ofertas: 4 },
  { codigo: "6104-03-LE26", nombre: "Servicio de mantención preventiva de la red de alcantarillado", municipalidad: "Municipalidad de La Serena", region: "Coquimbo", estado: "Publicada", monto: 38000000, fecha: "2026-11-02", ofertas: 3 },
  { codigo: "6104-19-LE26", nombre: "Habilitación de iluminación LED en parque Gabriel Coll", municipalidad: "Municipalidad de La Serena", region: "Coquimbo", estado: "Cerrada", monto: 24500000, fecha: "2026-09-29", ofertas: 5 },
  { codigo: "7302-11-LP26", nombre: "Construcción de centro comunitario Villa Las Flores", municipalidad: "Municipalidad de Rancagua", region: "O'Higgins", estado: "Publicada", monto: 98000000, fecha: "2026-10-27", ofertas: 3 },
  { codigo: "7302-44-LE26", nombre: "Adquisición de equipamiento médico para CESFAM comunal", municipalidad: "Municipalidad de Rancagua", region: "O'Higgins", estado: "Adjudicada", monto: 45000000, fecha: "2026-09-14", ofertas: 6 },
  { codigo: "8205-09-LE26", nombre: "Servicio de transporte escolar para sectores rurales", municipalidad: "Municipalidad de Talca", region: "Maule", estado: "Publicada", monto: 29000000, fecha: "2026-10-18", ofertas: 2 },
  { codigo: "8205-31-LE26", nombre: "Reparación y pintura de techumbres en liceo municipal", municipalidad: "Municipalidad de Talca", region: "Maule", estado: "Desierta", monto: 16000000, fecha: "2026-08-20", ofertas: 0 },
  { codigo: "9101-05-LE26", nombre: "Suministro e instalación de refugios peatonales", municipalidad: "Municipalidad de Puerto Montt", region: "Los Lagos", estado: "Publicada", monto: 33500000, fecha: "2026-11-10", ofertas: 1 },
  { codigo: "9101-24-LP26", nombre: "Mejoramiento del borde costero sector Pelluco", municipalidad: "Municipalidad de Puerto Montt", region: "Los Lagos", estado: "Adjudicada", monto: 185000000, fecha: "2026-09-08", ofertas: 4 },
  { codigo: "1002-18-LE26", nombre: "Servicio de desratización y sanitización en edificios municipales", municipalidad: "Municipalidad de Iquique", region: "Tarapacá", estado: "Cerrada", monto: 12000000, fecha: "2026-10-04", ofertas: 4 },
  { codigo: "1002-42-LE26", nombre: "Adquisición de uniformes para personal de operaciones", municipalidad: "Municipalidad de Iquique", region: "Tarapacá", estado: "Publicada", monto: 17800000, fecha: "2026-10-21", ofertas: 3 },
  { codigo: "1105-07-LE26", nombre: "Mantención y calibración de plantas elevadoras de agua", municipalidad: "Municipalidad de Valdivia", region: "Los Ríos", estado: "Adjudicada", monto: 41000000, fecha: "2026-09-22", ofertas: 2 },
  { codigo: "1105-33-LP26", nombre: "Construcción de ciclovía Avenida España", municipalidad: "Municipalidad de Valdivia", region: "Los Ríos", estado: "Publicada", monto: 76000000, fecha: "2026-11-01", ofertas: 5 },
  { codigo: "1503-14-LE26", nombre: "Servicio de podas y tala de árboles de alto riesgo", municipalidad: "Municipalidad de Providencia", region: "Metropolitana", estado: "Publicada", monto: 39000000, fecha: "2026-10-16", ofertas: 4 },
  { codigo: "1503-88-LP26", nombre: "Renovación integral de luminarias a tecnología LED sector sur", municipalidad: "Municipalidad de Providencia", region: "Metropolitana", estado: "Adjudicada", monto: 135000000, fecha: "2026-09-02", ofertas: 6 },
  { codigo: "1504-02-LE26", nombre: "Servicio de banquettería para actividades del adulto mayor", municipalidad: "Municipalidad de Maipú", region: "Metropolitana", estado: "Cerrada", monto: 8500000, fecha: "2026-09-27", ofertas: 3 },
  { codigo: "1504-61-LP26", nombre: "Reparación de matriz principal de agua potable rural", municipalidad: "Municipalidad de Maipú", region: "Metropolitana", estado: "Publicada", monto: 94000000, fecha: "2026-10-29", ofertas: 2 },
  { codigo: "1505-23-LE26", nombre: "Arriendo de tótems digitales informativos para atención de público", municipalidad: "Municipalidad de La Florida", region: "Metropolitana", estado: "Desierta", monto: 15000000, fecha: "2026-08-28", ofertas: 0 },
  { codigo: "1505-79-LE26", nombre: "Mejoramiento de accesibilidad universal en sede municipal", municipalidad: "Municipalidad de La Florida", region: "Metropolitana", estado: "Adjudicada", monto: 27500000, fecha: "2026-09-17", ofertas: 4 },
  { codigo: "3302-12-LE26", nombre: "Adquisición de camión aljibe para distribución de agua potable", municipalidad: "Municipalidad de Viña del Mar", region: "Valparaíso", estado: "Publicada", monto: 68000000, fecha: "2026-10-24", ofertas: 3 },
  { codigo: "3302-55-LP26", nombre: "Construcción mirador turístico sector Reñaca", municipalidad: "Municipalidad de Viña del Mar", region: "Valparaíso", estado: "Publicada", monto: 115000000, fecha: "2026-11-12", ofertas: 2 },
  { codigo: "4103-04-LE26", nombre: "Servicio de patrullaje de seguridad ciudadana nocturno", municipalidad: "Municipalidad de Talcahuano", region: "Biobío", estado: "Adjudicada", monto: 52000000, fecha: "2026-09-11", ofertas: 5 },
  { codigo: "4103-39-LE26", nombre: "Mantención de bombas de achique en pasos desniveles", municipalidad: "Municipalidad de Talcahuano", region: "Biobío", estado: "Cerrada", monto: 19000000, fecha: "2026-09-30", ofertas: 2 },
  { codigo: "2411-08-LE26", nombre: "Adquisición de juguetes para entrega navideña comunal", municipalidad: "Municipalidad de Padre Las Casas", region: "La Araucanía", estado: "Publicada", monto: 21000000, fecha: "2026-10-15", ofertas: 4 },
  { codigo: "2411-47-LP26", nombre: "Construcción de sede social junta de vecinos El Bosque", municipalidad: "Municipalidad de Padre Las Casas", region: "La Araucanía", estado: "Adjudicada", monto: 64000000, fecha: "2026-08-19", ofertas: 3 },
  { codigo: "1201-03-LE26", nombre: "Suministro de leña y pellets para hogares vulnerables", municipalidad: "Municipalidad de Punta Arenas", region: "Magallanes", estado: "Cerrada", monto: 32000000, fecha: "2026-10-03", ofertas: 3 },
  { codigo: "1201-19-LE26", nombre: "Servicio de limpieza y despeje de nieve en vías principales", municipalidad: "Municipalidad de Punta Arenas", region: "Magallanes", estado: "Adjudicada", monto: 88000000, fecha: "2026-09-25", ofertas: 2 },
  { codigo: "1301-05-LE26", nombre: "Adquisición de kits de emergencia alimentaria y abrigo", municipalidad: "Municipalidad de Arica", region: "Arica y Parinacota", estado: "Publicada", monto: 18500000, fecha: "2026-10-31", ofertas: 1 },
  { codigo: "1301-22-LE26", nombre: "Mantención de sombreaderos y paseo peatonal chinchorro", municipalidad: "Municipalidad de Arica", region: "Arica y Parinacota", estado: "Desierta", monto: 14000000, fecha: "2026-09-03", ofertas: 0 }
];

let currentData = [...rawData];
let sortDirection = false;

// Estado de paginación
let currentPage = 1;
let itemsPerPage = 10;

// Formateadores
const formatCLP = (val) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);

// Renderizado de Tabla
function renderTable(data) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';

  // Cálculo de Paginación
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedData = data.slice(startIndex, endIndex);

  paginatedData.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td data-label="Código"><strong>${item.codigo}</strong></td>
      <td data-label="Nombre / Municipio">
        <div>${item.nombre}</div>
        <small style="color: var(--color-text-muted);">${item.municipalidad}</small>
      </td>
      <td data-label="Región">${item.region}</td>
      <td data-label="Estado"><span class="badge badge-${item.estado.toLowerCase()}">${item.estado}</span></td>
      <td data-label="Monto Estimado">${formatCLP(item.monto)}</td>
      <td data-label="Fecha Cierre">${item.fecha}</td>
      <td data-label="Ofertas">${item.ofertas}</td>
    `;
    tbody.appendChild(tr);
  });

  updateKPIs(data);
  renderPaginationControls(totalItems, totalPages, startIndex, endIndex);
}

// Renderizado de Controles de Paginación
function renderPaginationControls(totalItems, totalPages, startIndex, endIndex) {
  document.getElementById('page-start').innerText = totalItems === 0 ? 0 : startIndex + 1;
  document.getElementById('page-end').innerText = endIndex;
  document.getElementById('page-total').innerText = totalItems;

  const firstBtn = document.getElementById('btn-first');
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  const lastBtn = document.getElementById('btn-last');

  const isDisabledPrev = currentPage === 1 || totalItems === 0;
  const isDisabledNext = currentPage === totalPages || totalItems === 0;

  firstBtn.disabled = isDisabledPrev;
  prevBtn.disabled = isDisabledPrev;
  nextBtn.disabled = isDisabledNext;
  lastBtn.disabled = isDisabledNext;

  const pageNumbersContainer = document.getElementById('page-numbers');
  pageNumbersContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = `btn btn-outline btn-num ${i === currentPage ? 'active' : ''}`;
    btn.innerText = i;
    btn.onclick = () => {
      currentPage = i;
      renderTable(currentData);
    };
    pageNumbersContainer.appendChild(btn);
  }
}

// Actualización de KPIs
function updateKPIs(data) {
  const totalMonto = data.reduce((acc, curr) => acc + curr.monto, 0);
  const publicadas = data.filter(d => d.estado === 'Publicada').length;
  const adjudicadas = data.filter(d => d.estado === 'Adjudicada').length;
  const totalOfertas = data.reduce((acc, curr) => acc + curr.ofertas, 0);
  const promedioOfertas = data.length > 0 ? (totalOfertas / data.length).toFixed(1) : 0;

  document.getElementById('kpi-total-monto').innerText = formatCLP(totalMonto);
  document.getElementById('kpi-publicadas').innerText = publicadas;
  document.getElementById('kpi-adjudicadas').innerText = adjudicadas;
  document.getElementById('kpi-promedio-ofertas').innerText = promedioOfertas;
}

// Manejo de Filtros
function applyFilters() {
  const search = document.getElementById('search-input').value.toLowerCase();
  const region = document.getElementById('region-filter').value;
  const estado = document.getElementById('estado-filter').value;
  const fecha = document.getElementById('date-filter').value;

  currentData = rawData.filter(item => {
    const matchesSearch = item.codigo.toLowerCase().includes(search) ||
      item.nombre.toLowerCase().includes(search) ||
      item.municipalidad.toLowerCase().includes(search);
    const matchesRegion = region === '' || item.region === region;
    const matchesEstado = estado === '' || item.estado === estado;
    const matchesFecha = fecha === '' || item.fecha <= fecha;

    return matchesSearch && matchesRegion && matchesEstado && matchesFecha;
  });

  currentPage = 1;

  if (currentData.length === 0) {
    setUIState('empty');
  } else {
    setUIState('success');
    renderTable(currentData);
  }
}

// Ordenamiento de Columnas
function sortTable(key) {
  sortDirection = !sortDirection;
  currentData.sort((a, b) => {
    if (a[key] < b[key]) return sortDirection ? -1 : 1;
    if (a[key] > b[key]) return sortDirection ? 1 : -1;
    return 0;
  });
  renderTable(currentData);
}

// Control de Estados UI (Testing)
function setUIState(state) {
  document.getElementById('main-table').style.display = 'none';
  document.getElementById('pagination-container').style.display = 'none';
  document.getElementById('state-loading').style.display = 'none';
  document.getElementById('state-empty').style.display = 'none';
  document.getElementById('state-error').style.display = 'none';

  if (state === 'success') {
    document.getElementById('main-table').style.display = 'table';
    document.getElementById('pagination-container').style.display = 'flex';
    renderTable(currentData);
  } else if (state === 'loading') {
    document.getElementById('state-loading').style.display = 'block';
  } else if (state === 'empty') {
    document.getElementById('state-empty').style.display = 'block';
  } else if (state === 'error') {
    document.getElementById('state-error').style.display = 'block';
  }
}

// Event Listeners de Filtros
document.getElementById('search-input').addEventListener('input', applyFilters);
document.getElementById('region-filter').addEventListener('change', applyFilters);
document.getElementById('estado-filter').addEventListener('change', applyFilters);
document.getElementById('date-filter').addEventListener('change', applyFilters);

// Event Listeners de Paginación (Navegación completa)
document.getElementById('btn-first').addEventListener('click', () => {
  currentPage = 1;
  renderTable(currentData);
});

document.getElementById('btn-prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable(currentData);
  }
});

document.getElementById('btn-next').addEventListener('click', () => {
  const totalPages = Math.ceil(currentData.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable(currentData);
  }
});

document.getElementById('btn-last').addEventListener('click', () => {
  const totalPages = Math.ceil(currentData.length / itemsPerPage);
  currentPage = totalPages;
  renderTable(currentData);
});

document.getElementById('items-per-page-select').addEventListener('change', (e) => {
  itemsPerPage = parseInt(e.target.value, 10);
  currentPage = 1;
  renderTable(currentData);
});

// Reseteo
document.getElementById('btn-reset').addEventListener('click', () => {
  document.getElementById('search-input').value = '';
  document.getElementById('region-filter').value = '';
  document.getElementById('estado-filter').value = '';
  document.getElementById('date-filter').value = '';
  currentData = [...rawData];
  currentPage = 1;
  setUIState('success');
});

// Inicialización
renderTable(rawData);