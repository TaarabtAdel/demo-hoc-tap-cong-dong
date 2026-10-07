import React from 'react';
import { Home, BookOpen, MapPin, Award, ArrowRight } from 'lucide-react';

interface LifelongLearningSectionProps {
  onLearnMore: () => void;
}

export const LifelongLearningSection: React.FC<LifelongLearningSectionProps> = ({
  onLearnMore,
}) => {
  const models = [
    {
      id: 'family',
      icon: Home,
      title: 'Gia đình học tập',
      color: 'bg-[#1d6fc9]',
      description: 'Mỗi gia đình là một lớp học, cha mẹ và con cái cùng học, cùng tiến bộ.',
      criteria: 'Gia đình có nếp sống văn hóa, các thành viên đều có ý thức tự học thường xuyên.',
    },
    {
      id: 'clan',
      icon: BookOpen,
      title: 'Dòng họ học tập',
      color: 'bg-[#d97706]',
      description: 'Gắn kết truyền thống hiếu học, khuyến khích con cháu học tập và thành đạt.',
      criteria: '100% gia đình trong dòng họ đăng ký Gia đình học tập; có Quỹ khuyến học.',
    },
    {
      id: 'community',
      icon: MapPin,
      title: 'Cộng đồng học tập',
      color: 'bg-[#2a8a35]',
      description: 'Thôn, khu phố cùng tổ chức sinh hoạt, chia sẻ kiến thức và kỹ năng sống.',
      criteria: 'Nhà văn hóa thôn hoạt động hiệu quả, có tủ sách và tổ công nghệ số cộng đồng.',
    },
    {
      id: 'citizen',
      icon: Award,
      title: 'Công dân học tập',
      color: 'bg-[#7c3aed]',
      description: 'Mỗi người dân chủ động học tập, nâng cao kỹ năng số và nghề nghiệp.',
      criteria: 'Biết tự học qua sách báo, mạng internet, áp dụng khoa học vào sản xuất.',
    },
  ];

  return (
    <section id="hoc-suot-doi" className="py-12 bg-[#eef5fd] border-y border-[#d9e4f2]">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#124a9e] flex items-center gap-2.5 mb-2">
            <Award className="w-7 h-7 text-[#0a58c8]" />
            Học tập suốt đời
          </h2>
          <p className="text-[#566681] text-sm sm:text-base max-w-3xl leading-relaxed">
            Xây dựng xã hội học tập từ mỗi gia đình, dòng họ và cộng đồng dân cư. Những mô
            hình học tập hiệu quả, gương người dân tự học được ghi nhận và lan tỏa tại xã Cửa Tùng.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {models.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#d9e4f2] p-5 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center mb-3.5 shadow-xs`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#124a9e] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#566681] leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#d9e4f2]/70 text-xs text-[#1b2740]/80">
                  <span className="font-semibold text-[#0a58c8]">Tiêu chí: </span>
                  {item.criteria}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-7">
          <button
            type="button"
            onClick={onLearnMore}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0a58c8] hover:bg-[#0848a6] text-white font-medium text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
          >
            <span>Tìm hiểu tiêu chuẩn các mô hình học tập</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
