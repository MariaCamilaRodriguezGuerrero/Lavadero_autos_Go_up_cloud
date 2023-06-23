# Lavadero de Autos Go Up Cloud

Este repositorio contiene el código fuente de la aplicación "Lavadero de Autos Go Up Cloud", un sistema de gestión de lavadero de autos en línea. Proporciona funcionalidades para administrar vehículos, servicios, trabajadores y órdenes de servicio.

## Índice

1. [Introducción](#introducción)
2. [Super Admin](#super-admin)
    - [Vistas](#vistas-del-super-admin)
    - [Componentes](#componentes-del-super-admin)
    - [Acciones y Reductores](#acciones-y-reductores-del-super-admin)
    - [Servicios y Estilos](#servicios-y-estilos-del-super-admin)
3. [Admin](#admin)
    - [Vistas](#vistas-del-admin)
    - [Componentes](#componentes-del-admin)
    - [Acciones y Reductores](#acciones-y-reductores-del-admin)
    - [Servicios y Estilos](#servicios-y-estilos-del-admin)

## Introducción

La aplicación "Lavadero de Autos Go Up Cloud" es un sistema de gestión en línea diseñado para facilitar la administración de un lavadero de autos. Permite a los administradores realizar tareas como agregar vehículos, definir servicios, asignar trabajadores y gestionar órdenes de servicio. La aplicación está dividida en dos roles principales: Super Admin y Admin.

## Super Admin

El Super Admin es el usuario con el nivel de acceso más alto en la aplicación. Tiene control total sobre todas las funcionalidades y puede realizar tareas de administración a nivel global.

### Vistas del Super Admin

- **Login**: La vista de inicio de sesión permite al Super Admin ingresar sus credenciales para acceder al panel de administración.
- **Panel de administración del Super Admin**: Esta vista muestra un resumen de las estadísticas clave y proporciona acceso rápido a las diferentes secciones de administración.

### Componentes del Super Admin

- **Navbar**: Componente de navegación que muestra las opciones de menú y permite al usuario cambiar entre diferentes secciones.
- **LoginForm**: Componente que muestra el formulario de inicio de sesión y maneja la autenticación del Super Admin.
- **AdminPanel**: Componente que muestra un resumen de las estadísticas clave y proporciona acceso rápido a las diferentes secciones de administración.

### Acciones y Reductores del Super Admin

- **superAdminActions.js**: Este archivo contiene las acciones relacionadas con las funcionalidades del Super Admin, como obtener datos, crear o editar vehículos, servicios y trabajadores.
- **superAdminReducer.js**: El reductor del Super Admin maneja el estado relacionado con las acciones del Super Admin, como el estado de los vehículos, servicios, trabajadores, órdenes de servicio, etc.

### Servicios y Estilos del Super Admin

- **superAdminService.js**: El servicio del Super Admin contiene las funciones para realizar las solicitudes HTTP relacionadas con las funcionalidades del Super Admin, como obtener datos, crear o editar vehículos, servicios y trabajadores.
- **superAdminStyles.css**: Este archivo contiene los estilos CSS específicos para las vistas y componentes del Super Admin.

## Admin

El Admin es un usuario con un nivel de acceso ligeramente inferior al del Super Admin. Tiene permisos para realizar tareas de administración específicas relacionadas con vehículos, servicios y trabajadores.

### Vistas del Admin

- **Login**: La vista de inicio de sesión permite al Admin ingresar sus credenciales para acceder al panel de administración.
- **Panel de administración del Admin**: Esta vista muestra un resumen de las estadísticas clave y proporciona acceso rápido a las diferentes secciones de administración.

### Componentes del Admin

- **Navbar**: Componente de navegación que muestra las opciones de menú y permite al usuario cambiar entre diferentes secciones.
- **LoginForm**: Componente que muestra el formulario de inicio de sesión y maneja la autenticación del Admin.
- **AdminPanel**: Componente que muestra un resumen de las estadísticas clave y proporciona acceso rápido a las diferentes secciones de administración.

### Acciones y Reductores del Admin

- **adminActions.js**: Este archivo contiene las acciones relacionadas con las funcionalidades del Admin, como obtener datos, crear o editar vehículos, servicios y trabajadores.
- **adminReducer.js**: El reductor del Admin maneja el estado relacionado con las acciones del Admin, como el estado de los vehículos, servicios, trabajadores, órdenes de servicio, etc.

### Servicios y Estilos del Admin

- **adminService.js**: El servicio del Admin contiene las funciones para realizar las solicitudes HTTP relacionadas con las funcionalidades del Admin, como obtener datos, crear o editar vehículos, servicios y trabajadores.
- **adminStyles.css**: Este archivo contiene los estilos CSS específicos para las vistas y componentes del Admin.
