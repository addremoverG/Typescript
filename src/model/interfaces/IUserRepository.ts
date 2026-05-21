export interface User {
  id: number;
  name: string;
  email: string;
}

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;
}
