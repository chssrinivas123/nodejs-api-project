const Student = require('../models/model'); // Capitalized 'Student' for convention

const createStudent = async (req, res) => {
    try {
        const { name, place, phone } = req.body;
        const student = new Student({ // Capitalized 'Student' to match model
            name,
            place,
            phone
        });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        console.error("Server error:", error); // More specific console error
        res.status(500).json({ message: error.message }); // Consistent error response format
    }
};

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error("Server error:", error); // Added console logging
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createStudent, getAllStudents };