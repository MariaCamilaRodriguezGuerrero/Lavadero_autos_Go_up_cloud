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


### Acciones 

## Función `getDate(date)`

Esta función recibe un parámetro opcional `date` que representa una fecha. Si no se proporciona ningún valor, se utiliza la fecha actual. La función devuelve una cadena de texto en formato `yyyymmdd`, que representa la fecha en formato año, mes y día.

- **Parámetros:**
  - `date` (opcional): Una fecha en formato `Date` (por defecto, la fecha actual).

- **Valor de retorno:**
  - Tipo: `string`
  - Descripción: Cadena de texto en formato `yyyymmdd` que representa la fecha.

---

## Acción `changePageNumber(number)`

Esta acción se utiliza para cambiar el número de página en una aplicación. Recibe un parámetro `number` que representa el nuevo número de página y devuelve un objeto de acción con el tipo `SET_PAGE_NUMBER` y el número de página como carga útil (`payload`).

- **Parámetros:**
  - `number`: Nuevo número de página.

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción que dispatcha un objeto con el tipo `SET_PAGE_NUMBER` y el número de página como carga útil (`payload`).

---

## Acción `getVehicle(patent)`

Esta acción se utiliza para obtener información de un vehículo. Recibe un parámetro `patent` que representa la matrícula del vehículo y realiza una llamada asíncrona al servidor para obtener los datos correspondientes. Luego, dispatcha un objeto de acción con el tipo `GET_VEHICLE` y los datos del servidor como carga útil (`payload`).

- **Parámetros:**
  - `patent`: Matrícula del vehículo.

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que realiza una llamada al servidor y dispatcha un objeto con el tipo `GET_VEHICLE` y los datos obtenidos como carga útil (`payload`).

---

## Acción `cleanVehicleData()`

Esta acción se utiliza para limpiar la información de un vehículo. No recibe ningún parámetro. Dispatcha un objeto de acción con el tipo `CLEAN_VEHICLE` y un objeto vacío como carga útil (`payload`).

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción que dispatcha un objeto con el tipo `CLEAN_VEHICLE` y un objeto vacío como carga útil (`payload`).

---

## Acción `getServices()`

Esta acción se utiliza para obtener información de los servicios. No recibe ningún parámetro. Realiza una llamada asíncrona al servidor para obtener los datos correspondientes y dispatcha un objeto de acción con el tipo `GET_SERVICES` y los datos del servidor como carga útil (`payload`).

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que realiza una llamada al servidor y dispatcha un objeto con el tipo `GET_SERVICES` y los datos obtenidos como carga útil (`payload`).

---

## Acción `getWorkers()`

Esta acción se utiliza para obtener información de los trabajadores. No recibe ningún parámetro. Realiza una llamada asíncrona al servidor para obtener los datos correspondientes y dispatcha un objeto de acción con el tipo `GET_WORKERS` y los datos del servidor como carga útil (`payload`).

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que realiza una llamada al servidor y dispatcha un objeto con el tipo `GET_WORKERS` y los datos obtenidos como carga útil (`payload`).

---

## Acción `postOrder(services)`

Esta acción se utiliza para crear una nueva orden. Recibe un parámetro `services` que representa los servicios de la orden. Realiza una llamada asíncrona al servidor para enviar los datos y dispatcha un objeto de acción con el tipo `POST_ORDER` y los datos del servidor como carga útil (`payload`).

- **Parámetros:**
  - `services`: Servicios de la orden.

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que realiza una llamada al servidor para crear una nueva orden y dispatcha un objeto con el tipo `POST_ORDER` y los datos obtenidos como carga útil (`payload`).

---

## Acción `getOrders()`

Esta acción se utiliza para obtener información de las órdenes. No recibe ningún parámetro. Realiza una llamada asíncrona al servidor para obtener los datos correspondientes y dispatcha un objeto de acción con el tipo `GET_ORDERS` y los datos del servidor como carga útil (`payload`).

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que realiza una llamada al servidor y dispatcha un objeto con el tipo `GET_ORDERS` y los datos obtenidos como carga útil (`payload`).

---

## Acción `getOrdersCompleted()`

Esta acción se utiliza para obtener las órdenes completadas. No recibe ningún parámetro. Obtiene la fecha actual y realiza una llamada asíncrona al servidor para obtener las órdenes completadas correspondientes a esa fecha. Dispatcha un objeto de acción con el tipo `GET_ORDERS_COMPLETED` y los datos del servidor como carga útil (`payload`).

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que obtiene la fecha actual, realiza una llamada al servidor y dispatcha un objeto con el tipo `GET_ORDERS_COMPLETED` y los datos obtenidos como carga útil (`payload`).

---

## Acción `postVehicle(vehicle)`

Esta acción se utiliza para crear un nuevo vehículo. Recibe un parámetro `vehicle` que representa los datos del vehículo a crear. Realiza una llamada asíncrona al servidor para enviar los datos y dispatcha un objeto de acción con el tipo `POST_VEHICLE` y los datos del servidor como carga útil (`payload`).

- **Parámetros:**
  - `vehicle`: Datos del vehículo a crear.

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que realiza una llamada al servidor para crear un nuevo vehículo y dispatcha un objeto con el tipo `POST_VEHICLE` y los datos obtenidos como carga útil (`payload`).

---

## Acción `putVehicle(vehicle)`

Esta acción se utiliza para actualizar un vehículo existente. Recibe un parámetro `vehicle` que representa los datos del vehículo a actualizar. Realiza una llamada asíncrona al servidor para enviar los datos actualizados y dispatcha un objeto de acción con el tipo `PUT_VEHICLE` y los datos del servidor como carga útil (`payload`).

- **Parámetros:**
  - `vehicle`: Datos del vehículo a actualizar.

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que realiza una llamada al servidor para actualizar un vehículo existente y dispatcha un objeto con el tipo `PUT_VEHICLE` y los datos obtenidos como carga útil (`payload`).

---

## Acción `putOrder(id, status)`

Esta acción se utiliza para actualizar una orden existente. Recibe dos parámetros: `id` que representa el identificador de la orden a actualizar, y `status` que representa el nuevo estado de la orden. Realiza una llamada asíncrona al servidor para enviar los datos actualizados y dispatcha un objeto de acción con el tipo `PUT_ORDER` y los datos del servidor como carga útil (`payload`).

- **Parámetros:**
  - `id`: Identificador de la orden a actualizar.
  - `status`: Nuevo estado de la orden.

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que realiza una llamada al servidor para actualizar una orden existente y dispatcha un objeto con el tipo `PUT_ORDER` y los datos obtenidos como carga útil (`payload`).

---

## Acción `searchFilter(filteredArray, saveInto)`

Esta acción se utiliza para aplicar un filtro de búsqueda. Recibe dos parámetros: `filteredArray` que representa el array filtrado y `saveInto` que representa el lugar donde se guardarán los resultados filtrados. Dispatcha un objeto de acción con el tipo `SEARCH_FILTER` y los datos del filtro como carga útil (`payload`).

- **Parámetros:**
  - `filteredArray`: Array filtrado.
  - `saveInto`: Lugar donde se guardarán los resultados filtrados.

- **Valor de retorno:**
  - Tipo: `object`
  - Descripción: Objeto de acción con el tipo `SEARCH_FILTER` y los datos del filtro como carga útil (`payload`).

---

## Acción `postPayroll()`

Esta acción se utiliza para crear una nueva nómina. Obtiene la fecha actual y realiza una llamada asíncrona al servidor para enviar los datos y dispatcha un objeto de acción con el tipo `POST_PAYROLLS` y los datos del servidor como carga útil (`payload`).

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que obtiene la fecha actual, realiza una llamada al servidor para crear una nueva nómina y dispatcha un objeto con el tipo `POST_PAYROLLS` y los datos obtenidos como carga útil (`payload`).

---

## Acción `getPayrolls()`

Esta acción se utiliza para obtener información de las nóminas. Obtiene la fecha actual y realiza una llamada asíncrona al servidor para obtener los datos correspondientes a esa fecha. Dispatcha un objeto de acción con el tipo `GET_PAYROLLS` y los datos del servidor como carga útil (`payload`).

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que obtiene la fecha actual, realiza una llamada al servidor y dispatcha un objeto con el tipo `GET_PAYROLLS` y los datos obtenidos como carga útil (`payload`).

---

## Acción `getUsers()`

Esta acción se utiliza para obtener información de los usuarios. No recibe ningún parámetro. Realiza una llamada asíncrona al servidor para obtener los datos correspondientes y dispatcha un objeto de acción con el tipo `GET_USERS` y los datos del servidor como carga útil (`payload`).

- **Valor de retorno:**
  - Tipo: `function`
  - Descripción: Función de acción asincrónica que realiza una llamada al servidor y dispatcha un objeto con el tipo `GET_USERS` y los datos obtenidos como carga útil (`payload`).

