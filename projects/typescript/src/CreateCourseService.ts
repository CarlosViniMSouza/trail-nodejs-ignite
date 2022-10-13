/*
    Infos:

    name: string
    duration: number
    educator: string
*/

interface CourseInfos {
    name: string;
    duration?: number; // Optional Tribute
    educator: string;
}

class CreateCourseService {

    // tribute 'duration' have default value
    execute({ educator, name, duration = 10 }: CourseInfos) {
        console.log(educator, name, duration);
    }
}

export default new CreateCourseService();