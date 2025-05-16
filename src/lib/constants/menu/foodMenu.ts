import { MenuCategory } from "@/lib/interfaces";

export const foodMenu: MenuCategory[] = [
  {
    name: "Breakfast",
    description: "Breakfast items to start your day right with a smile.",
    items: [
      {
        name: "Pancakes",
        description: "Fluffy pancakes served with syrup.",
        price: 5.99,
        image:
          "https://media.istockphoto.com/id/1917302932/photo/breakfast-table.jpg?s=612x612&w=0&k=20&c=odpY5u2N7p9Vy-pbU6cHfJ83DRddIbU9n8OcRRbDBVE=",
      },
      {
        name: "Omelette",
        description: "Three-egg omelette with your choice of fillings.",
        price: 6.49,
        image:
          "https://media.istockphoto.com/id/1829058305/photo/corned-brisket-beef-hash-omelette.jpg?s=612x612&w=0&k=20&c=TC1qWOtcrZP2O8gTjfo0EueM0RGcWQbVpKr3Ys9vKvA=",
      },
      {
        name: "French Toast",
        description: "Thick slices of bread dipped in egg and grilled.",
        price: 5.99,
        image:
          "https://media.istockphoto.com/id/2158868679/photo/savoury-french-toast-with-bacon-and-hash-browns.jpg?s=612x612&w=0&k=20&c=fKIyvu8bOkvd1cMGDXipzZWrMXsOS6u3D47O-JoKj8M=",
      },
      {
        name: "Breakfast Burrito",
        description: "Eggs, cheese, and veggies wrapped in a tortilla.",
        price: 7.49,
        image:
          "https://media.istockphoto.com/id/1439388953/photo/make-ahead-breakfast-burritos-for-the-whole-family.jpg?s=612x612&w=0&k=20&c=V636rNGZ7js4C65tEF018VM2GBM1MxPnzTtcebHS7V4=",
      },
      {
        name: "Avocado Toast",
        description: "Smashed avocado on toasted bread.",
        price: 6.99,
        image:
          "https://media.istockphoto.com/id/1311507085/photo/avocado-toast-with-eggs-and-roasted-tomatoes.jpg?s=612x612&w=0&k=20&c=DquSZopXdPOXhJEltAFwaaxZIdiqsxglab25PVX8wf8=",
      },
      {
        name: "Breakfast Sandwich",
        description: "Egg, cheese, and bacon on a bagel.",
        price: 4.99,
        image:
          "https://media.istockphoto.com/id/531403492/photo/bagel-bacon-sausage-and-egg-breakfast-sandwich.jpg?s=612x612&w=0&k=20&c=pVvQr7OCCRepYIw3OQ976-eZ_D8xlDlo_COotdm9psQ=",
      },
      {
        name: "Fruit Parfait",
        description: "Yogurt layered with fresh fruit and granola.",
        price: 5.49,
        image:
          "https://media.istockphoto.com/id/889126708/photo/strawberry-perfect.jpg?s=612x612&w=0&k=20&c=veaAu_HKcY2i2XUq1UQVtcNCmC_fhO8vawCjUuEEuBU=",
      },
      {
        name: "Smoothie Bowl",
        description: "Smoothie topped with fruits and nuts.",
        price: 6.49,
        image:
          "https://media.istockphoto.com/id/1298159858/photo/acai-smoothie-bowl-with-toppings.jpg?s=612x612&w=0&k=20&c=V3chwb61pb71NZ1erUtHAYwnTrL1Ra6GpAfjkY1pru4=",
      },
    ],
  },
  {
    name: "Sandwiches",
    description: "Delicious sandwiches made with fresh ingredients and love.",
    items: [
      {
        name: "Grilled Cheese",
        description: "Classic grilled cheese sandwich with cheddar.",
        price: 4.99,
        image:
          "https://media.istockphoto.com/id/1727509923/photo/grilled-cheese-sandwich-on-a-woodem-rustic-background.jpg?s=612x612&w=0&k=20&c=RK8yGxOczVfECjOEHAyR8gzk3YRptUhfx-2KXFnK4XY=",
      },
      {
        name: "BLT",
        description: "Bacon, lettuce, and tomato sandwich.",
        price: 5.49,
        image:
          "https://media.istockphoto.com/id/1927582000/photo/bacon-lettuce-tomato-and-turkey-sandwich-on-plate.jpg?s=612x612&w=0&k=20&c=fYZLLaK-imhWbsTkQEXU9_vyZSuAxbuCU4UHwpg_l0k=",
      },
      {
        name: "Caprese Sandwich",
        description: "Fresh mozzarella, tomatoes, and basil on ciabatta.",
        price: 7.49,
        image:
          "https://media.istockphoto.com/id/930271208/photo/healthy-grilled-basil-mozzarella-caprese-panini.jpg?s=612x612&w=0&k=20&c=6B176_LanoK6okEUU_MCfD49L1W5_dhbFijiJx3FzrM=",
      },
      {
        name: "Pulled Pork",
        description: "Slow-cooked pulled pork with BBQ sauce.",
        price: 8.99,
        image:
          "https://media.istockphoto.com/id/1215529349/photo/braised-beef-short-rib-sandwich-with-coleslaw-on-a-brioche-bun.jpg?s=612x612&w=0&k=20&c=Z5Ghbqla2Le2LLFZEuEN9js3bkdv-DHS6G_3K_NF6ZI=",
      },
      {
        name: "Veggie Wrap",
        description: "Fresh vegetables wrapped in a tortilla.",
        price: 5.99,
        image:
          "https://media.istockphoto.com/id/499742048/photo/fresh-tortilla-wraps-with-chicken-and-fresh-vegetables-on-plate.jpg?s=612x612&w=0&k=20&c=e4Oyh4otvDp0ChkJGfaourkGSTZ6eohiv9ER-xdOzJo=",
      },
      {
        name: "Philly Cheesesteak",
        description: "Thinly sliced beef with melted cheese and peppers.",
        price: 9.49,
        image:
          "https://media.istockphoto.com/id/2176117365/photo/cheesesteak-with-french-fries.jpg?s=612x612&w=0&k=20&c=EONcHnRhZIErOQRRpdkiGeb9fS4TKZHNChxaaCGL4JM=",
      },
      {
        name: "Chicken Caesar Wrap",
        description: "Grilled chicken with Caesar dressing in a wrap.",
        price: 7.99,
        image:
          "https://media.istockphoto.com/id/1151273838/photo/caesar-roll-with-chicken.jpg?s=612x612&w=0&k=20&c=w-z7QEOx3Om37PvqDNkXbZOztLCJauVlttyrjphy9zk=",
      },
    ],
  },
  {
    name: "Bakery",
    description:
      "Freshly baked goods to satisfy your sweet tooth and cravings.",
    items: [
      {
        name: "Chocolate Chip Cookies",
        description: "Classic chocolate chip cookies.",
        price: 2.49,
        image:
          "https://media.istockphoto.com/id/2182321684/photo/chocolate-chip-cookie-cookie-biscuit-chocolate-cookie-delicious-chocolate-chip-cookies.jpg?s=612x612&w=0&k=20&c=L__5AvpMPKfHkupxhUfaoF2LAMMAV06bGN4ObSO2ObU=",
      },
      {
        name: "Croissant",
        description: "Flaky and buttery croissant.",
        price: 2.99,
        image:
          "https://media.istockphoto.com/id/1615993303/photo/croissants-on-a-grid-in-bakery-filled-with-cream-chocolate-topping-and-almond-flakes.jpg?s=612x612&w=0&k=20&c=6hwnWOX0ppWYLgW2W5usgwgJIFVytJrYPuRqwtn5KCc=",
      },
      {
        name: "Blueberry Muffin",
        description: "Moist muffin with fresh blueberries.",
        price: 2.49,
        image:
          "https://media.istockphoto.com/id/182788087/photo/close-up-of-blueberry-muffins-in-rectangular-basket.jpg?s=612x612&w=0&k=20&c=yR-GaYhZRSpl5ghQgqcAReZBmWzkA5hB9CxvZvgl-d4=",
      },
      {
        name: "Cinnamon Roll",
        description: "Sweet roll with cinnamon and icing.",
        price: 3.49,
        image:
          "https://media.istockphoto.com/id/1405973450/photo/cinnamon-buns.jpg?s=612x612&w=0&k=20&c=8jKhRd2QEiJMr1nESdu8mp9Oa5ND4_qcTOwzhEqT8Ys=",
      },
      {
        name: "Bagel with Cream Cheese",
        description: "Fresh bagel served with cream cheese.",
        price: 2.99,
        image:
          "https://media.istockphoto.com/id/511742246/photo/bagel-with-cream-cheese.jpg?s=612x612&w=0&k=20&c=LgfJV2cI0uy7n0X1F9cp52_ouJCqvMvl1xRQgmFVRL0=",
      },
      {
        name: "Brownie",
        description: "Rich and fudgy brownie.",
        price: 2.99,
        image:
          "https://media.istockphoto.com/id/2156395989/photo/fresh-baked-brownies.jpg?s=612x612&w=0&k=20&c=tVdpVhbKBvRL9CDfesEpyeL3mFDoNa5jY_HZ5-c2w1A=",
      },
      {
        name: "Danish Pastry",
        description: "Flaky pastry filled with fruit or cream cheese.",
        price: 3.49,
        image:
          "https://media.istockphoto.com/id/1185259136/photo/cherry-danish.jpg?s=612x612&w=0&k=20&c=XB71gt4F-Hd-REwsUkElAzmS5ccNgo8fvd0SqTzx5Dk=",
      },
      {
        name: "Scone",
        description: "Buttery scone with fruit or nuts.",
        price: 2.49,
        image:
          "https://media.istockphoto.com/id/105490482/photo/a-closeup-of-berry-scones-on-a-plate.jpg?s=612x612&w=0&k=20&c=tvWq2P1NuvjsAqjDgxbrNNSNJCsUzHzB74t28pqaQ8U=",
      },
    ],
  },
  {
    name: "Soups",
    description: "Warm and comforting soups to start your meal right.",
    items: [
      {
        name: "Tomato Basil Soup",
        description: "A classic tomato soup with fresh basil.",
        price: 5.99,
        image:
          "https://media.istockphoto.com/id/1201090615/photo/tomato-soup-with-basil-in-a-bowl.jpg?s=612x612&w=0&k=20&c=ao270D5Ig8FYoEywoiDN0vwYFffyCB8Oh653DDTidcE=",
      },
      {
        name: "Chicken Tortilla",
        description: "Spicy chicken soup with tortilla strips.",
        price: 6.99,
        image:
          "https://media.istockphoto.com/id/95854713/photo/mexican-tortilla-soup.jpg?s=612x612&w=0&k=20&c=jhhW4y4qHdSJLbu6sv9eWUhPAdWqS6vyVN6UCY6pEyk=",
      },
      {
        name: "Clam Chowder",
        description: "Creamy clam chowder with potatoes and bacon.",
        price: 7.99,
        image:
          "https://media.istockphoto.com/id/1920455122/photo/chunky-new-england-clam-chowder.jpg?s=612x612&w=0&k=20&c=EP8GkUVqqcT3ZCoSekDLjHiysGnvKvTAcRrTQVXGZ60=",
      },
      {
        name: "Loaded Potato",
        description: "Creamy potato soup loaded with cheese and bacon.",
        price: 6.49,
        image:
          "https://media.istockphoto.com/id/2183844667/photo/baked-potato-soup.jpg?s=612x612&w=0&k=20&c=EH2t2HPW0OueqGqyXIJtqdhvkeuJtiodSdPgB2uK4oQ=",
      },
      {
        name: "Minestrone",
        description: "Vegetable soup with pasta and beans.",
        price: 5.49,
        image:
          "https://media.istockphoto.com/id/1985604497/photo/chick-pea-tomato-and-noodle-soup.jpg?s=612x612&w=0&k=20&c=5_aKs76jVL0nVWmeRQSREsLX0OL3Cg-cIb7EeYzzhgE=",
      },
      {
        name: "French Onion",
        description: "Caramelized onion soup topped with melted cheese.",
        price: 7.49,
        image:
          "https://media.istockphoto.com/id/171101792/photo/french-onion-soup.jpg?s=612x612&w=0&k=20&c=oNxmTWBbPegf3C6daPGBT4HAwuinTE_zAimS--ipnPg=",
      },
      {
        name: "Butternut Squash",
        description: "Creamy butternut squash soup with spices.",
        price: 6.99,
        image:
          "https://media.istockphoto.com/id/497813046/photo/homemade-hot-butternut-squash-soup.jpg?s=612x612&w=0&k=20&c=8ePBMHY9NIbHQUclGYTrJ6I45f2a7GIjWzFamE8pVhc=",
      },
      {
        name: "Lentil Soup",
        description: "Hearty lentil soup with vegetables and spices.",
        price: 5.99,
        image:
          "https://media.istockphoto.com/id/1979470278/photo/fresh-vegetable-soup-with-lentil-on-wooden-table.jpg?s=612x612&w=0&k=20&c=kscJMpmWv-R9yMDXqpHjaYneb8Idtp2CV_RduX-DEio=",
      },
    ],
  },
  {
    name: "Salads",
    description: "Fresh salads made with seasonal ingredients and dressings.",
    items: [
      {
        name: "Caesar Salad",
        description: "Romaine lettuce with Caesar dressing and croutons.",
        price: 6.99,
        image:
          "https://media.istockphoto.com/id/534139231/photo/healthy-grilled-chicken-caesar-salad.jpg?s=612x612&w=0&k=20&c=TR_sE5S5ChmjFywg3dh_J5V_ha-BcwgTU26BvsgbsjY=",
      },
      {
        name: "Greek Salad",
        description: "Mixed greens with feta cheese and olives.",
        price: 7.49,
        image:
          "https://media.istockphoto.com/id/2200651088/photo/high-angle-view-of-greek-salad-bowl-on-dining-table-feta-cheese-black-olives-tomatoes-and.jpg?s=612x612&w=0&k=20&c=SZYXSSICsyLb_gE_Mm_wanv8orGcVK5P4Gyl6ViAb9g=",
      },
      {
        name: "Cobb Salad",
        description: "Mixed greens with chicken, bacon, and avocado.",
        price: 8.99,
        image:
          "https://media.istockphoto.com/id/500119141/photo/healthy-hearty-cobb-salad.jpg?s=612x612&w=0&k=20&c=28Q_RKSRBvlrJD8XwINIc-vmMkQguq12o6QkWWscjA8=",
      },
      {
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, and basil.",
        price: 7.99,
        image:
          "https://media.istockphoto.com/id/1580781126/photo/tomato-and-mozzarella-salad.jpg?s=612x612&w=0&k=20&c=S27stjFZHZTUCUSTYQUH3E9s26457EyZ5ZkomKtHHoY=",
      },
      {
        name: "Quinoa Salad",
        description: "Quinoa with mixed vegetables and dressing.",
        price: 6.49,
        image:
          "https://media.istockphoto.com/id/941131444/photo/healthy-vegan-quinoa-spinach-salad.jpg?s=612x612&w=0&k=20&c=JIlIDH6Ay-QQ6oR9EWZVJcA-n1c9UgL3Ycz_JXI59-o=",
      },
      {
        name: "Spinach Salad",
        description: "Spinach with strawberries and walnuts.",
        price: 5.99,
        image:
          "https://media.istockphoto.com/id/1005741226/photo/spinach-salad-with-strawberries-goat-cheese-balsamic-and-walnuts.jpg?s=612x612&w=0&k=20&c=vef1WysXr5FRQrC52Fa_0FfsdP3skcLS6WfmROFQEqk=",
      },
      {
        name: "Asian Chicken Salad",
        description: "Grilled chicken with Asian dressing and veggies.",
        price: 8.49,
        image:
          "https://media.istockphoto.com/id/539216217/photo/asian-duck-salad.jpg?s=612x612&w=0&k=20&c=181obZQgftytMKL-ILq_IE8bP-JvzslbCgL-YG5YwX8=",
      },
      {
        name: "Taco Salad",
        description: "Tortilla bowl filled with taco ingredients.",
        price: 7.49,
        image:
          "https://media.istockphoto.com/id/171148425/photo/taco-salad.jpg?s=612x612&w=0&k=20&c=Q_E-VLUR6ike76OABD1jQCC10hr0wY6m5q6xpWrXQ1o=",
      },
    ],
  },
  {
    name: "Snacks",
    description: "Light snacks to keep you energized throughout the day.",
    items: [
      {
        name: "Chips and Salsa",
        description: "Crispy tortilla chips served with salsa.",
        price: 3.49,
        image:
          "https://media.istockphoto.com/id/1427138342/photo/mexican-tomato-salsa-with-lime-onion-jalapeno-pepper-parsley-and-tortilla-chips.jpg?s=612x612&w=0&k=20&c=3SxJF4thCjpTGJOUPi03bWpZD52C48wihgJZrPntjME=",
      },
      {
        name: "Hummus and Veggies",
        description: "Creamy hummus served with fresh vegetables.",
        price: 4.49,
        image:
          "https://media.istockphoto.com/id/1300836710/photo/crop-shot-of-plate-with-colorful-healthy-sliced-vegetables-and-dips.jpg?s=612x612&w=0&k=20&c=n78ffFNdqTX_DWQoQ7ghyjlfvLxZGOHuQUa_CDjLgRs=",
      },
      {
        name: "Popcorn",
        description: "Lightly salted popcorn.",
        price: 2.99,
        image:
          "https://media.istockphoto.com/id/1789886496/photo/bowl-of-tasty-popcorn-on-wooden-table-space-for-text.jpg?s=612x612&w=0&k=20&c=wpNq5KtA8GgWObouKD2Ck4mcGT2pipmxVSntnrYUWNU=",
      },
      {
        name: "Nachos",
        description: "Tortilla chips topped with cheese and jalapenos.",
        price: 5.49,
        image:
          "https://media.istockphoto.com/id/2189610297/photo/cheesy-nachos-with-toppings.jpg?s=612x612&w=0&k=20&c=cCDM-hIFLV01ilTfafAuIkehZ2cNZol3JiAvk7s7tfw=",
      },
      {
        name: "Cheese Platter",
        description: "Assorted cheeses served with crackers.",
        price: 6.99,
        image:
          "https://media.istockphoto.com/id/1927441680/photo/cheese-platter-with-craft-cheese-assortment-on-slate-board.jpg?s=612x612&w=0&k=20&c=R6_jMufTUC3jcgJtidt7N1by5DIPc_lBONbcKTo46oI=",
      },
      {
        name: "Fruit Salad",
        description: "Fresh seasonal fruit salad.",
        price: 4.99,
        image:
          "https://media.istockphoto.com/id/2197322106/photo/fruit-salad.jpg?s=612x612&w=0&k=20&c=eoOuhHtz5crNVLmR4LCLSX2iYC5-yQ0bUBBnFhZ_XGc=",
      },
      {
        name: "Trail Mix",
        description: "Mixed nuts and dried fruits.",
        price: 3.99,
        image:
          "https://media.istockphoto.com/id/2194878593/photo/close-up-of-a-glass-container-filled-with-organic-mix-of-nuts-and-seeds.jpg?s=612x612&w=0&k=20&c=VyO2X6SGyrgnot6fqby-lYvt-UvLNDC8eUy_Vb7dPTs=",
      },
      {
        name: "Pretzels",
        description: "Soft pretzels served with mustard.",
        price: 3.49,
        image:
          "https://media.istockphoto.com/id/2161870339/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=MOHHambzxroPbOHRFjuHbBWwewu9YQe1kXGCQn5Pl4k=",
      },
    ],
  },
  {
    name: "Treats",
    description:
      "Sweet treats to satisfy your cravings and indulge your senses.",
    items: [
      {
        name: "Chocolate Bar",
        description: "Rich chocolate bar with nuts.",
        price: 1.99,
        image:
          "https://media.istockphoto.com/id/932736954/photo/chocolate-bark-making.jpg?s=612x612&w=0&k=20&c=-CYYFwLnAsnPyL4G38p24FfOu6b2qO7BcVU6IQP32Tw=",
      },
      {
        name: "Gummy Bears",
        description: "Chewy gummy bears in assorted flavors.",
        price: 1.49,
        image:
          "https://media.istockphoto.com/id/1331499351/photo/gummyb-bears.jpg?s=612x612&w=0&k=20&c=zgVdxwzLBEcw2n_djxRpjG9retpoELBHpa2fPKQ0vig=",
      },
      {
        name: "Candy Apple",
        description: "Fresh apple coated in caramel and nuts.",
        price: 2.49,
        image:
          "https://media.istockphoto.com/id/1802471046/photo/a-tray-of-caramel-apples-sprinkled-with-nuts-sit-on-display-at-a-market-in-autumn.jpg?s=612x612&w=0&k=20&c=yOZkg6jIkROoqOoM48ICVXp4NMYlMiLrJclGEq_wWBo=",
      },
      {
        name: "Marshmallow Treats",
        description: "Rice cereal treats with marshmallows.",
        price: 1.99,
        image:
          "https://media.istockphoto.com/id/816012416/photo/homemade-bars-of-marshmallow-and-crispy-rice-and-ingredients-on-the-table-american-dessert.jpg?s=612x612&w=0&k=20&c=Yl0Ckvrr-fOGX7N3rNVr7uJlObnfH50UpjzL3xBKA7o=",
      },
      {
        name: "Chocolate-Covered Pretzels",
        description: "Salty pretzels dipped in chocolate.",
        price: 2.99,
        image:
          "https://media.istockphoto.com/id/1978764573/photo/chocolate-dipped-pretzel-rods-on-a-plate.jpg?s=612x612&w=0&k=20&c=IBGvNzoIdKzRO_LNu4ZgwP0sx08fmIGOwpUGHof5OG8=",
      },
      {
        name: "Lollipops",
        description: "Assorted flavored lollipops.",
        price: 0.99,
        image:
          "https://media.istockphoto.com/id/2190653731/photo/multicolored-candies-and-lollipops.jpg?s=612x612&w=0&k=20&c=OPqmyB2rZqLf1BxX4Og-P5awONJ3z1CUpsOhPWGp9Z8=",
      },
      {
        name: "Cotton Candy",
        description: "Fluffy cotton candy in various colors.",
        price: 3.49,
        image:
          "https://media.istockphoto.com/id/2160733080/photo/cotton-candy.jpg?s=612x612&w=0&k=20&c=WxffHCN18V1KbgUve9BVvAiwDD3xdslCTOwD5-n7Tdk=",
      },
      {
        name: "Chocolate-Covered Strawberries",
        description: "Fresh strawberries dipped in chocolate.",
        price: 4.99,
        image:
          "https://media.istockphoto.com/id/538690851/photo/homemade-chocolate-dipped-strawberries.jpg?s=612x612&w=0&k=20&c=HbOKyEWdNwHtAYCdEhfPTAOvCZ79xRthCMuWbby_Qnc=",
      },
    ],
  },
  {
    name: "Desserts",
    description:
      "Indulge in our sweet and decadent desserts to end your meal on a high note.",
    items: [
      {
        name: "Cheesecake",
        description: "Creamy cheesecake with a graham cracker crust.",
        price: 4.99,
        image:
          "https://media.istockphoto.com/id/2152360084/photo/slice-of-strawberry-cheesecake.jpg?s=612x612&w=0&k=20&c=eulfriqaI64cCdkm5egnfQ2JFvwv8uliMb4cSHw0quI=",
      },
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee and mascarpone.",
        price: 5.49,
        image:
          "https://media.istockphoto.com/id/2187916113/photo/italian-dessert-tiramisu-made-of-ladyfingers-dipped-in-coffee-and-layered-with-cream-made-of.jpg?s=612x612&w=0&k=20&c=GnycY2GRE4vFW_sDSJ-VP4ai2BS7072ZTG9P_6lTrKY=",
      },
      {
        name: "Chocolate Cake",
        description: "Rich chocolate cake with chocolate frosting.",
        price: 4.99,
        image:
          "https://media.istockphoto.com/id/2030549106/photo/chocolate-lava-cake.jpg?s=612x612&w=0&k=20&c=3sI3EJI9kEJwy-fUsNm8EEeSvl96XH-GXxiUiC6kyWE=",
      },
      {
        name: "Apple Pie",
        description: "Homemade apple pie with a flaky crust.",
        price: 3.99,
        image:
          "https://media.istockphoto.com/id/171111884/photo/apple-pie.jpg?s=612x612&w=0&k=20&c=PP1KrillNYZT_4zIHHaySEW2QQLIeb3Sf_mvciioMiY=",
      },
      {
        name: "Panna Cotta",
        description: "Italian dessert made with cream and gelatin.",
        price: 4.49,
        image:
          "https://media.istockphoto.com/id/178472102/photo/fancy-panna-cotta-with-strawberries.jpg?s=612x612&w=0&k=20&c=kuD8DdG5ieyvREP9PoB6ClLLW0o3-tQfFv70ZD4S6zc=",
      },
      {
        name: "Ice Cream Sundae",
        description: "Vanilla ice cream topped with chocolate sauce.",
        price: 3.49,
        image:
          "https://media.istockphoto.com/id/2033984545/photo/ice-cream-sundae-with-cherries-and-nuts.jpg?s=612x612&w=0&k=20&c=-89eTlgxo3KLRZgMgyty174rP1AQTHOHywsgoXJLERA=",
      },
      {
        name: "Fruit Tart",
        description: "Pastry crust filled with custard and fresh fruit.",
        price: 4.99,
        image:
          "https://media.istockphoto.com/id/1179046614/photo/cup-of-coffee-and-sweet-cakes-with-berries.jpg?s=612x612&w=0&k=20&c=0C6v85YcksZvqaIlWZplh5fVb-yW6ueiEto3kigqg9s=",
      },
      {
        name: "Brownie Sundae",
        description: "Warm brownie topped with ice cream and chocolate sauce.",
        price: 5.49,
        image:
          "https://media.istockphoto.com/id/1160638011/photo/homemade-double-chocolate-brownies-sundae-with-vanilla-ice-cream-on-top.jpg?s=612x612&w=0&k=20&c=ArGlaPQ2C3L-fVuP9O3uMtwjkSAmPVNxrPvKCYXgQm0=",
      },
    ],
  },
];
