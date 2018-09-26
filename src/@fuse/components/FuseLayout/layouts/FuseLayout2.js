import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import {withStyles} from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'store/actions';
import {AppBar, Paper, Hidden, Icon, IconButton, Toolbar, Drawer, MuiThemeProvider} from '@material-ui/core';
import {FuseScrollbars, FuseMessage, FuseThemes} from '@fuse';
import classNames from 'classnames';

const defaultProps = {};

const navbarWidth = 256;

const styles = theme => ({
    root               : {
        position     : 'relative',
        display      : 'flex',
        flexDirection: 'row',
        width        : '100%',
        height       : '100%',
        overflow     : 'hidden',
        '&.boxed'    : {
            maxWidth : 1280,
            margin   : '0 auto',
            boxShadow: theme.shadows[3]
        }
    },
    content            : {
        display                     : 'flex',
        overflow                    : 'auto',
        flex                        : '1 1 auto',
        flexDirection               : 'column',
        width                       : '100%',
        '-webkit-overflow-scrolling': 'touch',
        zIndex                      : 4
    },
    navbarWrapper      : {
        boxShadow: theme.shadows[3],
        zIndex   : 6
    },
    navbarPaperWrapper : {},
    navbar             : {
        display   : 'flex',
        overflow  : 'hidden',
        height    : 64,
        zIndex    : 6,
        alignItems: 'center'
    },
    navbarMobile       : {
        display      : 'flex',
        overflow     : 'hidden',
        flexDirection: 'column',
        width        : navbarWidth,
        minWidth     : navbarWidth,
        height       : '100%',
        zIndex       : 4,
        transition   : theme.transitions.create(['width', 'min-width'], {
            easing  : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter
        })
    },
    navbarButton       : {
        '&.right': {
            borderLeft: '1px solid ' + theme.palette.divider
        },
        '&.left' : {
            borderRight: '1px solid ' + theme.palette.divider
        }
    },
    navbarHeaderWrapper: {
        display                       : 'flex',
        alignItems                    : 'center',
        flex                          : '0 0 auto',
        width                         : 'auto',
        height                        : '100%',
        minWidth                      : 0,
        flexDirection                 : 'row',
        [theme.breakpoints.down('md')]: {
            flex     : '0 1 auto',
            height   : 64,
            minHeight: 64
        }
    },
    navbarHeader       : {
        display: 'flex',
        flex   : '1 0 auto',
        padding: '0 8px 0 16px'
    },
    navbarContent      : {
        minWidth                      : 0,
        [theme.breakpoints.down('md')]: {
            overflowX           : 'hidden',
            overflowY           : 'auto',
            background          : 'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
            backgroundRepeat    : 'no-repeat',
            backgroundSize      : '100% 40px, 100% 10px',
            backgroundAttachment: 'local, scroll'
        },
        '-webkit-overflow-scrolling'  : 'touch'
    },
    toolbarWrapper     : {
        display : 'flex',
        position: 'relative',
        zIndex  : 5
    },
    toolbar            : {
        display: 'flex',
        flex   : '1 0 auto'
    },
    footerWrapper      : {
        position: 'relative',
        zIndex  : 5
    },
    footer             : {
        display: 'flex',
        flex   : '1 0 auto'
    }
});

class FuseLayout2 extends Component {

    render()
    {
        const {classes, toolbar, footer, navbarHeader, navbarContent, settings, navbar, navbarOpenMobile, navbarCloseMobile, children, leftSidePanel, rightSidePanel, contentWrapper} = this.props;
        // console.warn('FuseLayout:: rendered');
        const layoutConfig = settings.layout.config;

        const navbarHeaderTemplate = (
            <AppBar
                color="primary"
                position="static"
                elevation={0}
                className={classes.navbarHeaderWrapper}
            >
                <div className={classes.navbarHeader}>
                    {navbarHeader}
                </div>
                <Hidden lgUp>
                    <IconButton onClick={navbarCloseMobile}>
                        <Icon>menu</Icon>
                    </IconButton>
                </Hidden>
            </AppBar>
        );

        const navBarTemplate = (
            <MuiThemeProvider theme={FuseThemes[settings.theme.navbar]}>
                <Paper
                    id="fuse-navbar"
                    className={classes.navbarWrapper}
                    square={true}
                >
                    <Hidden mdDown>
                        <div
                            className={classNames(classes.navbar)}
                        >
                            {navbarHeaderTemplate}
                            <div className={classes.navbarContent}>
                                {navbarContent}
                            </div>
                        </div>
                    </Hidden>

                    <Hidden lgUp>
                        <Drawer
                            anchor="left"
                            variant="temporary"
                            open={navbar.mobileOpen}
                            classes={{
                                paper: classes.navbarMobile
                            }}
                            onClose={navbarCloseMobile}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                        >
                            {navbarHeaderTemplate}
                            <FuseScrollbars className={classes.navbarContent}>
                                {navbarContent}
                            </FuseScrollbars>
                        </Drawer>
                    </Hidden>
                </Paper>
            </MuiThemeProvider>
        );

        const toolbarTemplate = (
            <MuiThemeProvider theme={FuseThemes[settings.theme.toolbar]}>
                <AppBar id="fuse-toolbar" className={classNames(classes.toolbarWrapper)} color="default">
                    <Toolbar className="p-0">
                        {layoutConfig.navbar.position === 'left' && (
                            <Hidden lgUp>
                                <IconButton
                                    className={classNames(classes.navbarButton, 'w-64 h-64 rounded-none', layoutConfig.navbar.position)}
                                    aria-label="open drawer"
                                    onClick={navbarOpenMobile}
                                >
                                    <Icon>menu</Icon>
                                </IconButton>
                            </Hidden>
                        )}
                        <div className={classes.toolbar}>
                            {toolbar}
                        </div>
                        {layoutConfig.navbar.position === 'right' && (
                            <Hidden lgUp>
                                <IconButton
                                    className={classNames(classes.navbarButton, 'w-64 h-64 rounded-none', layoutConfig.navbar.position)}
                                    aria-label="open drawer"
                                    onClick={navbarOpenMobile}
                                >
                                    <Icon>menu</Icon>
                                </IconButton>
                            </Hidden>
                        )}
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        );

        const footerTemplate = (
            <MuiThemeProvider theme={FuseThemes[settings.theme.footer]}>
                <AppBar id="fuse-footer" className={classNames(classes.footerWrapper)} color="default">
                    <Toolbar className="p-0">
                        <div className={classNames(classes.footer)}>
                            {footer}
                        </div>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        );

        return (
            <div id="fuse-layout" className={classNames(classes.root, layoutConfig.mode)}>

                {layoutConfig.leftSidePanel.display && (
                    leftSidePanel
                )}

                <div className="flex flex-1 flex-col overflow-hidden relative">

                    {toolbar && layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'above' && (
                        toolbarTemplate
                    )}

                    {layoutConfig.navbar.display && (
                        navBarTemplate
                    )}

                    {toolbar && layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'below' && (
                        toolbarTemplate
                    )}

                    <FuseScrollbars className={classes.content}>

                        <FuseMessage/>

                        <div className="flex flex-1">
                            {renderRoutes(this.props.routes)}
                            {children}
                        </div>

                        {footer && layoutConfig.footer.display && layoutConfig.footer.style === 'static' && (
                            footerTemplate
                        )}
                    </FuseScrollbars>

                    {footer && layoutConfig.footer.display && layoutConfig.footer.style === 'fixed' && (
                        footerTemplate
                    )}

                    {contentWrapper}
                </div>

                {layoutConfig.rightSidePanel.display && (
                    rightSidePanel
                )}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setSettings       : Actions.setSettings,
        setDefaultSettings: Actions.setDefaultSettings,
        resetSettings     : Actions.resetSettings,
        navbarOpenFolded  : Actions.navbarOpenFolded,
        navbarCloseFolded : Actions.navbarCloseFolded,
        navbarOpenMobile  : Actions.navbarOpenMobile,
        navbarCloseMobile : Actions.navbarCloseMobile
    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        defaultSettings: fuse.settings.defaults,
        settings       : fuse.settings.current,
        navbar         : fuse.navbar
    }
}

FuseLayout2.defaultProps = defaultProps;

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(FuseLayout2)));
