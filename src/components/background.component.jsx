const Background = ({ children }) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 transition-all w-full h-screen selection:bg-fuchsia-300 selection:text-fuchsia-900">
      {children}
    </div>
  );
};

export default Background;
