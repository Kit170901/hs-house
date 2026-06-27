import { useState } from 'react';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionTitle } from '../components/SectionTitle';
import { BlogCard } from '../components/BlogCard';
import { CTA } from '../components/CTA';
import { blogPosts, blogArticles } from '../data/blogPosts';
import './BlogPage.css';

export function BlogPage() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  const handleReadMore = (slug) => {
    if (selectedSlug === slug) {
      setSelectedSlug(null);
    } else {
      setSelectedSlug(slug);
      // Optional: scroll to article content smoothly
      setTimeout(() => {
        document.getElementById('article-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const activePost = blogPosts.find(p => p.slug === selectedSlug);
  const activeArticle = blogArticles[selectedSlug];

  return (
    <div className="page-blog">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="heading-1 page-hero-title">Blog & Tư vấn</h1>
            <p className="body-lg page-hero-desc">
              Cập nhật kiến thức mới nhất về xu hướng thiết kế, vật liệu và kinh nghiệm thi công nhà lắp ghép.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3 blog-grid">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={(i % 3) + 1}>
                <div onClick={() => handleReadMore(post.slug)} style={{ cursor: 'pointer', height: '100%' }}>
                  <BlogCard post={post} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {selectedSlug && activePost && activeArticle && (
            <div id="article-content" className="article-expanded">
              <div className="article-header">
                <div className="article-meta">
                  <span className="badge badge-lime">{activePost.tag}</span>
                  <span className="article-date">{activePost.date}</span>
                </div>
                <h2 className="heading-2 article-title">{activePost.title}</h2>
              </div>
              <div className="article-body">
                {activeArticle.content.split('\n\n').map((para, i) => (
                  <p key={i} className="body-base">
                    {para}
                  </p>
                ))}
              </div>
              <div className="article-footer">
                <button className="btn btn-ghost" onClick={() => setSelectedSlug(null)}>
                  Đóng bài viết
                  <CaretUp size={16} weight="bold" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Bạn cần tư vấn trực tiếp?"
        description="Liên hệ với đội ngũ kỹ sư của chúng tôi để được giải đáp mọi thắc mắc."
        primaryBtn="Nhận tư vấn miễn phí"
        variant="alt"
      />
    </div>
  );
}
