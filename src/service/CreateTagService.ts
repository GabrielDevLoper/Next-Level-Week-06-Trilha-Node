import {getCustomRepository} from "typeorm";
import {AppError} from "../errors/AppError";
import {TagRepository} from "../repositories/TagRepository";

interface ITagRequest {
    name: string;
}

class CreateTagService {
    async execute({name}: ITagRequest) {
        if (!name) {
            throw new AppError("Por favor informe um nome", 400);
        }

        const tagRepository = getCustomRepository(TagRepository);

        const tagAlreadyExists = await tagRepository.findOne({
            name
        });

        if (tagAlreadyExists) {
            throw new AppError("Tag já cadastrado no sistema", 400);
        }

        const tag = await tagRepository.createAndSave({
            name,
        });

        return tag;
    }
}

export default new CreateTagService();