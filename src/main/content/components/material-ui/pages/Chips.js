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

function Chips({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Chips</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/chips"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Chips</Typography>
                    <Typography className="description">Chips are compact elements that represent an input, attribute, or action.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/chips.html">Chips</a> allow users to enter information, make
                        selections, filter content, or trigger actions.</Typography>
                    <Typography className="mb-16" component="div">While included here as a standalone component, the most common use will
                        be in some form of input, so some of the behaviour demonstrated here is
                        not shown in context.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Chip</Typography>
                    <Typography className="mb-16" component="div">Examples of Chips, using an image Avatar, SVG Icon Avatar, &quot;Letter&quot;
                        and (string) Avatar.</Typography>
                    <ul>
                        <li>Chips with the <code>onClick</code> property defined change appearance on focus,
                            hover, and click.
                        </li>
                        <li>Chips with the <code>onDelete</code> property defined will display a delete
                            icon which changes appearance on hover.
                        </li>
                    </ul>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/chips/Chips.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/chips/Chips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Chip Playground</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/chips/ChipsPlayground.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/chips/ChipsPlayground.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Chip array</Typography>
                    <Typography className="mb-16" component="div">An example of rendering multiple Chips from an array of values.
                        Deleting a chip removes it from the array. Note that since no
                        <code>onClick</code> property is defined, the Chip can be focused, but does not
                        gain depth while clicked or touched.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/chips/ChipsArray.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/chips/ChipsArray.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Chips);
