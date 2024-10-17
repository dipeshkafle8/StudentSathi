import React from 'react';
import './posts.css';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="projcard-container">
            {posts.map(post => (    
  <div className="projcard projcard-blue">
    <div className="projcard-innerbox">
      <img className="projcard-img" src={post.src} alt="University photos"/>
      <div className="projcard-textbox">
        <div className="projcard-title">{post.rank}.{post.name}</div>
        <div className="projcard-subtitle">About</div>
        <div className="projcard-bar"></div>
        <div className="projcard-description">{post.desc}</div>
        <div className="projcard-tagbox">
          <span className="projcard-tag">Avg Placement:{post.averageplacement}</span>
          <span className="projcard-tag">Fees:{post.fees}</span>
        </div>
      </div>
    </div>
  </div>
      ))}
      </div>
    
  );
};

export default Posts;