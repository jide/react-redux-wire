import ReactElement from 'react/lib/ReactElement';
import ReactUpdates from 'react-dom/lib/ReactUpdates';
import ReactInstanceMap from 'react-dom/lib/ReactInstanceMap';

export default function setProps(publicInstance, partialProps) {
  const internalInstance = ReactInstanceMap.get(publicInstance);
  const element = internalInstance._pendingElement || internalInstance._currentElement;

  internalInstance._pendingElement = ReactElement.cloneElement(element, partialProps);

  ReactUpdates.enqueueUpdate(internalInstance);
}
