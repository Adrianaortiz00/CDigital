# CDigital

![CDigital_Completo-cortado](https://github.com/user-attachments/assets/0c8c6b96-bd7e-4b26-a14c-073ae6a290ed)


## Descripción general

Este documento describe las especificaciones funcionales para el desarrollo de la página web de CDigital, cuyo propósito es ofrecer acceso gratuito a una biblioteca de videos educativos sobre Power Platform. La plataforma está diseñada para usuarios interesados en aprender y mejorar sus habilidades en Power Platform mediante videos de cursos disponibles en línea.

Objetivo Principal
El objetivo del desarrollo es proporcionar a los usuarios una experiencia accesible, permitiéndoles acceder de manera gratuita a los videos, previa creación de una cuenta en el sistema. Para ello, el sitio web incluirá funcionalidades de registro y login.

## Caracteristicas 

- Gestión de Usuarios y Roles

Registro e Inicio de Sesión:

Los usuarios pueden registrarse e iniciar sesión con correo electrónico y contraseña.
Se genera un token JWT al iniciar sesión, almacenado en localStorage para mantener la sesión activa.

- Roles y Permisos:

Roles: USER y ADMIN.
USER: Acceso básico para ver contenido.
ADMIN: Permisos completos para editar, eliminar y gestionar contenido.

- Interfaz de Usuario:

Elementos de la interfaz, como botones de edición, se muestran según el rol del usuario.

- Acceso al Curso de Power Platform:

Después de iniciar sesión, los usuarios tienen acceso  a un curso de Power Platform.


## Tecnologías usadas 🛠️


Front

- React.js
- JavaScript
- Scss

Back

- Java
- PgAdmin+ SQL
- SpringBoot


## Contribución

Las contribuciones son bienvenidas. Siga estos pasos:

1.  haga un Fork del proyecto 

2. Cree una nueva rama:

```bash

git checkout -b feature/nueva-funcionalidad

```

3. Realice los cambios y confirme:

```bash

git commit -am 'Añadir nueva funcionalidad'

```

4. Envíe los cambios a la rama:

```bash

git push origin feature/nueva-funcionalidad

```

5. Abra una solicitud de incorporación de cambios- Pull Request

## Integración de backend

 [Backend README.](https://github.com/Adrianaortiz00/CDigital-backend)

## Autora

- [**Adriana**](https://github.com/Adrianaortiz00)


