import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class FuseScrollbarsDoc extends Component {

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
                        <Typography variant="title">FuseScrollbars</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseScrollbars</code> is a simple <a href="http://utatti.github.io/perfect-scrollbar/" target="_blank"
                                                                                                 rel="noreferrer noopener" className="font-bold">perfect-scrollbar</a> component for
                            react.
                        </Typography>

                        <Typography className="mb-16" component="p">
                            It can be disabled globally by Fuse Settings.
                        </Typography>

                        <FuseHighlight component="pre" className="language-jsx">
                            {
                                `
                                <FuseScrollbars className={classes.content}>
                                    Content
                                </FuseScrollbars>
                                `
                            }
                        </FuseHighlight>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Props</Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {
                                `
                                FuseScrollbars.defaultProps = {
                                    className    : '',
                                    enable       : true,
                                    option       : undefined,
                                    containerRef : () => {
                                    },
                                    onScrollY    : undefined,
                                    onScrollX    : undefined,
                                    onScrollUp   : undefined,
                                    onScrollDown : undefined,
                                    onScrollLeft : undefined,
                                    onScrollRight: undefined,
                                    onYReachStart: undefined,
                                    onYReachEnd  : undefined,
                                    onXReachStart: undefined,
                                    onXReachEnd  : undefined
                                };
                                `
                            }
                        </FuseHighlight>

                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(FuseScrollbarsDoc);
