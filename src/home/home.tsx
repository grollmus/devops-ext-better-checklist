import * as React from "react";
import { Card } from "azure-devops-ui/Card";
import { Header, IHeaderBreakpointCommandItem, TitleSize } from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";
import { showRootComponent } from "../wrapper";


export default class HeaderExample extends React.Component<{}> {
    barItems: IHeaderBreakpointCommandItem[] = [
        {
            id: "command1",
            iconProps: { iconName: "OpenSource" },
            text: "Command 1",
            important: true,
            tooltipProps: { text: 'tool tip' },
        }
    ];

    public render() {
        return (
            <Page>
                <Header
                    title={"Hello Title"}
                    commandBarItems={this.barItems}
                    titleSize={TitleSize.Medium}
                    titleIconProps={{ iconName: "OpenSource" }}
                    titleAriaLevel={3}
                />

                <div className="page-content page-content-top">
                    <Card>Page content 123</Card>
                </div>
            </Page>
        );
    }
}

showRootComponent(<HeaderExample />);