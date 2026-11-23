# 📱 SmartOffice Connect

Aplicación móvil desarrollada con Apache Cordova como solución para la gestión empresarial y comunicación interna dentro de una organización.

Este proyecto fue desarrollado como parte de la asignatura **Programación de Aplicaciones Móviles** y tiene como objetivo integrar herramientas de comunicación, programación de reuniones, gestión de correos corporativos y monitoreo ambiental dentro de una única aplicación móvil.

---

## 🚀 Características

### 💬 Comunicación Interna

- Envío de mensajes entre usuarios.
- Adjuntar documentos al chat.
- Historial visual de mensajes enviados.
- Interfaz orientada a la comunicación empresarial.

### 📅 Gestión de Reuniones

- Creación de reuniones corporativas.
- Selección de fecha y hora.
- Confirmación de programación.
- Visualización de reuniones registradas.
- Almacenamiento local mediante LocalStorage.

### 📧 Correo Corporativo

- Envío de correos simulados.
- Registro de destinatario.
- Ingreso de asunto.
- Redacción del mensaje.
- Historial de correos enviados.
- Almacenamiento local mediante LocalStorage.

### 🌡️ Monitoreo Ambiental

- Visualización de variables ambientales.
- Temperatura.
- Humedad.
- Luminosidad.
- Interfaz preparada para integración futura con sensores reales o servicios web.

---

## 🛠️ Tecnologías Utilizadas

- Apache Cordova
- HTML5
- CSS3
- JavaScript
- LocalStorage
- DOM API
- Eventos mediante addEventListener()

---

## 📂 Estructura del Proyecto

```text
SmartOfficeConnect
│
├── www
│   │
│   ├── css
│   │   └── style.css
│   │
│   ├── js
│   │   ├── app.js
│   │   ├── chat.js
│   │   ├── reuniones.js
│   │   ├── correo.js
│   │   └── sensores.js
│   │
│   ├── pages
│   │   ├── chat.html
│   │   ├── reuniones.html
│   │   ├── correo.html
│   │   └── ambiente.html
│   │
│   └── index.html
│
├── config.xml
├── package.json
└── README.md
```

---

## ⚙️ Instalación

### Clonar el repositorio

```bash
git clone https://github.com/USUARIO/SmartOfficeConnect.git
```

### Ingresar al proyecto

```bash
cd SmartOfficeConnect
```

### Instalar dependencias

```bash
npm install
```

### Agregar plataforma Android

```bash
cordova platform add android
```

### Ejecutar aplicación

```bash
cordova run android
```

---

## 📦 Generar APK

Compilar la aplicación:

```bash
cordova build android
```

El APK generado se encontrará en:

```text
platforms/android/app/build/outputs/apk/
```

---

## ✅ Funcionalidades Implementadas

| Módulo | Estado |
|---------|---------|
| Comunicación Interna | ✅ |
| Adjuntar Archivos | ✅ |
| Programación de Reuniones | ✅ |
| Persistencia Local (LocalStorage) | ✅ |
| Correo Corporativo | ✅ |
| Monitoreo Ambiental | ✅ |
| Navegación Entre Pantallas | ✅ |
| Diseño Responsivo | ✅ |

---

## 🎯 Objetivos del Proyecto

- Aplicar conceptos de desarrollo móvil híbrido.
- Implementar navegación entre vistas.
- Utilizar eventos y manipulación del DOM.
- Gestionar almacenamiento local.
- Diseñar una interfaz amigable para dispositivos móviles.
- Simular funcionalidades empresariales reales.
- Integrar módulos de comunicación y gestión empresarial.

---

## 📸 Capturas de Pantalla

### Menú Principal

<img width="150" height="auto" alt="Screenshot_20261122_204138_Hello Cordova" src="https://github.com/user-attachments/assets/450b6373-a286-44e2-8d87-1cc6bf9fdad4" />


### Comunicación Interna

<img width="150" height="auto" alt="Screenshot_20261122_204318_Hello Cordova" src="https://github.com/user-attachments/assets/c30c6cdd-be6a-46a6-9b1b-a2626c824d93" />


### Programación de Reuniones

<img width="150" height="auto" alt="Screenshot_20261122_204329_Hello Cordova" src="https://github.com/user-attachments/assets/92b3f87f-9a2d-4276-9e80-1450af060738" />


### Correo Corporativo

<img width="150" height="auto" alt="Screenshot_20261122_204341_Hello Cordova" src="https://github.com/user-attachments/assets/e78f8489-2749-4b5e-bb0b-9ee1bb85454a" />


### Monitoreo Ambiental

<img width="150" height="auto" alt="Screenshot_20261122_204354_Hello Cordova" src="https://github.com/user-attachments/assets/009e2081-737c-47c2-b639-d9a7eba74446" />



---

## 👨‍💻 Autor

**Nombre:** Mauricio Henríquez

**Asignatura:** Programación de Aplicaciones Móviles

**Institución:** Instituto Profesional IPCHILE

---

## 📚 Contexto Académico

Este proyecto fue desarrollado con fines académicos para demostrar la aplicación práctica de los contenidos relacionados con:

- Desarrollo de aplicaciones móviles híbridas.
- Manipulación del DOM.
- Eventos en JavaScript.
- Persistencia local de datos.
- Diseño de interfaces móviles.
- Gestión de información empresarial.
- Simulación de integración con sensores ambientales.

---

## 📄 Licencia

Proyecto desarrollado exclusivamente con fines educativos y académicos.
