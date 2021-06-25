import {Repository, EntityRepository} from "typeorm"
import {Tag} from "../models/Tag";

interface ITag {
    name: string;
}

@EntityRepository(Tag)
class TagRepository extends Repository<Tag> {

    createAndSave({name}: ITag) {
        const tag = new Tag();
        tag.name = name;
        return this.manager.save(tag);
    }
}


export {TagRepository}