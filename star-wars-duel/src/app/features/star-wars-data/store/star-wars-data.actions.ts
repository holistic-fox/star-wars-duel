import { createAction } from '@ngrx/store';

const PREFIX = '[STAR WARS DATA]';

export const reset = createAction(`${PREFIX} Reset`);
