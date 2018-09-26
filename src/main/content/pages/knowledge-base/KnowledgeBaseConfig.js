import KnowledgeBasePage from 'main/content/pages/knowledge-base/KnowledgeBasePage';

export const KnowledgeBasePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/knowledge-base',
            component: KnowledgeBasePage
        }
    ]
};
