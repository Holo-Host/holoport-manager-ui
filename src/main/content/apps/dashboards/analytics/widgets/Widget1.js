import React, {Component} from 'react';
import {FuseThemes} from '@fuse';
import {Button, MuiThemeProvider, Typography} from '@material-ui/core';
import {Line} from 'react-chartjs-2';
import {withStyles} from '@material-ui/core/styles/index';
import _ from 'lodash';
import {FuseAnimate} from '@fuse';

require('velocity-animate');
require('velocity-animate/velocity.ui');

const styles = theme => ({
    root: {}
});

class Widget1 extends Component {
    state = {
        dataset: '2017'
    };

    setDataSet = (dataset) => {
        this.setState({dataset});
    };

    render()
    {
        const {classes, data: dataRaw, theme} = this.props;
        const {dataset} = this.state;
        const data = _.merge({}, dataRaw);
        const dataWithColors = data.datasets[dataset].map(obj => ({
            ...obj,
            borderColor              : theme.palette.secondary.main,
            backgroundColor          : theme.palette.secondary.main,
            pointBackgroundColor     : theme.palette.secondary.dark,
            pointHoverBackgroundColor: theme.palette.secondary.main,
            pointBorderColor         : theme.palette.secondary.contrastText,
            pointHoverBorderColor    : theme.palette.secondary.contrastText
        }));

        return (
            <MuiThemeProvider theme={FuseThemes.mainThemeDark}>
                <div style={{backgroundColor: theme.palette.primary.main}} className={classes.root}>
                    <div className="relative p-24 flex flex-row justify-between items-center">

                        <FuseAnimate delay={100}>
                            <div className="flex-col">
                                <Typography className="h2">Visitors</Typography>
                                <Typography className="h5" color="textSecondary">Unique visitors by month</Typography>
                            </div>
                        </FuseAnimate>

                        <div className="flex flex-row items-center">
                            {Object.keys(data.datasets).map((key) => (
                                <Button
                                    key={key}
                                    className="py-8 px-12"
                                    size="small"
                                    onClick={() => this.setDataSet(key)}
                                    disabled={key === dataset}
                                >
                                    {key}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-256 pb-16">
                        <Line
                            data={{
                                labels  : data.labels,
                                datasets: dataWithColors
                            }}
                            options={data.options}
                        />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Widget1);
