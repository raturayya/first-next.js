import Image from 'next/image';
import Link from 'next/link';

const EmptyStateRedeem = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full max-w-[450px] p-6">
        <Image src="/images/content/redeem.png" alt="Redeem Empty" width={230} height={320} />

        <div className="text-center space-y-2">
          <h5 className="h4 font-bold">Redeem is empty</h5>
          <p className="text-gray-400">We cannot find you are looking for</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyStateRedeem;
