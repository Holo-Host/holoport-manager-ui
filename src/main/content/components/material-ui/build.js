import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import marked from 'marked';
import Beautify from 'js-beautify';

var Promise = require("promise");

const demoDir = ('src/main/content/components/material-ui/material-ui-examples');
const rootDirectory = path.resolve(__dirname);
const examplesDirectory = path.resolve(rootDirectory, './material-ui-examples');
const pagesDirectory = path.resolve(rootDirectory, './pages');
const routesFilePath = path.resolve(rootDirectory, './MaterialUIRoutes.js');
const navigationFilePath = path.resolve(rootDirectory, './MaterialUINavigation.js');

const demoRegexp = /^"demo": "(.*)"/;
const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;
const titleRegExp = /# (.*)[\r\n]/;
const headerKeyValueRegExp = /(.*): (.*)/g;
const emptyRegExp = /^\s*$/;

marked.Lexer.prototype.lex = function lex(src) {
    src = src
        .replace(/\r\n|\r/g, '\n')
        .replace(/\t/g, '    ')
        .replace(/\u2424/g, '\n');
    return this.token(src, true);
};
const renderer = new marked.Renderer();

marked.setOptions({
    gfm        : true,
    tables     : true,
    breaks     : false,
    pedantic   : false,
    sanitize   : false,
    smartLists : true,
    smartypants: false,
    renderer
});

const BeautifyConfig = {
    "indent_size": 2,
    "e4x"        : true,
    "js"         : {
        "allowed_file_extensions"  : ["js", "jsx", "json", "eslintrc", "jsbeautifyrc"],
        "brace_style"              : "collapse-preserve-inline",
        "break_chained_methods"    : false,
        "comma_first"              : false,
        "e4x"                      : true,
        "end_with_newline"         : false,
        "indent_char"              : " ",
        "indent_level"             : 0,
        "jslint_happy"             : false,
        "keep_array_indentation"   : false,
        "keep_function_indentation": false,
        "max_preserve_newlines"    : 0,
        "preserve_newlines"        : true,
        "space_after_anon_function": true,
        "space_before_conditional" : true,
        "space_in_empty_paren"     : false,
        "space_in_paren"           : true,
        "unescape_strings"         : false,
        "wrap_line_length"         : 120
    }
};

renderer.heading = (text, level) => {
    let className = '';
    switch ( level )
    {
        case 1:
            className = 'text-44 mt-32 mb-8';
            break;
        case 2:
            className = 'text-32 mt-32 mb-8';
            break;
        case 3:
            className = 'text-24 mt-32 mb-8';
            break;
        default:
            className = 'text-16 mt-32 mb-8';
    }

    return `<Typography className="${className}" component="h${level}">${text}</Typography>\n`;
};

renderer.paragraph = (text) => {
    let className = 'mb-16';
    return `<Typography className="${className}" component="div">${text}</Typography>\n`;
};

renderer.code = (code, lang) => {
    const response = `
<FuseHighlight component="pre" className="language-${lang}">
{%% 
${code}
%%}
</FuseHighlight>
                `;
    return response.replace(new RegExp('%%', 'g'), '`');
};

const rmDir = function (dirPath) {
    try
    {
        var files = fs.readdirSync(dirPath);
    }
    catch ( e )
    {
        return;
    }
    if ( files.length > 0 )
        for ( let i = 0; i < files.length; i++ )
        {
            const filePath = dirPath + '/' + files[i];
            if ( fs.statSync(filePath).isFile() )
                fs.unlinkSync(filePath);
            else
                rmDir(filePath);
        }
    fs.rmdirSync(dirPath);
};

String.prototype.allReplace = function (obj) {
    let retStr = this;
    for ( let x in obj )
    {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

function getContents(markdown)
{
    return markdown
        .replace(headerRegExp, '') // Remove header information
        .split(/^{{|}}$/gm) // Split markdown into an array, separating demos
        .filter(content => !emptyRegExp.test(content)); // Remove empty lines
}

function getTitle(markdownSource)
{
    const matches = markdownSource.match(titleRegExp);

    return matches ? matches[1] : 'Material-UI';
}

function getHtmlCode(markdownSource)
{
    let contentsArr = getContents(markdownSource);
    contentsArr = contentsArr.map((content, index) => {
        const match = content.match(demoRegexp);
        if ( match )
        {
            const demoOptions = JSON.parse(`{${content}}`);
            const name = demoOptions.demo;
            const path = name.replace('pages/demos/', 'main/content/components/material-ui/material-ui-examples/');
            return (
                `\n<FuseExample
                    className="my-24"
                    component="{require('${path}').default}" 
                    raw="{require('!raw-loader!${path}')}"
                    />`
            );
        }
        return content;
    });
    const response = marked(contentsArr.join(''))
        .replace(new RegExp('"{', 'g'), '{')
        .replace(new RegExp('}"', 'g'), '}')
        .replace(new RegExp('(<\\s*\\/?\\s*)p(\\s*([^>]*)?\\s*>)', 'g'), '$1Typography$2')
        .replace(new RegExp('class=', 'g'), 'className=')
        .replace(new RegExp('`normalise`', 'g'), '\'normalise\'')
        .replace(new RegExp('className=', 'g'), "className=")
        .replace(new RegExp('⚠️', 'g'), "<span role=\"img\" aria-label=\"unicode-symbol\">⚠</span>")
    return response;
}


function readDir(dir)
{
    return new Promise(function (resolve, reject) {

        fs.readdir(dir, function (err, list) {
            if ( err )
            {
                reject(err);
            }
            resolve({
                dir,
                list
            });
        });
    });
}

function writePages(dir, list)
{
    let pages = [];
    return new Promise(function (resolve, reject) {
        list.forEach(function (file) {
            file = path.resolve(dir, file);
            pages.push(path.basename(file));
            fs.stat(file, function (err, stat) {
                if ( stat && stat.isDirectory() )
                {
                    writePage(file);
                }
            });
        });
        resolve(pages);
    });
}

function writePage(file)
{
    const markdownSource = fs.readFileSync(file + '/' + path.basename(file) + '.md', 'utf8');
    const fileName = _.upperFirst(_.camelCase(path.basename(file)));
    const htmlCode = getHtmlCode(markdownSource);
    const title = getTitle(markdownSource);

    let contentJSX = `
         <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">${title}</Typography>
                    <Button 
                        className="normal-case"
                        variant="raised" 
                        component="a" 
                        href="https://material-ui-next.com/demos/${path.basename(file)}" 
                        target="_blank"
                        >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                     ${htmlCode}
                </div>
            }
        />
    `;

    // contentJSX = Beautify(contentJSX, BeautifyConfig);

    let content = `import React from 'react';
                        import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
                        import {Button, Icon, Typography} from '@material-ui/core';
                        import {withStyles} from '@material-ui/core/styles/index';
                        /* eslint import/no-webpack-loader-syntax: off */
                        /* eslint no-unused-vars: off */
                        const styles = theme => ({
                            layoutRoot: {
                                '& .description':{
                                        marginBottom:16
                                }
                            }
                        });
                        function ${fileName}({classes}) {
                          return (
                            ${contentJSX}
                          );
                        }
                        
                        export default withStyles(styles, {withTheme: true})(${fileName});
                        `;

    //content = Beautify(content, BeautifyConfig);

    fs.writeFileSync(path.resolve(pagesDirectory, fileName + '.js'), content);
}

function writeRouteFile(pages)
{
    const importPath = 'import %s from \'main/content/components/material-ui/pages/%s\';';
    const imports = pages.map(page => {
        const componentName = _.upperFirst(_.camelCase(page));
        return importPath.replace(/%s/g, componentName, componentName);
    });

    const routeObject = "{ path     : '/components/material-ui/%s', component: %p }";
    const routes = pages.map(page => {
        const componentName = _.upperFirst(_.camelCase(page));
        return routeObject.allReplace({
            '%s': page,
            '%p': componentName
        });
    });
    const content = Beautify(
        `
        ${imports.join('')}
        
        export const MaterialUIRoutes =  [${routes.join()}];
        `
    );
    fs.writeFileSync(path.resolve(routesFilePath), content);
}

function writeNavigationFile(pages)
{
    const navigationObject = "{ 'id'   : '%id', 'title': '%title', 'type' : 'item', 'url'  : '/components/material-ui/%url' }";
    const navigation = pages.map(page => {
        const componentName = _.startCase(page);
        return navigationObject.allReplace({
            '%id'   : _.camelCase(page),
            '%title': componentName,
            '%url'  : page
        });
    });
    const content = Beautify(
        `
        export const MaterialUINavigation =  [${navigation.join()}];
        `
    );
    fs.writeFileSync(path.resolve(navigationFilePath), content);
}


function walkSync(dir, filelist = [])
{
    return new Promise(function (resolve, reject) {
        fs.readdirSync(dir).forEach(file => {
            const dirFile = path.join(dir, file);
            try
            {
                filelist = walkSync(dirFile, filelist);
            }
            catch ( err )
            {
                if ( err.code === 'ENOTDIR' || err.code === 'EBUSY' ) filelist = [...filelist, dirFile];
                else reject(err);
            }
        });
        resolve({
            dir,
            filelist
        });
    });
}

function filewalker(dir, done)
{
    let results = [];

    fs.readdir(dir, function (err, list) {
        if ( err ) return done(err);

        var pending = list.length;

        if ( !pending ) return done(null, results);

        list.forEach(function (file) {
            file = path.resolve(dir, file);

            fs.stat(file, function (err, stat) {
                // If directory, execute a recursive call
                if ( stat && stat.isDirectory() )
                {
                    // Add directory to array [comment if you need to remove the directories from the array]
                    // results.push(file);

                    filewalker(file, function (err, res) {
                        results = results.concat(res);
                        if ( !--pending ) done(null, results);
                    });
                }
                else
                {
                    results.push(file);

                    if ( !--pending ) done(null, results);
                }
            });
        });
    });
}

function replaceInExamples()
{
    filewalker(demoDir, function (err, list) {
        if ( err )
        {
            throw err;
        }
        list.forEach(function (file) {
            const fileSource = fs.readFileSync(file, 'utf8');
            const result = fileSource
                .replace(new RegExp('@material-ui/docs/MarkdownElement', 'g'), "main/content/components/material-ui/MarkdownElement");
            fs.writeFileSync(file, result, 'utf8', function (err) {
                if ( err ) return console.log(err);
            });
        });
    });
}

function build(dir)
{

    replaceInExamples();

    rmDir(pagesDirectory);

    fs.mkdirSync(pagesDirectory);

    readDir(examplesDirectory).then(({dir, list}) => {
        writePages(dir, list).then(pages => {
            writeRouteFile(pages);
            writeNavigationFile(pages);
        })
    })
}

build();
