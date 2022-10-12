/*
    Infos:

    name: string
    duration: number
    educator: string
*/

interface CourseInfos {
    name: string;
    duration: number;
    educator: string;
}

class CreateCourseService {

    execute({ duration, educator, name }: CourseInfos) {
        console.log(duration, educator, name);
    }
}

export default new CreateCourseService();