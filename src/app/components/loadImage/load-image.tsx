'use client'

import {useState} from "react"
import "./load-image.scss"

interface LoadImageProps {
    image1 : string
    image2 : string
    image3 : string
    image4 : string
    
}
export function LoadImage({image1, image2, image3, image4} : LoadImageProps) {
    const [imageUrls, setImageUrls] = useState<string[]>([
        image1,
        image2,
        image3,
        image4
      ]);
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      const prev = () =>
        setCurrentImageIndex((curr) => (curr === 0 ? imageUrls.length - 1 : curr - 1));
    
      const next = () =>
        setCurrentImageIndex((curr) => (curr === imageUrls.length - 1 ? 0 : curr + 1));    
    return (
        <div className='imageCarousel'>
            <div className='inner'>
                {imageUrls.map((url, index) => (
                    <img 
                    key={index} 
                    src={url} 
                    alt={"image ${index}"}
                    style={{display: index === currentImageIndex ? "block" : "none",
                    width: "300px",
                    height: "600px",}}
                    />
                ))}
            </div>
            <div onClick={prev} className="prev"></div>
            <div  onClick={next} className="next"></div>    

             
        </div> 
    )
}