import { ProductRates } from 'subcomponents'
import { CommentCard } from "components"
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';

export default function PrdComments({ comments, prdSlug }) {
  return (
    <>
      <div className='hidden md:block space-y-4'>
        <div className='px-7 py-6 rounded-2xl border border-dc-gray-5 flex lg:flex-row items-center justify-around w-full'>
          <div className='flex flex-col text-center w-56 mx-10'>
            <p className='text-dc-gray-8 font-bold text-5xl'>40</p>
            <p className='pt-2 pb-3.5 text-gray-400 font-medium text-base'>
              asosida <br />
              {comments.length} sharhlar
            </p>
            <div className='w-max mx-auto'>
              <ProductRates comments={comments} />
            </div>
            <button className='px-4 py-2 focus:outline-none w-full text-white font-bold rounded-xl bg-red mt-4'>
              Izox qoldiring
            </button>
          </div>
          <ul className='flex flex-col-reverse h-full'>
            {[...Array(6)].map((_, i) => (
              <li key={i} className='mb-2 flex items-center space-x-2'>
                <p className='text-gray-800 text-base font-medium block mr-4 text-center'>{i}</p>
                <div className='flex items-center space-x-4'>
                  <div className='relative bg-gray-200 h-1.5 w-52 mr-4 rounded-md overflow-hidden'>
                    <div
                      className='absolute top-0 h-1.5 bg-red rounded-md'
                      style={{ width: `${i * 20}%` }}
                    />
                  </div>
                  <p className='text-gray-800 text-base font-medium'>33%</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='grid grid-cols-1 gap-y-6 divide-y'>
          {comments.map((cmt, i) => <CommentCard key={i} comment={cmt} />)}
        </div>
      </div>
      <div className='md:hidden'>
        <div className="space-y-4">
          <div className='py-4 flex flex-col items-center overflow-hidden'>
            <p className='font-bold text-lg leading-6 text-black text-center'>
              4.5 / 5 <br />
              {comments.length} sharhlar
            </p>
            <ProductRates comments={comments} />
            <ul className='overflow-scroll grid grid-flow-col mt-4 max-w-full gap-x-4'>
              {comments.slice(0, 8).map(({rating, text}, i) => (
                <li key={`comment_${i}`} className='rounded-2xl bg-gray-100 p-4 min-w-[208px] space-y-2'>
                  <p className='font-medium mr-2 text-black text-lg leading-6 line-clamp-1'>John Brain</p>
                  <ProductRates rates={rating} small />
                  <p className='text-black text-base leading-5 line-clamp-6'>{text}</p>
                </li>
              ))}
            </ul>
            <Link href={`/review/${prdSlug}`}>
              <a className='mt-4 flex items-center justify-center py-2 px-4 w-full rounded-lg bg-gray-100 border-0 focus:outline-none'>
                <span className='text-base font-medium leading-5 text-black mr-2'>Barcha sharhlarni ko&apos;rish</span>
                <BsChevronRight className='text-[10px]' />
              </a>   
            </Link>
          </div>
        </div>
        <button className='w-full font-bold rounded-lg bg-green-600 text-white focus:outline-none border-0 px-4 py-2 mt-4'>
          Fikr qoldiring
        </button>
      </div>
    </>
  );
}