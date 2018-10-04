import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios/index';
import {FusePageSimple} from '@fuse';

const styles = theme => ({
    layoutRoot: {}
});

class System extends Component {

    state = {
        data      : [],
    };

    componentDidMount()
    {
        axios.get('/api/sys').then(res => {
            this.setState({data: res.data});
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
                    <div className="px-24"><h4>System</h4></div>
                }
                content={
                    <div className="p-24">
                        <p>
                            Available system commands:
                        </p>
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
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(System);