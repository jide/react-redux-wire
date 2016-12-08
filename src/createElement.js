import React from 'react';
import { Provider } from 'react-redux';
import { COMPONENT } from './symbols';

let store;

export default function createElement(type, config, child, ...rest) {
  // store is passed as a prop in Provider, which gives us the opportunity to
  // keep a reference here for later reuse.
  if (type === Provider) {
    store = config.store;
  }
  else if (type.mapStateToProps || type.mapDispatchToProps) {
    const { mapStateToProps, mapDispatchToProps } = type;
    const children = rest !== undefined ? [child, ...rest] : child;
    const ownProps = { ...config, children };
    const state = store.getState();
    const dispatch = store.dispatch;
    const stateProps = mapStateToProps ? mapStateToProps(state, ownProps) : undefined;
    const dispatchProps = mapDispatchToProps ? mapDispatchToProps(dispatch, ownProps) : undefined;
    const finalConfig = { ...config, ...stateProps, ...dispatchProps };

    return React.createElement(type[COMPONENT] || type, finalConfig, ...children);
  }

  return React.createElement(type, config, child, ...rest);
}
