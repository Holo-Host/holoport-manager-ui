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

function GridList({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Grid List</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/grid-list"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Grid List</Typography>
                    <Typography className="description">Grid lists display a collection of images in an organized grid.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/image-lists.html">Grid lists</a> represent a collection of items in
                        a repeated pattern. They help improve the visual comprehension of the content they hold.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Image-only Grid list</Typography>
                    <Typography className="mb-16" component="div">A simple example of a scrollable image <code>GridList</code>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/grid-list/ImageGridList.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/grid-list/ImageGridList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Grid list with titlebars</Typography>
                    <Typography className="mb-16" component="div">This example demonstrates the use of the <code>GridListTileBar</code> to add an overlay to
                        each <code>GridListTile</code>.
                        The overlay can accommodate a <code>title</code>, <code>subtitle</code> and secondary action - in this example an <code>IconButton</code>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/grid-list/TitlebarGridList.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/grid-list/TitlebarGridList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Advanced Grid list</Typography>
                    <Typography className="mb-16" component="div">This example demonstrates &quot;featured&quot; tiles, using the <code>rows</code> and <code>cols</code> props to
                        adjust the size of the tile, and the <code>padding</code> prop to adjust the spacing.
                        The tiles have a customized titlebar, positioned at the top and with a custom gradient <code>titleBackground</code>.
                        The secondary action <code>IconButton</code> is positioned on the left.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/grid-list/AdvancedGridList.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/grid-list/AdvancedGridList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Single line Grid list</Typography>
                    <Typography className="mb-16" component="div">This example demonstrates a horizontal scrollable single-line grid list of images.
                        Horizontally scrolling grid lists are discouraged because the scrolling interferes with typical reading patterns, affecting comprehension.
                        One notable exception is a horizontally-scrolling, single-line grid list of images, such as a gallery.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/grid-list/SingleLineGridList.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/grid-list/SingleLineGridList.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(GridList);
