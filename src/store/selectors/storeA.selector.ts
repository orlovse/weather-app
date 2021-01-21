import { ApplicationState } from 'store/types';
// TODO: ADD MEMORIZED EXAMPLE WITH PROXY-MEMO

export const timestampSelector = (s: ApplicationState): number => s.storeA.timestamp;
export const messageSelector = (s: ApplicationState): string => s.storeA.message;
