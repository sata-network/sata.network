interface ImportMetaEnv {
  readonly VUE_APP_NETWORK: string
  readonly VUE_APP_LOGIN_TYPE: string
  readonly VUE_APP_ENVIRONMENT: string
  readonly VUE_APP_FREE_MINT_CONTRACT_ADDRESS:string
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}