import "azure-devops-ui/Core/override.css";
import "es6-promise/auto";
import * as SDK from "azure-devops-extension-sdk";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./common.scss";

SDK.init();

export function showRootComponent(component: React.ReactElement<any>) {
    ReactDOM.render(component, document.getElementById("root"), () => {
        console.log("✅ React component mounted");
        SDK.ready();
    });
}
