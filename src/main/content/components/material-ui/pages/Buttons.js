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

function Buttons({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Buttons</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/buttons"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Buttons</Typography>
                    <Typography className="description">Buttons allow users to take actions, and make choices, with a single tap.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/buttons.html">Buttons</a> communicate actions that users can take.
                        They are typically placed throughout your UI, in places like:</Typography>
                    <ul>
                        <li>Dialogs</li>
                        <li>Modal windows</li>
                        <li>Forms</li>
                        <li>Cards</li>
                        <li>Toolbars</li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Text Buttons</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/buttons.html#text-button">Text buttons</a>
                        are typically used for less-pronounced actions, including those located:</Typography>
                    <ul>
                        <li>In dialogs</li>
                        <li>In cards</li>
                    </ul>
                    <Typography className="mb-16" component="div">In cards, text buttons help maintain an emphasis on card content.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/buttons/TextButtons.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/TextButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Outlined Buttons</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/buttons.html#outlined-button">Outlined buttons</a>
                        are medium-emphasis buttons. They contain actions that are important,
                        but aren’t the primary action in an app.</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Alternatives</Typography>
                    <Typography className="mb-16" component="div">Outlined buttons are also a lower emphasis alternative to contained buttons,
                        or a higher emphasis alternative to text buttons.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/buttons/OutlinedButtons.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/OutlinedButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Contained Buttons</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/buttons.html#contained-button">Contained buttons</a>
                        are high-emphasis, distinguished by their use of elevation and fill.
                        They contain actions that are primary to your app.</Typography>
                    <Typography className="mb-16" component="div">The last example of this demo show how to use an upload button.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/buttons/ContainedButtons.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/ContainedButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Floating Action Buttons</Typography>
                    <Typography className="mb-16" component="div">A <a href="https://material.io/design/components/buttons-floating-action-button.html">floating action button</a>
                        (FAB) performs the primary, or most common, action on a screen.
                        It appears in front of all screen content, typically as a circular shape with an icon in its center.
                        FABs come in three types: regular, mini, and extended.</Typography>
                    <Typography className="mb-16" component="div">Only use a FAB if it is the most suitable way to present a screen’s primary action.</Typography>
                    <Typography className="mb-16" component="div">Only one floating action button is recommended per screen to represent the most common action.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/buttons/FloatingActionButtons.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/FloatingActionButtons.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">The floating action button animates onto the screen as an expanding piece of material, by default.</Typography>
                    <Typography className="mb-16" component="div">A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear,
                        then reappear if its action changes.</Typography>
                    <Typography className="mb-16" component="div">The Zoom transition can be used to achieve this. Note that since both the exiting and entering
                        animations are triggered at the same time, we use <code>enterDelay</code> to allow the outgoing Floating Action Button&#39;s
                        animation to finish before the new one enters.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/buttons/FloatingActionButtonZoom.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/FloatingActionButtonZoom.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Sizes</Typography>
                    <Typography className="mb-16" component="div">Fancy larger or smaller buttons? Use the <code>size</code> or the <code>mini</code> property.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/buttons/ButtonSizes.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/ButtonSizes.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Icon Buttons</Typography>
                    <Typography className="mb-16" component="div">Icon buttons are commonly found in app bars and toolbars.</Typography>
                    <Typography className="mb-16" component="div">Icons are also appropriate for toggle buttons that allow a single choice to be selected or
                        deselected, such as adding or removing a star to an item.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/buttons/IconButtons.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/IconButtons.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Buttons with icons and label</Typography>
                    <Typography className="mb-16" component="div">Sometimes you might want to have icons for certain button to enhance the UX of the application as we recognize
                        logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/buttons/IconLabelButtons.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/IconLabelButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized Buttons</Typography>
                    <Typography className="mb-16" component="div">If you have been reading the <a href="/customization/overrides">overrides documentation page</a>
                        but you are not confident jumping in,
                        here are examples of how you can change the main color of a Button using classes,
                        and using a theme; and of a Bootstrap style Button.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/buttons/CustomizedButtons.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/CustomizedButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Complex Buttons</Typography>
                    <Typography className="mb-16" component="div">The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same
                        component: the <code>ButtonBase</code>.
                        You can take advantage of this lower level component to build custom interactions.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/buttons/ButtonBases.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/ButtonBases.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Third-party routing library</Typography>
                    <Typography className="mb-16" component="div">One common use case is to use the button to trigger a navigation to a new page.
                        The <code>ButtonBase</code> component provides a property to handle this use case: <code>component</code>.
                        Given that a lot of our interactive components rely on <code>ButtonBase</code>, you should be
                        able to take advantage of it everywhere:</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

<Button component={Link} to="/open-collective">
  Link
</Button>
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div">or if you want to avoid properties collisions:</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const MyLink = props => <Link to="/open-collective" {...props} />

<Button component={MyLink}>
  Link
</Button>
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div"><em>Note: Creating <code>MyLink</code> is necessary to prevent unexpected unmounting. You can read more about
                        it <a href="/guides/composition#component-property">here</a>.</em></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Buttons);
