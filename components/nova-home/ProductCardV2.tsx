import { ProductCard } from "@/components/site/ProductCard";
import type { Product } from "@/lib/products-data";

interface ProductCardV2Props {
  product: Product;
  imageSrc?: string;
  imagePosition?: string;
  eagerImage?: boolean;
  revealIndex?: number;
}

export function ProductCardV2({
  product,
  imageSrc,
  imagePosition,
  eagerImage = false,
  revealIndex = 0,
}: ProductCardV2Props) {
  return (
    <ProductCard
      product={product}
      imageSrc={imageSrc}
      imagePosition={imagePosition}
      eagerImage={eagerImage}
      revealIndex={revealIndex}
      revealScope="nova"
      conversionSource="product_card_v2"
    />
  );
}
