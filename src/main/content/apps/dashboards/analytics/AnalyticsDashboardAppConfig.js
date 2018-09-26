import AnalyticsDashboardApp from './AnalyticsDashboardApp';

export const AnalyticsDashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/dashboards/analytics',
            component: AnalyticsDashboardApp
        }
    ]
};
