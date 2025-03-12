const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-400">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className="text-slate-500 text-sm mt-2">
          Built with <span className="text-primary">❤</span> using React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
