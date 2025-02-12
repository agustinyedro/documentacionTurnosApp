# 📅 Pestaña Calendario

En esta pestaña podra gestionar los turnos, de diversas maneras, la misma esta construida para que puede realizarlo de la forma que mejor se adapte a sus necesidades.

## Crear Turno

#### El turno

se compone de los siguiente elementos:

- `Paciente`: en este campo se podrá seleccionar sobre los pacientes ya creados.
- `Consultorio`: en este campo se podrá seleccionar sobre los consultorios ya creados. [ver Consultorios](/front/consultorio#consultorios){.small-link}
- `Tratamiento`: en este campo podrá elegir solo los tratamientos asociados al consultorio seleccionado, y que se creó con anterioridad. [ver Tratamientos](/front/consultorio#tratamientos){.small-link}
- `Fecha`: se selecciona la fecha deseada.
- `Hora`: al igual que la fecha, se selecciona un horario.
- `Duración`: este campo trae de manera automática la duración del tratamiento que ya se creó con anterioridad. En el caso de querer modificarlo, [ver Tratamientos](/front/consultorio#tratamientos){.small-link}
- `Costo`: este campo trae de manera automática el costo del tratamiento que ya se creó con anterioridad. En el caso de querer modificarlo, [ver Tratamientos](/front/consultorio#tratamientos){.small-link}

#### Crear nuevo turno

Para crear un turno debe hacer click en **_+ Nuevo Turno_**, esto abrirá un formulario para ingresar todos los datos necesarios para un turno.

Una vez este creado, este aparecerá en la respectiva fecha y horario con el color del tratamiento que fue dado anteriormente.

## Calendario

En este componente se mostraran los turnos con el horario, con nombre y apellido, en el campo se puede hacer click y esto abrirá un formulario igual al de crear turno que te pemitina ver mas detalles o editarlo si lo necesitaras.

### Filtros
