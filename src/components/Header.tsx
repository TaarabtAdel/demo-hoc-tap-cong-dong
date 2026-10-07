import React, { useState } from 'react';
import {
  Home,
  Phone,
  Mail,
  Search,
  BookOpen,
  Calendar,
  FileText,
  Bookmark,
  Award,
  Users,
  Menu,
  X,
} from 'lucide-react';
import { cuatungBannerImg } from '../data/mockData';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onSearch: (query: string) => void;
  onOpenRegisterModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const navItems = [
    { id: 'trang-chu', label: 'Trang chủ', icon: Home, href: '#' },
    { id: 'gioi-thieu', label: 'Giới thiệu', icon: BookOpen, href: '#gioi-thieu' },
    { id: 'hoat-dong', label: 'Hoạt động', icon: Users, href: '#tin-tuc' },
    { id: 'lich-hoc', label: 'Lịch học', icon: Calendar, href: '#lich' },
    { id: 'tai-lieu', label: 'Tài liệu', icon: FileText, href: '#van-ban' },
    { id: 'thu-vien', label: 'Thư viện số', icon: Bookmark, href: '#thu-vien' },
    { id: 'hoc-tap', label: 'Học tập suốt đời', icon: Award, href: '#hoc-suot-doi' },
    { id: 'lien-he', label: 'Liên hệ', icon: Phone, href: '#lien-he' },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#d9e4f2] text-[13px] sm:text-[14px] text-[#566681] py-2">
        <div className="max-w-[1240px] mx-auto px-4 flex flex-wrap items-center justify-between gap-y-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#1b2740]">
              <Home className="w-3.5 h-3.5 text-[#0a58c8]" />
              UBND xã Cửa Tùng
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#0a58c8]" />
              Điện thoại: <strong className="text-[#1b2740]">0903542789</strong>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#0a58c8]" />
              Email: <strong className="text-[#1b2740]">Leduckiem@quangtri.gov.vn</strong>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs">
            <span className="bg-[#eef5fd] text-[#124a9e] px-2.5 py-0.5 rounded font-medium border border-[#d9e4f2]">
              Huyện Vĩnh Linh, Tỉnh Quảng Trị
            </span>
          </div>
        </div>
      </div>

      {/* Main Header / Brand Area */}
      <div className="bg-white py-3.5 border-b border-[#d9e4f2]">
        <div className="max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Center Title */}
          <div className="flex items-center gap-4 text-left w-full md:w-auto">
            {/* National & Educational Emblem SVG */}
            <div className="relative shrink-0 w-[72px] h-[72px] sm:w-[78px] sm:h-[78px] rounded-full p-1 border-2 border-[#124a9e] bg-white shadow-sm flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Outer ring */}
                <circle cx="50" cy="50" r="46" fill="#f8fafc" stroke="#124a9e" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="40" fill="#fff" stroke="#d97706" strokeWidth="1" strokeDasharray="2,2" />
                
                {/* Red sun / upper disc */}
                <path d="M15 45 A 35 35 0 0 1 85 45 Z" fill="#d92b1b" />
                
                {/* Golden 5-point star */}
                <polygon points="50,22 53.5,32 64,32 55.5,38 58.5,48 50,42 41.5,48 44.5,38 36,32 46.5,32" fill="#fbbf24" />
                
                {/* Blue sea waves of Cua Tung */}
                <path d="M15 45 Q 32 38, 50 45 T 85 45 L 85 75 A 35 35 0 0 1 15 75 Z" fill="#0a58c8" />
                <path d="M20 54 Q 35 48, 50 54 T 80 54" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.8" />
                <path d="M25 63 Q 37 58, 50 63 T 75 63" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.6" />
                
                {/* Open Book in gold */}
                <path d="M35 73 Q 50 66, 65 73 L 65 67 Q 50 60, 35 67 Z" fill="#fbbf24" stroke="#b45309" strokeWidth="1" />
              </svg>
            </div>

            <div>
              <div className="text-[12px] sm:text-[13px] font-bold text-[#124a9e] tracking-wider uppercase leading-none mb-1">
                UBND XÃ CỬA TÙNG
              </div>
              <h1 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold text-[#124a9e] leading-snug">
                TRUNG TÂM HỌC TẬP CỘNG ĐỒNG XÃ CỬA TÙNG
              </h1>
              <p className="text-[13px] sm:text-[14px] text-[#566681] italic font-normal">
                “Học tập suốt đời – Xây dựng xã hội học tập”
              </p>
            </div>
          </div>

          {/* Right Banner Image: Panoramic view of Cửa Tùng Beach */}
          <div className="w-full md:w-[480px] lg:w-[540px] h-[82px] sm:h-[88px] relative rounded-lg overflow-hidden border border-[#d9e4f2] shadow-sm shrink-0">
            <img
              src={cuatungBannerImg}
              alt="Cảnh quan biển Cửa Tùng - Quảng Trị"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#124a9e]/70 via-transparent to-[#0a58c8]/30 flex items-center px-4">
              <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-md">
                Bãi biển Cửa Tùng – Điểm sáng văn hóa & học tập cộng đồng
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#0a58c8] text-white shadow-md sticky top-0 z-30" aria-label="Menu chính">
        <div className="max-w-[1240px] mx-auto px-4 flex items-center justify-between">
          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded my-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 py-1 overflow-x-auto text-[14.5px]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => onSelectTab(item.id)}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-white/25 text-white font-semibold'
                        : 'text-white/90 hover:bg-white/15 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Search Box on Right */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center my-1.5 ml-auto md:ml-4 bg-white rounded-full overflow-hidden shadow-inner w-[180px] sm:w-[220px]"
          >
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3.5 pr-8 py-1.5 text-xs sm:text-sm text-[#1b2740] bg-transparent outline-none placeholder-[#566681]"
            />
            <button
              type="submit"
              className="absolute right-1 text-[#0a58c8] hover:text-[#124a9e] p-1.5 transition-colors"
              title="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0747a6] border-t border-white/20 px-4 py-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium ${
                    activeTab === item.id ? 'bg-white/20 text-white' : 'text-white/90'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};
