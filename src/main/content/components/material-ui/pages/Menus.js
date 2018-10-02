import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {
        '& .description': {
            marginBottom: 16
        }
    }
});

function Menus({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Menus</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/menus"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Menus</Typography>
                    <Typography className="description">Menus display a list of choices on temporary surfaces.</Typography>

                    <Typography className="mb-16" component="div">A <a href="https://material.io/design/components/menus.html">Menu</a> displays a list of choices on a temporary
                        surface. They appear when users interact with a button, action, or other control.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Menu</Typography>
                    <Typography className="mb-16" component="div">Simple menus open over the anchor element by default (this option can be changed via props). When close to a
                        screen edge, simple menus vertically realign to make all menu items are completely visible.</Typography>
                    <Typography className="mb-16" component="div">Choosing an option should immediately ideally commit the option and close the menu.</Typography>
                    <Typography className="mb-16" component="div"><strong>Disambiguation</strong>: In contrast to simple menus, simple dialogs can present additional detail related
                        to the options available for a list item or provide navigational or orthogonal actions related to the primary task. Although they can display the same
                        content, simple menus are preferred over simple dialogs because simple menus are less disruptive to the user’s current context.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/menus/SimpleMenu.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/menus/SimpleMenu.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Selected menus</Typography>
                    <Typography className="mb-16" component="div">If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item
                        with the anchor element. The currently selected menu item is set using the <code>selected</code> prop.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/menus/SimpleListMenu.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/menus/SimpleListMenu.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">If text in a simple menu wraps to a second line, use a simple dialog instead. Simple dialogs can have rows with
                        varying heights.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Max height menus</Typography>
                    <Typography className="mb-16" component="div">If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/menus/LongMenu.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/menus/LongMenu.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">MenuList composition</Typography>
                    <Typography className="mb-16" component="div">The <code>Menu</code> component uses the <code>Popover</code> component internally.
                        However, you might want to use a different positioning strategy, or not blocking the scroll.
                        For answering those needs, we expose a <code>MenuList</code> component that you can compose, with <code>Popper</code> in this example.</Typography>
                    <Typography className="mb-16" component="div">The primary responsibility of the <code>MenuList</code> component is to handle the focus.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/menus/MenuListComposition.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/menus/MenuListComposition.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized MenuItem</Typography>
                    <Typography className="mb-16" component="div">The <code>MenuItem</code> is a wrapper around <code>ListItem</code> with some additional styles.
                        You can use the same list composition features with the <code>MenuItem</code> component:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/menus/ListItemComposition.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/menus/ListItemComposition.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Change Transition</Typography>
                    <Typography className="mb-16" component="div">Use a different transition altogether.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/menus/FadeMenu.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/menus/FadeMenu.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Render Props</Typography>
                    <Typography className="mb-16" component="div">It is a <a href="https://reactjs.org/docs/render-props.html">render props</a> demo that
                        keeps track of the local state for a single menu.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/menus/RenderPropsMenu.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/menus/RenderPropsMenu.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Menus);
