import 'azure-devops-ui/Core/override.css';
import * as SDK from 'azure-devops-extension-sdk';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './wrapper.scss';

SDK.init();

export default function showRootComponent(component: React.ReactElement<unknown>) {
  ReactDOM.render(component, document.getElementById('root'), () => {
    console.log('✅ React component mounted');
    SDK.ready();
  });
}
