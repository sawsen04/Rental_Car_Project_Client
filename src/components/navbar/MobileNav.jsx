function MobileNav({ children }) {
  return (
    <div className="md:hidden  fixed top-[55px] right-[22px] bg-white w-[50%] flex flex-col justify-center gap-3">
      {children}
    </div>
  );
}
export default MobileNav;
