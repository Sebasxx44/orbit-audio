# ORBIT Audio

Experiencia conceptual de producto creada desde cero por Sebaz. Una landing editorial para auriculares con visualización procedural en Three.js, tres acabados, configuración persistente, comparación de modelos y resumen de selección accesible.

**Demo de portfolio:** ORBIT no es una marca comercial. Las especificaciones y precios son ilustrativos. No hay pedidos, pagos, envío de formularios ni analítica. La configuración se guarda exclusivamente en el navegador.

## Desarrollo

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

React · TypeScript · Vite · Three.js. Componentes `TA`, alias `@/`, hooks por responsabilidad. Modelo 3D creado con geometría procedural, sin assets externos. Iconos: Lucide (ISC). Tipografías: DM Sans y Space Grotesk, Google Fonts (OFL).

El proyecto incluye configuración de Vercel; salida `dist`. Accesible mediante teclado, responsive y compatible con `prefers-reduced-motion`. Si WebGL no está disponible se muestra una representación CSS del producto.
