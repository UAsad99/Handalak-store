import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { about_navitems, info_navitems, payment_systems } from 'data';
import { Logo } from 'subcomponents';

export default function Footer() {
  return (
    <footer>
      <div className='hidden md:block bg-[#242020] font-raleway'>
        <div className='pt-16 pb-12 mx-auto flex flex-col xl:flex-row xl:justify-between xl:items-start custom-container'>
          <div className='lg:mr-10 xl:mr-20 flex justify-between xl:flex-col mb-8 xl:mb-0'>
            <div className='flex mb-6'>
              <div className='mr-12 w-max'>
                <Link href="/">
                  <a>
                    <Image
                      src="/logo.png"
                      alt="Handalak"
                      width="129"
                      height="82"
                    />
                  </a>
                </Link>
                <div className='lg:py-6'>
                  <p className='font-medium text-base my-1 text-white'>Qo&lsquo;llab-quvvatlash telefon raqami</p>
                  <a
                    href="tel:+998712022021"
                    className='block font-bold text-lg my-1 text-white'
                  >
                    +998 (71) 202 20 21
                  </a>
                </div>
              </div>
              <ul className='flex flex-col space-y-6'>
                <li>
                  <a
                    href="https://facebook.com"
                    className='flex space-x-2'
                  >
                    <BsFacebook className='text-white w-[30px] h-[30px]' />
                    <span className='text-white flex items-center'>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    className='flex space-x-2'
                  >
                    <AiOutlineInstagram className='bg-white rounded-full w-[30px] h-[30px]' />
                    <span className='text-white flex items-center'>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    className='flex space-x-2'
                  >
                    <FaTelegram className='text-white w-[30px] h-[30px]' />
                    <span className='text-white flex items-center'>Telegram</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col lg:flex-row md:space-y-3 lg:space-y-0 lg:space-x-3'>
              <div>
                <Image
                  src="/download/apple-store.png"
                  alt="Apple App Handalak"
                  width="129"
                  height="38"
                />
              </div>
              <div>
                <Image
                  src="/download/play-store.png"
                  alt="Google App Handalak"
                  width="129"
                  height="38"
                />
              </div>
              <div>
                <Image
                  src="/download/huawei.svg"
                  alt="Huawei App Handalak"
                  width="129"
                  height="38"
                />
              </div>
            </div>
          </div>
          <div className='flex justify-between w-full lg:col-span-2'>
            <div className='space-y-7'>
              <div>
                <h5 className='text-red font-bold text-xl mb-4'>Ma&lsquo;lumot</h5>
                <ul className='mr-4 grid grid-cols-2 gap-y-3.5'>
                  {info_navitems.map((item, i) => (
                    <li key={i}>
                      <Link href={item.destination}>
                        <a className='block text-white text-base font-medium hover:text-gray-300 capitalize-first'>{item?.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className='text-red font-bold text-xl mb-4'>Biz haqimizda</h5>
                <ul className='mr-4 grid grid-cols-2 gap-y-3.5'>
                  {about_navitems.map((item, i) => (
                    <li key={i}>
                      <Link href={item.destination}>
                        <a className='block text-white text-base font-medium hover:text-gray-300 capitalize-first'>{item?.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href="https://stripe.com"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/logo-stripe.png"
                alt="Stripe"
                width={400}
                height={206}
                objectFit="contain"
              />
            </a>
          </div>
        </div>
        <div className='border-t border-solid py-8 text-base font-medium border-black text-gray-400'>
          <div className='mx-auto flex justify-between items-center flex-col md:flex-row custom-container'>
            <p className='md:mb-2 lg:mb-0'> © 2017-2022. OOO &ldquo;Handalak store&ldquo;</p>
            <ul className='flex items-center capitalize-first'>
              <li className='flex justify-around items-center'>
                <Link href="/">
                  <a className='block mx-4'>Ommaviy oferta</a>
                </Link>
              </li>
              <li className='flex justify-around items-center'>
                <Link href="/">
                  <a className='block mx-4'>Maxfiylik siyosati</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='block md:hidden bg-gray-100 px-4 py-8 font-bold text-gray-900 text-base'>
        <div className='container mx-auto'>
          <Link href="/">
            <a>
              <Image
                src="/logo.png"
                alt="Handalak
                Handalak"
                width="129"
                height="82"
              />
            </a>
          </Link>
          <p className='text-sm mt-4'>Qo&lsquo;llab-quvvatlash telefon raqami</p>
          <a href="tel:" className='block'>
            +998 (71) 202 20 21
          </a>
          <div className='flex flex-col mt-4'>
            <div>
              <Image
                src="/download/apple-store.png"
                alt="Apple App Handalak"
                width="178"
                height="52"
              />
            </div>
            <div>
              <Image
                src="/download/play-store.png"
                alt="Google App Handalak"
                width="178"
                height="52"
              />
            </div>
            <div>
              <Image
                src="/download/huawei.svg"
                alt="Huawei App Handalak"
                width="178"
                height="52"
              />
            </div>
          </div>
          <ul className='mt-8'>
            {[...info_navitems, ...about_navitems].map((item, i) => (
              <li key={i} className='mb-1.5'>
                <Link href={item.destination}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
