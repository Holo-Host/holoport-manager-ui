import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class FuseLayoutDoc extends Component {

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
                        <Typography variant="title">FuseLayout</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseLayout</code> is the main layout component of the Fuse React.
                        </Typography>
                        <Typography className="mb-16" component="p">
                            The component has layout areas to easily enter the contents of the app.
                        </Typography>
                        <Typography className="mb-16" component="p">
                            Routes should be assigned. It makes changing layout with route configuration possible.
                        </Typography>

                        <FuseHighlight component="pre" className="language-jsx">
                            {
                                `
                                    <FuseLayout
                                        routes={routes}
                                        toolbar={
                                            <MainToolbar/>
                                        }
                                        navbarHeader={
                                            <MainNavbarHeader/>
                                        }
                                        navbarContent={
                                            <MainNavbarContent/>
                                        }
                                        footer={
                                            <MainFooter/>
                                        }
                                        rightSidePanel={
                                            <React.Fragment>
                                                <ChatPanel/>
                                                <QuickPanel/>
                                            </React.Fragment>
                                        }
                                        leftSidePanel={
                                            <div>Left Side Panel</div>
                                        }
                                        contentWrapper={
                                            <SettingsPanel/>
                                        }
                                    />
                                `
                            }
                        </FuseHighlight>

                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(FuseLayoutDoc);
