export default function validateInfo(values) {
  let errors = {};
  const regEmail =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  // username
  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  // email
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!regEmail.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  // password
  if (!values.password) {
    errors.password = 'Password required';
  } else if (!values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  //   password2
  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }

  return errors;
}
