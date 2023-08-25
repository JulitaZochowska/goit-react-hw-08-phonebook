import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/actions';
import { selectLoggedInUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const user = useSelector(selectLoggedInUser);

  return (
    <div>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
