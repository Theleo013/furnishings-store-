import "./style.css";
import CardGallery from "./Gallery";
import Cards from "./cards";
import { ReactComponent as IconMagnifier } from "../icons/magnifier.svg";
import { ReactComponent as IconCart } from "../icons/cart-icon.svg";
import { ReactComponent as IconUser } from "../icons/user.svg";

//import { Group, Button } from "@mantine/core";

const FurnitureStore = () => {
  return (
    <main className="main_container">
      <section className="menu_main">
        <header className="menu_container">
          <div className="main_name">Drile</div>
          <div className="menu_item">
            <a href="[]">Home</a>
            <a href="[]">Shop</a>
            <a href="[]">Product</a>
            <a href="[]">Blog</a>
            <a href="[]">Page</a>
            <a href="[]">Contact</a>
          </div>
          <ul className="menu_icon menu_icon-min">
            <li className="menu_icon-search">
              <a href="[]" title="search" />
              <IconMagnifier />
              <IconCart />
              <IconUser />
            </li>
          </ul>
        </header>
      </section>
      <section className="gallery_main">
        <div className="gallery_slider">
          <CardGallery />
        </div>
        <square>
          <div className="Gallery_write">
            <div>Get ready for Our</div>
            <div>stylist chair</div>
          </div>

          <div id="Square_box" className="Square">
            <div className="Button_style">
              <a className="shop_button" href="[]">
                SHOP NOW
              </a>
            </div>
            <div className="text_style-one">Best Seller Items</div>
            <Cards />
          </div>
        </square>
      </section>
    </main>
  );
};

export default FurnitureStore;
