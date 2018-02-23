## Laboratorio 0 : Creación de un wrapper REST sobre Twitter

La versión de partida de este repositorio es MVC. 
Se puede ver desplegada en [https://tmdad-lab0.herokuapp.com/](https://tmdad-lab0.herokuapp.com/).

Se ha restificado, desplegada en https://abel-tmdad-lab0.herokuapp.com/

Se ha subido a docker. Para ejecutar lanzar la orden:

`docker run --env-file /.../application.properties  -p 8080:8080 -t trianguloy/tmdad-lab0`

incorporando el path al archivo con las claves de twitter necesarias (ejemplo de fichero en /src/main/resources/application.template.properties) o proporcionando esas variables de entorno de manera alternativa.
Si no se proporcionan la aplicación no puede ser ejecutada.
