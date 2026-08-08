import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function V2Redirect({ params }) {
  redirect(`/${params.locale}`);
}
