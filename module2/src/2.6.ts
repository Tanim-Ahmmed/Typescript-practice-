{
  //constraints
  // constraints means the constraints proparty must have to in an object 
  
  const addCourseToStudent = <T extends  {
    id: number;
    name: string;
    email: string;
} >(student: T) => {
    const course = "Next Level Web Development";
    return { ...student, course };
  };

  const student1 =  addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({
    id: 221,
    name: "Tanim Ahmmed",
    email: "tanim@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 222,
    name: "Rakib mia",
    email: "rakib@gmail.com",
    softType: "SWE",
  });
}
