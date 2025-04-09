import { DOMElement, DOMAttributes } from "react";
import ReactDOM from "react-dom";

export function showRootComponent(component: DOMElement<DOMAttributes<Element>, Element>) {
    ReactDOM.render(component, document.getElementById("root"));
}
