import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Clock } from "lucide-react"

interface BlogCardProps {
  title: string
  description: string
  date: string
  image?: string
}

function BlogCard({ title, description, date, image }: BlogCardProps) {
  return (
    <div className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-900 min-h-[400px] w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-900 opacity-90 pointer-events-none"></div>
      {image && (
        <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={800}
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4 relative z-10 flex flex-col justify-between h-[300px] mt-6">
        <div className="relative z-10">
          <div className="mb-2">
            <h3 className="text-xl font-bold mb-2 h-[4rem] overflow-hidden leading-tight text-black dark:text-white">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Clock className="h-4 w-4" />
              {date}
            </div>
          </div>
          <p className="line-clamp-3 mb-4 h-[7rem] overflow-hidden leading-relaxed text-black dark:text-white/90">
            {description}
          </p>
          <Button 
            variant="outline" 
            className="w-full hover:scale-105 transition-transform duration-300 dark:hover:bg-white/5"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  )
}

export { BlogCard }
