import React from 'react';
import { useQuery } from '@tanstack/react-query';

export default function About() {
  const { data, isLoading } = useQuery(['about'], async () => {
    const response = await fetch('http://localhost:8000/about');
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const about = data?.about?.[0]?.aboutUs;

  return (
    <section>
      <h1>{about?.title}</h1>
      <h2>{about?.subtitle}</h2>
      {about?.img && <img src={about.img} alt="About" />}
      <div>
        {about?.content.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
      <div>
        {about?.stats?.map((stat, idx) => (
          <div key={idx}>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
