import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {
        '& .description': {
            marginBottom: 16
        }
    }
});

function Tabs({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Tabs</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/tabs"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Tabs</Typography>
                    <Typography className="description">Tabs make it easy to explore and switch between different views.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/tabs.html">Tabs</a> organize and allow navigation between groups of
                        content that are related and at the same level of hierarchy.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Tabs</Typography>
                    <Typography className="mb-16" component="div">A simple example with no frills.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tabs/SimpleTabs.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/SimpleTabs.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Wrapped Labels</Typography>
                    <Typography className="mb-16" component="div">Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow and the text
                        will not be visible.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tabs/TabsWrappedLabel.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/TabsWrappedLabel.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Disabled Tab</Typography>
                    <Typography className="mb-16" component="div">A Tab can be disabled by setting <code>disabled</code> property.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tabs/DisabledTabs.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/DisabledTabs.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Fixed Tabs</Typography>
                    <Typography className="mb-16" component="div">Fixed tabs should be used with a limited number of tabs and when consistent placement will aid muscle
                        memory.</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Full width</Typography>
                    <Typography className="mb-16" component="div">The <code>fullWidth</code> property should be used for smaller views.
                        This demo also uses <a href="https://github.com/oliviertassinari/react-swipeable-views">react-swipeable-views</a> to animate the Tab transition, and
                        allowing tabs to be swiped on touch devices.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tabs/FullWidthTabs.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/FullWidthTabs.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Centered</Typography>
                    <Typography className="mb-16" component="div">The <code>centered</code> property should be used for larger views.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tabs/CenteredTabs.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/CenteredTabs.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Scrollable Tabs</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Automatic Scroll Buttons</Typography>
                    <Typography className="mb-16" component="div">Left and right scroll buttons will automatically be presented on desktop and hidden on mobile. (based on viewport
                        width)</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonAuto.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonAuto.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Forced Scroll Buttons</Typography>
                    <Typography className="mb-16" component="div">Left and right scroll buttons will be presented regardless of the viewport width.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonForce.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonForce.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Prevent Scroll Buttons</Typography>
                    <Typography className="mb-16" component="div">Left and right scroll buttons will never be presented. All scrolling must be initiated through user agent
                        scrolling mechanisms (e.g. left/right swipe, shift-mousewheel, etc.)</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonPrevent.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonPrevent.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Icon Tabs</Typography>
                    <Typography className="mb-16" component="div">Tab labels may be either all icons or all text.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tabs/IconTabs.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/IconTabs.js')}
                    />
                        <FuseExample
                            className="my-24"
                            component={require('main/content/components/material-ui/material-ui-examples/tabs/IconLabelTabs.js').default}
                            raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/IconLabelTabs.js')}
                        /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized Tabs</Typography>
                    <Typography className="mb-16" component="div">If you have read the <a href="/customization/overrides">overrides documentation page</a>
                        but aren&#39;t confident jumping in, here&#39;s an example of how you can change the main color of the Tabs. The following demo matches the <a
                            href="https://ant.design/components/tabs/">Ant Design UI</a>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tabs/CustomizedTabs.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/CustomizedTabs.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Tabs);
