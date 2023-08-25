import { useDispatch } from 'react-redux';
import { register } from 'redux/actions';

//TODO: usunac te funkcje do losowego generowania danych
// function generateRandomUsername() {
//   const adjectives = [
//     'happy',
//     'sunny',
//     'daring',
//     'clever',
//     'swift',
//     'genuine',
//     'brave',
//     'shiny',
//   ];
//   const nouns = [
//     'panda',
//     'tiger',
//     'eagle',
//     'dolphin',
//     'unicorn',
//     'phoenix',
//     'dragon',
//     'lion',
//   ];

//   const randomAdjective =
//     adjectives[Math.floor(Math.random() * adjectives.length)];
//   const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

//   return `${randomAdjective}_${randomNoun}`;
// }

// function generateRandomEmail() {
//   const providers = [
//     'gmail.com',
//     'yahoo.com',
//     'outlook.com',
//     'example.com',
//     'mail.com',
//   ];
//   const username = generateRandomUsername();
//   const randomProvider =
//     providers[Math.floor(Math.random() * providers.length)];

//   return `${username}@${randomProvider}`;
// }

// function generateRandomPassword(length = 12) {
//   const charset =
//     'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
//   let password = '';

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     password += charset.charAt(randomIndex);
//   }

//   return password;
// }

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username <input type="text" name="name" />
      </label>
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
