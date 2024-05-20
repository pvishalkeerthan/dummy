import User from '../models/User.model.js'
import Course from '../models/Course.model.js'

export async function enrollCourse(req,res) {
    try{
        const userId=req.user.userid;
        const courseId=req.body.courseid;
        await User.findByIdAndUpdate(userId, { $addToSet: { enrolledCourses: courseId } });
        res.status(200).json({ message: "Enrolled successfully" });
    }
    catch(e){
        res.status(500).json({message:e})
    }
}

export async function unEnrollCourse(req,res){
   try{
    const userId = req.user.userId;
    const courseId = req.params.id;
    await User.findByIdAndUpdate(userId, { $pull: { enrolledCourses: courseId } });
    await Course.findByIdAndUpdate(courseId, { $pull: { enrolledStudents: userId } });
   }
   catch(e){
    res.status(500).json({ message: "Something went wrong" });
   }
}
