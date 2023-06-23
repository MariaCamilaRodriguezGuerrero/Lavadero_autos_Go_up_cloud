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

## Login 
La vista de inicio de sesión permite al Super Admin o Admin ingresar sus credenciales para acceder al panel de administración.

## Pagination
Una paginacion donde cada 10 items lo va pasando por paginas

## Super Admin

El Super Admin es el usuario con el nivel de acceso más alto en la aplicación. Tiene control total sobre todas las funcionalidades y puede realizar tareas de administración a nivel global.

### Vistas del Super Admin

- **BillingListSuperAdmin**: Donde se va a renderizar las cards con los servicios facurados con su searchbar y paginado.
- **CanceledServices**: Donde se va a renderizar las cards con los servicios cancelados con su searchbar y paginado.
- **Dashboard**: Donde aparece el grafico y el resultado del mes competo de lo facturado.
- **Services**: Donde se va a renderizar los servicos con el boton para editar el servicio o crear uno nuevo.
- **EditServices**: Donde se renderiza edit de servicios para poder cambiar los campos.
- **ServicesRegistration**: Donde se va a registrar los servios que queremos crear.
- **workersregistration**:  Donde se va a registrar los trabajadores que queremos crear.

### Componentes del Super Admin

- **Navbar**: Componente de navegación que muestra las opciones de menú y permite al usuario cambiar entre diferentes secciones.
- **CardBillingSuperAdmin**: El formulario que filtra por las ordenes facturadas historicamente.
- **CardCanceledSuperAdmin**:  El formulario que filtra por las ordenes Canceladas historicamente se pueden eliminar definitivamente de la base de datos.
- **CardWorkers**: Donde se hace el get de todos los trabajadores con un boton que lleva a pagar.
- **CardWorkersPay**: Donde se realiza el pago de trabajadores donde aparecen el pago hasta la fecha.
- **Chart**: Grafico con el slector para poder filtrar una fecha o entre fechas.
- **FormServicesRegistration**: Formulario para crear los servicios.
- **FormEditServices**: Formulario donde se puede editar modificar las diferentes propiedades del servicio.
- **FormWorkersRegistration**: Formulario controlado para registrar los trabajadores.
- **SearchBar**: Search donde se filtra los resultados dependiendo del estado del servicio servicio por patente (facturado o cancelado).
- **Service**: Las tarjetas de los servicios creados con sus respectivas propiedades (valor, descuento del dia, nombre del servio etc)
  

### Acciones y Reductores del Super Admin

- **superAdminActions.js**: Este archivo contiene las acciones relacionadas con las funcionalidades del Super Admin, como obtener datos, crear o editar vehículos, servicios y trabajadores.
- **superAdminReducer.js**: El reductor del Super Admin maneja el estado relacionado con las acciones del Super Admin, como el estado de los vehículos, servicios, trabajadores, órdenes de servicio, etc.

### Servicios y Estilos del Super Admin

- **superAdminService.js**: El servicio del Super Admin contiene las funciones para realizar las solicitudes HTTP relacionadas con las funcionalidades del Super Admin, como obtener datos, crear o editar vehículos, servicios y trabajadores.
- **superAdminStyles.css**: Este archivo contiene los estilos CSS específicos para las vistas y componentes del Super Admin.

## Admin

El Admin es un usuario con un nivel de acceso ligeramente inferior al del Super Admin. Tiene permisos para realizar tareas de administración específicas relacionadas con vehículos, servicios y trabajadores.

### Vistas del Admin

- **Dashboard**: Donde aparece el grafico de los trabajadores.
- **BillingListSuperAdmin**: Donde se va a renderizar las cards solo los del dia con los servicios facurados con su searchbar y paginado.
- **Services**: Donde esta todas las tarjetas con los servicos en curso con su respectivo search por patente y paginado.

### Componentes del Admin

- **Navbar**: Componente de navegación que muestra las opciones de menú y permite al usuario cambiar entre diferentes secciones.
- **CardServices**: Renderiza los servicos en cursos donde se puede editar facuturar o cancelar un servicio o servicios.
- **CardBillingSuperAdmin**: El registro que filtra por las ordenes facturadas solo del dia.
- **Chart**: Grafico que solo te muestra lo que han facturado el perdonal por dia.
- **FormPatent**: Donde se ingresa la patente para verificar si esta en la base de datos y si no esta la crea.
- **FormVehicle**: Formulario donde se ingresan los datos del vehiculo.
- **FormService**: Formulario controlado para asignarle un servicio a 1 o mas trabajadores.
- **SearchBar**: Search donde se filtra los resultados dependiendo del estado del servicio por patente (pendiente ofacturado).


### Acciones y Reductores del Admin

- **adminActions.js**: Este archivo contiene las acciones relacionadas con las funcionalidades del Admin, como obtener datos, crear o editar vehículos, servicios y trabajadores.
- **adminReducer.js**: El reductor del Admin maneja el estado relacionado con las acciones del Admin, como el estado de los vehículos, servicios, trabajadores, órdenes de servicio, etc.

### Servicios y Estilos del Admin

- **adminService.js**: El servicio del Admin contiene las funciones para realizar las solicitudes HTTP relacionadas con las funcionalidades del Admin, como obtener datos, crear o editar vehículos, servicios y trabajadores.
- **adminStyles.css**: Este archivo contiene los estilos CSS específicos para las vistas y componentes del Admin.
