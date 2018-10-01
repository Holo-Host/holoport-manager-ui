import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios/index';
import {FusePageSimple} from '@fuse';

const styles = theme => ({
    layoutRoot: {}
});

class Users extends Component {

    state = {
        data      : [],
    };

    componentDidMount()
    {
        axios.get('http://localhost:8000/users/').then(res => {
            this.setState({data: res.data});
        });
        axios.get('/api/knowledge-base').then(res => {
            this.setState({kb: res.data});
        });
    }

    render()
    {
        const {classes} = this.props;
        const {data} = this.state;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24"><h4>Holo</h4></div>
                }
                contentToolbar={
                    <div className="px-24"><h4>Users</h4></div>
                }
                content={
                    <div className="p-24">
                        <p>
                            These are the users currently configured on your Holoport:
                        </p>
                        <ul>
                        {data.map((user, index) => (
                            // Only do this if items have no stable IDs
                            <li key={index}>
                              {user.username}
                            </li>
                        ))}
                        </ul>

                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Users);