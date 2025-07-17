'use client';
import { useParams } from 'next/navigation';

export default function SinglePage() {
  const { id } = useParams();

  return <div> Page {id} </div>;
}
