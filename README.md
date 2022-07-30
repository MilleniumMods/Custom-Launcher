# Custom Launcher - MilleniumMods

*¿Qué es Custom Launcher?* 💡
- Es un Launcher de Minecraft personalizable basado en ElectronJS que tiene el objetivo de facilitar el acceso a un Launcher propio personalizable a los administradores de servidores y comunidades de bajo presupuesto que no pueden permitirse el desarrollar una alternativa 100% personalizada para sus jugadores. 

*¿Cómo se miden las actualizaciones?* ❔
- Nuestro sistema de versiones se basa en *<Actualizaciones mayores>*/*<Cambios al frontend>*/*<Cambios al backend>*, por ejemplo, la versión **1.4.13** tendría detrás **1** actualización mayor (Se considera "mayor" por el equipo), 4 actualizaciones o cambios al front-end, y 13 actualizaciones o cambios al back-end.

<!-- CONTRIBUCIÓN -->
# Contribución 🆘
Custom Launcher es un projecto open-source creado y administrado por MilleniumMods, sin embargo, estamos totalmente abiertos a cualquier aporte ya sea monetario, o en forma de código mediante Pull Requests. Si te interesa aportar de cualquier forma al proyecto, o incluso formar parte del equipo de desarrollo, no dudes en contactarte con nosotros vía [Discord](https://discord.milleniummods.com)

**Pull Requests** 🔀
1. Crea un [Fork]() del proyecto
2. Crea una nueva branch dentro de tu fork para realizar cambios
3. Guarda tus cambios
4. Realiza una [Pull Request]() para que tus cambios sean revisados
5. ¡Muchas gracias por las contribuciones!

**Instrucciones y recomendaciones al contribuir**
- Asegúrate de actualizar la versión dentro del package.json basada a nuestra guía de versiones.
- Asegúrate de probar tus cambios antes de hacer commit

<!-- COMPILAR POR TU CUENTA -->
# Cómo compilar por tu cuenta
**Requerimientos:**
- Sistema operativo: Windows 7 en adelante ; Linux [Testeado en Ubuntu 22.04]
- NodeJS v16

**Clonar e instalar las depedencias:**

```console
> git clone https://github.com/MilleniumMods/Custom-Launcher.git
> cd Custom-Launcher
> npm install
```

**Ejecutar la aplicación:**

```console
> npm start
```

<!-- OBJETIVOS -->
# Objetivos 🗒️

- [ ] Organizar de forma correcta el GitHub
- [ ] Añadir changelog
- [ ] Añadir instrucciones para compilar
- [ ] Solucionar problemas de seguridad por Electron (Advertencia en los logs de la consola)
- [ ] Lograr iniciar Minecraft desde el back-end
    - [x] Instalación Vanilla con versión personalizada
    - [ ] Instalación Forge
    - [ ] Instalación Fabric
- [ ] Crear el front-end principal
- [ ] Utilizar regex para los parámetros permitidos en algunas opciones (Cómo el Nickname)
- [ ] Guardar los datos personalizables luego de reiniciar la aplicación
- [ ] Añadir soporte opcional para cuentas de Mojang y Microsoft
- [ ] Añadir soporte para múltiples versiones 
- [ ] Añadir soporte para instalar Forge/Fabric automáticamente
- [ ] Publicar al npm registry para compilar y publicar para desarrollo más fácilmente
- [ ] Añadir lista de dependencias (Si aplica)
- [ ] Añadir una sección de instalación en este archivo
- [ ] Crear opciones modulares:
    - [ ] Instalación de Modpack fijo automáticamente 
    - [ ] Actualización automática de modpacks
    - [ ] Estilo de botones personalizado 
    - [ ] Botones de redes/links importantes con íconos personalizados
    - [ ] Instalar Java automáticamente
- [ ] Volver Open-Source una vez el código no sea completamente un meme
- [ ] Soporte multi-lenguaje:
    - [x] Español
    - [ ] Inglés 

<!-- LICENCIA -->
# Licencia
Este proyecto utiliza la licencia Apache License 2.0
