import React, { useState } from 'react';
import { FileText, Download, Image as ImageIcon, Play, Eye, X } from 'lucide-react';
import { OFFICIAL_DOCUMENTS, ceremonyImg, bookFestivalImg, libraryImg, cuatungBannerImg, heroImg } from '../data/mockData';
import { OfficialDocument } from '../types';

interface DocumentsAndGalleryProps {
  onSelectDocument: (doc: OfficialDocument) => void;
  onViewAllDocuments: () => void;
}

export const DocumentsAndGallery: React.FC<DocumentsAndGalleryProps> = ({
  onSelectDocument,
  onViewAllDocuments,
}) => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<{
    title: string;
    description: string;
    image: string;
    type: 'image' | 'video';
  } | null>(null);

  const galleryItems = [
    {
      id: 'g-1',
      title: 'Lễ phát động Tuần lễ hưởng ứng học tập suốt đời',
      description: 'Hội nghị trang trọng tại Hội trường UBND xã Cửa Tùng với sự tham gia của đông đảo nhân dân.',
      image: ceremonyImg,
      type: 'image' as const,
    },
    {
      id: 'g-2',
      title: 'Ngày hội Sách và Văn hóa đọc năm 2026',
      description: 'Trưng bày sách và trao học bổng cho học sinh nghèo hiếu học xã Cửa Tùng.',
      image: bookFestivalImg,
      type: 'image' as const,
    },
    {
      id: 'g-3',
      title: 'Không gian tự học và thư viện số cộng đồng',
      description: 'Tài liệu số, đầu sách bổ ích hỗ trợ việc học tập cho bà con nhân dân.',
      image: libraryImg,
      type: 'image' as const,
    },
    {
      id: 'g-4',
      title: 'Cảnh quan biển Cửa Tùng và phát triển du lịch bền vững',
      description: 'Định hướng học tập kỹ năng làm du lịch sinh thái và bảo vệ môi trường biển.',
      image: cuatungBannerImg,
      type: 'image' as const,
    },
    {
      id: 'g-5',
      title: 'Lớp học kỹ năng số cho thanh niên và hội viên',
      description: 'Thực hành các tiện ích trực tuyến và an toàn số trên thiết bị di động.',
      image: heroImg,
      type: 'image' as const,
    },
    {
      id: 'g-6',
      title: 'Video: Hướng dẫn kỹ năng cứu hộ và thoát hiểm bãi biển',
      description: 'Video chuyên đề giáo dục kỹ năng phòng chống đuối nước do đội cứu hộ thực hiện.',
      image: cuatungBannerImg,
      type: 'video' as const,
    },
  ];

  const getTagColor = (level: string) => {
    switch (level) {
      case 'Trung ương':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'Tỉnh':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Xã':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Trung tâm':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  return (
    <section id="van-ban" className="py-10 bg-white">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Văn bản - tài liệu (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-[#d9e4f2] p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#d9e4f2]/70 mb-3">
              <div>
                <h2 className="text-[19px] font-bold text-[#124a9e] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#0a58c8]" />
                  Văn bản – tài liệu
                </h2>
                <p className="text-xs text-[#566681] mt-0.5">
                  Văn bản chính thống, có nguồn và ngày ban hành.
                </p>
              </div>
              <button
                type="button"
                onClick={onViewAllDocuments}
                className="text-xs font-semibold text-[#0a58c8] hover:underline cursor-pointer"
              >
                Xem tất cả
              </button>
            </div>

            <div className="divide-y divide-[#d9e4f2]">
              {OFFICIAL_DOCUMENTS.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => onSelectDocument(doc)}
                  className="py-3 first:pt-1 last:pb-1 flex items-start gap-3 cursor-pointer group hover:bg-[#f8fafc] -mx-2 px-2 rounded-lg transition-colors"
                >
                  <span
                    className={`shrink-0 text-[11px] font-bold px-2 py-1 rounded border text-center min-w-[76px] ${getTagColor(
                      doc.level
                    )}`}
                  >
                    {doc.level}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-[13.5px] font-medium text-[#1b2740] group-hover:text-[#0a58c8] transition-colors line-clamp-2 leading-snug">
                      {doc.title}
                    </h3>
                    <div className="flex items-center gap-3 text-[11px] text-[#566681] mt-1">
                      <span>Số: {doc.code}</span>
                      <span>·</span>
                      <span>Ngày: {doc.issueDate}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectDocument(doc);
                    }}
                    className="p-1.5 text-[#566681] hover:text-[#0a58c8] hover:bg-[#eef5fd] rounded transition-colors"
                    title="Xem chi tiết & Tải văn bản"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hình ảnh - video (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#d9e4f2] p-5 shadow-xs">
            <div className="pb-3 border-b border-[#d9e4f2]/70 mb-3.5 flex items-center justify-between">
              <div>
                <h2 className="text-[19px] font-bold text-[#124a9e] flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-[#0a58c8]" />
                  Hình ảnh – video
                </h2>
                <p className="text-xs text-[#566681] mt-0.5">
                  Hoạt động của Trung tâm, các lớp học, tập huấn, hội nghị và video bài giảng.
                </p>
              </div>
            </div>

            {/* Gallery Grid (3 cols x 2 rows) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedGalleryItem(item)}
                  className="relative rounded-lg overflow-hidden border border-[#d9e4f2] aspect-[4/3] group cursor-pointer bg-slate-100 shadow-2xs"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5 text-white">
                    <span className="text-[11px] font-semibold leading-tight line-clamp-2">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-white/80 inline-flex items-center gap-1 mt-1">
                      {item.type === 'video' ? (
                        <>
                          <Play className="w-3 h-3 text-red-400 fill-red-400" /> Xem video
                        </>
                      ) : (
                        <>
                          <Eye className="w-3 h-3 text-white" /> Xem ảnh lớn
                        </>
                      )}
                    </span>
                  </div>

                  {item.type === 'video' && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shadow">
                      <Play className="w-3 h-3 fill-white ml-0.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Gallery Modal Lightbox */}
      {selectedGalleryItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95">
            <div className="relative aspect-[16/10] bg-slate-900">
              <img
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedGalleryItem(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#124a9e] mb-1">
                {selectedGalleryItem.title}
              </h3>
              <p className="text-sm text-[#566681] leading-relaxed">
                {selectedGalleryItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
