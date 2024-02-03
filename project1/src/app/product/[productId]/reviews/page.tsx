export default function reviews({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>ALl Reviews of Product {params.productId}</h1>;
}
