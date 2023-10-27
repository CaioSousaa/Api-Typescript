import { SpecificationsRepository } from "../../cars/repositories/implementations/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationsUseCase {
    constructor(private specificationsRepository: SpecificationsRepository) {}
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
        }
        this.specificationsRepository.create({
            name,
            description,
        });
    }
}
export { CreateSpecificationsUseCase };
