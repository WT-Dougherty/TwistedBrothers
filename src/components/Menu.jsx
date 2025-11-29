import "./Menu.css";

function Menu() {
  const menuItems = [
    {
      category: "Pretzels",
      items: [
        {
          name: "Pretzel Bites",
          description: "Freshly baked soft pretzel bites served with mustard",
          price: "$8",
        },
        {
          name: "Twisted Pretzels",
          description: "Classic hand-twisted pretzels with sea salt",
          price: "$7",
        },
        {
          name: "Pretzel Sticks",
          description: "Crispy pretzel sticks with cheese dip",
          price: "$6",
        },
      ],
    },
    {
      category: "House Made Sauces",
      items: [
        {
          name: "The Classic",
          description:
            "Traditional soft pretzel with your choice of dipping sauce",
          price: "$9",
        },
        {
          name: "Pretzel Sandwich",
          description: "Pretzel bun with your choice of filling",
          price: "$12",
        },
        {
          name: "Pretzel Platter",
          description: "Assorted pretzels with multiple dipping sauces",
          price: "$15",
        },
      ],
    },
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="menu-header">
          <h2 className="menu-title">Our Menu</h2>
          <p className="menu-description">
            Freshly made pretzels and delicious accompaniments, crafted with
            care
          </p>
        </div>

        <div className="menu-content">
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="menu-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="menu-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="menu-item-header">
                      <h4 className="item-name">{item.name}</h4>
                      <span className="item-price">{item.price}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
