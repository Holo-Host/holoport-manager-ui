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

function Selects({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Selects</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/selects"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Selects</Typography>
                    <Typography className="description">Select components are used for collecting user provided information from a list of options.</Typography>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Select</Typography>
                    <Typography className="mb-16" component="div">Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the
                        emitting element.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/selects/SimpleSelect.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selects/SimpleSelect.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Native Select</Typography>
                    <Typography className="mb-16" component="div">As the user experience can be improved on mobile using the native select of the platform,
                        we allow such pattern.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/selects/NativeSelects.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selects/NativeSelects.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Multiple Select</Typography>
                    <Typography className="mb-16" component="div">The <code>Select</code> component can handle multiple selections.
                        It&#39;s enabled with the <code>multiple</code> property.</Typography>
                    <Typography className="mb-16" component="div">Like with the single selection, you can pull out the new value by accessing <code>event.target.value</code> in
                        the <code>onChange</code> callback. It&#39;s always an array.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/selects/MultipleSelect.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selects/MultipleSelect.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">With a Dialog</Typography>
                    <Typography className="mb-16" component="div">While it&#39;s discouraged by the Material Design specification, you can use a select inside a
                        dialog.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/selects/DialogSelect.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selects/DialogSelect.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Text Fields</Typography>
                    <Typography className="mb-16" component="div">The <code>TextField</code> wrapper component is a complete form control including a label, input and help text.
                        You can find an example with the select mode <a href="/demos/text-fields#textfield">in this section</a>.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Controlled open Select</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/selects/ControlledOpenSelect.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selects/ControlledOpenSelect.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Selects);
