import { useState } from 'react';
import { PaperPlaneTilt } from '@phosphor-icons/react';
import './ContactForm.css';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    area: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã gửi yêu cầu! Chúng tôi sẽ liên hệ trong 24 giờ.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: '',
      area: '',
      message: '',
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Họ và tên
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input"
            placeholder="Nguyễn Văn A"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Số điện thoại
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="0909 xxx xxx"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="projectType">
            Loại công trình
          </label>
          <select
            id="projectType"
            name="projectType"
            className="form-input"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Chọn loại công trình</option>
            <option value="nha-o">Nhà ở</option>
            <option value="homestay">Homestay</option>
            <option value="van-phong">Văn phòng</option>
            <option value="quan-cafe">Quán cafe</option>
            <option value="nha-xuong">Nhà xưởng</option>
            <option value="khac">Khác</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="area">
          Diện tích dự kiến
        </label>
        <input
          id="area"
          name="area"
          type="text"
          className="form-input"
          placeholder="Ví dụ: 80m²"
          value={formData.area}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">
          Nội dung yêu cầu
        </label>
        <textarea
          id="message"
          name="message"
          className="form-input form-textarea"
          placeholder="Mô tả yêu cầu của bạn..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-lg">
        <PaperPlaneTilt size={18} weight="fill" />
        Gửi yêu cầu tư vấn
      </button>
    </form>
  );
}
