function MobileNav({ children }) {
  return (
    <div className="md:hidden text-[15px]  fixed top-[55px] right-[23px] w-[50%] flex flex-col justify-center gap-3 bg-white dark:bg-dark dark:text-white border-2 border-slate-800 shadow-xl shadow-white rounded-lg">
      {children}
    </div>
  );
}
export default MobileNav;
