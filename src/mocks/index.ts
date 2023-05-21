import { setupWorker } from 'msw';
import handlers from './handlers';

const worker = setupWorker(...handlers);

worker.start({
  onUnhandledRequest: 'bypass',
});
