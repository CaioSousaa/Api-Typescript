import { Category } from "../model/Category";
import {
    ICategoriesRepository,
    ICreatedCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({ name, description }: ICreatedCategoryDTO): void {
        console.log(name);
        console.log(description);
    }
}

export { PostgresCategoriesRepository, ICategoriesRepository };
