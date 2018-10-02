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

function ExpansionPanels({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Expansion Panel</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/expansion-panels"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Expansion Panel</Typography>
                    <Typography className="description">Expansion panels contain creation flows and allow lightweight editing of an element.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/archive/guidelines/components/expansion-panels.html">An expansion panel</a> is a
                        lightweight container that may either stand alone or be connected to a larger surface, such as a card.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Expansion Panel</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/expansion-panels/SimpleExpansionPanel.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/expansion-panels/SimpleExpansionPanel.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Secondary heading and Columns</Typography>
                    <Typography className="mb-16" component="div">Multiple columns can be used to structure the content, and a helper text may be added to the panel to assist the
                        user.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/expansion-panels/DetailedExpansionPanel.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/expansion-panels/DetailedExpansionPanel.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Controlled Accordion</Typography>
                    <Typography className="mb-16" component="div">Extend the default panel behavior to create an accordion with
                        the <code>ExpansionPanel</code> component.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/expansion-panels/ControlledExpansionPanels.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/expansion-panels/ControlledExpansionPanels.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(ExpansionPanels);
