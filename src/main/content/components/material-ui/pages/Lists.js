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

function Lists({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Lists</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/lists"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Lists</Typography>
                    <Typography className="description">Lists are continuous, vertical indexes of text or images.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/lists.html">Lists</a> are a continuous group of text or images.
                        They are composed of items containing primary and supplemental actions, which are represented by icons and text.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/lists/SimpleList.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/lists/SimpleList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Folder List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/lists/FolderList.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/lists/FolderList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Inset List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/lists/InsetList.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/lists/InsetList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Nested List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/lists/NestedList.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/lists/NestedList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Pinned Subheader List</Typography>
                    <Typography className="mb-16" component="div">Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next
                        subheader.</Typography>
                    <Typography className="mb-16" component="div">This feature is relying on the CSS sticky positioning.
                        Unfortunately it&#39;s <a href="https://caniuse.com/#search=sticky">not implemented</a> by all the browsers we are supporting. We default
                        to <code>disableSticky</code> when not supported.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/lists/PinnedSubheaderList.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/lists/PinnedSubheaderList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">List Controls</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Checkbox</Typography>
                    <Typography className="mb-16" component="div">A checkbox can either be a primary action or a secondary action.</Typography>
                    <Typography className="mb-16" component="div">The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary
                        action and a separate target.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/lists/CheckboxList.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/lists/CheckboxList.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">The checkbox is the secondary action for the list item and a separate target.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/lists/CheckboxListSecondary.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/lists/CheckboxListSecondary.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Switch</Typography>
                    <Typography className="mb-16" component="div">The switch is the secondary action and a separate target.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/lists/SwitchListSecondary.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/lists/SwitchListSecondary.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Interactive</Typography>
                    <Typography className="mb-16" component="div">Below is an interactive demo that lets you explore the visual results of the different settings:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/lists/InteractiveList.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/lists/InteractiveList.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Lists);
