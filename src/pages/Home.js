import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectLoggedIn } from 'redux/selectors';

export const Home = () => {
  const isLogged = useSelector(selectLoggedIn);
  return <div>Strona domowa, {isLogged ? 'zalogowany' : 'wylogowany'}</div>;
};
