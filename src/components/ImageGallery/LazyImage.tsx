import React, { useEffect, useRef, useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, ...props }) => {
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
      src={isVisible ? src : undefined}
      data-src={src}
      loading="lazy"
      {...props}
    />
  );
};

export default LazyImage;
