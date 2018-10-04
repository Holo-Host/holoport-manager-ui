import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseExample, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
/* eslint import/no-webpack-loader-syntax: off */
const styles = theme => ({
    layoutRoot: {}
});

class FormsyDoc extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <Typography variant="title">Formsy</Typography>
                        <Button
                            className="normal-case"
                            variant="raised"
                            component="a"
                            href="https://github.com/formsy/formsy-react"
                            target="_blank"
                        >
                            <Icon className="mr-4">link</Icon>
                            Reference
                        </Button>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">formsy-react</code> is a form input builder and validator for React.
                        </Typography>

                        <Typography className="mb-16" component="p">
                            HOCs are needed for formsy to work. We created for TextField, Select, RadioGroup, Checkbox under @fuse.
                        </Typography>

                        <hr/>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Example Usages</Typography>

                        <FuseExample
                            className="mb-64"
                            component={require('./examples/SimpleFormExample.js').default}
                            raw={require('!raw-loader!./examples/SimpleFormExample.js')}
                        />

                        <Typography className="text-32 mt-32 mb-8" component="h2">Demos</Typography>

                        <ul>
                            <li className="mb-8">
                                <Link to="/login">Login page</Link>
                            </li>
                        </ul>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(FormsyDoc);
