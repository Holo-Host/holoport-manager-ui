import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Icon, Typography} from '@material-ui/core';
import {Line} from 'react-chartjs-2';
import {bindActionCreators} from 'redux';
import {withStyles} from '@material-ui/core/styles/index';
import classNames from 'classnames';

const styles = theme => ({
    root: {}
});

class Widget3 extends Component {
    render()
    {
        const {data, classes, theme} = this.props;
        const dataWithColors = data.datasets.map(obj => ({
            ...obj,
            borderColor: theme.palette.secondary.main
        }));
        return (
            <Card className={classNames(classes.root, "w-full")}>

                <div className="p-16 pb-0 flex flex-row items-end flex-wrap">
                    <div className="pr-16">
                        <Typography className="h3" color="textSecondary">Impressions</Typography>
                        <Typography className="text-56 font-300 leading-none mt-8">
                            {data.impressions.value}
                        </Typography>
                    </div>

                    <div className="py-4 text-16 flex flex-row items-center">
                        <div className="flex flex-row items-center">
                            {data.impressions.ofTarget > 0 && (
                                <Icon className="text-green mr-4">trending_up</Icon>
                            )}
                            {data.impressions.ofTarget < 0 && (
                                <Icon className="text-red mr-4">trending_down</Icon>
                            )}
                            <Typography>{data.impressions.ofTarget}%</Typography>
                        </div>
                        <Typography className="ml-4 whitespace-no-wrap">of target</Typography>
                    </div>

                </div>

                <div className="h-96 w-100-p">
                    <Line
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

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({analyticsDashboardApp})
{
    return {
        widgets: analyticsDashboardApp.widgets.data
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(Widget3));
