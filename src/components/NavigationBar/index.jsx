import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/selectors';

export const NavigationBar = () => {
  const isLogged = useSelector(selectLoggedIn);
  const contactsLink = isLogged ? (
    <NavLink to="/contacts">Contacts</NavLink>
  ) : (
    ''
  );
  const loginLink = !isLogged ? <NavLink to="/login">Login</NavLink> : '';
  const registerLink = !isLogged ? (
    <NavLink to="/register">Register</NavLink>
  ) : (
    ''
  );

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {contactsLink}
        {loginLink}
        {registerLink}
        <UserMenu></UserMenu>
      </nav>
    </header>
  );
};
