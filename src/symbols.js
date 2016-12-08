const supportsSymbol = (typeof Symbol === 'function' && Symbol.for);

export const HANDLE_CHANGE =
  (supportsSymbol && Symbol.for('wire.handleChange')) || 'wire.handleChange';

export const UNSUBSCRIBE =
  (supportsSymbol && Symbol.for('wire.unsubscribe')) || 'wire.unsubscribe';

export const COMPONENT =
  (supportsSymbol && Symbol.for('wire.component')) || 'wire.component';
