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

const styles = theme => ({
    layoutRoot: {}
});

export function command(command)
{
    console.log(command);
    axios.get('/api/sys/' + command.command).then(res => {
        console.log(res.data);
        this.setState({commandResult: res.data});
    });

    //const request = axios.post('/api/sys/command', command);
    return true;
}

class System extends Component {

    state = {
        canSubmit: false,
        data      : [],
        commandResult: 'Command Result'
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
        console.log(model);
        axios.get('/api/sys/' + model.command).then(res => {
            console.log(res.data);
            this.setState({commandResult: res.data});
        });
//        setInterval(function(){ alert("Hello"); }, 3000);
    };

    render()
    {
        const {classes} = this.props;
        const {data} = this.state;
        const {canSubmit} = this.state;
        const {commandResult} = this.state;
        const styles = {
          card: {
            minWidth: 275
          },
          title: {
            marginBottom: 16,
            fontSize: 14,
          },
          pos: {
            marginBottom: 12,
          },
          header: {
              height: 60,
              minHeight: 60
          }
        };

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
                        <Typography variant="display1">System Commands</Typography>
                    </div>
                }
                content={
                    <div className="p-24">
                        <Card className={classes.card}>
                            <CardContent>
                              <Typography className={classes.title} color="textSecondary">
                                  Available system commands:
                              </Typography>
                                <ul>
                                {data.map((sys) => (
                                    <li key={sys.id}>
                                        <Typography className={classes.pos}>
                                            {sys.command}
                                        </Typography>
                                        <Typography component="p" color="textSecondary">
                                            {sys.description}
                                        </Typography>
                                        <br/>
                                    </li>
                                ))}
                                </ul>
                            </CardContent>
                          </Card>

                        <hr/>

                        <div>
                            <Typography className="h2 mb-24">Command</Typography>
                        <Formsy
                            onValidSubmit={this.onSubmit}
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}
                            ref={(form) => this.form = form}
                            className="flex flex-col"
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
                        <Chip label={commandResult} className={classes.chip} />
                            <br/>

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