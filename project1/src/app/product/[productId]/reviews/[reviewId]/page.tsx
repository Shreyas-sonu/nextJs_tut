export default function subReviews({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <h1>
      Reviews {params.reviewId} of Product {params.productId}
    </h1>
  );
}
