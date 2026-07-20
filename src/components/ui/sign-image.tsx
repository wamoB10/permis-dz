import Image from "next/image"
import { cn } from "@/lib/utils"

interface SignImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function SignImage({
  src,
  alt,
  width = 96,
  height = 96,
  className,
  priority = false,
}: SignImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("object-contain", className)}
    />
  )
}
