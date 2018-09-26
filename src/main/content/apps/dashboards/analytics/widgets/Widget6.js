import React, {Component} from 'react';
import {Card, Icon, Tooltip} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
import classNames from 'classnames';
import GoogleMap from 'google-map-react';

const styles = theme => ({
    root: {}
});

function Marker({text})
{

    return (
        <Tooltip title={text} placement="top">
            <Icon className="text-red">place</Icon>
        </Tooltip>
    );
}

class Widget6 extends Component {
    render()
    {
        const {data, classes} = this.props;
        return (
            <Card className={classNames(classes.root, "w-full h-512")}>
                <GoogleMap
                    bootstrapURLKeys={{
                        key: process.env.REACT_APP_MAP_KEY
                    }}
                    defaultZoom={1}
                    defaultCenter={[17.308688, 7.03125]}
                    options={{
                        styles: data.styles
                    }}
                >
                    {data.markers.map(marker => (
                        <Marker
                            key={marker.label}
                            text={marker.label}
                            lat={marker.lat}
                            lng={marker.lng}
                        />
                    ))}
                </GoogleMap>

            </Card>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Widget6);
