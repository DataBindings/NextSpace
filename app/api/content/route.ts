import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

// Dummy data
const posts = [
  {
    title: 'Example Title',
    slug: 'Example Slug',
    content:
      'Example Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
];

export async function GET() {
  const session = await getServerSession();

  if (!session) {
    // redirect or render something else
  }

  return NextResponse.json(posts);
}