import { Skeleton } from '@mui/material';

const ShimmerRedeem = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <Skeleton className="w-full min-h-[200px] rounded-md" variant="rectangular" />
      <Skeleton className="w-full min-h-[200px] rounded-md" variant="rectangular" />
      <Skeleton className="w-full min-h-[200px] rounded-md" variant="rectangular" />
      <Skeleton className="w-full min-h-[200px] rounded-md" variant="rectangular" />
      <Skeleton className="w-full min-h-[200px] rounded-md" variant="rectangular" />
      <Skeleton className="w-full min-h-[200px] rounded-md" variant="rectangular" />
      <Skeleton className="w-full min-h-[200px] rounded-md" variant="rectangular" />
    </div>
  );
};

export default ShimmerRedeem;
