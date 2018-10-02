import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from 'store/actions';

const styles = theme => ({
    layoutRoot: {}
});

class FuseMessageDoc extends Component {

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
                        <Typography variant="title">FuseMessage</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseMessage</code> is a simple snackbar trigger for easily showing messages via redux action. It is located in the <code
                            className="language-bash">FuseLayout</code>.
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Usage</Typography>

                        <Typography className="mb-16" component="p">
                            You can show messages anywhere with dispatching the action showMessage, its using Materia-UI's snackbar so you can pass the props in the object:
                        </Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {`
                                    <Button onClick={() => this.props.showMessage({
                                        message     : 'Hi, how are you?',
                                        anchorOrigin: {
                                            vertical  : 'top',
                                            horizontal: 'right'
                                        }
                                    })}>
                                        Top - Right
                                    </Button>
                            `}
                        </FuseHighlight>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Example</Typography>

                        <Button onClick={() => this.props.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'top',
                                horizontal: 'right'
                            }
                        })}>
                            Top - Right
                        </Button>
                        <Button onClick={() => this.props.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'top',
                                horizontal: 'center'
                            }
                        })}>
                            Top-Center
                        </Button>
                        <Button onClick={() => this.props.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'top',
                                horizontal: 'left'
                            }
                        })}>
                            Top-Left
                        </Button>
                        <Button onClick={() => this.props.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'bottom',
                                horizontal: 'right'
                            }
                        })}>
                            Bottom-Right
                        </Button>
                        <Button onClick={() => this.props.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'bottom',
                                horizontal: 'center'
                            }
                        })}>
                            Bottom-Center
                        </Button>
                        <Button onClick={() => this.props.showMessage({
                            message     : 'Hi, how are you?',
                            anchorOrigin: {
                                vertical  : 'bottom',
                                horizontal: 'left'
                            }
                        })}>
                            Bottom-Left
                        </Button>
                    </div>
                }
            />
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
            showMessage: Actions.showMessage,
            hideMessage: Actions.hideMessage
        },
        dispatch);
}

export default withStyles(styles, {withTheme: true})(connect(null, mapDispatchToProps)(FuseMessageDoc));
