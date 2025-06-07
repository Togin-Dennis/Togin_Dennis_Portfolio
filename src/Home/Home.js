import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('./Header/Header'));
const Profile = lazy(() => import('./Profile/Profile'));
const SkillsSection = lazy(() => import('./Skills/Skills'));
const About = lazy(() => import('./About/About'));
const Project = lazy(() => import('./Projectpage/Project'));
function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Header />
        <Profile />
        <SkillsSection />
        <About/>
        <Project/>
      </div>
    </Suspense>
  );
}

export default Home;
