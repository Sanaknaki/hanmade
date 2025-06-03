import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ProductInfoModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: React.ReactNode;
  images: string[];
  materials: string;
  shipping: React.ReactNode;
  dimensions: string;
  onAction: () => void;
  actionLabel: string;
  buttonDisabled: boolean;
}

const ProductInfoModal: React.FC<ProductInfoModalProps> = ({
  open,
  onClose,
  title,
  description,
  images,
  materials,
  shipping,
  dimensions,
  onAction,
  actionLabel,
  buttonDisabled,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (open) setCurrent(0);
  }, [open, images]);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((current - 1 + images.length) % images.length);
  };
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((current + 1) % images.length);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 pointer-events-auto"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-white text-black w-full h-full max-w-4xl mx-auto rounded-none sm:rounded-none md:rounded-2xl shadow-lg flex flex-col md:flex-row animate-slide-up"
        style={{ maxHeight: "90vh", height: "100%", width: "100%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 z-20 p-2 rounded-full hover:bg-gray-200 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={28} className="text-white md:text-black" />
        </button>
        {/* Slideshow or images */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-black min-h-[300px] relative">
          {images && images.length > 0 ? (
            <>
              <img
                src={images[current]}
                alt={title}
                className="w-full h-full object-contain md:object-cover"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 text-2xl font-bold shadow hover:bg-white transition"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 text-2xl font-bold shadow hover:bg-white transition"
                  >
                    &#8594;
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs rounded-full px-3 py-1">
                    {current + 1} / {images.length}
                  </div>
                </>
              )}
            </>
          ) : (
            <span className="text-gray-400">[No Image]</span>
          )}
        </div>
        {/* Info section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-6 overflow-y-auto">
          <div className="flex-1 overflow-y-auto pb-24 md:pb-0">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <div className="mb-4 text-sm text-gray-700">{description}</div>
            <div className="mb-4">
              <div className="font-semibold">Materials</div>
              <div className="text-sm text-gray-700 mt-1">{materials}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Shipping & Delivery</div>
              <div className="text-sm text-gray-700 mt-1">{shipping}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Dimensions</div>
              <div className="text-sm text-gray-700 mt-1">{dimensions}</div>
            </div>
          </div>
          <button
            className={`w-full bg-black text-white py-3 rounded-lg font-bold text-lg sticky bottom-0 md:static mt-4 ${
              buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={onAction}
            disabled={buttonDisabled}
          >
            {actionLabel}
          </button>
        </div>
      </div>
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default ProductInfoModal;
