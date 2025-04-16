import * as React from 'react';
import { Card } from 'azure-devops-ui/Card';
import { Header, IHeaderBreakpointCommandItem, TitleSize } from 'azure-devops-ui/Header';
import { Page } from 'azure-devops-ui/Page';
import showRootComponent from '../wrapper';

function HeaderExample(): React.ReactElement {
  const barItems: IHeaderBreakpointCommandItem[] = [
    {
      id: 'command1',
      iconProps: { iconName: 'OpenSource' },
      text: 'Command 1',
      important: true,
      tooltipProps: { text: 'tool tip' },
    },
  ];
  return (
    <Page>
      <Header
        title="Hello Title"
        commandBarItems={barItems}
        titleSize={TitleSize.Medium}
        titleIconProps={{ iconName: 'OpenSource' }}
        titleAriaLevel={3}
      />

      <div className="page-content page-content-top">
        <Card>Page content 123</Card>
      </div>
    </Page>
  );
}

export default HeaderExample;

showRootComponent(<HeaderExample />);
