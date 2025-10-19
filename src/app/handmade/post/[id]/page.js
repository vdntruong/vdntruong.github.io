import ClientPostPage from './ClientPostPage';

export function generateStaticParams() {
  // Pre-render static IDs that exist in our mock dataset
  // Update this if you switch to CMS-backed IDs
  const ids = [1, 2, 3, 4, 5, 6];
  return ids.map((id) => ({ id: String(id) }));
}

export default function Page({ params }) {
  return <ClientPostPage id={params.id} />;
}
