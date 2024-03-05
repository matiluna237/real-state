import React, { useEffect } from 'react';
import PhotoSwipeLightbox from "photoswipe/lightbox";

const MyComponent = ({ length, property }) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#galeria",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  }, [length, property]); // Este efecto se ejecutará cada vez que length o property cambien

  return (
    <div
      className="pswp-gallery pswp-gallery--single-column grid grid-cols-1 md:grid-cols-3 gap-1 max-w-5xl"
      id="galeria"
    >
      {Array.from({ length }).map((_, i) => (
        <a
          href={property.images[i]}
          data-pswp-width="1152"
          data-pswp-height="767"
          target="_blank"
          key={i} // Asegúrate de agregar una clave única para cada elemento en el array
        >
          <img src={property.images[i]} alt="" className="h-full w-full" />
        </a>
      ))}
    </div>
  );
}

export default MyComponent;
