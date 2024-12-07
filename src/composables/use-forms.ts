import type { FormState } from '../types/form-state';

export const useAzForms = () => {
  const debug = (state?: FormState) => {
    console.debug(state);
    return state;
  };

  return {
    debug,
  };
};
