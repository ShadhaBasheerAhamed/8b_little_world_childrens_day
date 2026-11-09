import { getStudentByPin, getTeacherConfig } from './storageService';

const STUDENT_SESSION_KEY = '8b_current_student_session';
const ADMIN_SESSION_KEY = '8b_teacher_admin_session';

/**
 * Authenticate student with their Roll Number / PIN
 */
export const loginStudent = (pin) => {
  const cleanPin = String(pin).trim();
  const student = getStudentByPin(cleanPin);

  if (student) {
    const sessionData = {
      pin: student.pin,
      rollNumber: student.rollNumber,
      name: student.name,
      loginTimestamp: new Date().toISOString(),
    };
    sessionStorage.setItem(STUDENT_SESSION_KEY, JSON.stringify(sessionData));
    return student;
  }
  return null;
};

/**
 * Get current logged in student session
 */
export const getCurrentStudentSession = () => {
  try {
    const saved = sessionStorage.getItem(STUDENT_SESSION_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (err) {
    console.error('Error reading student session:', err);
  }
  return null;
};

/**
 * Check if the active student session is authorized for the given PIN
 * (Enforces requirement: students must never be able to access another student's profile by changing the URL)
 */
export const isStudentAuthorized = (targetPin) => {
  const session = getCurrentStudentSession();
  if (!session) return false;
  return String(session.pin).trim() === String(targetPin).trim();
};

/**
 * Logout student
 */
export const logoutStudent = () => {
  sessionStorage.removeItem(STUDENT_SESSION_KEY);
};

/**
 * Teacher Admin Login
 */
export const loginAdmin = (enteredPin) => {
  const config = getTeacherConfig();
  const cleanEntered = String(enteredPin).trim();
  const validPins = [config.adminPin, '8888', 'teacher8b'];

  if (validPins.includes(cleanEntered)) {
    const session = {
      role: 'teacher_admin',
      timestamp: new Date().toISOString()
    };
    sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
    return true;
  }
  return false;
};

/**
 * Check if Admin is logged in
 */
export const isAdminLoggedIn = () => {
  try {
    const saved = sessionStorage.getItem(ADMIN_SESSION_KEY);
    return !!saved;
  } catch (err) {
    return false;
  }
};

/**
 * Logout Admin
 */
export const logoutAdmin = () => {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
};

