import PostTable from '@/components/posts/PostsTable';
import BackButton from '@/components/ui/Bacbutton';

const PostsPage = () => {
  return (
    <div>
      <BackButton text='Go back' link='/' />
      <PostTable />
    </div>
  );
};

export default PostsPage;
