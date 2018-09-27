import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Button, Card, CardContent, Divider, FormControl, Input, InputLabel, Typography} from '@material-ui/core';
import classNames from 'classnames';
import _ from 'lodash';
import {FuseCountdown, FuseAnimate} from '@fuse';

const styles = theme => ({
    root: {
        background    : "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
        backgroundSize: 'cover'
    },
    card: {
        width   : '100%',
        maxWidth: 384
    }
});

class ComingSoonPage extends Component {
    state = {
        email: ''
    };

    handleChange = (event) => {
        this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    canBeSubmitted()
    {
        const {email} = this.state;
        return (
            email.length > 0
        );
    }

    render()
    {
        const {classes} = this.props;
        const {email} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">

                        <Card className={classes.card}>

                            <CardContent className="flex flex-col items-center justify-center p-32 text-center">

                                <img className="w-128 m-32" src="assets/images/logos/holo-logo.png" alt="logo"/>

                                <Typography variant="subheading" className="mb-16">
                                    Hey! Thank you for checking out our app.
                                </Typography>

                                <Typography color="textSecondary" className="max-w-288">
                                    It’s not quite ready yet, but we are working hard and it will be ready in approximately:
                                </Typography>

                                <FuseCountdown endDate="2019-07-28" className="my-48"/>

                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ComingSoonPage);
