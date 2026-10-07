/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MainContent } from './components/MainContent';
import { LifelongLearningSection } from './components/LifelongLearningSection';
import { DocumentsAndGallery } from './components/DocumentsAndGallery';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { DetailModal, ModalType } from './components/DetailModal';
import { SearchModal } from './components/SearchModal';
import {
  Announcement,
  ActivitySchedule,
  LearningProgram,
  NewsArticle,
  OfficialDocument,
  RegistrationRequest,
} from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('trang-chu');
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [detailModal, setDetailModal] = useState<ModalType | null>(null);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [registrations, setRegistrations] = useState<RegistrationRequest[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'trang-chu') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToSchedule = () => {
    const el = document.getElementById('lich');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegistrationSuccess = (reg: RegistrationRequest) => {
    setRegistrations((prev) => [reg, ...prev]);
    setNotification(`Đăng ký thành công mã: ${reg.id} (${reg.fullName})`);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f7fc] text-[#1b2740] selection:bg-[#0a58c8] selection:text-white">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#124a9e] text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-sm font-medium">{notification}</span>
        </div>
      )}

      {/* Header with Topbar, Emblem, Banner, Navigation, Search */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onSearch={(q) => setSearchQuery(q)}
        onOpenRegisterModal={() => setRegisterModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenRegisterModal={() => setRegisterModalOpen(true)}
        onScrollToSchedule={handleScrollToSchedule}
      />

      {/* 3-Column Main Area matching image */}
      <MainContent
        onSelectAnnouncement={(item: Announcement) =>
          setDetailModal({ type: 'announcement', data: item })
        }
        onSelectSchedule={(item: ActivitySchedule) =>
          setDetailModal({ type: 'schedule', data: item })
        }
        onSelectProgram={(program: LearningProgram) =>
          setDetailModal({ type: 'program', data: program })
        }
        onSelectNews={(news: NewsArticle) =>
          setDetailModal({ type: 'news', data: news })
        }
        onSelectLibraryCategory={(cat: string) =>
          setDetailModal({ type: 'library', category: cat })
        }
        onOpenExemplaryModal={() => setDetailModal({ type: 'exemplary' })}
        onOpenRegisterModal={() => setRegisterModalOpen(true)}
        onViewAllAnnouncements={() =>
          setDetailModal({ type: 'all-announcements' })
        }
        onViewAllNews={() => setDetailModal({ type: 'all-news' })}
      />

      {/* Lifelong Learning 4-Pillars Band Section */}
      <LifelongLearningSection
        onLearnMore={() => setDetailModal({ type: 'exemplary' })}
      />

      {/* Official Documents & Media Gallery */}
      <DocumentsAndGallery
        onSelectDocument={(doc: OfficialDocument) =>
          setDetailModal({ type: 'document', data: doc })
        }
        onViewAllDocuments={() => setDetailModal({ type: 'all-documents' })}
      />

      {/* Footer with links, center info, and map */}
      <Footer />

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        onSubmitSuccess={handleRegistrationSuccess}
      />

      {/* Detail Modal for various items */}
      <DetailModal
        modalState={detailModal}
        onClose={() => setDetailModal(null)}
        onOpenRegister={() => {
          setDetailModal(null);
          setRegisterModalOpen(true);
        }}
      />

      {/* Search Modal */}
      {searchQuery && (
        <SearchModal
          query={searchQuery}
          onClose={() => setSearchQuery(null)}
          onSelectItem={(type, item) => {
            setSearchQuery(null);
            if (type === 'announcement') {
              setDetailModal({ type: 'announcement', data: item });
            } else if (type === 'schedule') {
              setDetailModal({ type: 'schedule', data: item });
            } else if (type === 'program') {
              setDetailModal({ type: 'program', data: item });
            } else if (type === 'document') {
              setDetailModal({ type: 'document', data: item });
            } else if (type === 'library') {
              setDetailModal({ type: 'library', category: item.category });
            }
          }}
        />
      )}
    </div>
  );
}
