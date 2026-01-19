import data from "./dummyDB.json";

interface User {
  firstName: string;
  lastName: string;
}

export class Model {
  static validateUser(firstName: string, lastName: string): boolean {
    return data.some((user: User): boolean => {
      return user.firstName === firstName && user.lastName === lastName;
    });
  }
}
