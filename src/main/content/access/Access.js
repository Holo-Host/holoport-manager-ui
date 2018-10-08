import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple} from '@fuse';

import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {Divider} from '@material-ui/core';

import {TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

/*
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU
GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3
Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA
t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En
mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx
NrRFi9wrf+M7Q== blah@mylaptop.local
 */

const styles = theme => ({
    layoutRoot: {},
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
});


class Access extends Component {

    state = {
        result: 'disabled'
    };

    onSubmit = (model) => {
        console.info('submit', model);
        this.setState({result: 'enabled'});
    };

    render()
    {
        const {result} = this.state;
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24">
                        <Typography variant="display1">Holo</Typography>
                    </div>
                }
                contentToolbar={
                    <div className="px-24">
                        <Typography variant="display1">Access</Typography>
                    </div>
                }
                content={
                    <div className="p-24">
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary">
                                    Enter your security key to enable access to your device:
                                </Typography>
                            </CardContent>
                        </Card>
                    <div>
                        <Formsy
                            onValidSubmit={this.onSubmit}
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}
                            ref={(form) => this.form = form}
                        >
                            <Divider light />
                            <br/>
                            <TextFieldFormsy
                                className="mb-24"
                                type="text"
                                name="command"
                                label="Key"
                                required
                            />
                            <Paper className={classes.root} elevation={1}>
                                Access {result}
                            </Paper>
                            <br/>
                            <Button
                                type="submit"
                                variant="raised"
                                color="primary"
                                className="mx-auto mt-16"
                                aria-label="command"
                            >
                                Submit
                            </Button>
                        </Formsy>
                    </div>
                </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Access);