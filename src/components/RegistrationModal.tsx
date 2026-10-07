import React, { useState } from 'react';
import { X, CheckCircle, BookOpen, User, Phone, MapPin, Clock, Send } from 'lucide-react';
import { RegistrationRequest } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (data: RegistrationRequest) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState('Thôn An Đức 1');
  const [topic, setTopic] = useState('Chuyển đổi số và kỹ năng số cơ bản');
  const [preferredTime, setPreferredTime] = useState('Buổi tối (19:00 - 21:00)');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const newRegistration: RegistrationRequest = {
      id: `REG-${Date.now().toString().slice(-4)}`,
      fullName: fullName.trim(),
      phone: phone.trim(),
      village,
      topic,
      preferredTime,
      note: note.trim(),
      submittedAt: new Date().toLocaleDateString('vi-VN'),
    };

    onSubmitSuccess(newRegistration);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setNote('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 my-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-full cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 pb-3 border-b border-[#d9e4f2] mb-4">
              <div className="w-10 h-10 rounded-full bg-[#eef5fd] text-[#0a58c8] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#124a9e]">
                  Đăng ký nhu cầu học tập
                </h3>
                <p className="text-xs text-[#566681]">
                  Trung tâm HTCĐ xã Cửa Tùng sẽ tổng hợp và mở lớp phù hợp
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Họ và tên */}
              <div>
                <label className="block text-xs font-semibold text-[#1b2740] mb-1">
                  Họ và tên của bạn <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn Hải"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#d9e4f2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a58c8]/30 focus:border-[#0a58c8]"
                  />
                </div>
              </div>

              {/* Điện thoại */}
              <div>
                <label className="block text-xs font-semibold text-[#1b2740] mb-1">
                  Số điện thoại liên hệ <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#d9e4f2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a58c8]/30 focus:border-[#0a58c8]"
                  />
                </div>
              </div>

              {/* Thôn / Khu phố */}
              <div>
                <label className="block text-xs font-semibold text-[#1b2740] mb-1">
                  Thôn / Khu phố nơi cư trú
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#d9e4f2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a58c8]/30 focus:border-[#0a58c8] bg-white"
                  >
                    <option value="Thôn An Đức 1">Thôn An Đức 1</option>
                    <option value="Thôn An Đức 2">Thôn An Đức 2</option>
                    <option value="Thôn Hòa Bình">Thôn Hòa Bình</option>
                    <option value="Thôn Vĩnh An">Thôn Vĩnh An</option>
                    <option value="Thôn Tân Hòa">Thôn Tân Hòa</option>
                    <option value="Khu phố An Hòa 1">Khu phố An Hòa 1</option>
                    <option value="Khu phố An Hòa 2">Khu phố An Hòa 2</option>
                  </select>
                </div>
              </div>

              {/* Nội dung muốn học */}
              <div>
                <label className="block text-xs font-semibold text-[#1b2740] mb-1">
                  Chuyên đề / Nội dung mong muốn học
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#d9e4f2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a58c8]/30 focus:border-[#0a58c8] bg-white"
                >
                  <option value="Chuyển đổi số và kỹ năng số cơ bản">Chuyển đổi số & kỹ năng dùng smartphone</option>
                  <option value="Kỹ thuật nuôi trồng và chế biến thủy hải sản ven biển">Kỹ thuật nuôi tôm cá và chế biến hải sản</option>
                  <option value="Tin học văn phòng căn bản (Word, Excel)">Tin học văn phòng căn bản</option>
                  <option value="Tiếng Anh giao tiếp phục vụ du lịch Cửa Tùng">Tiếng Anh giao tiếp dịch vụ du lịch</option>
                  <option value="Kỹ năng sơ cấp cứu và an toàn bãi biển">Kỹ năng sơ cấp cứu & phòng chống đuối nước</option>
                  <option value="Khởi nghiệp kinh doanh và thương mại điện tử">Khởi nghiệp kinh doanh và bán hàng trực tuyến</option>
                  <option value="Chăm sóc sức khỏe gia đình & người lớn tuổi">Chăm sóc sức khỏe người lớn tuổi</option>
                </select>
              </div>

              {/* Thời gian học thuận tiện */}
              <div>
                <label className="block text-xs font-semibold text-[#1b2740] mb-1">
                  Thời gian học thuận tiện nhất
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#d9e4f2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a58c8]/30 focus:border-[#0a58c8] bg-white"
                  >
                    <option value="Buổi tối (19:00 - 21:00)">Buổi tối các ngày trong tuần (19:00 - 21:00)</option>
                    <option value="Thứ Bảy & Chủ Nhật (Ban ngày)">Thứ Bảy & Chủ Nhật (Ban ngày)</option>
                    <option value="Buổi sáng các ngày trong tuần (08:00 - 10:30)">Buổi sáng các ngày trong tuần</option>
                    <option value="Buổi chiều (14:00 - 16:30)">Buổi chiều (14:00 - 16:30)</option>
                  </select>
                </div>
              </div>

              {/* Ghi chú thêm */}
              <div>
                <label className="block text-xs font-semibold text-[#1b2740] mb-1">
                  Ý kiến / Nguyện vọng bổ sung (không bắt buộc)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ghi chú thêm về nhu cầu học tập của bạn..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#d9e4f2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a58c8]/30 focus:border-[#0a58c8]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-full bg-[#0a58c8] hover:bg-[#0848a6] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Gửi phiếu đăng ký học tập
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#124a9e]">
              Đăng ký thành công!
            </h3>
            <p className="text-sm text-[#566681] leading-relaxed max-w-sm mx-auto">
              Cảm ơn <strong className="text-[#1b2740]">{fullName}</strong> đã gửi nhu cầu học tập chuyên đề:{' '}
              <strong className="text-[#0a58c8]">{topic}</strong>. Trung tâm sẽ liên hệ qua số điện thoại <strong>{phone}</strong> khi chuẩn bị khai giảng lớp học.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2 rounded-full bg-[#0a58c8] text-white text-sm font-medium hover:bg-[#0848a6] transition-colors cursor-pointer"
              >
                Đóng thông báo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
