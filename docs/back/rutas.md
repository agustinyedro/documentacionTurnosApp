# Rutas

Las rutas estan divididas por los diferentes modulos `Auth`, `WhatsappJs`, `Turnos`,`Pacientes`,`Consultorios` y `Tratamientos`.

```js
app.use("/", authRoute);
app.use("/", whatsappRoute);
app.use("/turnos", turnosRoute);
app.use("/pacientes", pacientesRoute);
app.use("/consultorios", consultorioRoute);
app.use("/tratamientos", tratamientosRoute);
```

## Rutas de Auth

Ruta para crear usuarios

[http://147.79.82.207:3003/signup](http://147.79.82.207:3003/signup)

Ruta para que los usuarios ingresen

[http://147.79.82.207:3003/signin](http://147.79.82.207:3003/signin)

## Rutas Whatsapp

Ruta para crear Codigo qr

[http://147.79.82.207:3003/generate-qr](http://147.79.82.207:3003/generate-qr)

Ruta para enviar mensajes notificando los turnos creados

[http://147.79.82.207:3003/enviar-notificaciones](http://147.79.82.207:3003/enviar-notificaciones)
