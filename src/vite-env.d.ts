/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHECKOUT_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.zip" {
  const src: string;
  export default src;
}
