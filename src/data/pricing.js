export const pricingPackages = [
  {
    id: 'co-ban',
    name: 'Gói Cơ Bản',
    price: '2.8 triệu',
    unit: '/m²',
    popular: false,
    description: 'Phù hợp cho nhà ở tạm, kho bãi và công trình đơn giản.',
    features: [
      'Khung thép mạ kẽm',
      'Panel EPS 50mm',
      'Mái tôn cách nhiệt',
      'Nền bê tông cốt thép',
      'Hệ thống điện cơ bản',
      'Cửa nhôm kính tiêu chuẩn',
      'Sơn nước ngoại thất',
      'Bảo hành 12 tháng',
    ],
  },
  {
    id: 'tieu-chuan',
    name: 'Gói Tiêu Chuẩn',
    price: '3.8 triệu',
    unit: '/m²',
    popular: true,
    description: 'Lựa chọn phổ biến nhất cho nhà ở và homestay.',
    features: [
      'Khung thép mạ kẽm',
      'Panel EPS 75mm',
      'Mái tôn cách nhiệt',
      'Nền bê tông cốt thép',
      'Hệ thống điện cơ bản',
      'Cửa nhôm kính tiêu chuẩn',
      'Sơn nước ngoại thất',
      'Trần thạch cao',
      'Sàn gạch ceramic',
      'Thiết bị vệ sinh cơ bản',
      'Hệ thống nước nóng lạnh',
      'Bảo hành 18 tháng',
    ],
  },
  {
    id: 'cao-cap',
    name: 'Gói Cao Cấp',
    price: '5.2 triệu',
    unit: '/m²',
    popular: false,
    description: 'Hoàn thiện cao cấp, sẵn sàng ở ngay khi bàn giao.',
    features: [
      'Khung thép mạ kẽm',
      'Panel PU 100mm',
      'Mái tôn cách nhiệt',
      'Nền bê tông cốt thép',
      'Hệ thống điện đồng bộ',
      'Cửa nhôm Xingfa',
      'Sơn nước ngoại thất',
      'Trần thạch cao',
      'Sàn gỗ công nghiệp',
      'Thiết bị vệ sinh cao cấp',
      'Hệ thống điều hòa',
      'Nội thất cơ bản',
      'Hệ thống nước nóng lạnh',
      'Bảo hành 24 tháng',
    ],
  },
];

export const costFactors = [
  {
    icon: 'Ruler',
    title: 'Diện tích xây dựng',
    description:
      'Diện tích càng lớn, đơn giá trên mỗi m² càng giảm nhờ tối ưu vật liệu và nhân công.',
  },
  {
    icon: 'Stack',
    title: 'Loại vật liệu',
    description:
      'Chất lượng vật liệu ảnh hưởng trực tiếp đến chi phí. Panel PU đắt hơn EPS, cửa Xingfa đắt hơn cửa thường.',
  },
  {
    icon: 'Foundation',
    title: 'Nền móng',
    description:
      'Địa chất nền đất quyết định loại móng cần thiết. Đất yếu cần gia cố, chi phí móng tăng thêm.',
  },
  {
    icon: 'PaintBrush',
    title: 'Mức hoàn thiện',
    description:
      'Hoàn thiện cơ bản (phần thô) hay trọn gói (nội thất, thiết bị) sẽ tạo ra chênh lệch chi phí đáng kể.',
  },
  {
    icon: 'MapPin',
    title: 'Vị trí thi công',
    description:
      'Khoảng cách vận chuyển vật liệu và điều kiện giao thông, mặt bằng tại địa điểm thi công.',
  },
];
