<script setup>
     import GifToggle from '../components/GifToggle.vue'
</script>

# Pestaña Consultorio {#default-theme-config}

En esta pestaña tienen la posibilidad de gestionar los consultorios y tratamientos, tanto como agregar, modificar o eliminar los mismos.

Pueden crear tantos consultorios como sean necesarios y asi también los tratamientos, el consultorio puede tener 1 o mas tratamientos que uno puede gestionar la relación según su necesidad.

## Consultorios

Un `consultorio` se compone de:

- Nombre
- Tramientos

### Agregar Consultorio

Para agregar un consultorio, encontrara el botón de `+ Agregar consultorio`, el cual desplegar un formulario para darle un nombre y elegir lo tratamientos previamente cargaos, de los cuales podrá elegir según su necesidad

<GifToggle
  staticImage="./assets/img/Recurso 1.png"
  gifImage="./assets/img/agregarconsul.gif"
  width="800"
  height="auto"
/>

### Listado de Consultorio

Una vez se crean los consultorios lo podrá ver aquí con lo datos del mismo

**Editar:** Sobre el icon de lápiz podrá hacer click para que este abra el mismo formulario que utilizo para crear y allí poder editarlo.

**Eliminar:** Para eliminarlo deberá hacer click en el la papelera, que como medio de seguridad se preguntara si desea eliminarlo.

## Tratamientos

El `tratamiento` se compone de:

- `Nombre del tratamiento`
- `Descripcion`
- `Precio`
- `Duracion`
- `Color`

### Agregar Tratamientos

Para agregar un Tratamiento, encontrara el botón de `+ Agregar Tratamiento`, el cual desplegar un formulario para darle un nombre, descripción , el precio que de ingresarse solo números , la duración que en cantidad de minutos y un color para distinguirlo de otro tratamientos.

### Listado de Tratamientos

Una vez se crean el tratamiento lo podrá ver aquí con lo datos del mismo.

**Editar:** Sobre el icon de lápiz podrá hacer click para que este abra el mismo formulario que utilizo para crear y allí poder editarlo.

**Eliminar:** Para eliminarlo deberá hacer click en el la papelera, que como medio de seguridad se preguntara si desea eliminarlo.
