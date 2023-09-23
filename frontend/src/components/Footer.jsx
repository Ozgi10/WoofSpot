const Footer = () => {
  return (
    <footer className="bg-blue-500 w-fit p-6">
      <div className="container mx-auto text-white text-center">
        <p>&copy; {new Date().getFullYear()} Woof-Spot</p>
      </div>
    </footer>
  );
};

export default Footer;
