import { LS_KEY_LIST } from "@/constants/localStorage";

type LocalStorageKey = (typeof LS_KEY_LIST)[keyof typeof LS_KEY_LIST];

export type { LocalStorageKey };
