import { login } from './services/authService';
import { User } from './models/user';

const user: User = { id: 1, name: 'Linton', email: 'linton@email.com', active: true };
console.log(login(user));
