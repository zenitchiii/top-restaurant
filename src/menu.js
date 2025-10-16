function menu() {
    const container = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuList');
    container.appendChild(menuDiv);
    
    const menuList = document.querySelector('.menuList');
    if (menuList) menuList.innerHTML = `
    <h1>Our Menu</h1>
    <ul>
      <li>🍝 Spaghetti Carbonara — ₱250</li>
      <li>🍕 Margherita Pizza — ₱300</li>
      <li>🥗 Caesar Salad — ₱180</li>
      <li>🍰 Cheesecake — ₱220</li>
      <li>🍔 Classic Beef Burger — ₱280</li>
      <li>🍗 Fried Chicken Platter — ₱320</li>
      <li>🍛 Chicken Curry — ₱270</li>
      <li>🍤 Garlic Butter Shrimp — ₱350</li>
      <li>🥩 Grilled Ribeye Steak — ₱600</li>
      <li>🍚 Pork Adobo Rice Bowl — ₱230</li>
      <li>🍲 Beef Ramen — ₱290</li>
      <li>🍜 Chicken Laksa — ₱270</li>
      <li>🌮 Beef Tacos (3 pcs) — ₱240</li>
      <li>🥪 Club Sandwich — ₱220</li>
      <li>🍟 Loaded Fries — ₱150</li>
      <li>🍳 All-Day Breakfast — ₱260</li>
      <li>🍋 Lemon Iced Tea — ₱80</li>
      <li>🥤 Coke / Sprite / Royal — ₱70</li>
      <li>☕ Hot Cappuccino — ₱120</li>
      <li>🧋 Classic Milk Tea — ₱110</li>
      <li>🍨 Ice Cream Sundae — ₱150</li>
      <li>🍩 Donut Platter — ₱200</li>
      <li>🍹 Tropical Fruit Smoothie — ₱130</li>
      <li>🍷 House Red Wine (Glass) — ₱250</li>
    </ul>`;
}

export default menu;