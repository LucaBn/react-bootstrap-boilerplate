import { APP_NAME_SHORT } from "./app";

const lowercaseAppName = APP_NAME_SHORT.toLowerCase();

const LS_KEY_LIST = {
  THEME: `${lowercaseAppName}Theme`,
} as const;

export { LS_KEY_LIST };
