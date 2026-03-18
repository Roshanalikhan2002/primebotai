import { useEffect, useState } from "react";
import companyLogo from "@assets/company_logo_1773792107107.png";

export function TransparentLogo({ className }: { className?: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Convert black background to true alpha transparency
      // by mapping the maximum color channel to the alpha channel
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        
        // Find the brightest channel value
        const luma = Math.max(r, g, b);
        
        // If it's completely black, alpha is 0. 
        // We multiply by 1.5 to boost opacity of the lit areas
        // and aggressively fade the darker greys. 
        data[i+3] = Math.min(255, (luma > 10 ? luma * 1.5 : 0));
        
        // Optional: boost the brightness of the remaining colors slightly
        // so it looks like it's glowing (simulating 'screen' blending)
        if (data[i+3] > 0) {
            data[i] = Math.min(255, r * 1.3);
            data[i+1] = Math.min(255, g * 1.3);
            data[i+2] = Math.min(255, b * 1.3);
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      setSrc(canvas.toDataURL("image/png"));
    };
    img.src = companyLogo;
  }, []);

  if (!src) return <div className={`animate-pulse bg-white/5 rounded-2xl ${className}`} />;

  return <img src={src} alt="Primebot AI Logo" className={className} />;
}
