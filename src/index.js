import 'babel-polyfill'
import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import './react-table-defaults';
import './styles/index.css';
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';
import {createGenerateClassName, jssPreset} from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {routes} from './fuse-configs/fuseRoutesConfig';
import {FuseLayout, FuseTheme, FuseAuthorization} from '@fuse';
import MainToolbar from './main/MainToolbar';
import MainNavbarContent from './main/MainNavbarContent';
import MainNavbarHeader from './main/MainNavbarHeader';
import MainFooter from './main/MainFooter';
import jssExtend from 'jss-extend'
import QuickPanel from 'main/quickPanel/QuickPanel';
import store from 'store';
import SettingsPanel from 'main/SettingsPanel';
import {Auth} from 'auth';

const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend()]
});

jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const generateClassName = createGenerateClassName();

ReactDOM.render(
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
            <Auth>
                <Router history={history}>
                    <FuseAuthorization routes={routes}>
                        <FuseTheme>
                            <FuseLayout
                                routes={routes}
                                toolbar={
                                    <MainToolbar/>
                                }
                                navbarHeader={
                                    <MainNavbarHeader/>
                                }
                                navbarContent={
                                    <MainNavbarContent/>
                                }
                                footer={
                                    <MainFooter/>
                                }
                                rightSidePanel={
                                    <React.Fragment>
                                        <QuickPanel/>
                                    </React.Fragment>
                                }
                                contentWrapper={
                                    <SettingsPanel/>
                                }
                            >
                            </FuseLayout>
                        </FuseTheme>
                    </FuseAuthorization>
                </Router>
            </Auth>
        </Provider>
    </JssProvider>
    , document.getElementById('root'));

registerServiceWorker();
