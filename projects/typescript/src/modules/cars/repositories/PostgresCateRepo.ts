import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategory } from "./ICategoriesRepository";

class PostgresCateRepo implements ICategoriesRepository {


    list(): Category[] {
        console.log(name);
        return null;
    }
    findByName(name: string): Category {
        return null;
    }
    create({ name, description }: ICreateCategory): void {
        console.log(name, description);
    }


}

export { PostgresCateRepo };