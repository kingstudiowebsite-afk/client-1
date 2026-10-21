/// <reference types="vite/client" />

// The project stores some assets with uppercase extensions. Vite's client types
// only declare the lowercase variants, so add the uppercase ones explicitly.
declare module "*.JPG" {
  const src: string;
  export default src;
}

declare module "*.JPEG" {
  const src: string;
  export default src;
}

declare module "*.PNG" {
  const src: string;
  export default src;
}
