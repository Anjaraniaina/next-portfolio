import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(/coffee_banner.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hi! I&#39m Anjaraniaina</h1>
      <p className="mb-5 text-3xl">
        I&#39m excited to work with you.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </main>
  );
}
