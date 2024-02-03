export default function subProduct({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Product info {params.productId}</h1>;
}
