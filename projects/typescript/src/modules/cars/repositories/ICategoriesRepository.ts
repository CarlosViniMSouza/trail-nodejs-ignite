import { Category } from "../entities/Category";


interface ICreateCategory {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    list(): Category[];
    findByName(name: string): Category;
    create({ name, description }: ICreateCategory): void;
}

export { ICategoriesRepository, ICreateCategory };