import { createRoot } from 'react-dom/client'
import * as React from "react";


export function showRootComponent(component: React.ReactElement<any>) {
    createRoot(document.getElementById("root")!).render(component);
}