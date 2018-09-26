import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import {withStyles} from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'store/actions';
import {AppBar, Hidden, Icon, IconButton, Toolbar, Drawer, MuiThemeProvider} from '@material-ui/core';
import {FuseScrollbars, FuseMessage, FuseThemes} from '@fuse';
import classNames from 'classnames';
import _ from 'lodash';

const defaultProps = {};

const navbarWidth = 280;

const styles = theme => ({
    root               : {
        position                    : 'relative',
        display                     : 'flex',
        flexDirection               : 'row',
        width                       : '100%',
        height                      : '100%',
        overflow                    : 'hidden',
        backgroundColor             : theme.palette.background.default,
        color                       : theme.palette.text.primary,
        '&.boxed'                   : {
            maxWidth : 1280,
            margin   : '0 auto',
            boxShadow: theme.shadows[3]
        },
        '& table.simple tbody tr td': {
            borderColor: theme.palette.divider
        },
        '& table.simple thead tr th': {
            borderColor: theme.palette.divider
        },
        '& a:not([role=button])'    : {
            color         : theme.palette.secondary.main,
            textDecoration: 'none',
            '&:hover'     : {
                textDecoration: 'underline'
            }
        },
        '& [class^="border-"]'      : {
            borderColor: theme.palette.divider
        },
        '& [class*="border-"]'      : {
            borderColor: theme.palette.divider
        },
        '&.scroll-body'             : {
            '& $wrapper'       : {
                height  : 'auto',
                flex    : '0 0 auto',
                overflow: 'auto'
            },
            '& $contentWrapper': {},
            '& $content'       : {}
        },
        '&.scroll-content'          : {
            '& $wrapper'       : {},
            '& $contentWrapper': {},
            '& $content'       : {}
        }
    },
    wrapper            : {
        display : 'flex',
        position: 'relative',
        width   : '100%',
        height  : '100%'
    },
    contentWrapper     : {
        display      : 'flex',
        flexDirection: 'column',
        position     : 'relative',
        zIndex       : 3,
        overflow     : 'hidden',
        flex         : '1 1 auto'
    },
    content            : {
        display                     : 'flex',
        overflow                    : 'auto',
        flex                        : '1 1 auto',
        flexDirection               : 'column',
        width                       : '100%',
        '-webkit-overflow-scrolling': 'touch'
    },
    navbarWrapper      : {
        zIndex: 4
    },
    navbarPaperWrapper : {},
    navbar             : {
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
        }),
        boxShadow    : theme.shadows[3]
    },
    navbarButton       : {
        '&.right': {
            borderLeft: '1px solid ' + theme.palette.divider
        },
        '&.left' : {
            borderRight: '1px solid ' + theme.palette.divider
        }
    },
    navbarLeft         : {
        left: 0
    },
    navbarRight        : {
        right: 0
    },
    navbarFolded       : {
        position: 'absolute',
        width   : 64,
        minWidth: 64,
        top     : 0,
        bottom  : 0
    },
    navbarFoldedOpen   : {
        width   : navbarWidth,
        minWidth: navbarWidth
    },
    navbarFoldedClose  : {
        '& $navbarHeader'                       : {
            '& .logo-icon'  : {
                width : 32,
                height: 32
            },
            '& .logo-text'  : {
                opacity: 0
            },
            '& .react-badge': {
                opacity: 0
            }
        },
        '& .list-item-text, & .arrow-icon'      : {
            opacity: 0
        },
        '& .list-subheader .list-subheader-text': {
            opacity: 0
        },
        '& .list-subheader:before'              : {
            content  : '""',
            display  : 'block',
            position : 'absolute',
            minWidth : 16,
            borderTop: '2px solid',
            opacity  : .2
        },
        '& .collapse-children'                  : {
            display: 'none'
        },
        '& .user'                               : {
            '& .username, & .email': {
                opacity: 0
            },
            '& .avatar'            : {
                width  : 40,
                height : 40,
                top    : 32,
                padding: 0
            }
        }
    },
    navbarHeaderWrapper: {
        display      : 'flex',
        alignItems   : 'center',
        flex         : '0 1 auto',
        flexDirection: 'row',
        height       : 64,
        minHeight    : 64
    },
    navbarHeader       : {
        display: 'flex',
        flex   : '1 0 auto',
        padding: '0 8px 0 16px'
    },
    navbarContent      : {
        overflowX                   : 'hidden',
        overflowY                   : 'auto',
        '-webkit-overflow-scrolling': 'touch',
        background                  : 'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
        backgroundRepeat            : 'no-repeat',
        backgroundSize              : '100% 40px, 100% 10px',
        backgroundAttachment        : 'local, scroll'
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

class FuseLayout1 extends Component {

    handleToggleFolded = () => {
        this.props.setDefaultSettings(_.set({}, 'layout.config.navbar.folded', !this.props.settings.layout.config.navbar.folded));
    };

    render()
    {
        const {classes, toolbar, footer, navbarHeader, navbarContent, settings, navbar, navbarOpenMobile, navbarCloseMobile, navbarOpenFolded, navbarCloseFolded, children, leftSidePanel, rightSidePanel, contentWrapper} = this.props;
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
                <Hidden mdDown>
                    <IconButton onClick={this.handleToggleFolded} color="inherit">
                        <Icon>menu</Icon>
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <IconButton onClick={navbarCloseMobile} color="inherit">
                        <Icon>menu</Icon>
                    </IconButton>
                </Hidden>
            </AppBar>
        );

        const navbarContentTemplate = (
            <FuseScrollbars className={classes.navbarContent}>
                {navbarContent}
            </FuseScrollbars>
        );

        const navBarTemplate = (
            <MuiThemeProvider theme={FuseThemes[settings.theme.navbar]}>
                <div id="fuse-navbar" className={classes.navbarWrapper}>
                    <Hidden mdDown>
                        <div
                            className={classNames(
                                classes.navbar,
                                classes['navbar' + _.upperFirst(layoutConfig.navbar.position)],
                                layoutConfig.navbar.folded && classes.navbarFolded,
                                layoutConfig.navbar.folded && navbar.foldedOpen && classes.navbarFoldedOpen,
                                layoutConfig.navbar.folded && !navbar.foldedOpen && classes.navbarFoldedClose)}
                            onMouseEnter={() => layoutConfig.navbar.folded && !navbar.foldedOpen && navbarOpenFolded()}
                            onMouseLeave={() => layoutConfig.navbar.folded && navbar.foldedOpen && navbarCloseFolded()}
                            style={{backgroundColor: FuseThemes[settings.theme.navbar].palette.background.default}}
                        >
                            {navbarHeaderTemplate}
                            {navbarContentTemplate}
                        </div>
                    </Hidden>

                    <Hidden lgUp>
                        <Drawer
                            anchor={layoutConfig.navbar.position}
                            variant="temporary"
                            open={navbar.mobileOpen}
                            classes={{
                                paper: classes.navbar
                            }}
                            onClose={navbarCloseMobile}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                        >
                            {navbarHeaderTemplate}
                            {navbarContentTemplate}
                        </Drawer>
                    </Hidden>
                </div>
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
        switch ( layoutConfig.scroll )
        {
            case 'body':
            {
                return (
                    <div id="fuse-layout" className={classNames(classes.root, layoutConfig.mode, 'scroll-' + layoutConfig.scroll)}>

                        {layoutConfig.leftSidePanel.display && (
                            leftSidePanel
                        )}

                        <div className="flex flex-1 flex-col overflow-hidden relative">

                            {toolbar && layoutConfig.toolbar.display && layoutConfig.toolbar.style === 'fixed' && layoutConfig.toolbar.position === 'above' && (
                                toolbarTemplate
                            )}

                            <FuseScrollbars className="overflow-auto">

                                {toolbar && layoutConfig.toolbar.display && layoutConfig.toolbar.style !== 'fixed' && layoutConfig.toolbar.position === 'above' && (
                                    toolbarTemplate
                                )}

                                <div className={classes.wrapper}>

                                    {layoutConfig.navbar.display && layoutConfig.navbar.position === 'left' && (
                                        navBarTemplate
                                    )}

                                    <div
                                        className={classNames(
                                            classes.contentWrapper,
                                            layoutConfig.navbar.display && layoutConfig.navbar.folded && layoutConfig.navbar.position === 'left' && 'md:ml-64',
                                            layoutConfig.navbar.display && layoutConfig.navbar.folded && layoutConfig.navbar.position === 'right' && 'md:mr-64'
                                        )}
                                    >

                                        {toolbar && layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'below' && (
                                            toolbarTemplate
                                        )}

                                        <div className={classes.content}>
                                            <FuseMessage/>
                                            {renderRoutes(this.props.routes)}
                                            {children}
                                        </div>

                                        {footer && layoutConfig.footer.display && layoutConfig.footer.position === 'below' && (
                                            footerTemplate
                                        )}

                                        {contentWrapper}

                                    </div>

                                    {layoutConfig.navbar.display && layoutConfig.navbar.position === 'right' && (
                                        navBarTemplate
                                    )}
                                </div>

                                {footer && layoutConfig.footer.display && layoutConfig.footer.style !== 'fixed' && layoutConfig.footer.position === 'above' && (
                                    footerTemplate
                                )}

                            </FuseScrollbars>

                            {footer && layoutConfig.footer.display && layoutConfig.footer.style === 'fixed' && layoutConfig.footer.position === 'above' && (
                                footerTemplate
                            )}

                        </div>

                        {layoutConfig.rightSidePanel.display && (
                            rightSidePanel
                        )}
                    </div>
                );
            }
            case 'content':
            default:
            {
                return (
                    <div id="fuse-layout" className={classNames(classes.root, layoutConfig.mode, 'scroll-' + layoutConfig.scroll)}>

                        {layoutConfig.leftSidePanel.display && (
                            leftSidePanel
                        )}

                        <div className="flex flex-1 flex-col overflow-hidden relative">

                            {toolbar && layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'above' && (
                                toolbarTemplate
                            )}

                            <div className={classes.wrapper}>

                                {layoutConfig.navbar.display && layoutConfig.navbar.position === 'left' && (
                                    navBarTemplate
                                )}

                                <div
                                    className={classNames(
                                        classes.contentWrapper,
                                        layoutConfig.navbar.display && layoutConfig.navbar.folded && layoutConfig.navbar.position === 'left' && 'lg:ml-64',
                                        layoutConfig.navbar.display && layoutConfig.navbar.folded && layoutConfig.navbar.position === 'right' && 'lg:mr-64'
                                    )}
                                >
                                    {toolbar && layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'below' && layoutConfig.toolbar.style === 'fixed' && (
                                        toolbarTemplate
                                    )}

                                    <FuseScrollbars className={classes.content}>
                                        {toolbar && layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'below' && layoutConfig.toolbar.style !== 'fixed' && (
                                            toolbarTemplate
                                        )}

                                        <FuseMessage/>

                                        {renderRoutes(this.props.routes)}
                                        {children}

                                        {footer && layoutConfig.footer.display && layoutConfig.footer.position === 'below' && layoutConfig.footer.style !== 'fixed' && (
                                            footerTemplate
                                        )}
                                    </FuseScrollbars>

                                    {footer && layoutConfig.footer.display && layoutConfig.footer.position === 'below' && layoutConfig.footer.style === 'fixed' && (
                                        footerTemplate
                                    )}

                                    {contentWrapper}
                                </div>

                                {layoutConfig.navbar.display && layoutConfig.navbar.position === 'right' && (
                                    navBarTemplate
                                )}
                            </div>

                            {footer && layoutConfig.footer.display && layoutConfig.footer.position === 'above' && (
                                footerTemplate
                            )}
                        </div>

                        {layoutConfig.rightSidePanel.display && (
                            rightSidePanel
                        )}
                    </div>
                );
            }
        }
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

FuseLayout1.defaultProps = defaultProps;

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(FuseLayout1)));
