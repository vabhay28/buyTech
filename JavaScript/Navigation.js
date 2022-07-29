const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
            <img src="../MyDocuments/Logo-Dark.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="Registration.html"><img src="../MyDocuments/user.png" alt=""></a>
                <a href="404.html"><img src="../MyDocuments/shopping-cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="404.html" class="link">Mobile</a></li>
            <li class="link-item"><a href="404.html" class="link">Laptop</a></li>
            <li class="link-item"><a href="404.html" class="link">Tabs</a></li>
            <li class="link-item"><a href="404.html" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();