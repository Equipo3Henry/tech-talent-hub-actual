Para actualizar modelos en la BD borrar la carpeta 'migrations' y ejecutar:
npx prisma migrate dev

Para importar los cambios realizados en la BD ejecutar:
npx prisma db pull

si no funciona con el pull, probar continuar con:
npx prisma generate

para ver todos los datos:
npx prisma studio

---

Si les pide iniciar sesión en ngrok tenemos este usuario:
equipo3.37a@gmail.com
equipo3.37a

Para probar la funcionalidad de mercadopago hay que:
instalar ngrok.exe

abrir la consola de ngrok y ejecutar el comando:
ngrok http 3000

copiar el link que se crea en la variable 'Forwarding' que se va a conectar a lo que en ese momento está montado en el puerto indicado (3000), por ejemplo:
https://f61d-2800-810-525-1d07-a8bb-ee00-7a89-38cd.ngrok-free.app

abrir el archivo index.js en la ruta pages/api/chechout/index.js y reemplazar el link de la variable 'URL' por el anterior

abrir la aplicación y en el momento de concretar el pago se va a abrir una página que pregunta si queremos redireccionar al sitio indicado, le damos 'ok' y volveremos al landing.
Esta página de advertencia va a salir solo la primera vez que accedemos, parece que hay una configuración para omitirla si queremos.

Parece que el link tiene un tiempo de expiración, así que hay que hacer este proceso varias veces

Si entrás a http://localhost:4040/ en status/command_line/URL se puede obtener el link de acceso