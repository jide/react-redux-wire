import { Component, PropTypes } from 'react';
import setProps from './setProps';
import { HANDLE_CHANGE, UNSUBSCRIBE, COMPONENT } from './symbols';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function transform(type) {
  const Type = type;
  let WrappedComponent;

  if (Component.prototype.render) {
    WrappedComponent = type;
  }
  // If it is a stateless component, we wrap it in a stateful component to be able to use lifecycle
  // hooks.
  else {
    WrappedComponent = class extends Component {
      render() {
        return type(this.props);
      }
    };
  }

  class FinalComponent extends WrappedComponent {
    componentDidMount() {
      if (WrappedComponent.prototype.componentDidMount) {
        super.componentDidMount();
      }
      this[UNSUBSCRIBE] = this.context.store.subscribe(this[HANDLE_CHANGE]);
      this[HANDLE_CHANGE]();
    }

    componentWillUnmount() {
      if (WrappedComponent.prototype.componentWillUnmount) {
        super.componentWillUnmount();
      }
      this[UNSUBSCRIBE]();
    }

    [HANDLE_CHANGE] = () => {
      const { mapStateToProps, mapDispatchToProps } = type;
      const state = this.context.store.getState();
      const stateProps = mapStateToProps ?
        mapStateToProps(state, this.props) : undefined;
      const dispatchProps = mapDispatchToProps ?
        mapDispatchToProps(this.context.store.dispatch, this.props) : undefined;

      setProps(this, { ...stateProps, ...dispatchProps });
    }
  }

  FinalComponent.displayName = getDisplayName(type);

  FinalComponent.contextTypes = {
    store: PropTypes.object
  };

  // Store a reference to the connected component so we can create an element of it instead of the
  // original type in createElement().
  Type[COMPONENT] = FinalComponent;
}

export default function wire(...types) {
  types.forEach(transform);
}
