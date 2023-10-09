import { Category } from "../modules/cars/services/model/Category";

interface ICreatedCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreatedCategoryDTO): void;
}

export { ICategoriesRepository, ICreatedCategoryDTO };
