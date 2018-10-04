import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios/index';
import {FusePageSimple} from '@fuse';

import {Button, FormControlLabel, MenuItem, Radio, Typography} from '@material-ui/core';
import {TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';

const styles = theme => ({
    layoutRoot: {}
});

class System extends Component {

    state = {
        canSubmit: false,
        data      : [],
    };

    componentDidMount()
    {
        axios.get('/api/sys').then(res => {
            this.setState({data: res.data});
        });
    }

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    onSubmit = (model) => {
        console.info('submit', model);
    };

    render()
    {
        const {classes} = this.props;
        const {data} = this.state;
        const {canSubmit} = this.state;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24"><h4>Holo</h4></div>
                }
                contentToolbar={
                    <div className="px-24"><h4>System</h4></div>
                }
                content={
                    <div className="p-24">
                        <div>
                            Available system commands:
                        </div>
                        <div>
                            <ul>
                            {data.map((sys) => (
                                <li key={sys.id}>
                                    <p>
                                        <b>{sys.command}</b>
                                    </p>
                                    <p>
                                        {sys.description}
                                    </p>
                                </li>
                            ))}
                            </ul>
                        </div>

                        <div>
                        <Typography className="h2 mb-24">Example Formsy Form</Typography>
                        <Formsy
                            onValidSubmit={this.onSubmit}
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}
                            ref={(form) => this.form = form}
                            className="flex flex-col justify-center"
                        >

                            <TextFieldFormsy
                                className="mb-24"
                                type="text"
                                name="command"
                                label="Command"
                                validations={{
                                    isIn: function (values, value) {
                                      values, // ?
                                      value; // 5
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

                            <Button
                                type="submit"
                                variant="raised"
                                color="primary"
                                className="mx-auto mt-16"
                                aria-label="command"
                                disabled={!canSubmit}
                            >
                                Can submit
                            </Button>
                        </Formsy>
                    </div>

                </div>

                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(System);