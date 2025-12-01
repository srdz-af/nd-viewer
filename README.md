# ND-Viewer

Visor interactivo de geometría en N dimensiones construido con Three.js y Tweakpane.  
Permite explorar hipercubos y otros politopos, proyectarlos a 3D, rotarlos en planos N‑D, editar vértices y trabajar con datos externos en formato JSON.

## Ejecución

https://srdz-af.github.io/nd-viewer/

## Panel principal

En la esquina superior derecha hay un panel con:

- Lista de objetos activos.
- Controles de datos (importar / exportar).
- Dimensiones `N`.
- Proyección (canónica o PCA).
- Ajustes avanzados de rotación y corte (slicing).

Debajo se muestra una barra de estado con información del cursor o del elemento que se está transformando.

## Tipos de objetos (polítopos)

Se añaden desde el menú contextual (clic derecho en el vacío) o con `Shift + A`:

- Hipercubo (`Hypercube`).
- Cross polytope (hiperoctaedro).
- Simplex.
- Prisma de simplex (`Prisma de simplex`) – prisma sobre un simplex de dimensión `N-1`.

Cada objeto se instancia con su propia copia de vértices, aristas y transformaciones.

## Controles de cámara

Basados en OrbitControls:

- Botón izquierdo: orbitar cámara alrededor de la escena.
- Rueda del ratón: zoom.
- Botón central (clic rueda) y arrastrar: ciclar suavemente el triplete de dimensiones proyectadas (`d0,d1,d2` → `d1,d2,d3` → …), cambiando también los colores de los ejes.

La cámara no forma parte de las transformaciones N‑D, solo de la vista 3D.

## Modos de visualización

Selector en la parte superior izquierda:

- `Wireframe`: solo aristas.
- `Transparente`: caras translúcidas blancas con reflejos + aristas visibles.
- `Sólido`: caras blancas opacas y reflectantes, sin aristas.

El modo seleccionado se aplica al objeto base y a todos los objetos instanciados.

## Proyección y ejes

En el panel:

- `Proyección`:
  - `Canónica`: proyecta directamente tres dimensiones elegidas (`axesX`, `axesY`, `axesZ`) sobre X, Y, Z de la vista.
  - `PCA`: calcula una matriz de proyección 3×N por componentes principales de los datos.

La fila “Orden de ejes” muestra una lista de dimensiones `d0…dN`:

- Se pueden reordenar arrastrando.
- Las tres primeras del orden actual son las que se proyectan en `Canónica`.
- El arrastre con botón central recorre ese orden en forma circular.

### Barra de estado

- Sin transformaciones activas: muestra la posición NDC del cursor sobre la pantalla.
- Durante transformaciones:
  - Para vértices: muestra la posición del vértice en el espacio proyectado.
  - Para objetos: muestra posición y rotación actuales.

## Lista de objetos

En el panel, encima de los controles:

- Muestra el objeto base (si existe) y todas las instancias.
- Clic en un elemento: lo convierte en el objeto seleccionado.
- El objeto seleccionado se resalta en el visor con un contorno naranja siguiendo su forma actual.

## Menú contextual (clic derecho)

### Fuera de modo edición

- Si no hay objeto seleccionado cerca del cursor:
  - Muestra menú para añadir:
    - Hipercubo.
    - Cross polytope.
    - Simplex.
    - Prisma de simplex.
- Si hay un objeto seleccionado:
  - `Mover`: inicia transformación de traslación.
  - `Rotar`: inicia transformación de rotación.
  - `Escalar`: inicia transformación de escala.
  - `Eliminar`: abre diálogo de confirmación de borrado.

### En modo edición

- Si hay un vértice seleccionado:
  - `Mover vértice`: transforma la posición de ese vértice siguiendo el ratón en el plano de la cámara, actualizando las aristas y caras asociadas.

## Modo edición y selección de vértices

- Alternar modo edición:
  - Conmutador `Modo edición` en el panel, o
  - Tecla `Tab`.

En modo edición:

- El objeto seleccionado deja de mostrar el contorno de caja y pasa a mostrar:
  - Esferas pequeñas gris claro en todos los vértices.
  - Esfera naranja para el vértice seleccionado.
- Clic izquierdo cerca de un vértice: selecciona el vértice más próximo y actualiza el indicador naranja.

Fuera de modo edición:

- No se muestran indicadores de vértice.

## Transformaciones

### Atajos de teclado

- `G`: iniciar movimiento (Move) sobre el objeto seleccionado.
- `R`: iniciar rotación (Rotate).
- `S`: iniciar escalado (Scale).
- `X`, `Y`, `Z` (durante una transformación):
  - Bloquean la transformación al eje correspondiente en el espacio proyectado.
- `W` (durante rotación):
  - Activa “rotación en W” (double rotation) mezclando la dimensión bloqueada con la última dimensión `N-1`. Muestra una guía morada adicional.
- `Shift + A`:
  - Abre menú de añadir objeto en la posición actual del cursor.
- `X` (sin transformación, con objeto seleccionado):
  - Primera pulsación: muestra diálogo “¿Eliminar?”.
  - Segunda pulsación (mientras el diálogo está abierto): confirma borrado.
- `Ctrl+Z` / `Cmd+Z`: deshacer (undo).
- `Ctrl+Y` / `Cmd+Y`: rehacer (redo).

### Movimiento de objetos

- Se define para el objeto base o la instancia seleccionada.
- El movimiento se realiza en el plano de la cámara:
  - El objeto se traslada en las tres dimensiones proyectadas (`axesX,Y,Z`).
  - Se mantiene el offset inicial entre cursor y centro del objeto, evitando saltos cuando se activa el movimiento.
- Bloqueo de ejes:
  - Tras pulsar `X`, `Y` o `Z`, el delta se aplica solo en ese eje proyectado.
  - Se muestra una guía amarilla a lo largo del eje bloqueado.

### Rotación de objetos

- Rotación estándar:
  - Usa `dx` y `dy` del ratón para modificar las componentes de rotación del objeto.
  - Con bloqueo de eje (`X/Y/Z`), solo se modifica el ángulo alrededor del eje elegido.
- Rotación en W (`W` durante rotación):
  - Usa la matriz de datos original y gira en el plano formado por:
    - La dimensión proyectada bloqueada.
    - La última dimensión `N-1`.
  - Produce el efecto de “dar la vuelta” al objeto en dimensiones superiores.

### Escala

- Escala uniforme del objeto alrededor de su centro actual en la proyección.

### Transformación de vértices

En modo edición:

- Clic derecho sobre un vértice:
  - `Mover vértice`.
- El vértice sigue estrictamente al ratón en el plano de la cámara:
  - Se actualiza la posición N‑D coherente con los ejes proyectados actuales.
  - Las aristas y caras asociadas se vuelven a proyectar y los polígonos se recomponen.
- Bloqueo de ejes (`X/Y/Z`) también se aplica a vértices.

### Confirmar / cancelar transformaciones

- Botón izquierdo:
  - Aplica el estado actual (objeto o vértice).
- Botón derecho:
  - Cancela y revierte a la posición de inicio.

## Importar y exportar JSON

Solo se soporta JSON (CSV ha sido eliminado).

### Exportar

- Siempre exporta los datos del objeto actualmente seleccionado:
  - Si hay una instancia seleccionada: exporta sus puntos y aristas.
  - Si no hay instancia pero hay objeto base: exporta el base.
- Formato:

```json
{
  "points": [
    { "d0": 0.0, "d1": 0.5, "d2": -0.5, ... },
    ...
  ],
  "edges": [
    [0, 1],
    [1, 2],
    ...
  ],
  "adjacency": {
    "0": [1, 3, ...],
    "1": [0, 2, ...]
  }
}
```

- `edges` y `adjacency` son redundantes; cualquiera de las dos estructuras basta para reconstruir conectividad al importar.

### Importar

- Botón `Importar (JSON)` en el panel de Datos.
- Acepta:
  - `points` como:
    - Array de arrays numéricos, o
    - Array de objetos con propiedades `d0…dN` o cualquier conjunto de claves numéricas.
  - Opcionalmente `edges` y/o `adjacency`.
- Reglas:
  - Dimensión `N` se toma de la longitud de cada punto.
  - Solo se admiten N entre 3 y 8.
  - Si no hay `edges` ni `adjacency`, se usan aristas de fallback (sin conectividad real).

Al importar:

- Se reemplaza el objeto base actual por el conjunto de puntos importados.
- Se limpia la lista de instancias y se muestra un solo elemento en la lista.

## Deshacer / rehacer

- Se guardan instantáneas de:
  - `N`, matriz `X`, número de puntos `M`.
  - Ejes de proyección (`axesX,Y,Z`).
  - Transformación del objeto base (posición, rotación, escala).
- Eventos que empujan al histórico:
  - Cambio de `N` (cuando N pertenece a un primitivo).
  - Importar datos JSON.
  - Eliminar un objeto.

El histórico tiene un tamaño máximo (20) para evitar consumo excesivo.

## Atajos útiles (resumen)

- Cámara:
  - Botón izquierdo: orbitar.
  - Rueda: zoom.
  - Botón central: recorrer ejes proyectados.
- Selección:
  - Clic en objeto: selecciona.
  - Clic en vacío: deselecciona.
- Transformaciones:
  - `G`: mover objeto.
  - `R`: rotar objeto.
  - `S`: escalar objeto.
  - `X/Y/Z`: bloquear eje.
  - `W` (con rotación activa): rotación en W.
  - Clic izquierdo: confirmar.
  - Clic derecho: cancelar.
- Vértices:
  - `Tab`: alternar modo edición.
  - Clic izquierdo en vértice: seleccionar.
  - Clic derecho en vértice: menú de transformaciones de vértice.
- Objetos:
  - Clic derecho en vacío: menú de añadir.
  - `Shift + A`: menú de añadir en la posición del cursor.
  - `X`: eliminar con confirmación.
- Datos:
  - `Importar (JSON)` / `Exportar datos JSON` en el panel de Datos.
  - `Ctrl+Z` / `Cmd+Z`: deshacer.
  - `Ctrl+Y` / `Cmd+Y`: rehacer.

Con este conjunto de controles y modos, el visor permite explorar, editar y estudiar geometría en N dimensiones de forma interactiva, tanto con primitivas estándar como con datos externos.***
