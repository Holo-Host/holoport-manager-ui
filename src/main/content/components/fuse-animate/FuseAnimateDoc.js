import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseAnimate, FuseHighlight, FusePageSimple} from '@fuse';
import {Typography, Card, Input, MenuItem, Select, FormControl, InputLabel} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {},
    box       : {
        width         : 128,
        height        : 128,
        display       : 'flex',
        alignItems    : 'center',
        justifyContent: 'center',
        textAlign     : 'center',
        padding       : 16
    }
});

const EFFECTS = [
    'fade',
    'flipX',
    'flipY',
    'flipBounceX',
    'flipBounceY',
    'swoop',
    'whirl',
    'shrink',
    'expand',
    'bounce',
    'bounceUp',
    'bounceDown',
    'bounceLeft',
    'bounceRight',
    'slideUp',
    'slideDown',
    'slideLeft',
    'slideRight',
    'slideUpBig',
    'slideDownBig',
    'slideLeftBig',
    'slideRightBig',
    'perspectiveUp',
    'perspectiveDown',
    'perspectiveLeft',
    'perspectiveRight'
];

class FuseAnimateDoc extends Component {
    state = {
        intervalId     : null,
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
                customAnimation:
                    this.state.customAnimation !== null ? null : {
                        translateX: [0, '100%'],
                        opacity   : [1, 0]
                    }
            })
        ), 1000);
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
                        <Typography variant="title">FuseAnimate</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseAnimate</code> is a container component which
                            uses <code className="language-bash">VelocityComponent</code> of <code className="language-bash">velocity-react</code> library.
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Predefined Effects Usage</Typography>

                        <Typography className="mb-16" component="p">
                            You can use predefined animation effects.
                        </Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {`
                                <FuseAnimate
                                    animation="transition.${this.state.selectedEffect}In"
                                    duration={400}
                                    delay={400}
                                >
                                     <Card className={classes.box}>
                                        <Typography>
                                        {this.state.selectedEffect}
                                        </Typography>
                                    </Card>
                                </FuseAnimate>
                             `}
                        </FuseHighlight>

                        <div className="flex flex-wrap p-48">

                            <div className="flex w-full sm:w-1/2 p-24 justify-center">
                                <FormControl className="w-256">
                                    <InputLabel htmlFor="effect-helper">Select Effect</InputLabel>
                                    <Select
                                        value={this.state.selectedEffect}
                                        onChange={this.handleChange}
                                        input={<Input name="effect" id="effect-helper"/>}
                                    >
                                        {
                                            EFFECTS.map((effect) => (
                                                <MenuItem key={effect} value={effect}>
                                                    transition.{effect}In
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="flex w-full sm:w-1/2 items-center justify-center">
                                <FuseAnimate
                                    animation={this.state.selectedEffect && 'transition.' + this.state.selectedEffect + 'In'}
                                    duration={400}
                                    delay={400}
                                >
                                    <Card className={classes.box}>
                                        <Typography>
                                            {this.state.selectedEffect}
                                        </Typography>
                                    </Card>
                                </FuseAnimate>
                            </div>
                        </div>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Custom Effects Usage</Typography>

                        <Typography className="mb-16" component="p">
                            You can create custom effects.
                        </Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {`
                                <FuseAnimate
                                    animation={{
                                        translateX: [0, '100%'],
                                        opacity   : [1, 0]
                                    }}
                                    duration={400}
                                    delay={400}
                                >
                                    <Card className={this.props.classes.box}>
                                        <Typography>
                                            Slide left and fade in
                                        </Typography>
                                    </Card>
                                </FuseAnimate>
                             `}
                        </FuseHighlight>

                        <div className="p-24 flex items-center justify-center">
                            <FuseAnimate
                                animation={this.state.customAnimation}
                                duration={400}
                                delay={400}
                            >
                                <Card className={this.props.classes.box}>
                                    <Typography>
                                        Slide left and fade in
                                    </Typography>
                                </Card>
                            </FuseAnimate>
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

export default withStyles(styles, {withTheme: true})(FuseAnimateDoc);
