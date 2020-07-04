import { createAction } from '@ngrx/store';

const PREFIX = '[HOME PAGE]';

export const reset = createAction(`${PREFIX} Reset`);
