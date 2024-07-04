import PostPagination from '@/components/posts/PostPagination';
import PostTable from '@/components/posts/PostsTable';
import BackButton from '@/components/ui/Bacbutton';

const PostsPage = () => {
  return (
    <div>
      <BackButton text='Go back' link='/' />
          <PostTable />
          <PostPagination/>
    </div>
  );
};

export default PostsPage;
