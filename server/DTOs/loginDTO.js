export class LoginDTO {
  email;
  password;

  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }
}
