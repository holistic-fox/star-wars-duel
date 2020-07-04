import { createAction, props } from '@ngrx/store';

const PREFIX = '[GAMEPLAY]';

export const reset = createAction(`${PREFIX} Reset`);
