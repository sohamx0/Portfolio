export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400">
          © {currentYear} Soham Maid. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
