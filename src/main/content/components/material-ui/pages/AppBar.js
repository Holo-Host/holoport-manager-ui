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

function AppBar({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">App Bar</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/app-bar"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">App Bar</Typography>
                    <Typography className="description">The App Bar displays information and actions relating to the current screen.</Typography>

                    <Typography className="mb-16" component="div">The <a href="https://material.io/design/components/app-bars-top.html">top App Bar</a> provides content and actions
                        related to the current screen. It’s used for branding, screen titles, navigation, and actions.</Typography>
                    <Typography className="mb-16" component="div">It can transform into a contextual action bar or used as a navbar.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple App Bar</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/app-bar/SimpleAppBar.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/app-bar/SimpleAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">App Bar with buttons</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/app-bar/ButtonAppBar.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/app-bar/ButtonAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">App Bar with menu</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/app-bar/MenuAppBar.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/app-bar/MenuAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Dense (desktop only)</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/app-bar/DenseAppBar.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/app-bar/DenseAppBar.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(AppBar);
