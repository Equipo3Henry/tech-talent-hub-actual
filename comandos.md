Para actualizar modelos en la BD borrar la carpeta 'migrations' y ejecutar:
npx prisma migrate dev 

Para importar los cambios realizados en la BD ejecutar:
npx prisma db pull

si no funciona con el pull, probar continuar con:
npx prisma generate

para ver todos los datos:
npx prisma studio

