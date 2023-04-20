import React from 'react'
import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'
import Image from 'next/image'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in a few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Aliqua cillum fugiat occaecat nostrud ullamco anim velit sunt fugiat aute occaecat.</p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <Image src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
      
    </section>
  )

export default CardDeal