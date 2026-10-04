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
  { codigo: "2410-11-LE26", nombre: "Servicio de seguridad para eventos culturales", municipalidad: "Municipalidad de Temuco", region: "La Araucanía", estado: "Desierta", monto: 9500000, fecha: "2026-09-01", ofertas: 0 }
];

let currentData = [...rawData];
let sortDirection = false;

// Estado de paginación
let currentPage = 1;
let itemsPerPage = 6;

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