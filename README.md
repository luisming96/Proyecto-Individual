# 🌍 Viajamos

Aplicación web orientada a la recomendación de destinos turísticos en función de los gustos del usuario.

---

## 📌 Descripción de la aplicación

**Viajamos** es una aplicación web que recomienda destinos turísticos de forma personalizada.  
A través de un formulario de preferencias, el usuario selecciona:

- Tipo de destino
- Estilo de viaje
- Clima deseado

En base a estas elecciones, la aplicación genera una recomendación adaptada al perfil del usuario.  
Además, integra información externa como datos meteorológicos e imágenes del destino mediante el consumo de APIs REST, ofreciendo una experiencia visual, intuitiva y con diseño responsive.

---

## 🎯 Necesidad de la aplicación

Existen numerosas plataformas relacionadas con los viajes, la mayoría de ellas centradas en la búsqueda manual de destinos, la comparación de precios o la reserva de servicios turísticos. Estas soluciones suelen requerir múltiples pasos y una búsqueda activa por parte del usuario.

**Viajamos** surge como una alternativa sencilla y directa, enfocada en la recomendación inmediata de destinos en base a los gustos del usuario, sin necesidad de registros ni procesos complejos.  
La aplicación reduce la fatiga de decisión y actúa como una herramienta de inspiración rápida, ofreciendo una funcionalidad que no suele encontrarse de forma centralizada en otras plataformas de viajes.

---

## 👤 Roles de usuario y funcionalidades

La aplicación cuenta con un único rol:

### Usuario visitante

Funciones disponibles:
- Completar un cuestionario de preferencias de viaje.
- Obtener una recomendación personalizada de destino.
- Visualizar información dinámica del destino (clima e imágenes).
- Guardar destinos recomendados como favoritos.
- Consultar el listado de destinos favoritos.
- Eliminar destinos guardados.
- Mantener los datos entre sesiones mediante almacenamiento local.

---

## 🎨 Wireframes

Se realizarán wireframes de las principales pantallas de la aplicación como primera aproximación visual del diseño.  
Estos bocetos podrán modificarse durante el desarrollo en función de las necesidades del proyecto.

---

## 🗂️ Gestión del proyecto

El desarrollo del proyecto se organiza en un periodo de **14 días**, debido a la proximidad de la evaluación.

### Planificación estimada

- Análisis de requisitos y diseño general: **2 días**
- Maquetación HTML y estilos CSS / Bootstrap: **3 días**
- Desarrollo de la lógica en JavaScript: **4 días**
- Integración de APIs externas: **2 días**
- Implementación de almacenamiento en LocalStorage: **1 día**
- Pruebas, ajustes responsive y documentación final: **2 días**

La gestión y seguimiento de las tareas se realiza mediante un tablero de Trello, donde se puede consultar el progreso del proyecto en tiempo real.

🔗 **Tablero de Trello:**  
https://trello.com/b/NlYKsycu/proyecto-individual

---

## 🛠️ Tecnologías utilizadas

- **HTML5 / CSS3 / Bootstrap 5**  
  Estructura, estilos y diseño responsive.

- **JavaScript (ES6)**  
  Lógica de recomendación, manipulación del DOM y consumo de APIs.

- **APIs REST**  
  Obtención de datos meteorológicos e imágenes profesionales.

- **LocalStorage**  
  Almacenamiento persistente de destinos favoritos y preferencias del usuario.

- **GitHub**  
  Control de versiones del proyecto.

---

## 🗃️ Modelo de datos

En el **estado actual del proyecto** no se utiliza una base de datos relacional tradicional, priorizando la funcionalidad principal y la simplicidad de la entrega.

### Gestión de la información

- **Catálogo de destinos:**  
  Colección de datos estática en formato JSON (Mock Data) integrada en el cliente, permitiendo una respuesta inmediata del algoritmo de recomendación.

- **Persistencia:**  
  Se emplea LocalStorage para simular el almacenamiento de favoritos y preferencias del usuario.

### Entidades

**Destino**
- id_destino  
- ciudad  
- tipo_destino  
- estilo  
- clima_tipo  
- imagen  
- descripcion  

**PreferenciasUsuario**
- tipo_preferido  
- estilo_preferido  
- clima_preferido  

---

## 🚀 Despliegue

La aplicación podrá desplegarse mediante **:contentReference[oaicite:0]{index=0}**.  
En su defecto, será ejecutable en entorno local a través de un navegador web moderno con conexión a internet para el consumo de APIs.
