function MobileNav({ children }) {
  return (
    <div className="md:hidden  fixed top-[55px] right-[22px] border-2 border-red-600 bg-white w-[50%] flex flex-col justify-center gap-3">
      {children}
    </div>
  );
}
export default MobileNav;
