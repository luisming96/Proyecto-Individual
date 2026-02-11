# Proyecto-Individual

# 1. Introducción

# 1.1. Breve descripción de la aplicación

Viajamos es una aplicación web pensada para ayudar a los usuarios a encontrar destinos turísticos que encajen con sus gustos de forma rápida y sencilla. A través de un pequeño cuestionario de preferencias (tipo de destino, estilo de viaje y clima deseado), la aplicación recomendará lugares que se ajusten al perfil del usuario. Además, mostrará información útil en tiempo real, como el clima actual y fotografías del destino obtenidas mediante APIs externas. La aplicación contará con un diseño responsive para poder utilizarse cómodamente tanto en ordenador como en dispositivos móviles.

# 1.2. Necesidad de la aplicación

Hoy en día, cuando una persona quiere planificar un viaje suele tener que consultar muchas páginas diferentes para ver ideas de destinos, el tiempo que hará o imágenes del lugar. Esto hace que el proceso sea más lento y, en muchos casos, complicado debido a la gran cantidad de opciones disponibles. Viajamos pretende simplificar este proceso, ofreciendo recomendaciones rápidas basadas en los gustos del usuario y centralizando la información más importante en un único sitio.

# 1.3. Principales funciones y roles de usuario

La aplicación contará con un único tipo de usuario, denominado Usuario Visitante, que podrá utilizar todas las funcionalidades sin necesidad de registrarse.

Las funciones principales serán:

Cuestionario de preferencias: Un formulario sencillo donde el usuario seleccionará sus gustos de viaje (playa, montaña o ciudad; viaje relajado, de aventura o cultural; y tipo de clima preferido).

Sistema de recomendación: A partir de esas preferencias, la aplicación filtrará los destinos disponibles mediante lógica JavaScript y mostrará las opciones más adecuadas.

Visualización de información del destino: Se mostrarán datos como el clima actual y fotografías del lugar mediante el uso de APIs externas.

Gestión de favoritos: El usuario podrá guardar los destinos que más le interesen, consultarlos posteriormente o eliminarlos.

Persistencia de datos: Los destinos guardados permanecerán almacenados en el navegador mediante LocalStorage para poder consultarlos en futuras sesiones.

# 1.4. Wireframes

La aplicación estará organizada en tres pantallas principales:

Inicio / Quiz de preferencias: Pantalla inicial donde el usuario completará el cuestionario de gustos.

Pantalla de recomendación: Se mostrará el destino sugerido junto con su información principal (clima, imágenes y descripción).

Sección de favoritos: Apartado donde se visualizarán los destinos guardados por el usuario en formato de tarjetas.

# 1.5. Gestión del proyecto

El desarrollo del proyecto se llevará a cabo durante el mes de febrero siguiendo la siguiente planificación:

Semana 1

Organización de la estructura de archivos del proyecto.

Diseño de la interfaz básica utilizando HTML y Bootstrap.

Creación del cuestionario de preferencias.

Semana 2

Programación del sistema de recomendación de destinos.

Integración de APIs externas para obtener datos de clima e imágenes.

Semana 3

Implementación del sistema de favoritos mediante LocalStorage.

Ajustes finales del diseño responsive.

Pruebas de funcionamiento y documentación.

La organización de las tareas se realizará mediante Trello.

# 1.6. Tecnologías usadas en la implementación

HTML5 y CSS3: Para la estructura y estilos de la aplicación.

Bootstrap 5: Para facilitar el diseño responsive y los componentes visuales.

JavaScript (ES6): Para la lógica del sistema de recomendación, manipulación del DOM y consumo de APIs mediante fetch.

APIs REST externas: Para obtener información del clima e imágenes de los destinos.

LocalStorage: Para almacenar los destinos favoritos en el navegador del usuario.

Visual Studio Code: Como entorno de desarrollo.

GitHub: Para el control de versiones y almacenamiento del proyecto.

# 2. Desarrollo

# 2.1. Modelo de base de datos (conceptual)

Entidad: Destino

id_destino

ciudad

tipo_destino (playa, montaña, ciudad)

estilo (aventura, relax, cultural)

clima_tipo

imagen

descripcion

Entidad: PreferenciasUsuario (temporal)

tipo_preferido

estilo_preferido

clima_preferido

Las preferencias del usuario se utilizarán para filtrar los destinos disponibles mediante lógica JavaScript. En esta primera versión del proyecto, los datos se almacenarán mediante LocalStorage en formato JSON, permitiendo en el futuro migrar fácilmente a una base de datos relacional si la aplicación se amplía.
