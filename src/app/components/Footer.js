const Footer = () => {
  const date = new Date();

  return (
    <footer
      id="pageFooter"
      className="p-4 h-[200px] text-xl font-bold flex flex-col justify-end items-center gap-4 min-[540px]:flex-row min-[540px]:justify-evenly min-[540px]:items-end text-[rgb(var(--nav-bg-color))]"
    >
      <p className="">&copy;{date.getFullYear()}</p>

      <p>Udoh Abasi</p>
    </footer>
  );
};

export default Footer;
