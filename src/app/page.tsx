// src/app/page.tsx
import SignupForm from '../components/signup/SignupForm';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <SignupForm />
      </div>
    </Layout>
  );
}