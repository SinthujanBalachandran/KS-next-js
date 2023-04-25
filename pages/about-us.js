export default function About({ posts }) {
  console.log(posts.data[0].title);
  return (
    <div>
      <div>
        {posts.data.map((post) => (
          <div key={post.title}>{post.title}</div>
        ))}
      </div>
    </div>
  );
  //   <div></div>;
}

export async function getStaticProps() {
  const res = await fetch("https://fakerapi.it/api/v1/images?_width=380");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
