import React from 'react';
import {Icon} from "@material-ui/core";

const StatusIcon = ({status}) => {
    switch ( status )
    {
        case 'online':
            return <Icon
                className="block text-16 text-green bg-white rounded-full">check_circle</Icon>;
        case 'away':
            return <Icon
                className="block text-16 text-white bg-yellow-dark rounded-full">access_time</Icon>;
        case 'do-not-disturb':
            return <Icon
                className="block text-16 text-red bg-white rounded-full">do_not_disturb_on</Icon>;
        case 'offline':
            return <Icon
                className="block text-16 text-grey-dark bg-white rounded-full">do_not_disturb</Icon>;
        default:
            return null;
    }
};

export default StatusIcon;