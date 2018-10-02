import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {appsConfigs} from 'main/content/apps/appsConfigs';
import {pagesConfigs} from 'main/content/pages/pagesConfigs';
import {ExampleConfig} from 'main/content/example/ExampleConfig';
import {IntroConfig} from 'main/content/intro/IntroConfig';
import {UsersConfig} from 'main/content/users/UsersConfig';
import {FaqPageConfig} from 'main/content/pages/faq/FaqPageConfig';
import {KnowledgeBasePageConfig} from 'main/content/pages/knowledge-base/KnowledgeBaseConfig';
import {ComponentsConfig} from 'main/content/components/ComponentsConfig';

const routeConfigs = [
    ...appsConfigs,
    ...pagesConfigs,
    ComponentsConfig,
    ExampleConfig,
    IntroConfig,
    UsersConfig,
    FaqPageConfig,
    KnowledgeBasePageConfig
];

export const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        exact    : true,
        component: () => <Redirect to="/pages/coming-soon"/>
    }
];
