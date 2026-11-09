import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Users, QrCode, Settings, LogOut, Search, Eye, Edit3, Download,
  Upload, RotateCcw, Check, Sparkles, ShieldCheck, Star, ExternalLink
} from 'lucide-react';
import { isAdminLoggedIn, logoutAdmin } from '../services/authService';
import {
  getStudents, saveAllStudents, resetToInitialStudents,
  getTeacherConfig, saveTeacherConfig
} from '../services/storageService';
import AdminStudentEditor from '../components/admin/AdminStudentEditor';
import AdminQRManager from '../components/admin/AdminQRManager';

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('students');
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingStudent, setEditingStudent] = useState(null);
  const [teacherConfig, setTeacherConfigState] = useState(getTeacherConfig());
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      navigate('/admin');
      return;
    }
    setStudents(getStudents());
    setTeacherConfigState(getTeacherConfig());
  }, [navigate]);

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin');
  };

  const showNotification = (msg) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(''), 3000);
  };

  // Export all students to JSON file
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(students, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'Class_8B_Hall_of_Stars_Database.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showNotification('Database exported successfully as JSON!');
  };

  // Import students from JSON file
  const handleImportJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported) && imported.length > 0) {
          saveAllStudents(imported);
          setStudents(imported);
          showNotification(`Successfully imported ${imported.length} student records!`);
        } else {
          alert('Invalid student JSON format.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
  };

  // Reset to default
  const handleResetToDefault = () => {
    if (window.confirm('Are you sure you want to reset all students to the default starter data? Any edits made in the admin panel will be reverted.')) {
      const reset = resetToInitialStudents();
      setStudents(reset);
      showNotification('Reset to factory dataset complete.');
    }
  };

  // Save teacher config changes
  const handleSaveTeacherConfig = (e) => {
    e.preventDefault();
    saveTeacherConfig(teacherConfig);
    showNotification('Teacher settings updated successfully!');
  };

  // Filter students by query
  const filteredStudents = students.filter((s) => {
    const q = searchQuery.toLowerCase().trim();
    return (
      s.name.toLowerCase().includes(q) ||
      String(s.rollNumber).includes(q) ||
      String(s.pin).includes(q) ||
      s.characterName.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      
      {/* Top Admin Navbar (Hidden in print) */}
      <header className="no-print bg-[#FAF6EE] border-b border-[#E4DACB] sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center font-bold shadow-inner">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-slate-800 text-base sm:text-lg leading-tight">
                Teacher's Desk · Class 8B
              </h1>
              <p className="text-[11px] text-amber-800 font-mono">
                {teacherConfig.teacherName} · The Little Hall of Stars
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to="/"
              target="_blank"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Student Hall</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Notification Toast */}
      {feedbackMessage && (
        <div className="no-print fixed top-20 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-lg border border-amber-300 text-xs font-semibold flex items-center space-x-2 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
        
        {/* Navigation Tabs (Hidden in print) */}
        <div className="no-print flex items-center space-x-2 border-b border-[#E4DACB] pb-2">
          <button
            onClick={() => setActiveTab('students')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              activeTab === 'students'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'text-slate-600 hover:bg-[#FAF4E8]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>29 Students Directory</span>
          </button>

          <button
            onClick={() => setActiveTab('qr')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              activeTab === 'qr'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'text-slate-600 hover:bg-[#FAF4E8]'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Printable QR Cards</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              activeTab === 'settings'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'text-slate-600 hover:bg-[#FAF4E8]'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Settings & Backups</span>
          </button>
        </div>

        {/* Tab 1: Students Manager */}
        {activeTab === 'students' && (
          <div className="space-y-4">
            
            {/* Search Bar & Quick Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search student by name, roll no, or PIN..."
                  className="w-full text-xs sm:text-sm py-2.5 px-4 pl-10 rounded-xl border border-[#E2D6BE] focus:border-amber-500 bg-white outline-none shadow-xs"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>

              <div className="text-xs text-slate-500 font-mono">
                Showing {filteredStudents.length} of {students.length} Stars
              </div>
            </div>

            {/* Students Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredStudents.map((s) => (
                <div
                  key={s.pin}
                  className="bg-white border border-[#E4DACB] rounded-2xl p-5 shadow-xs hover:shadow-paper transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 font-bold text-sm flex items-center justify-center">
                        #{s.rollNumber}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-slate-900 text-base leading-tight">
                          {s.name}
                        </h4>
                        <p className="text-[11px] text-amber-800 font-mono">
                          PIN: {s.pin} · {s.characterName}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 italic font-serif">
                    "{s.quote}"
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={`/star/${s.pin}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      <span>Preview</span>
                    </a>
                    
                    <button
                      onClick={() => setEditingStudent(s)}
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 py-1.5 text-xs font-semibold text-amber-900 bg-amber-100/70 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-amber-700" />
                      <span>Edit Content</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 2: Printable QR Cards */}
        {activeTab === 'qr' && (
          <AdminQRManager students={students} />
        )}

        {/* Tab 3: Settings & Database Backups */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto space-y-6">
            
            {/* Teacher Details Form */}
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-slate-800">
                Classroom & Teacher Settings
              </h3>
              <form onSubmit={handleSaveTeacherConfig} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Teacher Name</label>
                  <input
                    type="text"
                    value={teacherConfig.teacherName}
                    onChange={(e) => setTeacherConfigState({ ...teacherConfig, teacherName: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Class Name</label>
                  <input
                    type="text"
                    value={teacherConfig.className}
                    onChange={(e) => setTeacherConfigState({ ...teacherConfig, className: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Teacher Admin Passcode</label>
                  <input
                    type="text"
                    value={teacherConfig.adminPin}
                    onChange={(e) => setTeacherConfigState({ ...teacherConfig, adminPin: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-sm"
                >
                  Save Settings
                </button>
              </form>
            </div>

            {/* Backup & Restore Box */}
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-slate-800">
                Data Backup & Reset
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Export all customized student records to a JSON file to safeguard your updates or share with another device.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={handleExportJSON}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-sm transition-transform active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Export All Data (JSON)</span>
                </button>

                <label className="inline-flex items-center space-x-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl shadow-xs cursor-pointer transition-colors">
                  <Upload className="w-3.5 h-3.5 text-sky-600" />
                  <span>Import Data (JSON)</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportJSON}
                    className="hidden"
                  />
                </label>

                <button
                  onClick={handleResetToDefault}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold rounded-xl border border-red-200 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Factory Data</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Student Editor Modal */}
      {editingStudent && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-4xl">
            <AdminStudentEditor
              student={editingStudent}
              onSave={(updated) => {
                const list = getStudents();
                setStudents(list);
                setEditingStudent(null);
                showNotification(`Updated profile for ${updated.name}`);
              }}
              onClose={() => setEditingStudent(null)}
            />
          </div>
        </div>
      )}

    </div>
  );
}

