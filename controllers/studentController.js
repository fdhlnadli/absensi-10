import Student from '../models/student.js';

export const getStudents = async (req, res) => {
   try {
      const students = await Student.find();
      res.json();
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}