import { CategoriesRepository } from "../../cars/repositories/CategoriesRepository";
import { CrateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCases } from "./CreateCategoryUseCases";

const categoriesRepository = CategoriesRepository.getIntance();

const createCategoryUseCases = new CreateCategoryUseCases(categoriesRepository);

const createCategoryController = new CrateCategoryController(
    createCategoryUseCases,
);

export { createCategoryController };
