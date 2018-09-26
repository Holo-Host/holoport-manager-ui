import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {
    Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Icon, List, ListItem, ListItemIcon, ListItemText,
    Typography
} from '@material-ui/core';
import classNames from 'classnames';
import axios from 'axios/index';
import Slide from '@material-ui/core/Slide';
import {FuseAnimate, FuseAnimateGroup} from '@fuse';

function Transition(props)
{
    return <Slide direction="up" {...props} />;
}

const styles = theme => ({
    root   : {},
    header : {
        height        : 360,
        background    : "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
        backgroundSize: 'cover',
        color         : '#fff'
    },
    content: {}
});

class KnowledgeBasePage extends Component {
    state = {
        data      : [],
        openDialog: false,
        dialogData: {
            title  : null,
            content: null
        }
    };

    componentDidMount()
    {
        axios.get('/api/knowledge-base').then(res => {
            this.setState({data: res.data});
        });
    }

    handleOpenDialog = (dialogData) => {
        this.setState({
            openDialog: true,
            dialogData
        });
    };

    handleCloseDialog = () => {
        this.setState({
            openDialog: false
        });
    };

    render()
    {
        const {classes} = this.props;
        const {data, openDialog, dialogData} = this.state;

        return (
            <div className={classNames(classes.root)}>

                <div className={classNames(classes.header, "flex flex-col items-center justify-center text-center p-24")}>

                    <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                        <Typography variant="display3" color="inherit" className="font-light">
                            How can we help?
                        </Typography>
                    </FuseAnimate>

                    <FuseAnimate duration={400} delay={600}>
                        <Typography variant="subheading" color="inherit" className="opacity-75 mt-16 mx-auto max-w-512">
                            Welcome to our knowledge base
                        </Typography>
                    </FuseAnimate>
                </div>

                <div className={classNames(classes.content)}>

                    <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                        className="flex flex-wrap justify-center max-w-xl w-full mx-auto px-24 py-32"
                    >
                        {data.map((category) => (
                            <div className="w-full max-w-512 pb-24 md:w-1/2 md:p-16" key={category.id}>
                                <Card elevation={4}>
                                    <CardContent>
                                        <Typography className="font-medium px-16 pt-8" color="textSecondary">{category.title}</Typography>
                                        <List component="nav">
                                            {category.featuredArticles.map(article => (
                                                <ListItem key={article.id} button onClick={() => this.handleOpenDialog(article)}>
                                                    <ListItemIcon className="mr-0">
                                                        <Icon>note</Icon>
                                                    </ListItemIcon>
                                                    <ListItemText primary={article.title}/>
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Button className="normal-case w-full justify-start" color="secondary">See all articles ({category.articlesCount})</Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </FuseAnimateGroup>
                </div>

                <Dialog
                    open={openDialog}
                    onClose={this.handleCloseDialog}
                    aria-labelledby="knowledge-base-document"
                    TransitionComponent={Transition}
                >
                    <DialogTitle>
                        {dialogData.title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText dangerouslySetInnerHTML={{__html: dialogData.content}}>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog} color="primary">
                            CLOSE
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(KnowledgeBasePage);