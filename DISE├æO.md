# Documento de diseño

## Paleta y tipografía
- Primario: #2563eb
- Fondo: #f3f6fb
- Texto: #172033
- Éxito: #16a34a
- Peligro: #dc2626
- Tipografía: Arial, Helvetica, sans-serif

## Component tree
App > TaskProvider > Router > Header + HomePage / AboutPage
HomePage > TaskForm + SearchBar + FilterBar + TaskList > TaskItem

## Pantallas
- Listado de tareas: muestra tareas, filtros y búsqueda.
- Formulario: permite crear y editar tareas.
- Acerca de: explica el proyecto.

## Wireframe
Header: logo + navegación
Main: tarjeta central con formulario, buscador, filtros y lista.

## Estados globales
- tasks: arreglo de tareas
- filter: all | pending | completed
- search: texto de búsqueda

## Rutas
- / listado principal
- /about información del proyecto
