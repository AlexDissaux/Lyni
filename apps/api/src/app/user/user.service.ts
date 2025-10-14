import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";


@Injectable()
export class UserService {

    private readonly users: User[] = [
        {
            id: 1,
            email: "toto",
            password: "toto"
        }
    ];

    create(user: User): void {
        this.users.push(user)
    }

    findAll() : User[] {
        return this.users;
    }

    findOne(email: string): User {
        return this.users.filter((user) => user.email === email).pop();
    }
}