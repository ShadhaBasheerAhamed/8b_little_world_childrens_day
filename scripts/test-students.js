import { initialStudentsData } from '../src/data/studentsData.js';

console.log('--- RUNNING STUDENT DATA & AUTH VALIDATION ---');

if (initialStudentsData.length !== 29) {
  console.error(`FAIL: Expected 29 students, got ${initialStudentsData.length}`);
  process.exit(1);
}

const expectedRolls = Array.from({ length: 29 }, (_, i) => i + 1);
const expectedPins = Array.from({ length: 29 }, (_, i) => String(823 + i));

const errors = [];

initialStudentsData.forEach((student, idx) => {
  const expectedRoll = expectedRolls[idx];
  const expectedPin = expectedPins[idx];

  if (student.rollNumber !== expectedRoll) {
    errors.push(`Student #${idx + 1} rollNumber mismatch: expected ${expectedRoll}, got ${student.rollNumber}`);
  }
  if (student.pin !== expectedPin) {
    errors.push(`Student #${idx + 1} pin mismatch: expected ${expectedPin}, got ${student.pin}`);
  }
  if (!student.name || student.name.trim().length === 0) {
    errors.push(`Student #${idx + 1} missing name`);
  }
  if (!student.introduction || student.introduction.trim().length === 0) {
    errors.push(`Student #${idx + 1} missing introduction`);
  }
  if (!student.appreciationMessage || student.appreciationMessage.trim().length === 0) {
    errors.push(`Student #${idx + 1} missing appreciationMessage`);
  }
  if (!Array.isArray(student.strengths) || student.strengths.length < 4) {
    errors.push(`Student #${idx + 1} has insufficient strengths (${student.strengths?.length})`);
  }
  if (!student.letterToFutureSelf || student.letterToFutureSelf.trim().length === 0) {
    errors.push(`Student #${idx + 1} missing letterToFutureSelf`);
  }
  if (!student.magazineHeadline || !student.magazineSubtitle) {
    errors.push(`Student #${idx + 1} missing magazine headline/subtitle`);
  }
  if (!Array.isArray(student.magazineFeatures) || student.magazineFeatures.length < 3) {
    errors.push(`Student #${idx + 1} missing magazineFeatures`);
  }
  if (!student.characterName || !student.characterType) {
    errors.push(`Student #${idx + 1} missing character details`);
  }
  if (!Array.isArray(student.characterAttributes) || student.characterAttributes.length !== 5) {
    errors.push(`Student #${idx + 1} must have exactly 5 character attributes`);
  }
  if (!student.characterSpecialPower || !student.characterMotto) {
    errors.push(`Student #${idx + 1} missing character power or motto`);
  }
  if (!student.encouragementLetter || student.encouragementLetter.trim().length === 0) {
    errors.push(`Student #${idx + 1} missing encouragementLetter`);
  }
  if (!student.finalMessage || student.finalMessage.trim().length === 0) {
    errors.push(`Student #${idx + 1} missing finalMessage`);
  }
});

// Check uniqueness of PINs and Names
const pins = new Set(initialStudentsData.map(s => s.pin));
if (pins.size !== 29) {
  errors.push(`FAIL: Duplicate PINs found! Unique count: ${pins.size}`);
}

const names = new Set(initialStudentsData.map(s => s.name.toLowerCase()));
if (names.size !== 29) {
  errors.push(`FAIL: Duplicate Names found! Unique count: ${names.size}`);
}

if (errors.length > 0) {
  console.error(`Validation Failed with ${errors.length} errors:`);
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log('✓ ALL 29 STUDENT PROFILES VERIFIED!');
  console.log('✓ All PINs 823 - 851 mapped correctly to Roll 1 - 29.');
  console.log('✓ All 8 content sections validated for every student.');
  console.log('✓ 100% test pass rate.');
}
