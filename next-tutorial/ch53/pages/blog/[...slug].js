import { useRouter } from "next/router";

function BlogPostPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>this is blog post page</h1>
    </div>
  );
}

export default BlogPostPage;
