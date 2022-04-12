import { Skeleton } from '@mui/material';

const ShimmerDetailTransaction = () => {
  return (
    <div className="flex justify-between space-x-10">
      <div className="w-full max-w-[400px]">
        <Skeleton className="rounded-lg" variant="rectangular" height={500} />
      </div>

      <div className="w-full space-y-8">
        <div className="space-y-4">
          <Skeleton className="rounded" variant="rectangular" height={30} />
          <div className="space-x-4 flex items-center">
            <div className="w-full max-w-[175px]">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
            <div className="w-full">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
          </div>
          <div className="space-x-4 flex items-center">
            <div className="w-full max-w-[175px]">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
            <div className="w-full">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
          </div>
          <div className="space-x-4 flex items-center">
            <div className="w-full max-w-[175px]">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
            <div className="w-full">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="rounded" variant="rectangular" height={30} />
          <div className="space-x-4 flex items-center">
            <div className="w-full max-w-[175px]">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
            <div className="w-full">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
          </div>
          <div className="space-x-4 flex items-center">
            <div className="w-full max-w-[175px]">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
            <div className="w-full">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
          </div>
          <div className="space-x-4 flex items-center">
            <div className="w-full max-w-[175px]">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
            <div className="w-full">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="rounded" variant="rectangular" height={30} />
          <div className="space-x-4 flex items-center">
            <div className="w-full max-w-[175px]">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
            <div className="w-full">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
          </div>
          <div className="space-x-4 flex items-center">
            <div className="w-full max-w-[175px]">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
            <div className="w-full">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
          </div>
          <div className="space-x-4 flex items-center">
            <div className="w-full max-w-[175px]">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
            <div className="w-full">
              <Skeleton className="rounded" variant="rectangular" height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerDetailTransaction;
