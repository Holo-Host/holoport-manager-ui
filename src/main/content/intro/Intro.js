import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple} from '@fuse';

const styles = theme => ({
    layoutRoot: {}
});

class Intro extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24"><h4>Holo</h4></div>
                }
                contentToolbar={
                    <div className="px-24"><h4>Content Toolbar</h4></div>
                }
                content={
                    <div className="p-24">
                        <img className="w-128 m-32" src="assets/images/logos/holo-logo.png" alt="logo"/>
                        <br/>
                        Oh look, you have a HoloPort!
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Intro);