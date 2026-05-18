'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, HeartHandshake } from 'lucide-react';

const slides = [
  {
    image: '/data/images/india-village-school.png',
    eyebrow: 'Grace Foundation India',
    title: 'Embrace. Educate. Enhance. Empower.',
    text: 'A modern charity foundation supporting children, women, families, and communities through education, care, empowerment, and service.'
  },
  {
    image: '/data/images/india-women-education.jpg',
    eyebrow: 'Education & Dignity',
    title: 'Learning creates confidence, opportunity, and hope.',
    text: 'We support meaningful education and guidance so underserved communities can move forward with dignity.'
  },
  {
    image: '/data/images/india-food-distribution.jpg',
    eyebrow: 'Community Service',
    title: 'Serving people with compassion and practical help.',
    text: 'Grace Foundation believes that even small acts of service can create real change for vulnerable families.'
  },
  {
    image: '/data/images/grace-community-hands.jpg',
    eyebrow: 'Hope • Dignity • Service',
    title: 'Together, we can build a stronger tomorrow.',
    text: 'Partner with us through donations, volunteering, and community support.'
  },
  {
    image: '/data/images/grace-children-care.jpg',
    eyebrow: 'Children & Family Care',
    title: 'Every act of kindness can open a door.',
    text: 'Your support helps Grace Foundation extend encouragement, care, and practical help to families who need hope.'
  }
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="hero hero-slider">
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`hero-slide ${index === active ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(90deg, rgba(2, 12, 36, .92), rgba(7, 31, 75, .78), rgba(14, 62, 116, .46)), url('${item.image}')` }}
          aria-hidden={index !== active}
        />
      ))}

      <div className="container hero-content">
        <div className="hero-badge"><HeartHandshake size={18} /> Grace Foundation</div>
        <p className="eyebrow">{slide.eyebrow}</p>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/donate">Donate Today <ArrowRight size={18} /></Link>
          <Link className="btn btn-secondary" href="/about">Learn About Us</Link>
        </div>
        <div className="slider-dots" aria-label="Hero slideshow controls">
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              className={index === active ? 'active' : ''}
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
