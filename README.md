# Prueba técnica

## Estructura de Directorios y Archivos de la Aplicación

- src/: Contiene todo el código fuente de la aplicación.

- api/: Incluye funciones y clases dedicadas a la gestión de llamadas a APIs externas.

- components/: Contiene las componentes relacionados a las _tabs_.

- models/: Contiene definiciones de modelos de datos.

- services/: Incluye la lógica de negocio y servicios que no están directamente relacionados con los componentes.

- utils/: Ofrece funciones de utilidad.

- App.js: Representa el componente principal de la aplicación React.

- index.js: Funciona como el punto de entrada de la aplicación.

## Despliegue e Inicialización

Este proyecto utiliza Docker para el despliegue. Para construir y ejecutar el proyecto:

1. Asegúrate de que tienes Docker y Docker Compose instalados en tu sistema.

2. Navega al directorio raíz del proyecto en tu terminal.

3. Ejecuta el siguiente comando para construir e iniciar los contenedores:

   ``` cmd
   docker-compose up --build
   ```

   Este comando construirá la imagen Docker (si no está ya construida o si hay cambios) e iniciará los contenedores definidos en el archivo `docker-compose.yml`.

4. Una vez completado el proceso, la aplicación debería estar ejecutándose y accesible.

## Desarrollo

Para desarrollo local sin Docker

1. Instala las dependencias:

   ``` cmd
   npm install
   ```

2. Inicia el servidor de desarrollo:

   ``` cmd
   npm start
   ```
