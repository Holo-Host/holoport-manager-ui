import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class FuseNavigationDoc extends Component {

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
                        <Typography variant="title">FuseNavigation</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseNavigation</code> is a custom built Fuse component allows you to create a multi-level collapsable navigation.
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Usage</Typography>

                        <FuseHighlight component="pre" className="language-jsx">
                            {
                                `
                                    <FuseNavigation navigation={navigation}/>
                                `
                            }
                        </FuseHighlight>

                        <Typography className="text-24 mt-32 mb-8" component="h2">[navigation]</Typography>

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseNavigation</code> uses a array to populate the entire navigation. It supports four different navigation items;
                            Group,
                            Collapse, Item. and Divider. These items can be mixed and matched to create unique and complex navigation layouts.
                        </Typography>

                        <Typography className="text-24 mt-32 mb-8" component="h2">Group</Typography>
                        <FuseHighlight component="pre" className="language-json">
                            {
                                `
                                     {
                                        'id'       : 'applications',
                                        'title'    : 'Applications',
                                        'type'     : 'group',
                                        'icon'     : 'apps',
                                        'children' : [
                                             {
                                                'id'       : 'calendar',
                                                'title'    : 'Calendar',
                                                'type'     : 'item',
                                                'icon'     : 'today',
                                                'url'      : '/apps/calendar'
                                            }
                                        ]
                                     }
                                `
                            }
                        </FuseHighlight>

                        <Typography className="text-24 mt-32 mb-8" component="h2">Collapse</Typography>
                        <FuseHighlight component="pre" className="language-json">
                            {
                                `
                                     {
                                        'id'       : 'dashboards',
                                        'title'    : 'Dashboards',
                                        'type'     : 'collapse',
                                        'icon'     : 'dashboard',
                                        'children' : [
                                            {
                                                'id'   : 'project',
                                                'title': 'Project',
                                                'type' : 'item',
                                                'url'  : '/apps/dashboards/project'
                                            }
                                        ]
                                      }
                                `
                            }
                        </FuseHighlight>

                        <Typography className="text-24 mt-32 mb-8" component="h2">Item</Typography>
                        <FuseHighlight component="pre" className="language-json">
                            {
                                `
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                `
                            }
                        </FuseHighlight>
                        <Typography className="text-20 mt-24 mb-8 font-semibold" component="h2">
                            exact: bool
                        </Typography>
                        <Typography className="text-16 mb-8" component="h2">
                            When true, the active class/style will only be applied if the location is matched exactly.
                        </Typography>
                        <FuseHighlight component="pre" className="language-json">
                            {
                                `
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project',
                                    'exact': true
                                }
                                `
                            }
                        </FuseHighlight>
                        <Typography className="text-24 mt-32 mb-8" component="h2">Divider</Typography>
                        <FuseHighlight component="pre" className="language-json">
                            {
                                `
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                {
                                    'type': 'divider
                                },
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                `
                            }
                        </FuseHighlight>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(FuseNavigationDoc);
