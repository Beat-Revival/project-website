"use client";

import { useState, useEffect } from 'react';

function getServerKillDate(): number {
  const now = new Date().getTime();
  const killDate = new Date('2023-12-08T21:48:00Z').getTime();

  const differenceInMilliseconds = Math.abs(now - killDate);

  return Math.floor(differenceInMilliseconds / 86400000);
}

export default function Home(): JSX.Element {
  const [daysAgo, setDaysAgo] = useState<number | string>('...');

  useEffect(() => {
    setDaysAgo(getServerKillDate());
  }, []);

  return (
    <section className="py-8 px-4">
      <div>
        <p className="text-2xl mb-6">
          <strong>Welcome to the Beat Revival.</strong>
        </p>
        <br />
        <p className="mb-4">
          This project aims to bring back the online functionality of Mirror&apos;s
          Edge: Catalyst through the reverse engineering of EA/DICE&apos;s server
          software.
        </p>
        <p className="mb-8">
          This project is still in development and isn&apos;t ready just yet but if you
          would like to keep up-to-date with the project&apos;s development then you
          can join our Discord.
        </p>
        <p>
          The servers for Mirror&apos;s Edge Catalyst were shut down{' '}
          <strong>{daysAgo} days ago.</strong>
        </p>
      </div>
    </section>
  );
}