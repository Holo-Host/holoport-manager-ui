import {MaterialUIRoutes} from 'main/content/components/material-ui/MaterialUIRoutes';
import FuseThemeDoc from 'main/content/components/fuse-theme/FuseThemeDoc';
import FuseLayoutDoc from 'main/content/components/fuse-layout/FuseLayoutDoc';
import FusePageCardedDoc from 'main/content/components/fuse-page-carded/FusePageCardedDoc';
import FusePageSimpleDoc from 'main/content/components/fuse-page-simple/FusePageSimpleDoc';
import FuseScrollbarsDoc from 'main/content/components/fuse-scrollbars/FuseScrollbarsDoc';
import FuseHighlightDoc from 'main/content/components/fuse-highlight/FuseHighlightDoc';
import FuseCountdownDoc from 'main/content/components/fuse-countdown/FuseCountdownDoc';
import FuseNavigationDoc from 'main/content/components/fuse-navigation/FuseNavigationDoc';
import FuseAuthorizationDoc from 'main/content/components/fuse-authorization/FuseAuthorizationDoc';
import FuseMessageDoc from 'main/content/components/fuse-message/FuseMessageDoc';
import FuseAnimateDoc from 'main/content/components/fuse-animate/FuseAnimateDoc';
import FuseAnimateGroupDoc from 'main/content/components/fuse-animate-group/FuseAnimateGroupDoc';

export const ComponentsConfig = {
    routes: [
        ...MaterialUIRoutes,
        {
            path     : '/components/fuse-theme',
            component: FuseThemeDoc
        },
        {
            path     : '/components/fuse-authorization',
            component: FuseAuthorizationDoc
        },
        {
            path     : '/components/fuse-layout',
            component: FuseLayoutDoc
        },
        {
            path     : '/components/fuse-page-carded',
            component: FusePageCardedDoc
        },
        {
            path     : '/components/fuse-page-simple',
            component: FusePageSimpleDoc
        },
        {
            path     : '/components/fuse-scrollbars',
            component: FuseScrollbarsDoc
        },
        {
            path     : '/components/fuse-highlight',
            component: FuseHighlightDoc
        },
        {
            path     : '/components/fuse-countdown',
            component: FuseCountdownDoc
        },
        {
            path     : '/components/fuse-navigation',
            component: FuseNavigationDoc
        },
        {
            path     : '/components/fuse-message',
            component: FuseMessageDoc
        },
        {
            path     : '/components/fuse-animate',
            component: FuseAnimateDoc
        },
        {
            path     : '/components/fuse-animate-group',
            component: FuseAnimateGroupDoc
        }
    ]
};

