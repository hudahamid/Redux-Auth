import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';

const UserRoute = ({children ,...rest}) => {
    const {currentUser} = useSelector(state => state.user);
  return currentUser ? <Route {...rest} /> : <LoadingToRedirect to="/login" />
}
export default UserRoute
