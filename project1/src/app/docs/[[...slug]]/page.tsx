export default function docs({ params }: { params: { slug: string[] } }) {
  if (params?.slug?.length === 2) {
    return (
      <h1>
        docs you are in {params.slug[0]} of the {params.slug[1]}
      </h1>
    );
  } else if (params?.slug?.length === 1) {
    return <h1>docs you are in {params.slug[0]} of the doc home</h1>;
  } else if (params?.slug?.length > 2) {
    return <h1>docs you are away from us {params.slug.join("")}</h1>;
  }
  return <h1>docs Home</h1>;
}
