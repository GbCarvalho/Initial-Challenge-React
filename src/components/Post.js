import React from "react";

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img src={author.avatar} alt="profile-pic" className="avatar" />
      <div className="details">
        <span>{author.name}</span>
        <p className="date">{date}</p>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img src={comment.author.avatar} className="avatar" />

          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default Post;
