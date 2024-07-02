import DashBoardCard from '@/components/dasboard/DashboardCard';
import {Button} from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <div className="flex-col md:flex-row justify-between gap-5 mb-5">
      <DashBoardCard/>
      </div>
    
   </>
  );
}
