'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { uid } from 'uid'

function MobileProductsCarousel({ data }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free',
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 3, spacing: 0 },
      },
    },
    slides: { perView: 2, spacing: 0 },
  })
  return (
    <div ref={sliderRef} className='keen-slider'>
      {data.map(
        ({
          node: {
            title,
            availableForSale,
            images: { edges },
            priceRange: {
              minVariantPrice: { amount, currencyCode },
            },
          },
        }) => {
          return (
            <div
              className='keen-slider__slide flex flex-col justify-between border-2 border-Agray-200 p-2'
              key={uid()}
            >
              {availableForSale}
              {edges.map(({ node: { url, width, height, altText } }) => {
                return (
                  <div key={uid()}>
                    <Image
                      src={url}
                      width={width / 2}
                      height={height / 2}
                      alt={altText}
                    />
                  </div>
                )
              })}
              <div className='flex flex-col items-center justify-between gap-2 text-center'>
                <div className='text-sm'>{title}</div>
                <div className='rounded-full bg-Abadge px-4 py-2 text-xs font-bold  text-Ared'>
                  {amount} {currencyCode}
                </div>
              </div>
            </div>
          )
        },
      )}
    </div>
  )
}

export default MobileProductsCarousel
