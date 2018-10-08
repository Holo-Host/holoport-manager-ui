import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios/index';
import {FusePageSimple} from '@fuse';

import {Button, Typography} from '@material-ui/core';
import {TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const styles = theme => ({
    layoutRoot: {}
});

class Access extends Component {

    state = {
        data      : [],
    };

    componentDidMount()
    {
        /*
        axios.get('/api/sys').then(res => {
            this.setState({data: res.data});
        });
        */
    }

    onSubmit = (model) => {
        console.info('submit', model);
    };

    render()
    {
        const {data} = this.state;
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
                            <TextFieldFormsy
                                className="mb-24"
                                type="text"
                                name="command"
                                label="Command"
                                validations={{
                                    isIn: function (values, value) {
                                      let arr = ['success','fail'];
                                      if ((arr.indexOf(value) && arr.indexOf(value) !== -1) || !arr.indexOf(value)){
                                          return true;
                                      } else {
                                          return false;
                                      }
                                    }
                                }}
                                validationErrors={{
                                    isIn: 'Invalid Command'
                                }}
                                required
                            />
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