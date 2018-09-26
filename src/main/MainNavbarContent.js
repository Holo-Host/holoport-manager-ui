import React from 'react';
import {withStyles, AppBar, Typography, Avatar, Hidden} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {FuseNavigation, FuseLayouts} from '@fuse';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

const styles = theme => ({
    root  : {
        '& .user': {
            '& .username, & .email': {
                transition: theme.transitions.create('opacity', {
                    duration: theme.transitions.duration.shortest,
                    easing  : theme.transitions.easing.easeInOut
                })
            }
        }
    },
    avatar: {
        width     : 72,
        height    : 72,
        position  : 'absolute',
        top       : 92,
        padding   : 8,
        background: theme.palette.background.default,
        boxSizing : 'content-box',
        left      : '50%',
        transform : 'translateX(-50%)',
        '& > img' : {
            borderRadius: '50%'
        }
    }
});


function MainNavbar({classes, navigation, layoutStyle, user})
{
    function UserHeader()
    {
        return (
            <AppBar
                position="static"
                color="primary"
                elevation={0}
                className="user relative flex flex-col items-center justify-center pt-24 pb-64 mb-32 z-0"
            >
                <Typography className="username text-16 whitespace-no-wrap" color="inherit">{user.data.displayName}</Typography>
                <Typography className="email text-13 mt-8 opacity-50 whitespace-no-wrap" color="inherit">{user.data.email}</Typography>
                <Avatar
                    className={classNames(classes.avatar, "avatar")}
                    alt="user photo"
                    src={user.data.photoURL && user.data.photoURL !== '' ? user.data.photoURL : "assets/images/avatars/profile.jpg"}
                />
            </AppBar>
        );
    }

    const navigationLayout = FuseLayouts[layoutStyle].type;
    return (
        <div className={classes.root}>
            {navigationLayout === 'vertical' ? (
                <React.Fragment>
                    <UserHeader/>
                    <FuseNavigation navigation={navigation} layout={navigationLayout}/>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Hidden lgUp>
                        <UserHeader/>
                    </Hidden>
                    <FuseNavigation navigation={navigation} layout={navigationLayout}/>
                </React.Fragment>
            )}

        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({fuse, auth})
{
    return {
        navigation : fuse.navigation,
        layoutStyle: fuse.settings.current.layout.style,
        user       : auth.user
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNavbar)));
