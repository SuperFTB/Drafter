# Drafter
Desplegado en [https://drafter-v1.herokuapp.com/](https://drafter-v1.herokuapp.com/)

## Introducción
Este fue un proyecto del último año de la carrera. Drafter es un gestor de reuniones, el cual nos permite gestionar paso a paso reuniones con puntos del día y conclusiones, brainstorming y 6-hats. Todo ello actualizando las ideas cada vez que se modifican a todos los integrantes en tiempo real.

La aplicación fue desarrollada en **Angular 5**, **Spring Boot 2.0** y **Bootstrap 4**. La comunicación en tiempo real se hizo a través de **STOMP**, un sub-protocolo sobre **WebSocket**, y la funcionalidad de video-llamadas se hizo con **WebRTC**.

## Despliegue
El despliegue se hizo en el sitio Heroku, el cual posee una capa gratuita muy potente que nos permite tener el proyecto desplegado indefinidamente con ciertas limitaciones:
* Límite de horas que la máquina virtual esté encendida es menor a las horas que tiene un mes.
* Si la aplicación lleva más de 10 minutos sin accederse, la máquina virtual donde se encuentra se apaga. Así que, la primera vez que se entre al sitio tardará en cargar un poco más.
* La base de datos es de 5MB.

## ¿Cómo usar la aplicación?
Para usar la aplicación primero debe estar registrado (es muy sencillo). Para poder crear una reunión debe estar en una organización dentro de un departamento. Recuerde que al añadir personas a un departamento debe agregarse usted mismo también a el.

Una vez hecho esto, podrá reunirse con personas que pertenezcan a cualquier departamento a los que usted pertenece agregandolas al final del formulario de creación de una reunion. Con esto, realizar una reunión es tan fácil como seguir los pasos que marca la aplicación.

### Demos
Si desea ver rapidamente la aplicación en uso, aquí le dejamos varios videos de demostración:
* [Demo corta](https://www.youtube.com/watch?v=507Wy0I_E90) 1:23
* [Crear organización](https://www.youtube.com/watch?v=b1Flv2swOBY) 1:10
* [Reunión estándar](https://www.youtube.com/watch?v=Zr787S2mvDo) 4:06
* [Reunión brainstorming](https://www.youtube.com/watch?v=6T6sus0E8BI) 1:14 (**reunión estrella**)
* [Reunión 6-Hats](https://www.youtube.com/watch?v=s4q9zrO7IFU) 1:02

## Desarrollo
La estructura del repositorio y una guía de como configurar el entorno y el proyecto para el desarrollo venía en el antiguo README.md, que ahora se encuentra [aquí](https://github.com/kafok/Drafter/blob/master/README-DEV.md)
