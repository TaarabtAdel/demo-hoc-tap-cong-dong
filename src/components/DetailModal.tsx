import React from 'react';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  User,
  Download,
  BookOpen,
  Star,
  CheckCircle2,
  Share2,
} from 'lucide-react';
import {
  Announcement,
  ActivitySchedule,
  LearningProgram,
  NewsArticle,
  OfficialDocument,
  ExemplaryLearner,
  LibraryItem,
} from '../types';
import {
  ANNOUNCEMENTS,
  SCHEDULES,
  NEWS_ARTICLES,
  OFFICIAL_DOCUMENTS,
  EXEMPLARY_LEARNERS,
  LIBRARY_ITEMS,
} from '../data/mockData';

export type ModalType =
  | { type: 'announcement'; data: Announcement }
  | { type: 'schedule'; data: ActivitySchedule }
  | { type: 'program'; data: LearningProgram }
  | { type: 'news'; data: NewsArticle }
  | { type: 'document'; data: OfficialDocument }
  | { type: 'all-announcements' }
  | { type: 'all-news' }
  | { type: 'all-documents' }
  | { type: 'exemplary' }
  | { type: 'library'; category?: string };

interface DetailModalProps {
  modalState: ModalType | null;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  modalState,
  onClose,
  onOpenRegister,
}) => {
  if (!modalState) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 my-8 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full cursor-pointer hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. SINGLE ANNOUNCEMENT */}
        {modalState.type === 'announcement' && (
          <div className="space-y-4">
            <div className="border-b border-[#d9e4f2] pb-3">
              <span className="text-xs font-semibold text-[#0a58c8] uppercase tracking-wider">
                Thông báo từ Trung tâm
              </span>
              <h2 className="text-xl font-bold text-[#124a9e] mt-1">
                {modalState.data.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-[#566681] mt-1.5">
                <span>Ngày đăng: {modalState.data.date}</span>
                <span>·</span>
                <span>Người đăng: {modalState.data.author}</span>
              </div>
            </div>

            <div className="text-sm text-[#1b2740] leading-relaxed space-y-3">
              <p className="font-medium text-[#124a9e] bg-[#eef5fd] p-3 rounded-lg border border-[#d9e4f2]">
                {modalState.data.summary}
              </p>
              <p>{modalState.data.content}</p>
              <p>
                Mọi thắc mắc và nhu cầu tham gia, xin liên hệ Văn phòng Trung tâm HTCĐ xã Cửa Tùng hoặc số điện thoại:{' '}
                <strong className="text-[#0a58c8]">0903542789</strong> (Đ/c Lê Đức Kiêm - Giám đốc Trung tâm).
              </p>
            </div>

            <div className="pt-3 border-t border-[#d9e4f2] flex justify-end gap-2">
              <button
                type="button"
                onClick={onOpenRegister}
                className="px-4 py-2 rounded-full bg-[#0a58c8] text-white text-xs font-medium hover:bg-[#0848a6] cursor-pointer"
              >
                Đăng ký tham gia ngay
              </button>
            </div>
          </div>
        )}

        {/* 2. SINGLE ACTIVITY SCHEDULE */}
        {modalState.type === 'schedule' && (
          <div className="space-y-4">
            <div className="border-b border-[#d9e4f2] pb-3">
              <span className="text-xs font-semibold text-[#2a8a35] uppercase tracking-wider">
                Lịch hoạt động & Lớp bồi dưỡng
              </span>
              <h2 className="text-xl font-bold text-[#124a9e] mt-1">
                {modalState.data.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#eef5fd] p-4 rounded-xl border border-[#d9e4f2] text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-[#0a58c8]">
                <Calendar className="w-4 h-4 shrink-0" />
                <span>
                  <strong>Ngày:</strong> {modalState.data.day}/{modalState.data.monthYear}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#0a58c8]">
                <Clock className="w-4 h-4 shrink-0" />
                <span>
                  <strong>Thời gian:</strong> {modalState.data.time}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#2a8a35]">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>
                  <strong>Địa điểm:</strong> {modalState.data.location}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#1b2740]">
                <User className="w-4 h-4 shrink-0 text-[#d97706]" />
                <span>
                  <strong>Báo cáo viên:</strong> {modalState.data.instructor}
                </span>
              </div>
            </div>

            <div className="space-y-2 text-sm text-[#1b2740]">
              <h4 className="font-semibold text-[#124a9e]">Nội dung chi tiết:</h4>
              <p className="leading-relaxed">{modalState.data.description}</p>
              <div className="text-xs text-[#566681]">
                <strong>Đối tượng tham gia:</strong> {modalState.data.targetAudience}
              </div>
            </div>

            <div className="pt-3 border-t border-[#d9e4f2] flex justify-between items-center">
              <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Miễn phí tham gia 100%
              </span>
              <button
                type="button"
                onClick={onOpenRegister}
                className="px-5 py-2 rounded-full bg-[#0a58c8] text-white text-xs sm:text-sm font-medium hover:bg-[#0848a6] cursor-pointer"
              >
                Đăng ký dự lớp này
              </button>
            </div>
          </div>
        )}

        {/* 3. LEARNING PROGRAM SYLLABUS */}
        {modalState.type === 'program' && (
          <div className="space-y-4">
            <div className="border-b border-[#d9e4f2] pb-3">
              <span className="text-xs font-bold text-[#0a58c8] uppercase">
                Nhóm chương trình số {modalState.data.number}
              </span>
              <h2 className="text-xl font-bold text-[#124a9e] mt-1">
                {modalState.data.title}
              </h2>
            </div>

            <p className="text-sm text-[#566681] leading-relaxed">
              {modalState.data.description}
            </p>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-[#124a9e]">
                Các chuyên đề đào tạo & bồi dưỡng trong chương trình:
              </h4>
              <ul className="space-y-2">
                {modalState.data.courses.map((course, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-lg bg-[#f8fafc] border border-[#d9e4f2] flex items-start gap-2.5 text-xs sm:text-sm text-[#1b2740]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#0a58c8] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#d9e4f2] flex justify-end gap-2">
              <button
                type="button"
                onClick={onOpenRegister}
                className="px-5 py-2 rounded-full bg-[#0a58c8] text-white text-xs sm:text-sm font-medium hover:bg-[#0848a6] cursor-pointer"
              >
                Đăng ký học chương trình này
              </button>
            </div>
          </div>
        )}

        {/* 4. NEWS ARTICLE */}
        {modalState.type === 'news' && (
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden aspect-[16/9] border border-[#d9e4f2]">
              <img
                src={modalState.data.image}
                alt={modalState.data.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="text-xs text-[#566681]">Ngày đăng: {modalState.data.date} · {modalState.data.views} lượt xem</span>
              <h2 className="text-xl font-bold text-[#124a9e] mt-1">
                {modalState.data.title}
              </h2>
            </div>

            <div className="text-sm text-[#1b2740] leading-relaxed space-y-3">
              <p className="font-semibold text-[#124a9e]">
                {modalState.data.summary}
              </p>
              <p>{modalState.data.content}</p>
            </div>
          </div>
        )}

        {/* 5. SINGLE DOCUMENT */}
        {modalState.type === 'document' && (
          <div className="space-y-4">
            <div className="border-b border-[#d9e4f2] pb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase">
                Văn bản cấp: {modalState.data.level}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#124a9e] mt-2">
                {modalState.data.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-[#566681] mt-2">
                <span>Số hiệu: {modalState.data.code}</span>
                <span>·</span>
                <span>Ban hành: {modalState.data.issueDate}</span>
                <span>·</span>
                <span>Dung lượng: {modalState.data.fileSize}</span>
              </div>
            </div>

            <div className="p-4 bg-[#eef5fd] rounded-xl border border-[#d9e4f2] text-xs sm:text-sm text-[#1b2740] space-y-2">
              <p>
                Văn bản được lưu trữ và số hóa tại Trung tâm Học tập cộng đồng xã Cửa Tùng, huyện Vĩnh Linh, tỉnh Quảng Trị nhằm phục vụ công tác tra cứu, phổ biến kiến thức và triển khai Đề án xây dựng xã hội học tập.
              </p>
            </div>

            <div className="pt-3 border-t border-[#d9e4f2] flex justify-end gap-3">
              <button
                type="button"
                onClick={() => alert(`Đang tải xuống văn bản: ${modalState.data.code}`)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a58c8] hover:bg-[#0848a6] text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Tải văn bản đính kèm ({modalState.data.fileSize})
              </button>
            </div>
          </div>
        )}

        {/* 6. ALL ANNOUNCEMENTS */}
        {modalState.type === 'all-announcements' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#124a9e] border-b border-[#d9e4f2] pb-3">
              Tất cả thông báo từ Trung tâm
            </h2>
            <div className="space-y-3">
              {ANNOUNCEMENTS.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl border border-[#d9e4f2] hover:bg-[#f8fafc] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-[#566681] mb-1">
                    <span>{item.date}</span>
                    <span className="font-semibold text-[#0a58c8]">{item.author}</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#124a9e] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#566681] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. ALL NEWS */}
        {modalState.type === 'all-news' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#124a9e] border-b border-[#d9e4f2] pb-3">
              Tin tức & Hoạt động cộng đồng Cửa Tùng
            </h2>
            <div className="space-y-4">
              {NEWS_ARTICLES.map((article) => (
                <div
                  key={article.id}
                  className="flex flex-col sm:flex-row gap-3 p-3 rounded-xl border border-[#d9e4f2] hover:bg-[#f8fafc]"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full sm:w-36 h-24 object-cover rounded-lg shrink-0"
                  />
                  <div>
                    <span className="text-[11px] text-[#566681]">{article.date}</span>
                    <h3 className="font-bold text-sm text-[#124a9e] mt-0.5">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#566681] mt-1 line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. ALL DOCUMENTS */}
        {modalState.type === 'all-documents' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#124a9e] border-b border-[#d9e4f2] pb-3">
              Hệ thống văn bản – tài liệu hướng dẫn
            </h2>
            <div className="space-y-3">
              {OFFICIAL_DOCUMENTS.map((doc) => (
                <div
                  key={doc.id}
                  className="p-3 rounded-xl border border-[#d9e4f2] flex items-center justify-between gap-3 hover:bg-[#f8fafc]"
                >
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {doc.level}
                    </span>
                    <h4 className="font-medium text-xs sm:text-sm text-[#1b2740] mt-1">
                      {doc.title}
                    </h4>
                    <span className="text-[11px] text-[#566681]">Số: {doc.code} · Ngày: {doc.issueDate}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert(`Đang tải ${doc.code}`)}
                    className="p-2 text-[#0a58c8] hover:bg-[#eef5fd] rounded-lg shrink-0"
                    title="Tải văn bản"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 9. EXEMPLARY LEARNERS */}
        {modalState.type === 'exemplary' && (
          <div className="space-y-4">
            <div className="border-b border-[#d9e4f2] pb-3 flex items-center gap-2">
              <Star className="w-6 h-6 text-amber-500 fill-amber-400" />
              <div>
                <h2 className="text-xl font-bold text-[#124a9e]">
                  Gương học tập – Người tốt, việc tốt xã Cửa Tùng
                </h2>
                <p className="text-xs text-[#566681]">
                  Tuyên dương các mô hình tự học tiêu biểu lan tỏa tinh thần học tập suốt đời
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {EXEMPLARY_LEARNERS.map((person) => (
                <div
                  key={person.id}
                  className="p-4 rounded-xl border border-[#d9e4f2] bg-[#f8fafc] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-base text-[#124a9e]">
                        {person.name}
                      </h3>
                      <span className="text-xs text-[#2a8a35] font-medium">
                        {person.village} · {person.category}
                      </span>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-semibold">
                      Tiêu biểu
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1b2740] leading-relaxed">
                    {person.story}
                  </p>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-xs font-semibold text-[#0a58c8] block mb-1">
                      Thành tích nổi bật:
                    </span>
                    <ul className="text-xs text-[#566681] list-disc list-inside space-y-0.5">
                      {person.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 10. DIGITAL LIBRARY */}
        {modalState.type === 'library' && (
          <div className="space-y-4">
            <div className="border-b border-[#d9e4f2] pb-3">
              <h2 className="text-xl font-bold text-[#124a9e] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#0a58c8]" />
                Thư viện số cộng đồng Cửa Tùng
              </h2>
              <p className="text-xs text-[#566681]">
                Kho học liệu mở: sách điện tử, video bài giảng, audio podcast, cẩm nang hướng dẫn
              </p>
            </div>

            <div className="space-y-3">
              {LIBRARY_ITEMS.filter((item) =>
                !modalState.category || modalState.category === 'all'
                  ? true
                  : item.category === modalState.category
              ).map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl border border-[#d9e4f2] bg-white hover:bg-[#f8fafc] transition-colors flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#eef5fd] text-[#0a58c8]">
                      {item.format}
                    </span>
                    <h4 className="font-semibold text-sm text-[#124a9e]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#566681] leading-relaxed">
                      {item.description}
                    </p>
                    <div className="text-[11px] text-[#566681] flex items-center gap-3">
                      <span>Tác giả: {item.author}</span>
                      <span>·</span>
                      <span>{item.downloadsOrViews}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => alert(`Mở tài liệu: ${item.title}`)}
                    className="p-2 text-[#0a58c8] hover:bg-[#eef5fd] rounded-lg shrink-0"
                    title="Mở hoặc tải về"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
