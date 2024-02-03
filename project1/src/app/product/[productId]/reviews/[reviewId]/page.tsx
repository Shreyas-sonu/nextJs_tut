import { notFound } from "next/navigation";

export default function subReviews({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return Number(params.reviewId) <= 100 ? (
    <h1>
      Reviews {params.reviewId} of Product {params.productId}
    </h1>
  ) : (
    notFound()
  );
}
