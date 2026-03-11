const CLAVE_PREFS = "mvp_preferencias";

const esCuestionario = Boolean(document.querySelector("#formulario"));
const esRecomendacion = Boolean(document.querySelector("#resultado"));

if (esCuestionario) {
  iniciarCuestionario();
}

if (esRecomendacion) {
  iniciarRecomendacion();
}

function mostrarAviso(texto, tipo = "warning") {
  const contenedor = document.querySelector("#avisos");
  if (!contenedor) return;

  contenedor.innerHTML = `<div class="alert alert-${tipo}">${texto}</div>`;
}

function guardarPreferencias(preferencias) {
  localStorage.setItem(CLAVE_PREFS, JSON.stringify(preferencias));
}

function obtenerPreferencias() {
  const texto = localStorage.getItem(CLAVE_PREFS);
  if (!texto) return null;

  try {
    return JSON.parse(texto);
  } catch {
    localStorage.removeItem(CLAVE_PREFS);
    return null;
  }
}

async function cargarDestinos() {
  const url = new URL("../../data/destinos.json", import.meta.url).href;
  const respuesta = await fetch(url);
  if (!respuesta.ok) throw new Error("No se pudo cargar el catálogo");

  const destinos = await respuesta.json();
  if (!Array.isArray(destinos) || !destinos.length) {
    throw new Error("Catálogo vacío");
  }

  return destinos;
}

function iniciarCuestionario() {
  const formulario = document.querySelector("#formulario");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const preferencias = {
      tipo: document.querySelector("#tipo").value,
      ritmo: document.querySelector("#ritmo").value,
      clima: document.querySelector("#clima").value,
      presupuesto: document.querySelector("#presupuesto").value,
    };

    if (Object.values(preferencias).some((v) => !v)) {
      mostrarAviso("Completa todos los campos.");
      return;
    }

    guardarPreferencias(preferencias);
    window.location.href = "./recomendacion.html";
  });
}

function puntuar(destino, preferencias) {
  let puntos = 0;

  if (destino.tipo === preferencias.tipo) puntos += 2;
  if (destino.clima === preferencias.clima) puntos += 2;
  if (destino.presupuesto === preferencias.presupuesto) puntos += 1;

  const mapaRitmo = {
    tranquilo: ["relax", "gastronomico"],
    equilibrado: ["cultural", "relax", "gastronomico"],
    activo: ["aventura", "cultural"],
  };

  if ((mapaRitmo[preferencias.ritmo] || []).includes(destino.estilo)) puntos += 2;

  return puntos;
}

async function iniciarRecomendacion() {
  const caja = document.querySelector("#resultado");

  const preferencias = obtenerPreferencias();
  if (!preferencias) {
    caja.textContent = "No hay preferencias guardadas. Ve al cuestionario.";
    return;
  }

  try {
    const destinos = await cargarDestinos();
    const ordenados = [...destinos].sort((a, b) => puntuar(b, preferencias) - puntuar(a, preferencias));
    const destino = ordenados[0];

    if (!destino) {
      caja.textContent = "No se pudo generar una recomendación.";
      return;
    }

    caja.innerHTML = `
      <img class="imagen-destino mb-3" src="${destino.imagen}" alt="Imagen de ${destino.ciudad}" loading="lazy" />
      <h2 class="h4 mb-1">${destino.ciudad}, ${destino.pais}</h2>
      <p class="text-secondary">${destino.descripcion}</p>
      <div class="d-flex flex-wrap gap-2">
        <span class="badge text-bg-primary">${destino.tipo}</span>
        <span class="badge text-bg-info">${destino.estilo}</span>
        <span class="badge text-bg-dark">${destino.clima}</span>
        <span class="badge text-bg-secondary">${destino.presupuesto}</span>
      </div>
    `;
  } catch {
    caja.textContent = "Error al cargar datos de recomendación.";
  }
}
