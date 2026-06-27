export const materials = [
  {
    id: 'khung-thep',
    name: 'Khung thép',
    icon: 'Cube',
    shortDesc: 'Khung chịu lực chính cho toàn bộ công trình lắp ghép.',
    fullDesc:
      'Khung thép là bộ xương chính của nhà lắp ghép, được gia công từ thép hình và thép ống. Hệ khung đảm bảo khả năng chịu lực, chống gió bão và tuổi thọ trên 50 năm khi được mạ kẽm chống gỉ đúng tiêu chuẩn.',
    pros: [
      'Chịu lực cao, bền vững',
      'Thi công lắp đặt nhanh',
      'Tái sử dụng được',
      'Tuổi thọ trên 50 năm',
    ],
    cons: [
      'Chi phí ban đầu cao hơn gỗ',
      'Cần xử lý chống gỉ định kỳ',
    ],
  },
  {
    id: 'thep-c550',
    name: 'Thép C550',
    icon: 'Stack',
    shortDesc: 'Thép hình C cường độ cao, dùng làm xà gồ và khung phụ.',
    fullDesc:
      'Thép C550 là loại thép mạ kẽm cường độ cao, được cán nguội thành hình chữ C. Sử dụng phổ biến làm xà gồ mái, khung vách và hệ giằng cho nhà lắp ghép nhẹ. Trọng lượng nhẹ nhưng chịu lực tốt.',
    pros: [
      'Trọng lượng nhẹ',
      'Cường độ chịu lực cao',
      'Đã mạ kẽm sẵn, chống gỉ tốt',
    ],
    cons: [
      'Không phù hợp nhịp quá lớn',
      'Cần tính toán kỹ khi sử dụng',
    ],
  },
  {
    id: 'thep-hop',
    name: 'Thép hộp',
    icon: 'BoundingBox',
    shortDesc: 'Thép hộp vuông/chữ nhật cho cột, dầm chính.',
    fullDesc:
      'Thép hộp là loại thép được hàn hoặc cán thành tiết diện vuông hoặc chữ nhật. Sử dụng làm cột, dầm chính và các chi tiết kết cấu chịu lực lớn. Bề mặt phẳng, dễ gia công và liên kết.',
    pros: [
      'Tiết diện đều, thẩm mỹ cao',
      'Chịu lực đa hướng',
      'Liên kết dễ dàng',
    ],
    cons: [
      'Nặng hơn thép C',
      'Chi phí cao hơn thép hình thông thường',
    ],
  },
  {
    id: 'panel-eps',
    name: 'Tấm Panel EPS',
    icon: 'Wall',
    shortDesc: 'Tấm tường cách nhiệt 3 lớp, lõi xốp EPS.',
    fullDesc:
      'Panel EPS gồm 2 lớp tôn mạ kẽm kẹp lõi xốp EPS (Expanded Polystyrene). Có khả năng cách nhiệt, cách âm tốt, trọng lượng nhẹ. Là vật liệu phổ biến nhất cho vách và mái nhà lắp ghép nhờ giá thành hợp lý.',
    pros: [
      'Cách nhiệt tốt',
      'Trọng lượng nhẹ',
      'Giá thành hợp lý',
      'Thi công nhanh, sạch',
    ],
    cons: [
      'Khả năng chống cháy hạn chế',
      'Cách âm kém hơn PU',
    ],
  },
  {
    id: 'cemboard',
    name: 'Tấm Cemboard',
    icon: 'Square',
    shortDesc: 'Tấm xi măng sợi, chống cháy, chống ẩm tốt.',
    fullDesc:
      'Cemboard (tấm xi măng cellulose) là vật liệu composite từ xi măng và sợi cellulose. Có khả năng chống cháy, chống ẩm, chống mối mọt vượt trội. Bề mặt cứng, có thể sơn và ốp đá trang trí.',
    pros: [
      'Chống cháy tốt',
      'Chống ẩm, chống mối mọt',
      'Bề mặt cứng, bền',
      'Dễ thi công ốp, sơn',
    ],
    cons: [
      'Nặng hơn panel EPS',
      'Cách nhiệt kém hơn panel',
    ],
  },
  {
    id: 'vach-ngan',
    name: 'Vách ngăn',
    icon: 'SplitVertical',
    shortDesc: 'Hệ vách ngăn nội thất nhẹ, linh hoạt bố trí.',
    fullDesc:
      'Vách ngăn nội thất sử dụng khung xương thép nhẹ kết hợp tấm thạch cao hoặc cemboard. Dễ dàng lắp đặt, tháo dỡ và thay đổi bố cục không gian bên trong mà không ảnh hưởng đến kết cấu chịu lực.',
    pros: [
      'Linh hoạt thay đổi bố trí',
      'Trọng lượng nhẹ',
      'Thi công nhanh, sạch sẽ',
    ],
    cons: [
      'Cách âm hạn chế nếu không xử lý',
      'Không chịu lực được',
    ],
  },
  {
    id: 'mai-lop',
    name: 'Mái lợp',
    icon: 'House',
    shortDesc: 'Hệ mái tôn cách nhiệt, chống dột, chống nóng.',
    fullDesc:
      'Mái lợp nhà lắp ghép sử dụng tôn mạ kẽm hoặc panel mái có lõi cách nhiệt. Hệ mái được thiết kế với độ dốc phù hợp, thoát nước tốt, chống dột và giảm nhiệt hiệu quả cho không gian bên dưới.',
    pros: [
      'Chống dột tốt',
      'Cách nhiệt, giảm nóng',
      'Nhẹ, giảm tải kết cấu',
      'Lắp đặt nhanh chóng',
    ],
    cons: [
      'Cần bảo trì lớp sơn phủ',
      'Tiếng ồn khi mưa lớn (tôn đơn)',
    ],
  },
  {
    id: 'cua-nhom-kinh',
    name: 'Cửa nhôm kính',
    icon: 'Door',
    shortDesc: 'Hệ cửa nhôm kính cao cấp, cách âm, cách nhiệt.',
    fullDesc:
      'Cửa nhôm kính sử dụng thanh nhôm định hình kết hợp kính cường lực hoặc kính hộp. Đảm bảo cách âm, cách nhiệt, chống bụi và thẩm mỹ cao. Phổ biến các hệ Xingfa, Việt Pháp cho nhà lắp ghép.',
    pros: [
      'Thẩm mỹ cao, hiện đại',
      'Cách âm, cách nhiệt tốt',
      'Không bị cong vênh, mối mọt',
      'Đa dạng kiểu dáng',
    ],
    cons: [
      'Chi phí cao hơn cửa sắt',
      'Cần lắp đặt chuyên nghiệp',
    ],
  },
];

export const materialCategories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'khung', label: 'Khung thép' },
  { id: 'vach', label: 'Vách & Tường' },
  { id: 'mai-cua', label: 'Mái & Cửa' },
];

export const materialComparison = [
  {
    property: 'Trọng lượng',
    panel: 'Nhẹ (8-12 kg/m²)',
    cemboard: 'Trung bình (15-18 kg/m²)',
    steelFrame: 'Nặng (tùy tiết diện)',
  },
  {
    property: 'Cách nhiệt',
    panel: 'Tốt (lõi EPS/PU)',
    cemboard: 'Trung bình',
    steelFrame: 'Không có',
  },
  {
    property: 'Cách âm',
    panel: 'Khá (30-35 dB)',
    cemboard: 'Tốt (35-40 dB)',
    steelFrame: 'Không có',
  },
  {
    property: 'Chống cháy',
    panel: 'Hạn chế (EPS), Tốt (PU/Rockwool)',
    cemboard: 'Rất tốt (chống cháy cấp A)',
    steelFrame: 'Tốt (chịu nhiệt cao)',
  },
  {
    property: 'Tuổi thọ',
    panel: '20-30 năm',
    cemboard: '30-50 năm',
    steelFrame: '50+ năm (mạ kẽm)',
  },
  {
    property: 'Chi phí',
    panel: 'Thấp - Trung bình',
    cemboard: 'Trung bình',
    steelFrame: 'Trung bình - Cao',
  },
  {
    property: 'Thi công',
    panel: 'Rất nhanh (lắp ghép)',
    cemboard: 'Nhanh (bắn vít, trám mối nối)',
    steelFrame: 'Nhanh (bu-lông, hàn)',
  },
];

export const materialFAQ = [
  {
    question: 'Panel là gì?',
    answer:
      'Panel là loại tấm vật liệu xây dựng công nghiệp gồm 2 lớp tôn mạ kẽm bên ngoài kẹp lõi cách nhiệt bên trong. Lõi cách nhiệt có thể là EPS (xốp), PU (polyurethane) hoặc Rockwool (bông khoáng). Panel được sử dụng rộng rãi làm vách tường và mái cho nhà lắp ghép, nhà xưởng, kho lạnh nhờ khả năng cách nhiệt tốt và thi công nhanh chóng.',
  },
  {
    question: 'Cấu tạo panel gồm những gì?',
    answer:
      'Một tấm panel tiêu chuẩn gồm 3 lớp chính: lớp tôn mạ kẽm bên ngoài (dày 0.4-0.6mm, có sóng hoặc phẳng), lõi cách nhiệt ở giữa (EPS, PU hoặc Rockwool, dày 50-150mm), và lớp tôn mạ kẽm bên trong. Các lớp được liên kết bằng keo chuyên dụng dưới áp suất và nhiệt độ cao, tạo thành tấm vật liệu đồng nhất, cứng cáp.',
  },
  {
    question: 'So sánh panel EPS và panel PU?',
    answer:
      'Panel EPS (lõi xốp) có giá thành thấp hơn, trọng lượng nhẹ, cách nhiệt khá tốt, phù hợp cho nhà ở và văn phòng thông thường. Panel PU (lõi polyurethane) có khả năng cách nhiệt vượt trội hơn 40-50% so với EPS cùng độ dày, chống cháy tốt hơn, nhưng giá thành cao hơn. PU thường dùng cho kho lạnh, phòng sạch và công trình yêu cầu cách nhiệt cao.',
  },
  {
    question: 'Nhà lắp ghép có bền không?',
    answer:
      'Nhà lắp ghép có tuổi thọ từ 30 đến 50 năm tùy thuộc vào chất lượng vật liệu và bảo trì định kỳ. Khung thép mạ kẽm nhúng nóng có thể sử dụng trên 50 năm. Kết cấu lắp ghép được tính toán chịu gió bão cấp 12, chịu tải trọng theo tiêu chuẩn xây dựng Việt Nam. Nhiều công trình lắp ghép tại Nhật Bản, Úc đã tồn tại hơn 40 năm.',
  },
  {
    question: 'Cemboard có ưu điểm gì so với panel?',
    answer:
      'Cemboard (tấm xi măng sợi) có khả năng chống cháy vượt trội, đạt chuẩn chống cháy cấp A. Bề mặt cứng, có thể sơn, ốp gạch, ốp đá trang trí như tường xây truyền thống. Cemboard chống ẩm, chống mối mọt rất tốt. Tuy nhiên, cemboard nặng hơn panel và cần kết hợp thêm lớp cách nhiệt riêng nếu cần.',
  },
  {
    question: 'Chi phí vật liệu nhà lắp ghép bao nhiêu?',
    answer:
      'Chi phí vật liệu nhà lắp ghép dao động từ 1.5 đến 3.5 triệu đồng/m² tùy loại vật liệu và mức hoàn thiện. Trong đó, khung thép chiếm khoảng 30-35% chi phí, vách tường và mái chiếm 25-30%, phần còn lại là cửa, nền và hoàn thiện. So với nhà xây truyền thống, chi phí vật liệu nhà lắp ghép tiết kiệm được 20-30%.',
  },
  {
    question: 'Nên chọn vật liệu nào cho nhà lắp ghép?',
    answer:
      'Việc chọn vật liệu phụ thuộc vào mục đích sử dụng và ngân sách. Với nhà ở dân dụng, nên chọn khung thép mạ kẽm kết hợp panel EPS 75mm hoặc cemboard để đảm bảo bền đẹp và tiết kiệm. Với homestay, cafe, ưu tiên vật liệu thẩm mỹ cao như cemboard kết hợp kính cường lực. Với nhà xưởng, ưu tiên panel EPS hoặc tôn cách nhiệt để giảm chi phí trên diện tích lớn.',
  },
];
