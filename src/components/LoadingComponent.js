import React from 'react';
import { DISHES_LOADING } from '../redux/ActionTypes';

export const Loading = () => {
    return (
        <div className='col-12'>
            <span className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary'></span>
            <p>Loading . . .</p>
        </div>
    )
};
