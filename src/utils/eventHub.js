import { createEvent } from 'react-event-hook';

// Create cross-tab event for real-time updates
export const { useEventUpdateListener, emitEventUpdate } = createEvent('event-update')({
  crossTab: true,
  payloadType: { id: String, type: String }
});
