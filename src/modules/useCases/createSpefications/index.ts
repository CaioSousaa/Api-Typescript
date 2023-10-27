import { SpecificationsRepository } from "../../cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpeficationsControlles";
import { CreateSpecificationsUseCase } from "./CretateSpecificationsUseCase";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationsUseCase = new CreateSpecificationsUseCase(
    specificationsRepository,
);
const createSpecificationsController = new CreateSpecificationsController(
    createSpecificationsUseCase,
);

export { createSpecificationsController };
