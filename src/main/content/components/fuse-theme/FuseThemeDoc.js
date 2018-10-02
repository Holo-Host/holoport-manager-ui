import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class FuseThemeDoc extends Component {

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
                        <Typography variant="title">FuseTheme</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseTheme</code> is theming component of the Fuse React. It allows to change predefined Material UI themes. It should
                            wraps the FuseLayout component.
                        </Typography>

                        <FuseHighlight component="pre" className="language-jsx">
                            {
                                `
                                <FuseTheme>
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
                                        contentWrapper={
                                            <SettingsPanel/>
                                        }
                                    />
                                </FuseTheme>
                                `
                            }
                        </FuseHighlight>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Configuration</Typography>

                        <Typography className="mb-16" component="p">
                            You can define the material ui themes under <code className="language-bash">fuse-configs/fuseThemesConfig.js</code> <a
                            href="https://material-ui-next.com/customization/themes/" target="_blank" rel="noopener noreferrer" className="font-bold">
                            Checkout</a> the Material UI's theme configuration options.
                        </Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {`
                            export const fuseThemes = {
                                default: {
                                    status: {
                                        danger: 'orange'
                                    }
                                },
                                dark   : {
                                    status : {
                                        danger: 'orange'
                                    },
                                    palette: {type: 'dark'}
                                }
                            };
                            `}
                        </FuseHighlight>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(FuseThemeDoc);
