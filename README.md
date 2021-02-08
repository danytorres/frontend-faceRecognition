# Notas para App Reconocimiento de emociones 

## Frontend de aplicación

Aplicacion esta corriendo en github pages en la liga https://danytorres.github.io/frontend-faceRecognition

Para los estilos se usa bootstrap.

Se utiliza una infraestructura por microservicios teniendo alojado el front y el back en diferentes servidores.

Se esta utilizando Axios para poder realizar las peticiones http al backend de la aplicacion que esta alojada en un servidor de DigitalOcean el cual cuenta con certificados ssl para poder relizar la conexion segura.

La app usa una logica de una sola paguina donde solo se muestra y se oculta cada componente necesario, toda la loguica se encuentra en el componente Upload.js, donde se encuentra tambien las funciones de cada boton para mostrar.

El componente Emotions.js es donde se muestra la imagen procesada que encuadra la cara y una lista de las emociones con mas valor.

Se puede ver en consola el arreglo que retorna el backend.

Al terminar de usar la imagen la elimina del servidor 
