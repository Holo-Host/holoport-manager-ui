import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseAnimateGroup, FuseHighlight, FusePageSimple} from '@fuse';
import {Typography, List, ListItem} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

const list = [
    'List Item 1',
    'List Item 2',
    'List Item 3',
    'List Item 4',
    'List Item 5',
    'List Item 6',
    'List Item 7',
    'List Item 8',
    'List Item 9',
    'List Item 10',
    'List Item 11',
    'List Item 12',
    'List Item 13',
    'List Item 14',
    'List Item 15'
];

class FuseAnimateGroupDoc extends Component {
    state = {
        intervalId     : null,
        list           : list,
        selectedEffect : 'fade',
        customAnimation: {
            translateX: [0, '100%'],
            opacity   : [1, 0]
        }
    };

    componentDidMount()
    {
        const intervalId = setInterval(() => (
            this.setState({
                list: this.state.list.length !== 0 ? [] : list
            })
        ), 2000);
        this.setState({intervalId});
    }

    handleChange = (event) => {
        this.setState({selectedEffect: event.target.value});
    };

    componentWillUnmount()
    {
        clearInterval(this.state.intervalId);
    }

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
                        <Typography variant="title">FuseAnimateGroup</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseAnimateGroup</code> is a container component which
                            uses <code className="language-bash">VelocityTransitionGroup</code> of <code className="language-bash">velocity-react</code> library.
                            Delegates to the React TransitionGroup addon.
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Sample Usage</Typography>

                        <div className="flex flex-wrap p-48 items-start">

                            <div className="flex w-full sm:w-1/2 p-24 justify-center">
                                <List>
                                    <FuseAnimateGroup
                                        enter={{
                                            animation: "transition.slideUpBigIn"
                                        }}
                                        leave={{
                                            animation: "transition.slideUpBigOut"
                                        }}
                                    >
                                        {
                                            this.state.list.map((item) => (
                                                    <ListItem key={item}>
                                                        {item}
                                                    </ListItem>
                                                )
                                            )
                                        }
                                    </FuseAnimateGroup>
                                </List>
                            </div>

                            <div className="flex w-full sm:w-1/2 p-24 justify-center">
                                <FuseHighlight component="pre" className="language-js">
                                    {`
                                     <List>
                                        <FuseAnimateGroup
                                            enter={{
                                                animation: "transition.slideUpBigIn"
                                            }}
                                            leave={{
                                                animation: "transition.slideUpBigOut"
                                            }}
                                        >
                                            {
                                                this.state.list.map((item) => (
                                                        <ListItem key={item}>
                                                            {item}
                                                        </ListItem>
                                                    )
                                                )
                                            }
                                        </FuseAnimateGroup>
                                    </List>
                                    `}
                                </FuseHighlight>
                            </div>
                        </div>

                        <Typography className="mb-16" component="p">
                            For more information checkout the
                            <a href="https://github.com/google-fabric/velocity-react" target="_blank" rel="noopener noreferrer" className="ml-8 font-bold">velocity-react</a>.
                        </Typography>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(FuseAnimateGroupDoc);
