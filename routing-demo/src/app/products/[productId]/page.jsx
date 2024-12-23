import { Metadata, ResolvingMetadata } from "next";

export const generateMetadata = async (props, parent) => {
  const parentMetadata = await parent;
  return {
    title: `Product ${props.params.productId}`,
    description: parentMetadata.title?.absolute,
  };
};

export default function ProductDetails(props) {
  return `Details about product ${props.params.productId}`;
}
