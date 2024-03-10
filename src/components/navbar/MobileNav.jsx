function MobileNav({ children }) {
  return (
    <div className="md:hidden block fixed top-[100px] right-[20px] border-2 border-red-600">
      {children}
    </div>
  );
}
export default MobileNav;
