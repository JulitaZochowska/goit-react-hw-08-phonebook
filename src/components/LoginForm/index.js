export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    console.log({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email <input type="email" name="email" />
      </label>
      <label>
        Password <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
