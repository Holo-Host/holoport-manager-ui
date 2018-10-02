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

function Cards({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Cards</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/cards"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Cards</Typography>
                    <Typography className="description">Cards contain content and actions about a single subject.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/cards.html">Cards</a> are surfaces that display content and actions
                        on a single topic.</Typography>
                    <Typography className="mb-16" component="div">They should be easy to scan for relevant and actionable information. Elements, like text and images, should be
                        placed on them in a way that clearly indicates hierarchy.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Card</Typography>
                    <Typography className="mb-16" component="div">Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that
                        cards are entry points to more complex and detailed information.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/cards/SimpleCard.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/cards/SimpleCard.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Media</Typography>
                    <Typography className="mb-16" component="div">Example of a card using an image to reinforce the content.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/cards/MediaCard.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/cards/MediaCard.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">By default, we use the combination of a <code>&lt;div&gt;</code> element and a <em>background image</em> to
                        display the media. It can be problematic in some situations. For instance, you might want to display a video or a responsive image. Use
                        the <code>component</code> property for these use cases:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/cards/ImgMediaCard.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/cards/ImgMediaCard.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">UI Controls</Typography>
                    <Typography className="mb-16" component="div">Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically
                        placed at the bottom of the card.</Typography>
                    <Typography className="mb-16" component="div">Here&#39;s an example of a media control card.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/cards/MediaControlCard.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/cards/MediaControlCard.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Complex Interaction</Typography>
                    <Typography className="mb-16" component="div">On desktop, card content can expand.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/cards/RecipeReviewCard.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/cards/RecipeReviewCard.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Cards);
