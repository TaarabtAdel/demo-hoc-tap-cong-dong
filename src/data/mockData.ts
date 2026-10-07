import {
  Announcement,
  ActivitySchedule,
  LearningProgram,
  LibraryItem,
  NewsArticle,
  ExemplaryLearner,
  OfficialDocument,
} from '../types';

import cuatungBannerImg from '../assets/images/cuatung_coastal_banner_1791184608769.jpg';
import heroImg from '../assets/images/community_learning_hero_1791184622151.jpg';
import libraryImg from '../assets/images/library_books_banner_1791184633526.jpg';
import ceremonyImg from '../assets/images/community_ceremony_1791184644676.jpg';
import bookFestivalImg from '../assets/images/book_festival_vietnam_1791184656409.jpg';

export {
  cuatungBannerImg,
  heroImg,
  libraryImg,
  ceremonyImg,
  bookFestivalImg,
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'tb-1',
    day: '05',
    monthYear: '09/2026',
    title: 'Khai giảng lớp học kỹ năng số cho người dân',
    summary: 'Trung tâm HTCĐ xã Cửa Tùng thông báo khai giảng lớp bồi dưỡng kỹ năng số cơ bản...',
    content:
      'Thực hiện Kế hoạch chuyển đổi số xã Cửa Tùng năm 2026, Trung tâm Học tập cộng đồng xã phối hợp với Đoàn Thanh niên và Hội Phụ nữ xã tổ chức lớp bồi dưỡng: "Kỹ năng số cơ bản và an toàn thông tin trên không gian mạng dành cho người dân". Nội dung bao gồm: cài đặt và sử dụng dịch vụ công trực tuyến VNeID, VssID; thanh toán không dùng tiền mặt qua mã QR ngân hàng; nhận diện các thủ đoạn lừa đảo trực tuyến; hướng dẫn tìm kiếm thông tin học tập và chăm sóc sức khỏe.',
    author: 'Ban Giám đốc TT HTCĐ Cửa Tùng',
    date: '05/09/2026',
  },
  {
    id: 'tb-2',
    day: '02',
    monthYear: '09/2026',
    title: 'Lịch hoạt động tháng 9/2026',
    summary: 'Cập nhật lịch các lớp học, hoạt động cộng đồng và chuyên đề học tập tháng 9...',
    content:
      'Trung tâm Học tập cộng đồng trân trọng gửi đến toàn thể nhân dân trên địa bàn xã Cửa Tùng lịch hoạt động giáo dục cộng đồng, các lớp phổ cập ngoại ngữ, chuyên đề ứng dụng chế phẩm sinh học trong nuôi trồng thủy sản và chuỗi hoạt động hưởng ứng Tuần lễ học tập suốt đời.',
    author: 'Văn phòng Trung tâm HTCĐ',
    date: '02/09/2026',
  },
  {
    id: 'tb-3',
    day: '28',
    monthYear: '08/2026',
    title: 'Tuyển sinh lớp tin học cơ bản',
    summary: 'Đăng ký tham gia lớp tin học cơ bản và soạn thảo văn bản dành cho mọi lứa tuổi...',
    content:
      'Trung tâm thông báo chiêu sinh lớp Tin học văn phòng căn bản (Word, Excel cơ bản và tra cứu thông tin trên Internet). Lớp học hoàn toàn miễn phí, được tổ chức tại phòng máy tính cộng đồng của trường THCS Cửa Tùng vào các buổi tối Thứ 3 và Thứ 5 hàng tuần. Mời bà con nhân dân và các em học sinh có nhu cầu liên hệ văn phòng Trung tâm để đăng ký.',
    author: 'Tổ Giáo vụ & CNTT',
    date: '28/08/2026',
  },
];

export const SCHEDULES: ActivitySchedule[] = [
  {
    id: 'lh-1',
    day: '10',
    monthYear: '09/2026',
    title: 'Lớp kỹ năng số cơ bản',
    time: '08:00 - 10:00',
    location: 'Nhà văn hóa xã Cửa Tùng',
    targetAudience: 'Người dân, hội viên các đoàn thể xã',
    instructor: 'Tổ Công nghệ số cộng đồng & Kỹ sư VNPT',
    description: 'Hướng dẫn sử dụng dịch vụ công quốc gia, thanh toán số và phòng chống tin tặc lừa đảo trực tuyến.',
  },
  {
    id: 'lh-2',
    day: '15',
    monthYear: '09/2026',
    title: 'Tập huấn kỹ năng sản xuất nông nghiệp',
    time: '14:00 - 16:00',
    location: 'Hội trường UBND xã Cửa Tùng',
    targetAudience: 'Bà con nông dân, ngư dân nuôi trồng thủy hải sản',
    instructor: 'Cán bộ Khuyến nông huyện Vĩnh Linh',
    description: 'Chuyên đề: Quy trình nuôi tôm an toàn sinh học mùa mưa bão và kỹ thuật thâm canh rau màu sạch trên đất cát ven biển.',
  },
  {
    id: 'lh-3',
    day: '20',
    monthYear: '09/2026',
    title: 'Lớp tiếng Anh giao tiếp du lịch',
    time: '19:00 - 21:00',
    location: 'Trung tâm HTCĐ (Tầng 2 Nhà VH xã)',
    targetAudience: 'Hộ kinh doanh dịch vụ du lịch, nhà hàng, thanh niên địa phương',
    instructor: 'Giáo viên Trường THPT Cửa Tùng',
    description: 'Các mẫu câu giao tiếp cơ bản chào đón du khách quốc tế đến tham quan bãi biển Cửa Tùng và di tích lịch sử Vĩnh Linh.',
  },
];

export const LEARNING_PROGRAMS: LearningProgram[] = [
  {
    id: 'lp-1',
    number: '01',
    title: 'Giáo dục – học tập, phổ cập, xóa mù chữ',
    colorClass: 'bg-[#1d6fc9]',
    bgHex: '#1d6fc9',
    iconName: 'book',
    description: 'Duy trì kết quả phổ cập giáo dục mầm non, tiểu học và THCS; củng cố xóa mù chữ mức độ 2 cho nhân dân.',
    courses: [
      'Lớp bổ túc văn hóa và củng cố kiến thức phổ thông',
      'Chương trình bồi dưỡng tiếng Việt cho người lớn tuổi',
      'Hướng dẫn phương pháp tự học và đồng hành cùng con tại nhà',
    ],
  },
  {
    id: 'lp-2',
    number: '02',
    title: 'Chuyển đổi số và kỹ năng số',
    colorClass: 'bg-[#2a8a35]',
    bgHex: '#2a8a35',
    iconName: 'laptop',
    description: 'Trang bị năng lực số cho công dân xã Cửa Tùng: sử dụng Internet an toàn, khai thác dịch vụ công và thương mại điện tử.',
    courses: [
      'Kỹ năng sử dụng điện thoại thông minh phục vụ đời sống',
      'Định danh điện tử VNeID và dịch vụ công trực tuyến',
      'Bán hàng nông sản - thủy sản địa phương trên sàn số',
    ],
  },
  {
    id: 'lp-3',
    number: '03',
    title: 'Kinh tế – sản xuất, nghề nghiệp, khởi nghiệp',
    colorClass: 'bg-[#d97706]',
    bgHex: '#d97706',
    iconName: 'gear',
    description: 'Chuyển giao khoa học kỹ thuật trồng trọt, chăn nuôi, nuôi trồng hải sản, chế biến hải sản khô truyền thống Cửa Tùng.',
    courses: [
      'Kỹ thuật nuôi trồng và chế biến thủy hải sản ven biển',
      'Kỹ năng quản lý tài chính hộ kinh doanh gia đình',
      'Khởi nghiệp du lịch cộng đồng - dịch vụ homestay bãi biển',
    ],
  },
  {
    id: 'lp-4',
    number: '04',
    title: 'Sức khỏe – đời sống',
    colorClass: 'bg-[#e11d48]',
    bgHex: '#e11d48',
    iconName: 'heart',
    description: 'Chăm sóc sức khỏe gia đình, phòng chống dịch bệnh truyền nhiễm, dinh dưỡng cho người cao tuổi và trẻ em.',
    courses: [
      'Phòng chống bệnh cao huyết áp và đái tháo đường ở người lớn tuổi',
      'An toàn vệ sinh thực phẩm trong chế biến ẩm thực ven biển',
      'Kỹ năng sơ cấp cứu ban đầu khi xảy ra tai nạn đuối nước',
    ],
  },
  {
    id: 'lp-5',
    number: '05',
    title: 'Phổ biến, giáo dục pháp luật',
    colorClass: 'bg-[#7c3aed]',
    bgHex: '#7c3aed',
    iconName: 'scale',
    description: 'Tuyên truyền Luật Đất đai, Luật Thủy sản, Luật Nghĩa vụ quân sự, Luật An ninh mạng và các chính sách an sinh xã hội.',
    courses: [
      'Tuyên truyền chống khai thác thủy sản bất hợp pháp (IUU)',
      'Quy định pháp luật về trật tự xây dựng và quản lý đất đai',
      'Hòa giải cơ sở và giải quyết thủ tục hành chính tại xã',
    ],
  },
  {
    id: 'lp-6',
    number: '06',
    title: 'Khuyến học, khuyến tài, xây dựng xã hội học tập',
    colorClass: 'bg-[#0d9488]',
    bgHex: '#0d9488',
    iconName: 'cap',
    description: 'Đẩy mạnh phong trào "Gia đình học tập", "Dòng họ học tập", "Cộng đồng học tập", "Công dân học tập" trên toàn xã.',
    courses: [
      'Tiêu chí đánh giá và công nhận Mô hình học tập theo QĐ 387/QĐ-TTg',
      'Vận động Quỹ khuyến học giúp đỡ học sinh nghèo vượt khó',
      'Tập huấn Ban Khuyến học các thôn, cơ quan, trường học',
    ],
  },
];

export const LIBRARY_ITEMS: LibraryItem[] = [
  {
    id: 'lib-1',
    title: 'Cẩm nang Chuyển đổi số cho người dân xã Cửa Tùng',
    category: 'ebook',
    format: 'PDF (12 MB)',
    author: 'Tổ Công nghệ số cộng đồng',
    downloadsOrViews: '1.240 lượt tải',
    description: 'Tập hợp các hướng dẫn từng bước: sử dụng VNeID, nộp hồ sơ dịch vụ công trực tuyến, an toàn mật khẩu và nhận diện tin nhắn lừa đảo.',
  },
  {
    id: 'lib-2',
    title: 'Kỹ thuật nuôi tôm thẻ chân trắng an toàn sinh học vụ thu đông',
    category: 'guide',
    format: 'Tài liệu in / PDF (4.5 MB)',
    author: 'Trạm Thủy sản huyện Vĩnh Linh',
    downloadsOrViews: '850 lượt xem',
    description: 'Quy trình chuẩn bị ao đầm, kiểm soát độ mặn, xử lý nước biển Cửa Tùng và kiểm soát dịch bệnh thường gặp.',
  },
  {
    id: 'lib-3',
    title: 'Video: Hướng dẫn sơ cứu người bị đuối nước và kỹ năng thoát hiểm',
    category: 'video',
    format: 'Video MP4 HD (18 phút)',
    author: 'Trung tâm Y tế & Đội Cứu hộ Bờ biển Cửa Tùng',
    downloadsOrViews: '2.430 lượt xem',
    description: 'Thao tác ép tim ngoài lồng ngực, hà hơi thổi ngạt và nhận biết dòng chảy xa bờ tại bãi tắm Cửa Tùng.',
  },
  {
    id: 'lib-4',
    title: 'Audio Podcast: Tìm hiểu Luật Thủy sản và chống khai thác IUU',
    category: 'audio',
    format: 'Audio MP3 (24 phút)',
    author: 'Đài Truyền thanh xã Cửa Tùng',
    downloadsOrViews: '980 lượt nghe',
    description: 'Chương trình phát thanh tuyên truyền cho ngư dân về thiết bị giám sát hành trình VMS và vùng biển đánh bắt hợp pháp.',
  },
  {
    id: 'lib-5',
    title: 'Infographic: 10 điều cần nhớ khi nộp hồ sơ trực tuyến',
    category: 'infographic',
    format: 'Ảnh PNG độ phân giải cao',
    author: 'Bộ phận Tiếp nhận và Trả kết quả UBND xã',
    downloadsOrViews: '1.890 lượt xem',
    description: 'Sơ đồ hình ảnh trực quan giúp bà con dễ dàng chuẩn bị giấy tờ thủ tục hành chính.',
  },
  {
    id: 'lib-6',
    title: 'Sách: Lịch sử truyền thống đấu tranh cách mạng xã Cửa Tùng',
    category: 'ebook',
    format: 'Ebook EPUB & PDF (28 MB)',
    author: 'Đảng ủy - HĐND - UBND xã Cửa Tùng',
    downloadsOrViews: '3.120 lượt đọc',
    description: 'Tài liệu giáo dục truyền thống yêu nước, truyền thống văn hóa làng biển Cửa Tùng cho thế hệ trẻ.',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Khai giảng lớp học, tập huấn, Tuần lễ học tập suốt đời',
    date: '03/09/2026',
    image: ceremonyImg,
    summary: 'UBND xã Cửa Tùng long trọng tổ chức Lễ phát động Tuần lễ học tập suốt đời với chủ đề "Phát triển văn hóa đọc thúc đẩy học tập suốt đời".',
    content:
      'Sáng ngày 03/09/2026, tại Hội trường UBND xã Cửa Tùng, Trung tâm HTCĐ phối hợp với Hội Khuyến học và các ban ngành tổ chức Lễ phát động Tuần lễ hưởng ứng học tập suốt đời năm 2026. Buổi lễ thu hút hơn 200 đại biểu là cán bộ, giáo viên, hội viên các thôn và nhân dân tham dự. Tại buổi lễ, Trung tâm đã công bố kế hoạch mở 8 lớp đào tạo ngắn hạn về kỹ năng số, kỹ thuật nuôi trồng thủy sản và giao lưu gương học tập tiêu biểu.',
    views: 890,
  },
  {
    id: 'news-2',
    title: 'Ngày Sách và Văn hóa đọc năm 2026 tại xã Cửa Tùng',
    date: '25/08/2026',
    image: bookFestivalImg,
    summary: 'Hơn 500 đầu sách quý được trưng bày, phục vụ nhu cầu đọc sách và nghiên cứu của thanh thiếu nhi và nhân dân địa phương.',
    content:
      'Ngày hội Sách và Văn hóa đọc đã diễn ra sôi nổi tại khuôn viên Nhà văn hóa xã Cửa Tùng. Hoạt động nhằm tôn vinh giá trị của sách, bồi dưỡng thói quen tự học và văn hóa đọc trong cộng đồng dân cư. Tại ngày hội, Hội Khuyến học đã trao tặng 30 phần quà là sách vở, học bổng cho các em học sinh có hoàn cảnh khó khăn hiếu học trên địa bàn.',
    views: 640,
  },
];

export const EXEMPLARY_LEARNERS: ExemplaryLearner[] = [
  {
    id: 'ex-1',
    name: 'Gia đình ông Lê Văn Tuấn',
    title: 'Gia đình học tập tiêu biểu 5 năm liền',
    category: 'Gia đình học tập',
    village: 'Thôn An Đức 1, xã Cửa Tùng',
    story:
      'Mặc dù làm nghề đánh bắt xa bờ nhiều vất vả, vợ chồng ông Tuấn luôn đặt việc học lên hàng đầu. Cả 3 người con của ông đều tốt nghiệp đại học, trong đó con gái lớn hiện là kỹ sư công nghệ thông tin. Bản thân ông Tuấn tuy ngoài 50 tuổi vẫn tích cực tham gia các lớp kỹ năng định vị vệ sinh tàu thuyền và tiếng Anh giao tiếp tại Trung tâm.',
    achievements: [
      'Được UBND huyện Vĩnh Linh tặng Giấy khen Gia đình học tập xuất sắc',
      'Đóng góp tích cực vào Quỹ khuyến học thôn',
    ],
  },
  {
    id: 'ex-2',
    name: 'Dòng họ Nguyễn Văn',
    title: 'Dòng họ học tập với 100% con cháu đỗ đạt',
    category: 'Dòng họ học tập',
    village: 'Thôn Vĩnh An, xã Cửa Tùng',
    story:
      'Dòng họ có quỹ khuyến học truyền thống hơn 20 năm, hàng năm tổ chức lễ tuyên dương các cháu học sinh giỏi, sinh viên xuất sắc vào dịp Giỗ Tổ. Dòng họ không có con em bỏ học giữa chừng, người lớn tuổi đều tự học qua sách báo và internet.',
    achievements: [
      'Bằng khen Trung ương Hội Khuyến học Việt Nam',
      'Duy trì quỹ khuyến học dòng họ trên 150 triệu đồng',
    ],
  },
  {
    id: 'ex-3',
    name: 'Chị Hoàng Thị Mai - Công dân học tập số',
    title: 'Tiên phong chuyển đổi số trong kinh doanh thủy sản',
    category: 'Công dân học tập',
    village: 'Khu phố An Hòa, xã Cửa Tùng',
    story:
      'Sau khi tham gia lớp kỹ năng số do Trung tâm HTCĐ xã tổ chức, chị Mai đã mạnh dạn đưa cơ sở sản xuất nước mắm và cá khô truyền thống của gia đình lên các nền tảng số, thanh toán QR không dùng tiền mặt và livestream giới thiệu đặc sản Cửa Tùng đến du khách mọi miền.',
    achievements: [
      'Gương sáng thanh niên khởi nghiệp đổi mới sáng tạo',
      'Sản phẩm đạt chuẩn OCOP 3 sao cấp tỉnh',
    ],
  },
];

export const OFFICIAL_DOCUMENTS: OfficialDocument[] = [
  {
    id: 'doc-1',
    code: 'QĐ 387/QĐ-TTg',
    title: 'Phê duyệt Chương trình "Đẩy mạnh phong trào học tập suốt đời trong gia đình, dòng họ, cộng đồng, đơn vị giai đoạn 2021 - 2030"',
    level: 'Trung ương',
    issueDate: '25/03/2022',
    fileSize: '1.4 MB (PDF)',
  },
  {
    id: 'doc-2',
    code: 'KH 112/KH-UBND-QT',
    title: 'Kế hoạch triển khai Đề án "Xây dựng xã hội học tập giai đoạn 2021 - 2030" trên địa bàn tỉnh Quảng Trị',
    level: 'Tỉnh',
    issueDate: '15/06/2023',
    fileSize: '890 KB (PDF)',
  },
  {
    id: 'doc-3',
    code: 'QĐ 45/QĐ-UBND-CT',
    title: 'Quyết định kiện toàn Ban Chỉ đạo xây dựng xã hội học tập và Ban Giám đốc Trung tâm HTCĐ xã Cửa Tùng',
    level: 'Xã',
    issueDate: '10/01/2026',
    fileSize: '540 KB (PDF)',
  },
  {
    id: 'doc-4',
    code: 'QC 01/QC-TTHTCĐ',
    title: 'Quy chế tổ chức và hoạt động của Trung tâm Học tập cộng đồng xã Cửa Tùng',
    level: 'Trung tâm',
    issueDate: '18/01/2026',
    fileSize: '1.1 MB (PDF)',
  },
  {
    id: 'doc-5',
    code: 'TL 04/TL-KH-CT',
    title: 'Tài liệu hướng dẫn đánh giá, công nhận các danh hiệu học tập tại cơ sở theo bộ tiêu chí mới',
    level: 'Tài liệu',
    issueDate: '20/04/2026',
    fileSize: '2.3 MB (PDF)',
  },
];
