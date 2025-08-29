import React, { useEffect, useRef, useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  srcSet?: string;
  sizes?: string;
  placeholder?: string; // מאפשר להעביר תמונת placeholder אם יש
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  srcSet,
  sizes,
  placeholder = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", // 1x1 שקוף
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // טוען קצת לפני שנכנס למסך
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={isVisible ? src : placeholder}
      srcSet={isVisible ? srcSet : undefined}
      sizes={isVisible ? sizes : undefined}
      data-src={src}
      loading="lazy"
      style={{
        objectFit: "cover",
        transition: "opacity 0.3s ease-in-out",
        opacity: isVisible ? 1 : 0.5,
      }}
      {...props}
    />
  );
};

export default LazyImage;
