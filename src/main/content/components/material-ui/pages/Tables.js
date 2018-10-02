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

function Tables({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Tables</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/tables"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Tables</Typography>
                    <Typography className="description">Data tables display sets of data. They can be fully customized.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/data-tables.html">Data tables</a> display information in a way
                        that’s easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards.</Typography>
                    <Typography className="mb-16" component="div">Data tables can include:</Typography>
                    <ul>
                        <li>A corresponding visualization</li>
                        <li>Navigation</li>
                        <li>Tools to query and manipulate data</li>
                    </ul>
                    <Typography className="mb-16" component="div">When including tools, they should be placed directly above or below the table.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Structure</Typography>
                    <Typography className="mb-16" component="div">A data table contains a header row at the top that lists column names, followed by rows for data.</Typography>
                    <Typography className="mb-16" component="div">Checkboxes should accompany each row if the user needs to select or manipulate data.</Typography>
                    <Typography className="mb-16" component="div">For accessibility, the first column is set to be a <code>&lt;th&gt;</code> element, with
                        a <code>scope</code> of <code>&quot;row&quot;</code>. This enables screen readers to identify a cell&#39;s value by it&#39;s row and column
                        name.</Typography>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Table</Typography>
                    <Typography className="mb-16" component="div">A simple example with no frills.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tables/SimpleTable.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tables/SimpleTable.js')}
                    /></Typography>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Sorting &amp; Selecting</Typography>
                    <Typography className="mb-16" component="div">This example demonstrates the use of <code>Checkbox</code> and clickable rows for selection, with a
                        custom <code>Toolbar</code>. It uses the <code>TableSortLabel</code> component to help style column headings.</Typography>
                    <Typography className="mb-16" component="div">The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination
                        controls from scrolling, the TablePagination component is used outside of the Table. (The <a href="#custom-table-pagination-action">&#39;Custom Table
                            Pagination Action&#39; example</a> below shows the pagination within the TableFooter.)</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tables/EnhancedTable.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tables/EnhancedTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Custom Table Pagination Action</Typography>
                    <Typography className="mb-16" component="div">The <code>Action</code> property of the <code>TablePagination</code> component allows the implementation of
                        custom actions.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tables/CustomPaginationActionsTable.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tables/CustomPaginationActionsTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized Tables</Typography>
                    <Typography className="mb-16" component="div">You can customize the look and feel of the table by overriding the styles of the <code>TableCell</code> component.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tables/CustomizedTable.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tables/CustomizedTable.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Tables);
