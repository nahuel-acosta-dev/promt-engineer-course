# Prompt Engineering – Cheat Sheet de Práctica

Este documento es una **chuleta práctica** para diseñar, probar y mejorar prompts.
La idea es usarlo como referencia rápida mientras practico y itero prompts reales.

---

## 🧱 PRINCIPIO 1: SER CLARO Y ESPECÍFICO

### 1️⃣ Usar delimitadores

Separar claramente:

- instrucciones
- contexto
- datos de entrada

**Delimitadores comunes**

- ` ` (triple backticks)
- """ """
- < >
- <tag></tag>

✔ Reduce ambigüedad  
✔ Evita que el modelo mezcle instrucciones con datos

---

### 2️⃣ Pedir salida estructurada

Indicar explícitamente el formato esperado.

**Formatos habituales**

- JSON
- HTML
- Markdown
- Listas numeradas

✔ Facilita parsing  
✔ Ideal para APIs e integraciones  
✔ Reduce respuestas “creativas” no deseadas

---

### 3️⃣ Hacer que el modelo verifique condiciones

Pedirle que evalúe si algo se cumple antes de responder.

**Ejemplos**

- Si el texto contiene pasos → listarlos
- Si no contiene pasos → responder “No steps provided”
- Si falta información → indicarlo explícitamente

✔ Mejora precisión  
✔ Evita respuestas forzadas

---

### 4️⃣ Few-shot prompting (ejemplos)

Mostrar ejemplos del resultado esperado.

**Cuándo usar**

- Estilo de escritura
- Formatos específicos
- Respuestas creativas controladas

✔ El modelo imita el patrón  
✔ Más efectivo que solo describir el resultado

---

## 🧠 PRINCIPIO 2: DARLE TIEMPO AL MODELO PARA “PENSAR”

### 5️⃣ Dividir la tarea en pasos explícitos

Indicar qué hacer y en qué orden.

**Ejemplo**

1. Resumir el texto
2. Traducir el resumen
3. Extraer nombres
4. Devolver JSON

✔ Reduce errores  
✔ Mejora tareas complejas

---

### 6️⃣ Especificar el formato final

Indicar no solo qué hacer, sino **cómo devolverlo**.

✔ Facilita debugging  
✔ Permite comparar resultados  
✔ Ideal para outputs largos

---

### 7️⃣ Forzar razonamiento antes de concluir

Pedir al modelo que resuelva el problema antes de evaluar.

**Ejemplo**

- Primero: resolver el ejercicio
- Luego: comparar con la solución del estudiante
- Finalmente: decidir si es correcto o incorrecto

✔ Evita aceptar soluciones erróneas  
✔ Mejora evaluaciones y validaciones

---

## 🧪 SECCIÓN DE PRÁCTICA

### Prompt actual

```text
(pegar prompt aquí)
```
