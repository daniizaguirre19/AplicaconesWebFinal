# AplicaconesWebFinal

Autores: Daniel Izaguirre  y Marco Bernal
Este proyecto consiste en una aplicación web de salas de cine. 

El archivo index.html es el código HTML de la aplicación, y que está conformado por cinco submenús en forma de barra de navegación. Estos submenús son Cartelera, Snacks, Foro, Iniciar Sesión y Registrarte.

Dentro de Cartelera se muestran las películas disponibles, con información de las mismas como la sala en que se presenta, el horario y una sinopsis. 
Esta sección hace uso de un archivo XML que se lee mediante jQuery para hacer que el contenido sea dinámico y pueda ser modificado fácilmente en cualquier momento. 

La sección Snacks es similar, ya que de igual forma el contenido de la tienda es dinámico, únicamente el apartado visual de los productos es agregado de forma manual dentro del HTML.
Aquí existe la opción de hacer una compra de algún paquete o dulce. Después de elegir el producto, se presiona el botón Pedir, el cual envía la información a una base de datos por medio de un método POST en PHP. Esta información es almacenada en una tabla en donde se relaciona con el usuario actual que tenga una sesión iniciada en la página.

El Foro tiene la función de mostrar comentarios sobre las películas disponibles, hechos por otros usuarios de la página. Cuando un usuario hace login, este podrá comentar sobre alguna película y su comentario se mostrará en la lista de dicha película.
Los comentarios son leídos de otro archivo XML para ser desplegados en la página dinámicamente.

Iniciar sesión le da a la página la función de permitir a un usuario registrado hacer login. Si el usuario no está registrado, este no podrá hacerlo y tendrá que registrarse. Para lograr esto se lee una base de datos de usuarios registrados y se compara la información introducida con la existente, para encontrar si el usuario existe o no.

Regístrate es el apartado donde los usuarios pueden crear una cuenta para la página. La información que se pide es Usuario, Contraseña y correo. Esos tres datos se almacenan en la base de datos de usuarios que simultáneamente es usada para Iniciar sesión.

En la carpeta styles se encuentra "style.css" que contiene todo el CSS del proyecto. Este le da la apariencia que tiene la aplicación web.

En la carpeta modelo se encuentra "user.php". Ese es el modelo del usuario que se genera para ser enviado a la base de datos. Se crea una estructura donde el usuario consta de un username y un password.

En la carpeta controller nos encontramos con los archivos encargados de controlar los formularios.

En el archivo login se recogen los datos de inicio de sesión y se solicita el usuario a través del userDAO para comprobar si está en nuestra base de datos. 

Del mismo modo, el registerUser se encarga de recoger los datos introducidos en el formulario de registro para enviárselos a la capa de acceso a datos. 

Por último, nos encontramos con el archivo que se ocupa de obtener los objetos que el usuario ha seleccionado en la parte de snack para enviarlos a la base de datos.

En la carpeta data nos encontramos con los diferentes archivos en los que se encuentra la información que se muestra en cada uno de los apartados del sitio, los snacks, los comentarios del foro etc.

Dentro de la carpeta de dataAccess se encuentran todos los ficheros que formal la capa de acceso a datos. Por un lado, en dbConnect se realiza la conexión a nuestra base de datos. Por el otro lado en userDAO es donde se hace el acceso a los datos, tanto para añadir nuevos usuarios como para comprobar si ya existen.

En la carpeta js nos encontrados con los ficheros que contienen el código JavaScript de cada uno de los apartados del sitio web. Nos encontramos también aquí el Ajax necesario para interactuar entre nuestros datos y el sitio.

