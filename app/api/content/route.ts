import { NextResponse } from 'next/server';

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
  return NextResponse.json(posts);
}