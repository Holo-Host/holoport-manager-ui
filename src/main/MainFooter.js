import React from 'react';
import {IconButton, Tooltip} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseAnimateGroup} from '@fuse';
import classNames from 'classnames';

const styles = theme => ({
    root: {}
});

function MainFooter({classes})
{
    return (
        <div className={classNames(classes.root, "flex flex-1 items-center px-16")}>
            <div className="flex flex-1">
                <div className="logo">
                    <img width="64" src="assets/images/logos/holo-logo.png" alt="logo"/>
                </div>
            </div>
            <div>

                <FuseAnimateGroup
                    enter={{
                        animation: "transition.expandIn",
                    }}
                    className="hidden sm:flex items-center"
                >
                    <Tooltip title="React" placement="top">
                        <IconButton className="px-4" component="a" href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
                            <img width="32" src="assets/images/react.svg" alt="react"/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="React Redux" placement="top">
                        <IconButton className="px-4" component="a" href="https://github.com/reactjs/react-redux" target="_blank" rel="noreferrer noopener">
                            <img width="32" src="assets/images/redux.png" alt="redux"/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Material UI" placement="top">
                        <IconButton className="px-4" component="a" href="https://material-ui-next.com/" target="_blank" rel="noreferrer noopener">
                            <img width="32" src="assets/images/material-ui.png" alt="material-ui"/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Tailwind" placement="top">
                        <IconButton className="px-4" component="a" href="https://tailwindcss.com" target="_blank" rel="noreferrer noopener">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: `
                                            <svg style="height: 0; width: 0; position: absolute; visibility: hidden;">
                                              <defs>
                                                <linearGradient x1="0%" y1="0%" y2="100%" id="logoGradient">
                                                  <stop stop-color="#2383AE" offset="0%"></stop>
                                                  <stop stop-color="#6DD7B9" offset="100%"></stop>
                                                </linearGradient>
                                              </defs>
                                            </svg>
                                            <svg class="w-48 h-48 block" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" transform="translate(5 16)" fill="url(#logoGradient)" fill-rule="evenodd"></path></svg>
                                            `
                                }}
                            />
                        </IconButton>
                    </Tooltip>
                </FuseAnimateGroup>
            </div>
        </div>
    );
}

export default withStyles(styles, {withTheme: true})(MainFooter);