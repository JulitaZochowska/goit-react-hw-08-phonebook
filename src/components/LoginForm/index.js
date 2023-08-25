import { useDispatch } from 'react-redux';
import { logIn } from 'redux/actions';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  //TODO: usunąć na koniec
  const testLoginData = {
    name: 'julita-test-user-25-08-23',
    email: 'julita-test-user-25-08-23@op.pl',
    password: 'julita-test-user-25-08-23',
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email <input type="email" name="email" value={testLoginData.email} />
      </label>
      <label>
        Password{' '}
        <input type="password" name="password" value={testLoginData.password} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
