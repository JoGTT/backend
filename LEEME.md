# 📦 SISTEMA HOJA DE RUTA - EJECUTABLE WINDOWS

## ✅ CONTENIDO DEL PAQUETE:

1. **hojaruta-sistema-completo.exe** - Aplicación principal (Backend + Frontend)
2. **Iniciar-Sistema.bat** - Ejecuta el sistema fácilmente
3. **.env** - Configuración de base de datos (¡NO BORRAR!)
4. **frontend_dist/** - Archivos del frontend (¡NO BORRAR!)

---

## 🚀 CÓMO USAR:

### Opción 1: Usar el archivo .bat (MÁS FÁCIL)
1. Doble clic en **`Iniciar-Sistema.bat`**
2. Espera a que inicie (verás logs en la consola)
3. Abre tu navegador en: **http://localhost:3000**

### Opción 2: Ejecutar directamente
1. Doble clic en **`hojaruta-sistema-completo.exe`**
2. Abre tu navegador en: **http://localhost:3000**

---

## ⚙️ CONFIGURACIÓN:

La aplicación se conecta automáticamente a Supabase. 

**ARCHIVO .env (en la misma carpeta del .exe):**

```env
DB_HOST=db.sivrreyhtuxtevanzkig.supabase.co
DB_USER=postgres
DB_PASSWORD=Curly66curly
DB_NAME=postgres
DB_PORT=5432
JWT_SECRET=aK8SmP2&nL9axQG#zW3!vZ7#bO4^dF6^hJiaKL3%mN5~oP7&qR9$sT2(uV4)wx6
NODE_ENV=production
PORT=3000
```

**⚠️ IMPORTANTE:** 
- NO borres el archivo `.env`
- NO borres la carpeta `frontend_dist/`
- Necesitas conexión a internet (se conecta a Supabase)

---

## 📝 USUARIOS DE PRUEBA:

### Administrador:
- Email: `admin@sedeges.gob.bo`
- Contraseña: `Admin2024!`

### Técnico:
- Email: `tecnico@sedeges.gob.bo`
- Contraseña: `Tecnico2024!`

---

## ❗ SOLUCIÓN DE PROBLEMAS:

### El puerto 3000 ya está en uso:
Si ya tienes algo corriendo en el puerto 3000, edita el archivo `.env` y cambia:
```
PORT=3000
```
Por otro puerto, ejemplo:
```
PORT=8080
```
Luego reinicia el .exe.

### No se conecta a la base de datos:
1. Verifica que tengas internet
2. Verifica que el archivo `.env` esté en la misma carpeta del .exe
3. Verifica que las credenciales en `.env` sean correctas
4. Verifica que Supabase esté activo

### Windows Defender bloquea el .exe:
1. Click derecho en el .exe → Propiedades
2. Marca "Desbloquear"
3. Aplica

O agrega una excepción en Windows Defender.

---

## 📁 ARCHIVOS NECESARIOS:

Para que funcione, **TODOS** estos archivos deben estar en la misma carpeta:
- ✅ `hojaruta-sistema-completo.exe`
- ✅ `.env` (configuración - NO BORRAR)
- ✅ `frontend_dist/` (carpeta con archivos del frontend - NO BORRAR)

**Si falta alguno de estos archivos, el sistema NO funcionará.**

---

## 🔄 VERSIÓN:
- Backend: v1.0.0
- Frontend: v1.0.0
- Fecha: Enero 2026

---

## 📞 SOPORTE:
Para soporte técnico, contactar al equipo de desarrollo.
