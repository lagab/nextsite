import { cn } from '@/lib/utils'
import React, { ReactElement } from 'react'

 export interface CtaImage {
  url: string, 
  title: string, 
  position: CtaImagePosition,
}

export enum CtaImagePosition {
  BEFORE = "BEFORE",
  AFTER = "AFTER",
}
interface CtaProps {
  title: string,
  body: string,
  image?: CtaImage,
  action?: ReactElement,
}

export const Cta = ({title, body, image,action}:CtaProps) => {
  const hasImageBefore = image != null && image.position === CtaImagePosition.BEFORE;
  const hasImageAfter = image != null && image.position === CtaImagePosition.AFTER;
  return (
    <section className="cta">
        <div className={cn("gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid  sm:py-16 lg:px-6", image != null && "md:grid-cols-2")}>
          {  image != null && image.position === CtaImagePosition.BEFORE && (
          <img className="w-full" src={image.url} alt={image?.title} />
          )} 
            <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{body}</p>
                {action && <>{action}</>}
            </div>
            {  image != null && image.position === CtaImagePosition.AFTER && (
          <img className="w-full" src={image.url} alt={image?.title} fill />
          )} 
        </div>
    </section>
  )
}
