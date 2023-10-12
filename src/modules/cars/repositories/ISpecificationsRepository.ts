import { Specification } from "../model/Specification";

interface ISpecificationsDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ISpecificationsDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationRepository, ISpecificationsDTO };
