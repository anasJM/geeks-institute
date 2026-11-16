import posts from "../data/posts.json";

function PostList() {
  return (
    <>
      <h2>Hi this is a title</h2>
      <div>
        {posts.map((post) => (
          <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;
