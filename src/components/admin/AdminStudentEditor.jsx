import React, { useState } from 'react';
import { Save, Eye, X, Check, ArrowLeft, Star, Heart, Feather, Sparkles, BookOpen, Shield } from 'lucide-react';
import { saveStudent } from '../../services/storageService';

export default function AdminStudentEditor({ student, onSave, onClose }) {
  const [formData, setFormData] = useState({ ...student });
  const [activeTab, setActiveTab] = useState('basic');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleStrengthChange = (index, field, value) => {
    const updated = [...formData.strengths];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, strengths: updated }));
  };

  const handleFeatureChange = (index, value) => {
    const updated = [...formData.magazineFeatures];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, magazineFeatures: updated }));
  };

  const handleAttributeChange = (index, field, value) => {
    const updated = [...formData.characterAttributes];
    updated[index] = { ...updated[index], [field]: field === 'value' ? Number(value) : value };
    setFormData((prev) => ({ ...prev, characterAttributes: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveStudent(formData);
    setSaveSuccess(true);
    if (onSave) onSave(formData);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const tabs = [
    { id: 'basic', label: '1. Identity & Profile' },
    { id: 'appreciation', label: '2. Appreciation' },
    { id: 'strengths', label: '3. Superpowers' },
    { id: 'future', label: '4. Future Letter' },
    { id: 'magazine', label: '5. Magazine Cover' },
    { id: 'character', label: '6. Character Card' },
    { id: 'doubt', label: '7. Doubt Letter' },
    { id: 'closing', label: '8. Teacher Farewell' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-amber-200 shadow-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col h-full max-h-[92vh]">
      
      {/* Editor Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 mb-4 gap-3">
        <div className="flex items-center space-x-3">
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h3 className="font-serif font-bold text-xl text-slate-800">
              Editing Profile: {formData.name}
            </h3>
            <p className="text-xs text-amber-800 font-mono">
              Roll #{formData.rollNumber} · PIN: {formData.pin} · Class 8B
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href={`/star/${formData.pin}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-amber-600" />
            <span>Preview Profile</span>
          </a>
          <button
            onClick={handleSubmit}
            className="inline-flex items-center space-x-1.5 px-5 py-2 text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 rounded-xl shadow-md transition-transform active:scale-95"
          >
            {saveSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5 text-amber-300" />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editor Section Tabs */}
      <div className="flex overflow-x-auto space-x-1 pb-2 border-b border-slate-100 scrollbar-none mb-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap rounded-lg transition-colors ${
              activeTab === t.id
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Form Content Area */}
      <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 pr-2 space-y-5">
        
        {/* Tab 1: Basic Identity */}
        {activeTab === 'basic' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Student Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Roll Number</label>
                <input
                  type="number"
                  value={formData.rollNumber}
                  onChange={(e) => handleChange('rollNumber', Number(e.target.value))}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Access PIN</label>
                <input
                  type="text"
                  value={formData.pin}
                  onChange={(e) => handleChange('pin', e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Student Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => handleChange('tagline', e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Introductory Quote</label>
              <input
                type="text"
                value={formData.quote}
                onChange={(e) => handleChange('quote', e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Personal Introduction</label>
              <textarea
                rows={3}
                value={formData.introduction}
                onChange={(e) => handleChange('introduction', e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Appreciation Message */}
        {activeTab === 'appreciation' && (
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-600">
              Heartfelt Appreciation Message (What Makes You Special)
            </label>
            <p className="text-[11px] text-slate-500">
              Highlight their attentive listening, good behavior, computer science interest, and potential.
            </p>
            <textarea
              rows={8}
              value={formData.appreciationMessage}
              onChange={(e) => handleChange('appreciationMessage', e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-amber-500 outline-none leading-relaxed"
            />
          </div>
        )}

        {/* Tab 3: Strengths / Superpowers */}
        {activeTab === 'strengths' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-500">
              Edit the 5 superpower cards for {formData.name}:
            </p>
            {formData.strengths.map((str, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-800 uppercase">Power #{idx + 1}</span>
                  <input
                    type="text"
                    value={str.icon}
                    onChange={(e) => handleStrengthChange(idx, 'icon', e.target.value)}
                    placeholder="Icon name (e.g. Star, Code, Heart)"
                    className="text-[10px] font-mono px-2 py-0.5 rounded border border-slate-200 w-32"
                  />
                </div>
                <input
                  type="text"
                  value={str.title}
                  onChange={(e) => handleStrengthChange(idx, 'title', e.target.value)}
                  placeholder="Strength Title"
                  className="w-full text-xs font-semibold p-2 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
                />
                <textarea
                  rows={2}
                  value={str.description}
                  onChange={(e) => handleStrengthChange(idx, 'description', e.target.value)}
                  placeholder="Description..."
                  className="w-full text-xs p-2 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
                />
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Letter to Future Self */}
        {activeTab === 'future' && (
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-600">
              Letter to Future Self ("Dear Future Me,...")
            </label>
            <textarea
              rows={10}
              value={formData.letterToFutureSelf}
              onChange={(e) => handleChange('letterToFutureSelf', e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-amber-500 outline-none leading-relaxed font-serif"
            />
          </div>
        )}

        {/* Tab 5: Magazine Cover */}
        {activeTab === 'magazine' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Magazine Headline</label>
              <input
                type="text"
                value={formData.magazineHeadline}
                onChange={(e) => handleChange('magazineHeadline', e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none font-serif font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Magazine Subtitle</label>
              <input
                type="text"
                value={formData.magazineSubtitle}
                onChange={(e) => handleChange('magazineSubtitle', e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-600">Inside This Issue (4 Articles)</label>
              {formData.magazineFeatures.map((feat, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={feat}
                  onChange={(e) => handleFeatureChange(idx, e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
                />
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Character Card */}
        {activeTab === 'character' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Character Name</label>
                <input
                  type="text"
                  value={formData.characterName}
                  onChange={(e) => handleChange('characterName', e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Character Type</label>
                <input
                  type="text"
                  value={formData.characterType}
                  onChange={(e) => handleChange('characterType', e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Special Power Ability</label>
              <input
                type="text"
                value={formData.characterSpecialPower}
                onChange={(e) => handleChange('characterSpecialPower', e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Character Motto</label>
              <input
                type="text"
                value={formData.characterMotto}
                onChange={(e) => handleChange('characterMotto', e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-600">5 Attributes (Scores 1-100)</label>
              {formData.characterAttributes.map((attr, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={attr.name}
                    onChange={(e) => handleAttributeChange(idx, 'name', e.target.value)}
                    className="flex-1 text-xs p-2 rounded-lg border border-slate-200 outline-none"
                  />
                  <input
                    type="number"
                    min={50}
                    max={100}
                    value={attr.value}
                    onChange={(e) => handleAttributeChange(idx, 'value', e.target.value)}
                    className="w-20 text-xs p-2 rounded-lg border border-slate-200 outline-none text-center font-mono font-bold"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 7: Doubt Letter */}
        {activeTab === 'doubt' && (
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-600">
              Open When You Doubt Yourself (Encouragement Letter)
            </label>
            <textarea
              rows={8}
              value={formData.encouragementLetter}
              onChange={(e) => handleChange('encouragementLetter', e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-amber-500 outline-none leading-relaxed"
            />
          </div>
        )}

        {/* Tab 8: Closing Note */}
        {activeTab === 'closing' && (
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-600">
              One Last Thing... (Farewell Message)
            </label>
            <textarea
              rows={6}
              value={formData.finalMessage}
              onChange={(e) => handleChange('finalMessage', e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-amber-500 outline-none leading-relaxed"
            />
          </div>
        )}

      </form>

      {/* Editor Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Changes persist in browser storage and apply instantly.</span>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-5 py-2 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl shadow-sm"
          >
            Save Changes
          </button>
        </div>
      </div>

    </div>
  );
}

