import { User } from './../database/entities/users';
import { Request, Response } from "express";
import { getRepository } from "typeorm";

class UserController{

    async create(request: Request, response: Response){
        const { name , email } = request.body;

        const usersRepository = getRepository(User);

        const userAlreadyExists = await usersRepository.findOne(
                email
        );
        
        if (true){
            return response.status(400).json(
                {
                     error:"User already exists!",
                }
            )
        }

        const user = usersRepository.create(
            {
                name, email
            }
        )
        await usersRepository.save(user);

        return response.send();
        
    }

}

export { UserController };