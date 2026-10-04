// Dataset ficticio con la estructura solicitada
const rawData = [
  { codigo: "2410-38-LE26", nombre: "Mantención de áreas verdes sector norte", municipalidad: "Municipalidad de Temuco", region: "La Araucanía", estado: "Publicada", monto: 48500000, fecha: "2026-10-14", ofertas: 3 },
  { codigo: "1502-12-LP26", nombre: "Servicio de recolección de residuos domiciliarios", municipalidad: "Municipalidad de Santiago", region: "Metropolitana", estado: "Adjudicada", monto: 120000000, fecha: "2026-09-20", ofertas: 5 },
  { codigo: "3301-45-LE26", nombre: "Reparación luminarias públicas sector centro", municipalidad: "Municipalidad de Valparaíso", region: "Valparaíso", estado: "Cerrada", monto: 18200000, fecha: "2026-10-01", ofertas: 2 },
  { codigo: "4102-08-LE26", nombre: "Adquisición de insumos de oficina y papelería", municipalidad: "Municipalidad de Concepción", region: "Biobío", estado: "Desierta", monto: 5000000, fecha: "2026-08-15", ofertas: 0 },
  { codigo: "2410-40-LP26", nombre: "Construcción techado cancha comunitaria", municipalidad: "Municipalidad de Temuco", region: "La Araucanía", estado: "Publicada", monto: 85000000, fecha: "2026-10-28", ofertas: 4 },
  { codigo: "1502-99-LE26", nombre: "Auditoría externa de estados financieros", municipalidad: "Municipalidad de Santiago", region: "Metropolitana", estado: "Publicada", monto: 25000000, fecha: "2026-11-05", ofertas: 1 }
];

let currentData = [...rawData];
let sortDirection = false;

// Formateadores
const formatCLP = (val) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);

// Renderizado de Tabla
function renderTable(data) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';

  data.forEach(item => {
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
  document.getElementById('state-loading').style.display = 'none';
  document.getElementById('state-empty').style.display = 'none';
  document.getElementById('state-error').style.display = 'none';

  if (state === 'success') {
    document.getElementById('main-table').style.display = 'table';
    renderTable(currentData);
  } else if (state === 'loading') {
    document.getElementById('state-loading').style.display = 'block';
  } else if (state === 'empty') {
    document.getElementById('state-empty').style.display = 'block';
  } else if (state === 'error') {
    document.getElementById('state-error').style.display = 'block';
  }
}

// Listeners
document.getElementById('search-input').addEventListener('input', applyFilters);
document.getElementById('region-filter').addEventListener('change', applyFilters);
document.getElementById('estado-filter').addEventListener('change', applyFilters);
document.getElementById('date-filter').addEventListener('change', applyFilters);

document.getElementById('btn-reset').addEventListener('click', () => {
  document.getElementById('search-input').value = '';
  document.getElementById('region-filter').value = '';
  document.getElementById('estado-filter').value = '';
  document.getElementById('date-filter').value = '';
  currentData = [...rawData];
  setUIState('success');
});

// Inicialización
renderTable(rawData);