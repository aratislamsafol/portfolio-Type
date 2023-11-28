import { useState, useEffect } from "react";
import { Menu } from "./Menu";
import style from "./protfolio.module.scss";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState("All");

  useEffect(() => {
    // Set initial items when the component mounts
    filterItem("All");
  }, []);

  const filterItem = (categoryItem: string) => {
    setActive(categoryItem);
    const updateItems =
      categoryItem === "All"
        ? Menu
        : Menu.filter((curElem) => curElem.category === categoryItem);
    setItems(updateItems);
  };

  return (
    <>
      <div className={`${style.wrapper}`}>
        <div className="container">
          <ul className={style.list_items}>
            {["All", "branding", "photoshop", "fashion", "product"].map(
              (category) => (
                <li className="nav-item" key={category}>
                  <a
                    className={
                      active === category
                        ? `${style.navLink} ${style.active}`
                        : style.navLink
                    }
                    href="javascript:void(0);"
                    onClick={() => filterItem(category)}
                  >
                    {category}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className={`${style.grid_wrapper}`}>
            {items.map((item) => {
              const { id, image, imgSize } = item;
              let imgClass;
              if (imgSize === "wide") {
                imgClass = style.wide;
              } else if (imgSize === "tall") {
                imgClass = style.tall;
              } else if (imgSize === "normal") {
                imgClass = style.normal;
              } else {
                imgClass = style.big;
              }
              return (
                <div className={imgClass} key={id}>
                  <img src={image} alt="portfolio images" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
