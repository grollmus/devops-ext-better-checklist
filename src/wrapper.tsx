/* eslint-disable no-console */
import 'azure-devops-ui/Core/override.css';
import * as SDK from 'azure-devops-extension-sdk';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './wrapper.scss';

SDK.init();

export default function showRootComponent(component: React.ReactElement<unknown>) {
  const root = document.getElementById('root');
  if (!root) {
    console.warn('⚠️ Root element not found. Skipping render.');
    return;
  }

  ReactDOM.render(component, root, () => {
    console.log('✅ React component mounted');
    SDK.ready();
  });
}
