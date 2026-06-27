import { Clock } from '@phosphor-icons/react';

export function BlogCard({ post }) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={post.image}
        alt={post.title}
        loading="lazy"
      />
      <div className="card-body">
        <span className="card-tag">{post.tag}</span>
        <h3 className="card-title">{post.title}</h3>
        <p className="card-desc">{post.excerpt}</p>
        <div className="card-meta">
          <span className="card-meta-item">
            <Clock size={14} />
            {post.readTime}
          </span>
          <span className="card-meta-item">{post.date}</span>
        </div>
      </div>
    </div>
  );
}
