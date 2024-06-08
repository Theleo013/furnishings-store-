import { ReactComponent as IconSync } from "../icons/sync.svg";
import { ReactComponent as IconHeart } from "../icons/heart.svg";
import { ReactComponent as IconCartTwo } from "../icons/cart.svg";

const Cards = () => {
  return (
    <card className="card_section">
      <div className="card_content">
        <div className="card_icons">
          <button className="icon_0" style={{ background: `#fff` }}>
            <IconSync />
          </button>
          <button className="icon_1" style={{ background: `#fff` }}>
            <IconHeart />
          </button>
          <button className="icon_2" style={{ background: `#fff` }}>
            <IconCartTwo />
          </button>
        </div>
        <div className="mini_rec-Up-one">HOT</div>
        <div className="mini_rec-Up-two">-5%</div>
        <img className="main_card_image-one" src="assets/card1.png" alt="img" />
        <div className="text_id-one">Metal Vintage Pendant</div>
        <div className="number_id-one">$79.00</div>
      </div>
      <div className="card_content-two">
        <div className="card_icons">
          <button className="icon_0" style={{ background: `#fff` }}>
            <IconSync />
          </button>
          <button className="icon_1" style={{ background: `#fff` }}>
            <IconHeart />
          </button>
          <button className="icon_2" style={{ background: `#fff` }}>
            <IconCartTwo />
          </button>
        </div>
        <img className="main_card_image-two" src="assets/card2.png" alt="img" />
        <div className="text_id-two">Klosh Table Clock</div>
        <div className="number_id-two">$99.00</div>
      </div>
      <div className="card_content-three">
        <div className="card_icons">
          <button className="icon_0" style={{ background: `#fff` }}>
            <IconSync />
          </button>
          <button className="icon_1" style={{ background: `#fff` }}>
            <IconHeart />
          </button>
          <button className="icon_2" style={{ background: `#fff` }}>
            <IconCartTwo />
          </button>
        </div>
        <img
          className="main_card_image-three"
          src="assets/card3.png"
          alt="img"
        />
        <div className="text_id-three">Arne Dining Chair</div>
        <div className="number_id-three">$350.00</div>
      </div>
      <div className="card_content-four">
        <div className="card_icons">
          <button className="icon_0" style={{ background: `#fff` }}>
            <IconSync />
          </button>
          <button className="icon_1" style={{ background: `#fff` }}>
            <IconHeart />
          </button>
          <button className="icon_2" style={{ background: `#fff` }}>
            <IconCartTwo />
          </button>
        </div>
        <div className="mini_rec-Up-one">HOT</div>
        <img
          className="main_card_image-four"
          src="assets/card4.png"
          alt="img"
        />
        <div className="text_id-four">Klosh Wall Clock</div>
        <div className="number_id-four">$80.00-$129.00</div>
      </div>
      <div className="card_content-five">
        <div className="card_icons-down">
          <button className="icon_0" style={{ background: `#fff` }}>
            <IconSync />
          </button>
          <button className="icon_1" style={{ background: `#fff` }}>
            <IconHeart />
          </button>
          <button className="icon_2" style={{ background: `#fff` }}>
            <IconCartTwo />
          </button>
        </div>
        <div className="mini_recmitangle-one">HOT</div>
        <div className="mini_recmitangle-two">-20%</div>
        <img
          className="main_card_image-five"
          src="assets/card5.png"
          alt="img"
        />
        <div className="text_id-five">Modern Outdoor Chair</div>
        <div className="number_id-five">$79.00</div>
      </div>
      <div className="card_content-six">
        <div className="card_icons-down">
          <button className="icon_0" style={{ background: `#fff` }}>
            <IconSync />
          </button>
          <button className="icon_1" style={{ background: `#fff` }}>
            <IconHeart />
          </button>
          <button className="icon_2" style={{ background: `#fff` }}>
            <IconCartTwo />
          </button>
        </div>
        <img className="main_card_image-six" src="assets/card6.png" alt="img" />
        <div className="text_id-six">Vipp Wool Pillow</div>
        <div className="number_id-six">$99.00</div>
      </div>
      <div className="card_content-seven">
        <div className="card_icons-down">
          <button className="icon_0" style={{ background: `#fff` }}>
            <IconSync />
          </button>
          <button className="icon_1" style={{ background: `#fff` }}>
            <IconHeart />
          </button>
          <button className="icon_2" style={{ background: `#fff` }}>
            <IconCartTwo />
          </button>
        </div>
        <div className="mini_recmitangle-one">HOT</div>
        <div className="mini_recmitangle-two">-17%</div>
        <img
          className="main_card_image-seven"
          src="assets/card7.png"
          alt="img"
        />
        <div className="text_id-seven">Modern Bedroom Storage</div>
        <div className="number_id-seven">$499.00</div>
      </div>
    </card>
  );
};

export default Cards;
