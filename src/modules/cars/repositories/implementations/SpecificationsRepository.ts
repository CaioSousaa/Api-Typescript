import { Specification } from "../../model/Specification";
import {
    ISpecificationRepository,
    ISpecificationsDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ISpecificationsDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }
    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name,
        );
        return specification;
    }
}

export { SpecificationsRepository };
