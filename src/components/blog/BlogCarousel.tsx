import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { BlogCard } from './BlogCard';
import { useBlogCarousel } from '@/hooks/useBlogCarousel';

interface BlogCarouselProps {
  posts: {
    title: string;
    description: string;
    date: string;
    image: string;
    author: string;
  }[];
  autoPlay?: boolean;
}

export function BlogCarousel({ posts, autoPlay = true }: BlogCarouselProps) {
  const { currentIndex, nextSlide, prevSlide } = useBlogCarousel({ posts, autoPlay });

  const getCardStyle = (index: number) => {
    const diff = (currentIndex - index + posts.length) % posts.length;
    
    if (diff === 0) {
      // Current card (center)
      return {
        zIndex: 3,
        scale: 1,
        opacity: 1,
        blur: 0,
        translateX: 0,
        translateY: 0,
      };
    } else {
      // Previous card (top-left)
      return {
        zIndex: 2,
        scale: 0.95,
        opacity: 0.8,
        blur: 2,
        translateX: -20,
        translateY: -20,
      };
    }
  };

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {posts.map((post, index) => {
          const cardStyle = getCardStyle(index);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: cardStyle.scale,
                x: cardStyle.translateX,
                y: cardStyle.translateY,
              }}
              transition={{
                duration: 0.7,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className={`
                absolute
                w-[95%]
                max-w-3xl
                h-[80%]
                backdrop-blur-${cardStyle.blur}
                ${cardStyle.zIndex === 3 ? 'shadow-black/50' : 'shadow-black/30'}
                sm:h-[80%]
              `}
              style={{
                zIndex: cardStyle.zIndex,
                opacity: cardStyle.opacity,
              }}
            >
              <BlogCard
                title={post.title}
                description={post.description}
                date={post.date}
                image={post.image}
                className="bg-black/80 backdrop-blur-sm"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6">
        <Button
          variant="outline"
          onClick={prevSlide}
          className="bg-black/50 hover:bg-black/70"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={nextSlide}
          className="bg-black/50 hover:bg-black/70"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
