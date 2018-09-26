import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Icon, Input, Paper, Typography} from '@material-ui/core';
import classNames from 'classnames';
import axios from 'axios/index';
import {FuseUtils, FuseAnimate, FuseAnimateGroup} from '@fuse';

const styles = theme => ({
    root      : {},
    card      : {},
    cardHeader: {
        backgroundColor: theme.palette.grey[800],
        color          : theme.palette.getContrastText(theme.palette.grey[800])
    },
    header    : {
        height        : 360,
        background    : "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
        backgroundSize: 'cover',
        color         : '#fff'
    },
    content   : {}

});

class FaqPage extends Component {
    state = {
        data      : [],
        expanded  : null,
        searchText: ''
    };

    componentDidMount()
    {
        axios.get('/api/faq').then(res => {
            this.setState({data: res.data});
        });
    }

    toogleExpansion = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false
        });
    };

    handleSearch = event => {
        this.setState({searchText: event.target.value});
    };

    getFilteredArray = (arr, searchText) => {
        if ( searchText.length === 0 )
        {
            return arr;
        }
        return FuseUtils.filterArrayByString(arr, searchText);
    };

    render()
    {
        const {classes} = this.props;
        const {data, expanded, searchText} = this.state;
        const faqs = this.getFilteredArray(data, searchText);

        return (
            <div className={classNames(classes.root, "")}>

                <div className={classNames(classes.header, "flex flex-col items-center justify-center text-center p-24")}>

                    <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                        <Typography variant="display3" color="inherit" className="font-light">
                            We're here to help
                        </Typography>
                    </FuseAnimate>

                    <FuseAnimate duration={400} delay={600}>
                        <Typography variant="subheading" color="inherit" className="opacity-75 mt-16 mx-auto max-w-512">
                            Frequently asked questions
                        </Typography>
                    </FuseAnimate>

                    <Paper className={"flex items-center h-56 w-full max-w-md mt-32"} elevation={1} square>
                        <Icon color="action" className="ml-16">search</Icon>
                        <Input
                            placeholder="Search in faqs..."
                            className="px-16"
                            disableUnderline
                            fullWidth
                            inputProps={{
                                'aria-label': 'Search'
                            }}
                            value={searchText}
                            onChange={this.handleSearch}
                        />
                    </Paper>
                </div>

                <div className={classNames(classes.content, "")}>

                    <div className="max-w-xl w-full mx-auto px-24 py-32">
                        <FuseAnimateGroup
                            enter={{
                                animation: "transition.slideUpBigIn"
                            }}
                        >
                            {faqs.map((faq) => (
                                <ExpansionPanel key={faq.id} expanded={expanded === faq.id} onChange={this.toogleExpansion(faq.id)}>

                                    <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                                        <div className="flex items-center">
                                            <Icon className="mr-8" color="action">help_outline</Icon>
                                            <Typography className="">{faq.question}</Typography>
                                        </div>
                                    </ExpansionPanelSummary>

                                    <ExpansionPanelDetails>
                                        <Typography className="">{faq.answer}</Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            ))}
                        </FuseAnimateGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(FaqPage);