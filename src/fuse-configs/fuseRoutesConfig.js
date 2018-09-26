import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {ExampleConfig} from 'main/content/example/ExampleConfig';
import {TestConfig} from 'main/content/test/TestConfig';

const routeConfigs = [
    ExampleConfig,
    TestConfig,
];

export const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/example"/>
    }
];
