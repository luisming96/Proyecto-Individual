# Proyecto-Individual

#  Propuesta de Proyecto: Wanderly

##  1. Introducción

###  1.1. Breve descripción de la aplicación
Wanderly es una aplicación web de planificación de viajes que permite centralizar la búsqueda de destinos turísticos. La aplicación permite al usuario consultar información meteorológica y visual en tiempo real mediante APIs externas, facilitando la organización de itinerarios y el guardado de destinos favoritos en una lista personalizada.

###  1.2. Necesidad de la aplicación
Actualmente, la planificación de un viaje requiere navegar entre múltiples plataformas para consultar el clima, ver imágenes o anotar ideas. Wanderly resuelve esta fragmentación unificando estos datos en una única interfaz estética y funcional, mejorando la experiencia del usuario al evitar el salto constante entre diversas fuentes de información.

###  1.3. Principales funciones y roles de usuario
El sistema contará con un único rol de Usuario Visitante:


Búsqueda de destinos: Localización de ciudades mediante formulario.


Visualización dinámica: Consulta de clima y fotos del destino vía API.


Gestión de favoritos (CRUD): Añadir, listar y eliminar destinos de una lista personal.


Persistencia: Los datos se mantienen en el navegador del usuario mediante LocalStorage.

###  1.4. Wireframes
La aplicación se estructurará en tres vistas principales:

Home: Buscador central y barra de navegación.

Vista de Detalle: Despliegue de la información de las APIs y botón de guardado.

Sección de Favoritos: Muro de tarjetas con los planes almacenados.

###  1.5. Gestión del proyecto
El desarrollo se ejecutará en 3 semanas (Febrero 2026):

Semana 1: Estructura de carpetas, maquetación con Bootstrap y navegación.

Semana 2: Integración de APIs REST y lógica de búsqueda.

Semana 3: Implementación de LocalStorage y pulido responsive.


Herramienta: Se utilizará Trello para la coordinación.

###  1.6. Tecnologías usadas en la implementación


HTML5 / CSS3: Estructura y estilos.


Bootstrap 5: Diseño responsive y componentes visuales.


JavaScript (ES6): Lógica y consumo de APIs mediante fetch.


LocalStorage: Almacenamiento local en formato JSON.


VS Code y GitHub: Entorno de desarrollo y control de versiones.

2. Desarrollo

2.1. Modelo de base de datos
Se define una entidad conceptual Destino con los campos: id, ciudad, país, temperatura, imagen y notas. Este modelo se implementará mediante LocalStorage, aunque su estructura permite una fácil migración futura a una base de datos relacional (SQL) sin alterar la lógica de la aplicación.

2.2. Repositorio github
El código fuente y el historial de versiones del proyecto se encuentran alojados en el siguiente enlace:
https://github.com/luisming96/Proyecto-Individual

2.3. Despliegue
Para la presentación y evaluación, la aplicación se ejecutará en un entorno local (mediante VS Code Live Server o XAMPP). Al ser una aplicación basada en tecnologías de cliente (HTML/JS) y almacenamiento local, solo requiere un navegador web moderno y conexión a internet para el consumo de las APIs externas.
