import React, {Component} from 'react';
import {AppBar, Card, Icon, IconButton, Tab, Tabs, Typography} from '@material-ui/core';
import {Line} from 'react-chartjs-2';
import {withStyles} from '@material-ui/core/styles/index';
import classNames from 'classnames';

const styles = theme => ({
    root: {}
});

class Widget8 extends Component {

    state = {
        tabIndex: 0
    };

    handleChange = (event, tabIndex) => {
        this.setState({tabIndex});
    };

    handleChangeIndex = index => {
        this.setState({tabIndex: index});
    };

    render()
    {
        const {data, classes, theme} = this.props;
        const {tabIndex} = this.state;
        const dataWithColors = data.datasets[tabIndex].map(obj => ({
            ...obj,
            borderColor: theme.palette.secondary.main
        }));
        return (
            <Card className={classNames(classes.root, "w-full")}>
                <AppBar position="static">
                    <div className="p-16 pr-4 flex flex-row items-center justify-between">

                        <div className="pr-16">
                            <Typography className="h1 font-300" color="inherit">Sales</Typography>
                            <Typography className="h5" color="inherit">Lifetime sum of your sales</Typography>
                        </div>

                        <div>
                            <IconButton aria-label="more" color="inherit">
                                <Icon>more_vert</Icon>
                            </IconButton>
                        </div>
                    </div>
                    <div className="p-16 pt-8 flex flex-row justify-between items-end">
                        <Typography className="text-48 font-300 leading-none" color="inherit">{data.today}</Typography>
                        <div className="flex flex-row items-center">
                            {data.change.value > 0 && (
                                <Icon className="text-green">trending_up</Icon>
                            )}
                            {data.change.value < 0 && (
                                <Icon className="text-red">trending_down</Icon>
                            )}
                            <div className="ml-8">
                                {data.change.value}
                                ({data.change.percentage}%)
                            </div>
                        </div>
                    </div>
                    <Tabs
                        value={tabIndex}
                        onChange={this.handleChange}
                        fullWidth
                    >
                        <Tab label="1Day" className="min-w-0"/>
                        <Tab label="1Week" className="min-w-0"/>
                        <Tab label="1Month" className="min-w-0"/>
                    </Tabs>
                </AppBar>
                <Line
                    data={{
                        labels  : data.labels,
                        datasets: dataWithColors
                    }}
                    options={data.options}
                />
            </Card>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Widget8);
