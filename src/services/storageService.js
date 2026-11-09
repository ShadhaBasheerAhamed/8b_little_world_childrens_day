import { initialStudentsData } from '../data/studentsData';
import { defaultTeacherConfig } from '../data/teacherConfig';

const STUDENTS_KEY = '8b_hall_of_stars_students';
const TEACHER_CONFIG_KEY = '8b_hall_of_stars_teacher_config';

/**
 * Get all students from localStorage or fallback to initial data
 */
export const getStudents = () => {
  try {
    const saved = localStorage.getItem(STUDENTS_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading students from localStorage:', err);
  }
  return initialStudentsData;
};

/**
 * Get a single student by PIN
 */
export const getStudentByPin = (pin) => {
  const students = getStudents();
  return students.find((s) => String(s.pin).trim() === String(pin).trim()) || null;
};

/**
 * Get a single student by Roll Number
 */
export const getStudentByRoll = (rollNumber) => {
  const students = getStudents();
  return students.find((s) => Number(s.rollNumber) === Number(rollNumber)) || null;
};

/**
 * Save updated student data (or create if not existing)
 */
export const saveStudent = (updatedStudent) => {
  const students = getStudents();
  const index = students.findIndex((s) => String(s.pin) === String(updatedStudent.pin));
  let newStudents = [...students];

  if (index !== -1) {
    newStudents[index] = { ...newStudents[index], ...updatedStudent };
  } else {
    newStudents.push(updatedStudent);
  }

  try {
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(newStudents));
  } catch (err) {
    console.error('Error saving student to localStorage:', err);
  }
  return newStudents;
};

/**
 * Save the entire list of students
 */
export const saveAllStudents = (studentsList) => {
  try {
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(studentsList));
  } catch (err) {
    console.error('Error saving all students to localStorage:', err);
  }
};

/**
 * Reset all students back to default initial dataset
 */
export const resetToInitialStudents = () => {
  try {
    localStorage.removeItem(STUDENTS_KEY);
  } catch (err) {
    console.error('Error resetting students:', err);
  }
  return initialStudentsData;
};

/**
 * Get teacher configuration
 */
export const getTeacherConfig = () => {
  try {
    const saved = localStorage.getItem(TEACHER_CONFIG_KEY);
    if (saved) {
      return { ...defaultTeacherConfig, ...JSON.parse(saved) };
    }
  } catch (err) {
    console.error('Error reading teacher config:', err);
  }
  return defaultTeacherConfig;
};

/**
 * Save teacher configuration
 */
export const saveTeacherConfig = (config) => {
  try {
    localStorage.setItem(TEACHER_CONFIG_KEY, JSON.stringify(config));
  } catch (err) {
    console.error('Error saving teacher config:', err);
  }
};

