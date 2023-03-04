'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { uid } from 'uid'
import { Button } from '../Button'

function MobileCategories({ data }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free',
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 3, spacing: 15 },
      },
    },
    slides: { perView: 2, spacing: 15 },
  })
  return (
    <div ref={sliderRef} className='keen-slider'>
      {data.map(({ node }) => {
        return (
          <div className='keen-slider__slide' key={uid()}>
            <Button href={node.handle} intent='category' fullWidth>
              <div className='font-extrabold'>{node.handle}</div>
            </Button>
          </div>
        )
      })}
    </div>
  )
}

export default MobileCategories
