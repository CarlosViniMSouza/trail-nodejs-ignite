import { Repository, getRepository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICreateCategory } from "../ICategoriesRepository";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private static INSTANCE: CategoriesRepository;

    private repository: Repository<Category>;

    private constructor() {
        this.repository = getRepository(Category);
    }

    public static getInstance() {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }

    async create({ name, description }: ICreateCategory): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();

        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });

        return category;
    }
}

export { CategoriesRepository }