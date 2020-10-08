import React from 'react';
import { Route } from 'react-router';

import List from '../components/post/list';
import Create from '../components/post/create';
import Update from '../components/post/update';
import Show from '../components/post/show';

export default [
    <Route path="/post/create" component={Create} exact key="create" />,
    <Route path="/post/edit" component={Update} exact key="update" />,
    <Route path="/post/show" component={Show} exact key="show" />,
    <Route path="/post/" component={List} exact strict key="list" />,
];
