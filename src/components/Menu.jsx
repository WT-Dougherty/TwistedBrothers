import "./Menu.css";

function Menu() {
  const menuItems = [
    {
      category: "Pretzels",
      items: [
        {
          name: "The Classic",
          description: "Our Classic Pretzel With Salt",
        },
        {
          name: "Pretzel Brat",
          description:
            "A Delicious Locally Sourced Bratwurst Wrapped in Pretzel Dough",
        },
        {
          name: "Cinnamon Sugar Bites",
          description:
            "Bite-Sized Pretzels Coated in Cinnamon Sugar Dipped in House-Made Icing",
        },
      ],
    },
    {
      category: "House Made Sauces",
      items: [
        {
          name: "Beer Cheese",
          description: "",
        },
        {
          name: "Honey Mustard",
          description: "",
        },
        {
          name: "Buttermilk Ranch",
          description: "",
        },
        {
          name: "Vanilla Icing",
          description: "",
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
