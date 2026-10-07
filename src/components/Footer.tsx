import React, { useState } from 'react';
import { Home, ExternalLink, GraduationCap, Globe, MapPin, Phone, Mail, UserCheck, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showMapModal, setShowMapModal] = useState(false);

  return (
    <footer id="lien-he" className="bg-[#eef5fd] border-t border-[#d9e4f2] text-sm text-[#1b2740]">
      {/* Main Footer Content */}
      <div className="max-w-[1240px] mx-auto px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Col 1: Liên kết nhanh (3 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-[#124a9e] text-base uppercase tracking-wide">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2 text-[#566681] text-xs sm:text-sm">
              <li>
                <a
                  href="https://cuatung.quangtri.gov.vn"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#0a58c8] transition-colors"
                >
                  <Home className="w-4 h-4 text-[#0a58c8]" />
                  <span>UBND xã Cửa Tùng</span>
                </a>
              </li>
              <li>
                <a
                  href="https://quangtri.gov.vn"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#0a58c8] transition-colors"
                >
                  <Globe className="w-4 h-4 text-[#0a58c8]" />
                  <span>Cổng thông tin điện tử tỉnh Quảng Trị</span>
                </a>
              </li>
              <li>
                <a
                  href="https://moet.gov.vn"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#0a58c8] transition-colors"
                >
                  <GraduationCap className="w-4 h-4 text-[#0a58c8]" />
                  <span>Bộ Giáo dục và Đào tạo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://dichvucong.gov.vn"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#0a58c8] transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#0a58c8]" />
                  <span>Cổng Dịch vụ công Quốc gia</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Thông tin trung tâm (5 cols) */}
          <div className="md:col-span-5 space-y-2">
            <h4 className="font-bold text-[#124a9e] text-base leading-snug">
              TRUNG TÂM HỌC TẬP CỘNG ĐỒNG XÃ CỬA TÙNG
            </h4>
            <div className="space-y-1.5 text-xs sm:text-[13.5px] text-[#566681]">
              <p>
                <strong className="text-[#1b2740]">Cơ quan chủ quản:</strong> UBND xã Cửa Tùng
              </p>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-[#0a58c8] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1b2740]">Địa chỉ:</strong> Trụ sở UBND xã Cửa Tùng, huyện Vĩnh Linh, tỉnh Quảng Trị
                </span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#0a58c8] shrink-0" />
                <span>
                  <strong className="text-[#1b2740]">Điện thoại:</strong> 0903542789
                </span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#0a58c8] shrink-0" />
                <span>
                  <strong className="text-[#1b2740]">Email:</strong> Leduckiem@quangtri.gov.vn
                </span>
              </p>
              <p className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#2a8a35] shrink-0" />
                <span>
                  <strong className="text-[#1b2740]">Người phụ trách:</strong> Lê Đức Kiêm – Giám đốc
                </span>
              </p>
            </div>
          </div>

          {/* Col 3: Bản đồ vị trí (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-[#124a9e] text-base mb-2">
              Vị trí trụ sở
            </h4>
            <div className="relative rounded-xl overflow-hidden border border-[#d9e4f2] bg-white shadow-xs h-32 flex flex-col items-center justify-center p-3 text-center group">
              {/* Map stylized background */}
              <div className="absolute inset-0 bg-[#eef5fd] opacity-80 flex items-center justify-center">
                <div className="w-full h-full bg-[radial-gradient(#0a58c8_1px,transparent_1px)] [background-size:12px_12px] opacity-20"></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md animate-bounce mb-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#124a9e]">UBND xã Cửa Tùng</span>
                <span className="text-[11px] text-[#566681]">Huyện Vĩnh Linh, Quảng Trị</span>
                <button
                  type="button"
                  onClick={() => setShowMapModal(true)}
                  className="mt-2 text-xs font-semibold bg-[#0a58c8] hover:bg-[#0848a6] text-white px-3 py-1 rounded-full shadow-xs transition-colors cursor-pointer"
                >
                  Xem bản đồ
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#0a58c8] text-white text-center py-3 text-xs sm:text-sm font-medium">
        <div className="max-w-[1240px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 Trung tâm Học tập cộng đồng xã Cửa Tùng – Xây dựng xã hội học tập</span>
          <span className="text-white/80 text-xs">Cổng thông tin điện tử giáo dục cộng đồng</span>
        </div>
      </div>

      {/* Map Modal */}
      {showMapModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-5 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-[#d9e4f2] mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-[#124a9e] text-base">
                  Bản đồ: UBND xã Cửa Tùng, huyện Vĩnh Linh
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowMapModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#d9e4f2] bg-slate-100 aspect-video relative flex flex-col items-center justify-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-3">
                <MapPin className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-base text-[#124a9e] mb-1">
                Trung tâm HTCĐ xã Cửa Tùng
              </h4>
              <p className="text-xs sm:text-sm text-[#566681] max-w-md">
                Tọa lạc tại Trụ sở UBND xã Cửa Tùng, Thị trấn Cửa Tùng, huyện Vĩnh Linh, tỉnh Quảng Trị. Nằm cạnh bãi tắm Cửa Tùng lịch sử và cầu Cửa Tùng nối đôi bờ sông Bến Hải.
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://maps.google.com/?q=UBND+xa+Cua+Tung+Vinh+Linh+Quang+Tri"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0a58c8] text-white text-xs font-medium hover:bg-[#0848a6] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Mở trên Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
