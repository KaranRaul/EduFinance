import React, { useState } from 'react';

const courses = [
    { id: 1, title: 'React Basics', description: 'Learn the basics of React.', credits: 50 },
    { id: 1, title: 'React Basics', description: 'Learn the basics of React.', credits: 50 },
    { id: 2, title: 'Advanced React', description: 'Dive deeper into React.', credits: 100 },
    { id: 3, title: 'JavaScript Essentials', description: 'Master the fundamentals of JavaScript.', credits: 30 },
    { id: 4, title: 'Node.js Fundamentals', description: 'Understand the core of Node.js.', credits: 40 },
    { id: 5, title: 'Express.js Guide', description: 'Build server-side applications with Express.', credits: 35 },
    { id: 6, title: 'MongoDB for Beginners', description: 'Introduction to MongoDB and its features.', credits: 45 },
    { id: 7, title: 'HTML & CSS', description: 'Learn to create beautiful web pages.', credits: 25 },
    { id: 8, title: 'Web Development Bootcamp', description: 'Become a full-stack web developer.', credits: 120 },
    { id: 9, title: 'Python Programming', description: 'Get started with Python.', credits: 50 },
    { id: 10, title: 'Data Structures and Algorithms', description: 'Improve your problem-solving skills.', credits: 80 },
    { id: 11, title: 'Machine Learning', description: 'Introduction to machine learning concepts.', credits: 110 },
    { id: 12, title: 'DevOps Essentials', description: 'Learn the basics of DevOps.', credits: 70 },
    { id: 13, title: 'Cybersecurity Fundamentals', description: 'Protect your applications from threats.', credits: 60 },
    { id: 14, title: 'Mobile App Development', description: 'Build mobile applications.', credits: 90 },
    { id: 15, title: 'Cloud Computing', description: 'Understand cloud services and architecture.', credits: 100 },
];

const Courses = ({ credit, setCredit }) => {
    const [userCredits, setUserCredits] = useState(credit); // User's credits, you can set this from user data

    const handleBuyCourse = (courseId, price) => {
        // Implement the course buying logic here
        setCredit(credit - price)
        alert(`You bought the course with ID: ${courseId}`);
    };

    return (
        <div className="container bg-slate-300 mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 text-white lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="bg-gray-800 shadow-md rounded-lg p-4">
                        <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                        <p className=" text-white mb-4">{course.description}</p>
                        <p className=" text-white font-bold mb-4">Credits: {course.credits}</p>
                        {userCredits >= course.credits ? (
                            <button
                                onClick={() => handleBuyCourse(course.id, course.credits)}
                                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                            >
                                Buy
                            </button>
                        ) : (
                            <p className="text-red-500">Not enough credits</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
