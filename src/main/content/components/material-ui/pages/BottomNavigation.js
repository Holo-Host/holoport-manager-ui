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

function BottomNavigation({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Bottom Navigation</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/bottom-navigation"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Bottom Navigation</Typography>
                    <Typography className="description">Bottom navigation bars allow movement between primary destinations in an app.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/bottom-navigation.html">Bottom navigation</a> bars display three to
                        five destinations at the bottom of a screen. Each destination is represented by an icon and an optional text label. When a bottom navigation icon is tapped,
                        the user is taken to the top-level navigation destination associated with that icon.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Bottom Navigation</Typography>
                    <Typography className="mb-16" component="div">When there are only <strong>three</strong> actions, display both icons and text labels at all times.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/bottom-navigation/SimpleBottomNavigation.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/bottom-navigation/SimpleBottomNavigation.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Bottom Navigation with no label</Typography>
                    <Typography className="mb-16" component="div">If there are <strong>four</strong> or <strong>five</strong> actions, display inactive views as icons
                        only.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/bottom-navigation/LabelBottomNavigation.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/bottom-navigation/LabelBottomNavigation.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(BottomNavigation);
