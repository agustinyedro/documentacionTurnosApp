# Documentación Completa de la Estructura del Proyecto

La siguiente es una descripción exhaustiva de la estructura del proyecto, organizada para facilitar la comprensión de su arquitectura. Cada carpeta y archivo se documenta con su propósito y funcionalidad.

---

## **Estructura General**

```js

/proyecto-raiz
│
├───public
│ │ .html
│ │ favicon.ico
│ │
│ ├───css
│ │ 644.280f9312.css
│ │ 651.1c2601d5.css
│ │ 96.204ecb76.css
│ │ chunk-vendors.9bda04ce.css
│ │
│ └───js
│ 317.f79d4ec3.js
│ 317.f79d4ec3.js.map
│ 528.b2d34d56.js
│ 528.b2d34d56.js.map
│ 558.c96f7043.js
│ 558.c96f7043.js.map
│ 644.9c3288c4.js
│ 644.9c3288c4.js.map
│ 651.827cccaf.js
│ 651.827cccaf.js.map
│ 742.d323546f.js
│ 742.d323546f.js.map
│ 760.c3118a89.js
│ 760.c3118a89.js.map
│ 96.afe3374e.js
│ 96.afe3374e.js.map
│ app.e5d8fc3b.js
│ app.e5d8fc3b.js.map
│ chunk-vendors.3c10f85c.js
│ chunk-vendors.3c10f85c.js.map
│
├───src
│ │ app.js
│ │
│ ├───components
│ │ ├───auth
│ │ │ auth.routes.js
│ │ │ authController.js
│ │ │
│ │ ├───consultorios
│ │ │ consultorioController.js
│ │ │ consultorios.routes.js
│ │ │
│ │ ├───database
│ │ │ db.sql
│ │ │ keys.js
│ │ │
│ │ ├───pacientes
│ │ │ pacientes.routes.js
│ │ │ pacientesController.js
│ │ │
│ │ ├───tratamientos
│ │ │ tratamientos.routes.js
│ │ │ tratamientosController.js
│ │ │
│ │ ├───turnos
│ │ │ turnos.routes.js
│ │ │ turnosController.js
│ │ │
│ │ └───whatsapp
│ │ whatsapp.routes.js
│ │ whatsappController.js
│ │
│ └───utils
│ dateformatter.js

```

---

## **Descripción Detallada**

### **Carpeta `public`**

Esta carpeta contiene los archivos estáticos que son servidos directamente al cliente. Estos archivos son generados por herramientas como Webpack o Vite durante el proceso de construcción.

#### **Archivos principales**

- **`.html`**:
  - Archivo HTML principal de la aplicación frontend.
  - Sirve como punto de entrada para la interfaz de usuario.
- **`favicon.ico`**:
  - Icono de la aplicación que se muestra en las pestañas del navegador.

#### **Subcarpetas**

- **`/css`**:
  - Contiene archivos CSS generados automáticamente durante el proceso de construcción.
  - Ejemplo:
    - `644.280f9312.css`: Hoja de estilos específica para ciertos componentes o vistas.
    - `chunk-vendors.9bda04ce.css`: Hoja de estilos compartida para bibliotecas externas (vendors).
- **`/js`**:
  - Contiene archivos JavaScript generados automáticamente durante el proceso de construcción.
  - Incluye mapas de código (`.map`) para facilitar la depuración.
  - Ejemplo:
    - `app.e5d8fc3b.js`: Código principal de la aplicación frontend.
    - `chunk-vendors.3c10f85c.js`: Código compartido para bibliotecas externas (vendors).

---

### **Carpeta `src`**

Esta carpeta contiene el código fuente del backend y los componentes lógicos de la aplicación. Está organizada en módulos para mejorar la legibilidad y mantenibilidad.

#### [Archivo `app.js`](/app)

- **Propósito**: Punto de entrada principal del servidor Express.
- **Funcionalidad**:
  - Configura middlewares (como `morgan`, `cors`, `express-fileupload`, etc.).
  - Define las rutas principales de la aplicación.
  - Inicia el servidor en el puerto especificado (`process.env.PORT` o `3003`).

#### **Carpeta `components`**

Organiza el código en módulos relacionados con diferentes funcionalidades. Cada módulo incluye rutas y controladores específicos.

- **`auth`**:

  - **`auth.routes.js`**:
    - Define las rutas relacionadas con autenticación (por ejemplo, inicio de sesión, registro).
  - **`authController.js`**:
    - Lógica de controlador para manejar solicitudes de autenticación (por ejemplo, validación de credenciales, generación de tokens JWT).

- **`consultorios`**:

  - **`consultorios.routes.js`**:
    - Define las rutas relacionadas con consultorios (por ejemplo, listar consultorios, crear nuevos consultorios).
  - **`consultorioController.js`**:
    - Lógica de controlador para manejar solicitudes de consultorios (por ejemplo, interacción con la base de datos).

- **`database`**:

  - **`db.sql`**:
    - Contiene scripts SQL para inicializar o modificar la base de datos.
    - Ejemplo: Creación de tablas, inserción de datos iniciales.
  - **`keys.js`**:
    - Configuración de claves y credenciales para la conexión a la base de datos.
    - Ejemplo: URL de la base de datos, nombre de usuario y contraseña.

- **`pacientes`**:

  - **`pacientes.routes.js`**:
    - Define las rutas relacionadas con pacientes (por ejemplo, registrar un paciente, actualizar información).
  - **`pacientesController.js`**:
    - Lógica de controlador para manejar solicitudes de pacientes (por ejemplo, consultar información de un paciente).

- **`tratamientos`**:

  - **`tratamientos.routes.js`**:
    - Define las rutas relacionadas con tratamientos (por ejemplo, listar tratamientos disponibles).
  - **`tratamientosController.js`**:
    - Lógica de controlador para manejar solicitudes de tratamientos (por ejemplo, asociar un tratamiento a un paciente).

- **`turnos`**:

  - **`turnos.routes.js`**:
    - Define las rutas relacionadas con turnos (por ejemplo, agendar un turno, cancelar un turno).
  - **`turnosController.js`**:
    - Lógica de controlador para manejar solicitudes de turnos (por ejemplo, verificar disponibilidad de horarios).

- **`whatsapp`**:
  - **`whatsapp.routes.js`**:
    - Define las rutas relacionadas con WhatsApp (por ejemplo, enviar notificaciones a través de WhatsApp).
  - **`whatsappController.js`**:
    - Lógica de controlador para manejar solicitudes de WhatsApp (por ejemplo, integración con la API de WhatsApp).

#### **Carpeta `utils`**

Contiene utilidades compartidas entre diferentes módulos.

- **`dateformatter.js`**:
  - Funciones para formatear fechas (por ejemplo, convertir fechas a un formato legible para el usuario).

---

## **Notas Adicionales**

1. **Archivos Estáticos (`public`)**:

   - Los archivos en esta carpeta son servidos directamente al cliente. Asegúrate de que los nombres de los archivos sean únicos para evitar conflictos.

2. **Modularización (`src/components`)**:

   - La separación de rutas y controladores en módulos específicos mejora la legibilidad y mantenibilidad del código.
   - Cada módulo sigue una estructura consistente: rutas (`*.routes.js`) y controladores (`*Controller.js`).

3. **Base de Datos (`src/components/database`)**:

   - El archivo `db.sql` puede contener scripts de inicialización o migraciones.
   - El archivo `keys.js` debe estar protegido y no subirse a repositorios públicos.

4. **Utilidades (`src/utils`)**:
   - Las funciones en esta carpeta pueden ser reutilizadas en diferentes partes del proyecto.
   - Ejemplo: Formateadores de fecha, validadores, etc.

---

## **Conclusión**

Este proyecto está organizado de manera modular y clara, lo que facilita su mantenimiento y escalabilidad. La separación de responsabilidades entre rutas, controladores y utilidades asegura que el código sea fácil de entender y extender. Además, los archivos estáticos en la carpeta `public` permiten una integración fluida con el frontend.
