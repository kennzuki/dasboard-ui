import DashBoardCard from '@/components/dasboard/DashboardCard';
import PostTable from '@/components/posts/PostsTable';
import { Button } from '@/components/ui/button'
import { Folder, MessageCircle, Newspaper, User} from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
      <DashBoardCard title='Posts' count={100} icon={<Newspaper className='text-slate-500' size={72} />}/>
      <DashBoardCard title='Categories' count={100} icon={<Folder className='text-slate-500' size={72} />}/>
      <DashBoardCard title='Users' count={100} icon={<User className='text-slate-500' size={72} />}/>
      <DashBoardCard title='Commentss' count={100} icon={<MessageCircle className='text-slate-500' size={72} />}/>
      </div>
    <PostTable title='Latest posts' limit={5}/>
   </>
  );
}
