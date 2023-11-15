import { useState } from "react";
import {Menu} from "./Menu";
import style from './protfolio.module.scss';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);

  const filterItem = (categoryItem:string) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updateItems);
    setActive(true);
  };
  
  return (
    <>
        <div className={style.wrapper}>
            <div className="container">
                <ul className={style.list_items}>
                    <li className="nav-item">
                        <a
                        className={active ? "nav-link" : "nav-link active"}
                        href="javascript:void(0);"
                        onClick={() => setItems(Menu)}
                        >
                        All
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={active ? "nav-link" : "nav-link active"}
                        href="javascript:void(0);"
                        onClick={() => filterItem("branding")}
                        >
                        branding
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={active ? "nav-link" : "nav-link active"}
                        href="javascript:void(0);"
                        onClick={() => filterItem("photoshop")}
                        >
                        Photoshop
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className={active ? "nav-link" : "nav-link active"}
                        href="javascript:void(0);"
                        onClick={() => filterItem("fashion")}
                        >
                        Fashion
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className={active ? "nav-link" : "nav-link active"}
                        href="javascript:void(0);"
                        onClick={() => filterItem("product")}
                        >
                        product
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className="container">
            <div className="row">
                <div className={style.mainBody}>
                    {items.map((item) => {
                        const { id, image, imgSize } = item;
                        let imgClass;
                        if (imgSize === 'small') {
                            imgClass = style.small;
                        } else if (imgSize === 'large') {
                            imgClass = style.large;
                        } else {
                            imgClass = style.normal;
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

