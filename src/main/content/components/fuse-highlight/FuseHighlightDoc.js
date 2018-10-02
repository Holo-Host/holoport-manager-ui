import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class FuseHighlightDoc extends Component {

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
                        <Typography variant="title">FuseHighlight</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseHighlight</code> is a custom built Fuse component allows to show syntax highlighted codes with
                            <a href="http://prismjs.com/" target="_blank" rel="noopener noreferrer" className="ml-8 font-bold">PrismJS</a>.
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Usage</Typography>

                        <FuseHighlight component="pre" className="language-jsx">
                            {
                                `
                                 <FuseHighlight component="pre" className="language-html">
                                   <div className="title">
                                        <span>Example Title</span>
                                    </div>
                                 </FuseHighlight>
                                `
                            }
                        </FuseHighlight>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Preview</Typography>

                        <FuseHighlight component="pre" className="language-html">
                            {
                                `
                            <div className="title">
                                <span>Example Title</span>
                            </div>
                            `
                            }
                        </FuseHighlight>

                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(FuseHighlightDoc);
