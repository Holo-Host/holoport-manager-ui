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

function Dialogs({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Dialogs</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/dialogs"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Dialogs</Typography>
                    <Typography className="description">Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple
                        tasks.</Typography>

                    <Typography className="mb-16" component="div">A <a href="https://material.io/design/components/dialogs.html">Dialog</a> is a type of <a
                        href="/utils/modal">modal</a> window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app
                        functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.</Typography>
                    <Typography className="mb-16" component="div">Dialogs are purposefully interruptive, so they should be used sparingly.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Dialogs</Typography>
                    <Typography className="mb-16" component="div">Simple dialogs can provide additional details or actions about a list item.
                        For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).</Typography>
                    <Typography className="mb-16" component="div">Touch mechanics:</Typography>
                    <ul>
                        <li>Choosing an option immediately commits the option and closes the menu</li>
                        <li>Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog</li>
                    </ul>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/dialogs/SimpleDialog.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/dialogs/SimpleDialog.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Alerts</Typography>
                    <Typography className="mb-16" component="div">Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.</Typography>
                    <Typography className="mb-16" component="div">Most alerts don&#39;t need titles.
                        They summarize a decision in a sentence or two by either:</Typography>
                    <ul>
                        <li>Asking a question (e.g. &quot;Delete this conversation?&quot;)</li>
                        <li>Making a statement related to the action buttons</li>
                    </ul>
                    <Typography className="mb-16" component="div">Use title bar alerts only for high-risk situations, such as the potential loss of connectivity.
                        Users should be able to understand the choices based on the title and button text alone.</Typography>
                    <Typography className="mb-16" component="div">If a title is required:</Typography>
                    <ul>
                        <li>Use a clear question or statement with an explanation in the content area, such as &quot;Erase USB storage?&quot;.</li>
                        <li>Avoid apologies, ambiguity, or questions, such as “Warning!” or “Are you sure?”</li>
                    </ul>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/dialogs/AlertDialog.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/dialogs/AlertDialog.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">You can also swap out the transition, the next example uses <code>Slide</code>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/dialogs/AlertDialogSlide.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/dialogs/AlertDialogSlide.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Confirmation dialogs</Typography>
                    <Typography className="mb-16" component="div">Confirmation dialogs require users to explicitly confirm their choice before an option is committed.
                        For example, users can listen to multiple ringtones but only make a final selection upon touching “OK.”</Typography>
                    <Typography className="mb-16" component="div">Touching “Cancel” in a confirmation dialog, or pressing Back, cancels the action, discards any changes, and closes
                        the dialog.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/dialogs/ConfirmationDialog.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/dialogs/ConfirmationDialog.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Full-screen dialogs</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/dialogs/FullScreenDialog.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/dialogs/FullScreenDialog.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Form dialogs</Typography>
                    <Typography className="mb-16" component="div">Form dialogs allow users to fill out form fields within a dialog.
                        For example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and
                        touch &#39;Submit&#39;</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/dialogs/FormDialog.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/dialogs/FormDialog.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Responsive full-screen</Typography>
                    <Typography className="mb-16" component="div">You may make a <code>Dialog</code> responsively full screen the dialog using <code>withMobileDialog</code>. By
                        default, <code>withMobileDialog()(Dialog)</code> responsively full screens <em>at or below</em> the <code>sm</code> <a href="/layout/basics">screen size</a>.
                    </Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/dialogs/ResponsiveDialog.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/dialogs/ResponsiveDialog.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Accessibility</Typography>
                    <Typography className="mb-16" component="div">Be sure to add <code>aria-labelledby=&quot;id...&quot;</code>, referencing the modal title, to
                        the <code>Dialog</code>. Additionally, you may give a description of your modal dialog with the <code>aria-describedby=&quot;id...&quot;</code> property on
                        the <code>Dialog</code>.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Scrolling long content</Typography>
                    <Typography className="mb-16" component="div">When dialogs become too long for the user’s viewport or device, they scroll.</Typography>
                    <ul>
                        <li><code>scroll=paper</code> the content of the dialog scrolls within the paper element.</li>
                        <li><code>scroll=body</code> the content of the dialog scrolls within the body element.</li>
                    </ul>
                    <Typography className="mb-16" component="div">Try the demo below to see what we mean:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/dialogs/ScrollDialog.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/dialogs/ScrollDialog.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Dialogs);
