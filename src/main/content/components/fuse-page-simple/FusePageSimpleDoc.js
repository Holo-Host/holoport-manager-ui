import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

const styles = theme => ({
    layoutRoot: {}
});

class FusePageSimpleDoc extends Component {

    render()
    {
        const {classes} = this.props;

        const demos = [
            {
                'id'   : 'full-width',
                'title': 'Full Width',
                'type' : 'item',
                'url'  : '/ui/page-layouts/simple/full-width'
            },
            {
                'id'   : 'left-sidebar',
                'title': 'Left Sidebar',
                'type' : 'item',
                'url'  : '/ui/page-layouts/simple/left-sidebar'
            },
            {
                'id'   : 'left-sidebar-2',
                'title': 'Left Sidebar 2',
                'type' : 'item',
                'url'  : '/ui/page-layouts/simple/left-sidebar-2'
            },
            {
                'id'   : 'left-sidebar-3',
                'title': 'Left Sidebar 3',
                'type' : 'item',
                'url'  : '/ui/page-layouts/simple/left-sidebar-3'
            },
            {
                'id'   : 'right-sidebar',
                'title': 'Right Sidebar',
                'type' : 'item',
                'url'  : '/ui/page-layouts/simple/right-sidebar'
            },
            {
                'id'   : 'right-sidebar-2',
                'title': 'Right Sidebar 2',
                'type' : 'item',
                'url'  : '/ui/page-layouts/simple/right-sidebar-2'
            },
            {
                'id'   : 'right-sidebar-3',
                'title': 'Right Sidebar 3',
                'type' : 'item',
                'url'  : '/ui/page-layouts/simple/right-sidebar-3'
            },
            {
                'id'   : 'tabbed',
                'title': 'Tabbed',
                'type' : 'item',
                'url'  : '/ui/page-layouts/simple/tabbed'
            }
        ];

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <Typography variant="title">FusePageSimple</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FusePageSimple</code> is the simple page layout component of the Fuse React.
                        </Typography>
                        <Typography className="mb-16" component="p">
                            The component has layout areas to easily enter the contents of the app.
                        </Typography>
                        <Typography className="mb-16" component="p">
                            You can override the class names injected by the classes property
                        </Typography>

                        <FuseHighlight component="pre" className="language-jsx">
                            {
                                `
                                   <FusePageSimple
                                        classes={{
                                            root: classes.layoutRoot
                                        }}
                                        header={
                                            Header
                                        }
                                        contentToolbar={
                                            Content Toolbar
                                        }
                                        content={
                                            Content
                                        }
                                        leftSidebarHeader={
                                            Left Sidebar Header
                                        }
                                        leftSidebarContent={
                                            Left Sidebar Content
                                        }
                                        rightSidebarHeader={
                                            Right Sidebar Header
                                        }
                                        rightSidebarContent={
                                            Right Sidebar Content
                                        }
                                        onRef={instance => {
                                            this.pageLayout = instance;
                                        }}
                                        innerScroll
                                        sidebarInner
                                    />
                                `
                            }
                        </FuseHighlight>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Demos</Typography>

                        <ul>
                            {demos.map(demo => (
                                <li key={demo.url} className="mb-8"><Link to={demo.url}>{demo.title}</Link></li>
                            ))}
                        </ul>

                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(FusePageSimpleDoc);
