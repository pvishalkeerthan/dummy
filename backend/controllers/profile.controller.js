import User from '../models/User.model'

export async function getProfile(req,res) {
    try{
    const userId = req.user.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}
export async function editProfile(req,res) {
    try{
    const userId = req.user.userId;
    await User.findByIdAndUpdate(userId, req.body);
    res.status(200).json({ message: "Profile updated successfully" });
} catch (error) {
  res.status(500).json({ message: "Something went wrong" });
}
}
export async function getProfileCourses(req,res) {
    try{
        const userId = req.user.userId;
        const userCourses = await Course.find({ enrolledUsers: userId });
    
        res.status(200).json({ courses: userCourses });
      }
      catch (error) {
        res.status(500).json({ message: "Something went wrong" });
      }
}
export async function getProfileFavorites(req,res) {
    try{
    const userId = req.user.userId;
    const userFavorites = await Course.find({ favoriteUsers: userId });
    
    res.status(200).json({ favorites: userFavorites });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}
export async function getProfileCompleted(req,res) {
    try{
    const userId = req.user.userId; 
    const userCompleted = await Course.find({ completedUsers: userId });
    
    res.status(200).json({ completed: userCompleted });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}
