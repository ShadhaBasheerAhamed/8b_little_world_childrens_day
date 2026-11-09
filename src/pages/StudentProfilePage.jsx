import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentByPin, getTeacherConfig } from '../services/storageService';
import { getCurrentStudentSession, isStudentAuthorized, isAdminLoggedIn } from '../services/authService';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import StarParticles from '../components/common/StarParticles';

import HeroWelcome from '../components/student/HeroWelcome';
import Section01Identity from '../components/student/Section01Identity';
import Section02Special from '../components/student/Section02Special';
import Section03Superpowers from '../components/student/Section03Superpowers';
import Section04LetterFuture from '../components/student/Section04LetterFuture';
import Section05CoverStar from '../components/student/Section05CoverStar';
import Section06Character from '../components/student/Section06Character';
import Section07Envelope from '../components/student/Section07Envelope';
import Section08OneLastThing from '../components/student/Section08OneLastThing';

export default function StudentProfilePage() {
  const { pin } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const teacherConfig = getTeacherConfig();

  useEffect(() => {
    const studentData = getStudentByPin(pin);
    if (!studentData) {
      navigate('/login');
      return;
    }

    // Check authorization:
    // Teachers in admin mode can preview any student.
    // Otherwise, students must be logged in and can only see their own profile.
    const adminMode = isAdminLoggedIn();
    if (!adminMode) {
      const session = getCurrentStudentSession();
      if (!session) {
        navigate(`/login?pin=${pin}`);
        return;
      }
      if (String(session.pin).trim() !== String(pin).trim()) {
        // Enforce private profile restriction: redirect to their own profile!
        navigate(`/star/${session.pin}`, { replace: true });
        return;
      }
    }

    setStudent(studentData);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [pin, navigate]);

  const handleJumpToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading || !student) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-full border-4 border-amber-400 border-t-transparent animate-spin mx-auto" />
          <p className="font-serif text-slate-700 text-sm">Opening your star chamber...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] relative selection:bg-amber-200">
      
      {/* Gentle Floating Star Atmosphere */}
      <StarParticles />

      {/* Navigation Header */}
      <Navbar student={student} onJumpToSection={handleJumpToSection} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10 space-y-8 sm:space-y-12">
        {/* Welcome Hero */}
        <HeroWelcome student={student} onJumpToSection={handleJumpToSection} />

        {/* Section 01: A Little World of You */}
        <Section01Identity student={student} />

        {/* Section 02: What Makes You Special */}
        <Section02Special student={student} teacherName={teacherConfig.teacherName} />

        {/* Section 03: Your Superpowers */}
        <Section03Superpowers student={student} />

        {/* Section 04: A Letter to Your Future Self */}
        <Section04LetterFuture student={student} />

        {/* Section 05: You're The Cover Star! */}
        <Section05CoverStar student={student} />

        {/* Section 06: If You Were a Character... */}
        <Section06Character student={student} />

        {/* Section 07: Open When You Doubt Yourself */}
        <Section07Envelope student={student} />

        {/* Section 08: One Last Thing... */}
        <Section08OneLastThing student={student} teacherName={teacherConfig.teacherName} signature={teacherConfig.signature} />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

