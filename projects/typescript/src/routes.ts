import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export function createCourse(req: Request, res: Response) {

    CreateCourseService.execute({
        educator: "Carlos Souza",
        name: "Node.js"
    });

    CreateCourseService.execute({
        educator: "Rodrigo Gonçalves",
        name: "React Native",
        duration: 14
    });

    return res.send();
}
