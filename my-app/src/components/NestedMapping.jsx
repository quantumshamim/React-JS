function NestedMapping(){
    const UserInfo = [
        {
            id:1,
            name: "Shamim",
            prof: "Programmer",
            age: 24,
            EnrolledCourse : [
                {
                    CourseID : 100,
                    Cname: "Frontend",
                    price : 5000,
                    module: 120
                },
                {
                    CourseID : 300,
                    Cname: "Programming",
                    price : 4000,
                    module: 150
                },
                {
                    CourseID : 250,
                    Cname: "MERN",
                    price : 6000,
                    module: 300
                }
            ]
        },
        {
            id:2,
            name: "Bristy",
            prof: "CSO",
            age: 22,
            EnrolledCourse : [
                {
                    CourseID : 100,
                    Cname: "Frontend",
                    price : 5000,
                    module: 120
                }
            ]
        },
        {
            id:3,
            name: "Israt",
            prof: "Student",
            age: 16,
            EnrolledCourse: [
                {
                    CourseID : 300,
                    Cname: "Programming",
                    price : 4000,
                    module: 150
                }
            ]
        }
    ]
    return(
        <>
            <h2>List of User</h2>
            {UserInfo.map((userlist)=>(
                <div key={userlist.id}>
                    <p>{userlist.id}</p>
                    <p>{userlist.name}</p>
                    <p>{userlist.prof}</p>
                    <p>{userlist.age}</p>
                    <br />

                    <h5>Enrolled Courses LIst</h5>
                    <ul key={userlist.id}>
                        {
                            userlist.EnrolledCourse.map(
                                (courses)=>(
                                    <li key={courses.CourseID}>
                                        <span>Course Name : {courses.Cname}, </span>
                                        <span>Course Price : {courses.price}, </span>
                                        <span>Course Module : {courses.module} </span>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            ))}
        </>
    )
}
export default NestedMapping