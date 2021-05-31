const Header = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center container-header">
      <h1 className="header__title  p-5 m-2"> Nobel Prize Winners </h1>
      <p className="header__discription py-2 ">
        {" "}
        Between 1901 and 2020, the Nobel Prizes and the Prize in Economic
        Sciences were awarded 603 times to 962 people and organizations. With
        some receiving the Nobel Prize more than once, this makes a total of 930
        individuals and 25 organizations. Below, you can view the full list of
        Nobel Prizes and Nobel Laureates.
      </p>
    </div>
  );
};
export default Header;
