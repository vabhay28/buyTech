const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
  
    <div class="footer-content">
        <img src="../MyDocuments/Logo-light.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Mobile</li>
                <li><a href="#" class="footer-link">Apple</a></li>
                <li><a href="#" class="footer-link">Asus</a></li>
                <li><a href="#" class="footer-link">BlackBerry</a></li>
                <li><a href="#" class="footer-link">Micromax</a></li>
                <li><a href="#" class="footer-link">Motorola</a></li>
                <li><a href="#" class="footer-link">Oppo</a></li>
                <li><a href="#" class="footer-link">Oneplus</a></li>
                <li><a href="#" class="footer-link">Xaiomi</a></li>
                <li><a href="#" class="footer-link">Samsung</a></li>
                <li><a href="#" class="footer-link">Tecno</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Laptop</li>
                <li><a href="#" class="footer-link">Acer</a></li>
                <li><a href="#" class="footer-link">Apple</a></li>
                <li><a href="#" class="footer-link">Alienware</a></li>
                <li><a href="#" class="footer-link">Asus</a></li>
                <li><a href="#" class="footer-link">DELL</a></li>
                <li><a href="#" class="footer-link">HP</a></li>
                <li><a href="#" class="footer-link">Lenovo</a></li>  
                <li><a href="#" class="footer-link">MSI</a></li> 
                <li><a href="#" class="footer-link">Samsung</a></li>
                <li><a href="#" class="footer-link">VAIO</a></li>
            </ul>
        </div>
    </div>

    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">support emails - help@buyTech.com, customersupport@buyTech.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">buyTech, Best online store for Mobile, Laptop, Tabs and Accessories</p>
    
    `;
}

createFooter();