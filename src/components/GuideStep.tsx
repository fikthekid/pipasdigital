import { ImageWithFallback } from './figma/ImageWithFallback'

interface GuideStepProps {
  stepNumber: number
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export function GuideStep({ stepNumber, title, description, imageSrc, imageAlt }: GuideStepProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="relative mb-4">
        <div className="absolute -top-2 -left-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 shadow-lg">
          {stepNumber}
        </div>
        <div className="aspect-[9/16] w-full max-w-[200px] mx-auto rounded-xl overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-gray-800 leading-relaxed">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}