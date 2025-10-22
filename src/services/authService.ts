import { User } from '../models/user';

export function login(user: User): string {
  if (user.active === false) {
    return `Usuário ${user.name} está inativo.`;
  }
  return `Usuário ${user.name} autenticado com sucesso!`;
}
