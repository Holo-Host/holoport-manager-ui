import React, {Component} from 'react';
import {Card, Icon, Typography} from '@material-ui/core';
import {Bar} from 'react-chartjs-2';
import {withStyles} from '@material-ui/core/styles/index';
import classNames from 'classnames';

const styles = theme => ({
    root: {}
});

class Widget4 extends Component {
    render()
    {
        const {data, classes, theme} = this.props;
        const dataWithColors = data.datasets.map(obj => ({
            ...obj,
            borderColor    : theme.palette.error.main,
            backgroundColor: theme.palette.error.main
        }));
        return (
            <Card className={classNames(classes.root, "w-full")}>
                <div className="p-16 pb-0 flex flex-row items-end flex-wrap">

                    <div className="pr-16">
                        <Typography className="h3" color="textSecondary">Visits</Typography>
                        <Typography className="text-56 font-300 leading-none mt-8">
                            {data.visits.value}
                        </Typography>
                    </div>

                    <div className="py-4 text-16 flex flex-row items-center">
                        <div className="flex flex-row items-center">
                            {data.visits.ofTarget > 0 && (
                                <Icon className="text-green mr-4">trending_up</Icon>
                            )}
                            {data.visits.ofTarget < 0 && (
                                <Icon className="text-red mr-4">trending_down</Icon>
                            )}
                            <Typography>{data.visits.ofTarget}%</Typography>
                        </div>
                        <Typography className="ml-4 whitespace-no-wrap">of target</Typography>
                    </div>

                </div>

                <div className="h-96 w-100-p">
                    <Bar
                        data={{
                            labels  : data.labels,
                            datasets: dataWithColors
                        }}
                        options={data.options}
                    />
                </div>
            </Card>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Widget4);
