import * as React from "react";
import {JSX} from "react";
import * as SDK from "azure-devops-extension-sdk";
import {showRootComponent} from "../Common";

export class HomePage extends React.Component<{}, {}> {
    public componentDidMount() {
        SDK.init();
    }

    public render() : JSX.Element {
        return (
            <div style={{width:"100%"}}>
                <h1>My first extension</h1>
                <div className="page-content flex-grow" style={{marginTop: "20px", marginLeft: "20px", marginRight: "20px"}}>
                    <p>Page content</p>
                </div>
            </div>
        );
    }
}
export default HomePage;


showRootComponent(<HomePage />);