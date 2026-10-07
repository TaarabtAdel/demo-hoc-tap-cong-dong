export interface Announcement {
  id: string;
  day: string;
  monthYear: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
}

export interface ActivitySchedule {
  id: string;
  day: string;
  monthYear: string;
  title: string;
  time: string;
  location: string;
  targetAudience: string;
  instructor: string;
  description: string;
}

export interface LearningProgram {
  id: string;
  number: string;
  title: string;
  colorClass: string;
  bgHex: string;
  iconName: 'book' | 'laptop' | 'gear' | 'heart' | 'scale' | 'cap';
  description: string;
  courses: string[];
}

export interface LibraryItem {
  id: string;
  title: string;
  category: 'ebook' | 'video' | 'audio' | 'guide' | 'infographic';
  format: string;
  author: string;
  downloadsOrViews: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  summary: string;
  content: string;
  views: number;
}

export interface ExemplaryLearner {
  id: string;
  name: string;
  title: string;
  category: 'Gia đình học tập' | 'Dòng họ học tập' | 'Cộng đồng học tập' | 'Công dân học tập';
  village: string;
  story: string;
  achievements: string[];
}

export interface OfficialDocument {
  id: string;
  code: string;
  title: string;
  level: 'Trung ương' | 'Tỉnh' | 'Xã' | 'Trung tâm' | 'Tài liệu';
  issueDate: string;
  fileSize: string;
}

export interface RegistrationRequest {
  id: string;
  fullName: string;
  phone: string;
  village: string;
  topic: string;
  preferredTime: string;
  note?: string;
  submittedAt: string;
}
