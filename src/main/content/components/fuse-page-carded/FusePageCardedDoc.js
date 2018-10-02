import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

const styles = theme => ({
    layoutRoot: {}
});

class FusePageCardedDoc extends Component {

    render()
    {
        const {classes} = this.props;

        const demos = [
            {
                'title': 'Full Width',
                'url'  : '/ui/page-layouts/carded/full-width'
            },
            {
                'title': 'Full Width Tabbed',
                'url'  : '/ui/page-layouts/carded/full-width-tabbed'
            },
            {
                'title': 'Full Width 2',
                'url'  : '/ui/page-layouts/carded/full-width-2'
            },
            {
                'title': 'Full Width 2 Tabbed',
                'url'  : '/ui/page-layouts/carded/full-width-2-tabbed'
            },
            {
                'title': 'Left Sidebar',
                'url'  : '/ui/page-layouts/carded/left-sidebar'
            },
            {
                'title': 'Left Sidebar Tabbed',
                'url'  : '/ui/page-layouts/carded/left-sidebar-tabbed'
            },
            {
                'title': 'Left Sidebar 2',
                'url'  : '/ui/page-layouts/carded/left-sidebar-2'
            },
            {
                'title': 'Left Sidebar 2 Tabbed',
                'url'  : '/ui/page-layouts/carded/left-sidebar-2-tabbed'
            },
            {
                'title': 'Right Sidebar',
                'url'  : '/ui/page-layouts/carded/right-sidebar'
            },
            {
                'title': 'Right Sidebar Tabbed',
                'url'  : '/ui/page-layouts/carded/right-sidebar-tabbed'
            },
            {
                'title': 'Right Sidebar 2',
                'url'  : '/ui/page-layouts/carded/right-sidebar-2'
            },
            {
                'title': 'Right Sidebar 2 Tabbed',
                'url'  : '/ui/page-layouts/carded/right-sidebar-2-tabbed'
            }
        ];

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <Typography variant="title">FusePageCarded</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FusePageCarded</code> is the carded page layout component of the Fuse React.
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
                                   <FusePageCarded
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

export default withStyles(styles, {withTheme: true})(FusePageCardedDoc);
