declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SE_API_BASE_URL: string;
      SE_API_TAGS_PATH: string;
      SE_API_SITE_PARAM: string;
      SE_API_TAGS_FILTER: string;
    }
  }
}
export {};
