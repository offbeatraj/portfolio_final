// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="text-center py-4 text-white text-sm bg-black/60">
        © {new Date().getFullYear()} Rajendra Behera. All rights reserved.
      </footer>
    );
  }