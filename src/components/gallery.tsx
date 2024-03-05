'use client'
import React from 'react'
import Image from 'next/image';
import { InfiniteMovingCards } from './ui/infinite_scroll';
const Gallery = () => {
  return (
    <div id='gallery'>
        <section className="pt-2 pb-1 mb-[-10px] bg-gradient-to-b from-gray-300 to-[#121212]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-3xl font-semibold text-slate-600">Gym <span className="text-orange-500">Gallery</span></h2>
              <p className="text-lg leading-relaxed m-4 text-zinc-300">
                Our Environment
              </p>
            </div>
            <div className='flex flex-row justify-center items-center space-x-6 flex-wrap space-y-4 '>
      {
        imgarray.map((img)=>(
            <Image 
            src={img}
            height={200}
            width={200}
            alt='gallryImage'
            />
        ))
      }
            </div>
          </div>
        </div>
      </section>
        </div>
  )
}

export default Gallery

const imgarray = [
    'https://lh5.googleusercontent.com/p/AF1QipMI93v3eQ9NzxTMIW0MLbc0cC9mMUPYtSeonvZ9=w203-h203-k-no',
     'https://lh5.googleusercontent.com/p/AF1QipMVGSoo1_KSAh-IulQdUQN8Nk-oixnFwUFKzEdX=w203-h114-k-no',
     'https://lh5.googleusercontent.com/p/AF1QipMsT7nn0ZoLWcX5sL0xIVuhjZPFyRrulWzwLm2n=s412-k-no',
     'https://lh5.googleusercontent.com/p/AF1QipNT_HsVyB2xzLMJ_QSATywti1xZ-Uo6j2GL0-6n=w530-h298-k-no',
]

const images = [
    {
        quote:
          "",
        name: "",
        title: "",
        img: <Image src={imgarray[0]}
        height="400"
        width="400"
        alt="thumbnail"/>
      },
      {
        quote:
          "",
        name: "",
        title: "",
        img: <Image src={imgarray[1]}
        height="400"
        width="400"
        alt="thumbnail"/>
      },
      {
        quote:
          "",
        name: "",
        title: "",
        img: <Image src={imgarray[2]}
        height="400"
        width="400"
        alt="thumbnail"/>
      },
      {
        quote:
          "",
        name: "",
        title: "",
        img: <Image src={imgarray[3]}
        height="400"
        width="400"
        alt="thumbnail"/>
      },
]

