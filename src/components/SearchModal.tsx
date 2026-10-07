import React from 'react';
import { Search, X, Calendar, Bell, BookOpen, FileText, ArrowRight } from 'lucide-react';
import {
  ANNOUNCEMENTS,
  SCHEDULES,
  LEARNING_PROGRAMS,
  OFFICIAL_DOCUMENTS,
  LIBRARY_ITEMS,
} from '../data/mockData';

interface SearchModalProps {
  query: string;
  onClose: () => void;
  onSelectItem: (type: 'announcement' | 'schedule' | 'program' | 'document' | 'library', item: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  query,
  onClose,
  onSelectItem,
}) => {
  const q = query.toLowerCase();

  const matchingAnnouncements = ANNOUNCEMENTS.filter(
    (a) => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q)
  );

  const matchingSchedules = SCHEDULES.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.location.toLowerCase().includes(q)
  );

  const matchingPrograms = LEARNING_PROGRAMS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.courses.some((c) => c.toLowerCase().includes(q))
  );

  const matchingDocs = OFFICIAL_DOCUMENTS.filter(
    (d) => d.title.toLowerCase().includes(q) || d.code.toLowerCase().includes(q)
  );

  const matchingLibrary = LIBRARY_ITEMS.filter(
    (l) => l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q)
  );

  const totalResults =
    matchingAnnouncements.length +
    matchingSchedules.length +
    matchingPrograms.length +
    matchingDocs.length +
    matchingLibrary.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 my-8 max-h-[85vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full cursor-pointer hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pb-3 border-b border-[#d9e4f2] mb-4">
          <div className="w-9 h-9 rounded-full bg-[#eef5fd] text-[#0a58c8] flex items-center justify-center">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#124a9e]">
              Kết quả tìm kiếm cho: "{query}"
            </h3>
            <p className="text-xs text-[#566681]">
              Tìm thấy {totalResults} kết quả phù hợp trên hệ thống
            </p>
          </div>
        </div>

        {totalResults === 0 ? (
          <div className="text-center py-8 text-[#566681]">
            <p className="text-sm">Không tìm thấy nội dung phù hợp với từ khóa này.</p>
            <p className="text-xs mt-1">Hãy thử với từ khóa khác như: "kỹ năng số", "tin học", "nông nghiệp", "thư viện"...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Announcements */}
            {matchingAnnouncements.length > 0 && (
              <div>
                <span className="text-xs font-bold text-[#124a9e] uppercase flex items-center gap-1.5 mb-2">
                  <Bell className="w-3.5 h-3.5 text-[#0a58c8]" /> Thông báo ({matchingAnnouncements.length})
                </span>
                <div className="space-y-2">
                  {matchingAnnouncements.map((a) => (
                    <div
                      key={a.id}
                      onClick={() => onSelectItem('announcement', a)}
                      className="p-2.5 rounded-lg border border-[#d9e4f2] hover:bg-[#f8fafc] cursor-pointer flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-semibold text-[#1b2740] block">{a.title}</span>
                        <span className="text-[#566681]">{a.date}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#0a58c8] shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Schedules */}
            {matchingSchedules.length > 0 && (
              <div>
                <span className="text-xs font-bold text-[#124a9e] uppercase flex items-center gap-1.5 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-[#0a58c8]" /> Lịch hoạt động ({matchingSchedules.length})
                </span>
                <div className="space-y-2">
                  {matchingSchedules.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => onSelectItem('schedule', s)}
                      className="p-2.5 rounded-lg border border-[#d9e4f2] hover:bg-[#f8fafc] cursor-pointer flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-semibold text-[#1b2740] block">{s.title}</span>
                        <span className="text-[#566681]">{s.time} · {s.location}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#0a58c8] shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Programs */}
            {matchingPrograms.length > 0 && (
              <div>
                <span className="text-xs font-bold text-[#124a9e] uppercase flex items-center gap-1.5 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#0a58c8]" /> Chương trình học tập ({matchingPrograms.length})
                </span>
                <div className="space-y-2">
                  {matchingPrograms.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => onSelectItem('program', p)}
                      className="p-2.5 rounded-lg border border-[#d9e4f2] hover:bg-[#f8fafc] cursor-pointer flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-semibold text-[#1b2740] block">{p.title}</span>
                        <span className="text-[#566681] line-clamp-1">{p.description}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#0a58c8] shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents */}
            {matchingDocs.length > 0 && (
              <div>
                <span className="text-xs font-bold text-[#124a9e] uppercase flex items-center gap-1.5 mb-2">
                  <FileText className="w-3.5 h-3.5 text-[#0a58c8]" /> Văn bản – tài liệu ({matchingDocs.length})
                </span>
                <div className="space-y-2">
                  {matchingDocs.map((d) => (
                    <div
                      key={d.id}
                      onClick={() => onSelectItem('document', d)}
                      className="p-2.5 rounded-lg border border-[#d9e4f2] hover:bg-[#f8fafc] cursor-pointer flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-semibold text-[#1b2740] block">{d.title}</span>
                        <span className="text-[#566681]">Số: {d.code}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#0a58c8] shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
