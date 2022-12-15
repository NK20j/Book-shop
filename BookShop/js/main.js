$(document).ready(function () {
        
    //Top header slide up/down
    $('.single-selector .btn-group').click(function() {
        if($(this).parent().find('.list-selector').hasClass('active')) {
            $(this).parent().find('.list-selector').slideUp().removeClass('active');    
        }
        else {
            $('.list-selector').slideUp();
            $(this).parent().find('.list-selector').slideDown().addClass('active');    
        }
    })

    // list all Book
    const listProduct = [
        {
            img: "./imgs/1.jpg",
            nameBook: "The Mind of Kids",
            sale: 0.2,
            priceOri: 20,
            id:0,
            quantity:1,
            isHot: true,
            data_item: "children",
        },
        {
            img: "./imgs/2.jpg",
            nameBook: "Feature of Children",
            sale: 0.2,
            priceOri: 100, 
            id:1,
            quantity:1,
            isHot: true,
            data_item: "comic",
        },
        {
            img: "./imgs/3.jpg",
            nameBook: "Out Of Relationship",
            sale: 0.2,
            priceOri: 33,
            id:2,
            quantity:1,
            isHot: true,
            data_item: "comic",
        },
        {
            img: "./imgs/4.jpg",
            nameBook: "Smell Of Heaven",
            sale: 0.2,
            priceOri: 97,
            id:3,
            quantity:1,
            isHot: true,
            data_item: "comic",
        },
        {
            img: "./imgs/5.jpg",
            nameBook: "Enter The Sea",
            sale: 0.2,
            priceOri: 84,
            id:4,
            quantity:1,
            isHot: false,
            data_item: "children",
        },
        {
            img: "./imgs/6.jpg",
            nameBook: "Warn Non",
            sale: 0.2,
            priceOri: 90,
            id:5,
            quantity:1,
            isHot: false,
            data_item: "children",
        },
        {
            img: "./imgs/7.jpg",
            nameBook: "Simply Dummy",
            sale: 0.2,
            priceOri: 77,
            id:6,
            quantity:1,
            isHot: false,
            data_item: "comic",
        },
        {
            img: "./imgs/8.jpg",
            nameBook: "Established",
            sale: 0.2,
            priceOri: 200,
            id:7,
            quantity:1,
            isHot: false,
            data_item: "comic",
        },            {
            img: "./imgs/9.jpg",
            nameBook: "Revenge Of Blood",
            sale: 0.2,
            priceOri: 40,
            id:8,
            quantity:1,
            isHot: false,
            data_item: "children",
        },
        {
            img: "./imgs/10.jpg",
            nameBook: "Revenge Of Life",
            sale: 0.2,
            priceOri: 10,
            id:9,
            quantity:1,
            isHot: false,
            data_item: "comic",
        },
        {
            img: "./imgs/11.jpg",
            nameBook: "Dragon World",
            sale: 0.2,
            priceOri: 50,
            id:10,
            quantity:1,
            isHot: false,
            data_item: "children",
        },
    ]
    // list Book Hot
    const listHot = listProduct.filter((e) => {
        if(e.isHot === true) {
            return e;
        }
    }) 
    // List Featured Book
    const listFeat = [
        {
            img: "./imgs/8.jpg",
            nameBook: "Established",
            sale: 0.2,
            priceOri: 200,
            id:7,
            quantity:1,
            isHot: false,
            data_item: "comic",
        },            {
            img: "./imgs/9.jpg",
            nameBook: "Revenge Of Blood",
            sale: 0.2,
            priceOri: 40,
            id:8,
            quantity:1,
            isHot: false,
            data_item: "children",
        },
        {
            img: "./imgs/10.jpg",
            nameBook: "Revenge Of Life",
            sale: 0.2,
            priceOri: 10,
            id:9,
            quantity:1,
            isHot: false,
            data_item: "comic",
        },
        {
            img: "./imgs/11.jpg",
            nameBook: "Dragon World",
            sale: 0.2,
            priceOri: 50,
            id:10,
            quantity:1,
            isHot: false,
            data_item: "children",
        },
        {
            img: "./imgs/5.jpg",
            nameBook: "Enter The Sea",
            sale: 0.2,
            priceOri: 84,
            id:4,
            quantity:1,
            isHot: false,
            data_item: "children",
        },
        {
            img: "./imgs/6.jpg",
            nameBook: "Warn Non",
            sale: 0.2,
            priceOri: 90,
            id:5,
            quantity:1,
            isHot: false,
            data_item: "children",
        },
        {
            img: "./imgs/7.jpg",
            nameBook: "Simply Dummy",
            sale: 0.2,
            priceOri: 77,
            id:6,
            quantity:1,
            isHot: false,
            data_item: "comic",
        },
    ]
    
    //Hero slide hot 
    const hotDealSlide = {

        render: function() {
            var html_str = listHot.map(function(ele,index) {
                return `
                    <div class="single-slide pb-5">
                        <div class="box" data-index="${ele.id}">
                            <div class="boxs-img">
                                <img src="${ele.img}" alt="" class="img-1">

                                <div class="boxs-tag">
                                    <div class="tag-new tag">New</div>
                                    <div class="tag-sale tag">-20%</div>
                                </div>

                                <div class="boxs-link">
                                    <div class="box-cart box-icon">
                                        <i class="fas fa-shopping-bag"></i>
                                    </div>
                                    <div class="box-eye box-icon">
                                        <i class="fas fa-eye"></i>
                                    </div>
                                    <div class="box-share box-icon">
                                        <i class="fas fa-share-alt"></i>
                                    </div>
                                </div>
                            </div>  

                            <div class="boxs-text">
                                <span class="name-book">
                                    ${ele.nameBook}
                                </span>

                                <div class="boxs-star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>

                                <div class="boxs-price">
                                    <div class="pri-sale">$${ele.priceOri - ele.priceOri * ele.sale}</div>
                                    <div class="pri-ori">$${ele.priceOri}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `      
        })
        
        $('.left-slide-box .slides-wrap').html(html_str.join(""));
       
        },
        preSlide: function() {
            let preBtn = $('.left-slide-box .btn-pre');
            let slideWrap = $('.left-slide-box .slides-wrap');
            let index = 0;
 
            preBtn.click(function() {
                index --;
                if(index < 0) {
                    index = listHot.length - 1;
                }
                slideWrap.animate({
                    transform: `translateX(-${index * 100}%)`
                })
            }.bind(this))
        },
        nextSlide: function() {
            let nextBtn = $('.left-slide-box .btn-next');
            let slideWrap = $('.left-slide-box .slides-wrap');
            let index = 0;

            nextBtn.click(function() {
                index ++;
                if(index > listHot.length - 1) {
                    index = 0;
                }
                slideWrap.animate({
                    transform: `translateX(-${index * 100}%)`
                })
            }.bind(this))
        },
        start: function() {
            this.render();
            this.preSlide();
            this.nextSlide();
        }
    }
    hotDealSlide.start();

    //Hero slide mid
    const heroMid = {
        index: 0,
        preSlide: function() {
            let preBtn = $('.mid-slide-box .btn-pre-wrap');
            let slideWrap = $('.mid-slide-box .slider-wrap');

            preBtn.click(function() {
                this.index --;
                if(this.index < 0) {
                    this.index = $('.mid-slide-box .single-slide').length - 1;
                }
                slideWrap.animate({
                    transform: `translateX(-${this.index * 100}%)`
                })
                this.dotActive();
            }.bind(this))
        },
        nextSlide: function() {
            let nextBtn = $('.mid-slide-box .btn-next-wrap');
            let slideWrap = $('.mid-slide-box .slider-wrap');

            nextBtn.click(function() {
                this.index ++;
                if(this.index > $('.mid-slide-box .single-slide').length - 1) {
                    this.index = 0;
                }
                slideWrap.animate({
                    transform: `translateX(-${this.index * 100}%)`
                })
                this.dotActive();

            }.bind(this))
        },
        dotActive: function() {
            var _this = this;
            Array.from($('.dot-control span')).forEach(element => {
                let index_dot = $(element).data('dot');

                if(index_dot == _this.index) {
                    $('.dot-control span').removeClass('active');
                    $(element).addClass('active');
                }
            });
        },
        dotSlide: function() {
            var _this = this;
            let slideWrap = $('.mid-slide-box .slider-wrap');

            $('.dot-control span').click(function() {
                _this.index = $(this).data('dot');
                
                slideWrap.animate({
                    transform: `translateX(-${_this.index * 100}%)`
                })
                _this.dotActive();
            })
        },
        start: function () {

            this.preSlide();
            this.nextSlide();
            this.dotSlide();
        }
    }
    heroMid.start();

    // FEATURED Slide
    const carousel = {
        count: 0,
        w_box: 0,
        numSlide: 5,
        setWidth: function(number) {
            this.w_box = $('.featured-product').innerWidth() / number;
            let w_boxs = this.w_box * listFeat.length;
            let margin = 10;

            $('.carousel-boxs .box').css(
                {"margin": `0 ${margin}px`, "width": `${this.w_box - margin * 2}px`}
            )
            $('.carousel-boxs').css("width", w_boxs);
        },
        render: function() {
            let html_str = listFeat.map(function(ele) {
                return `
                    <div class="box" data-index="${ele.id}">
                        <div class="boxs-img">
                            <img src="${ele.img}" alt="" class="img-1">

                            <div class="boxs-tag">
                                <div class="tag-new tag">New</div>
                                <div class="tag-sale tag">-20%</div>
                            </div>

                            <div class="boxs-link">
                                <div class="box-cart box-icon">
                                    <i class="fas fa-shopping-bag"></i>
                                </div>
                                <div class="box-eye box-icon">
                                    <i class="fas fa-eye"></i>
                                </div>
                                <div class="box-share box-icon">
                                    <i class="fas fa-share-alt"></i>
                                </div>
                            </div>
                        </div>  

                        <div class="boxs-text">
                            <span class="name-book">
                                ${ele.nameBook}
                            </span>

                            <div class="boxs-star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>

                            <div class="boxs-price">
                                <div class="pri-sale">$${ele.priceOri - ele.priceOri * ele.sale}</div>
                                <div class="pri-ori">$${ele.priceOri}</div>
                            </div>
                        </div>
                    </div>
                `
            })

            $('.carousel-boxs').html(html_str.join(""))

        },
        nextSlide: function() {
            let _this = this;
            $('.featured-product .btn-next').click(function() {
                _this.count ++;
                if(_this.count > listFeat.length - _this.numSlide) {
                    _this.count = 0;
                }
                $('.featured-product .carousel-boxs').animate({
                    transform: `translateX(-${_this.count * _this.w_box}px)`
                })
            })
        },
        preSlide: function() {
            let _this = this;
            $('.featured-product .btn-pre').click(function() {
                _this.count --;
                if(_this.count < 0) {
                    _this.count =  listFeat.length - _this.numSlide;
                }
                $('.featured-product .carousel-boxs').animate({
                    transform: `translateX(-${_this.count * _this.w_box}px)`
                })
            })
        },
        start: function() {
            this.render();
            this.setWidth(this.numSlide);
            this.nextSlide();
            this.preSlide();

        }
    }
    carousel.start();

    //Gallery start
    const gallery = {
        render: function() {
            let htlm_str = listProduct.map( (e) => {
                return `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="box border p-3" data-index="${e.id}" data-item="${e.data_item}">
                        <div class="boxs-img">
                            <img src="${e.img}" alt="" class="img-1">

                            <div class="boxs-tag">
                                <div class="tag-new tag">New</div>
                                <div class="tag-sale tag">-20%</div>
                            </div>

                            <div class="boxs-link">
                                <div class="box-cart box-icon">
                                    <i class="fas fa-shopping-bag"></i>
                                </div>
                                <div class="box-eye box-icon">
                                    <i class="fas fa-eye"></i>
                                </div>
                                <div class="box-share box-icon">
                                    <i class="fas fa-share-alt"></i>
                                </div>
                            </div>
                        </div>  

                        <div class="boxs-text">
                            <span class="name-book">
                                ${e.nameBook}
                            </span>

                            <div class="boxs-star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>

                            <div class="boxs-price">
                                <div class="pri-sale">$${e.priceOri - e.priceOri * e.sale}</div>
                                <div class="pri-ori">$${e.priceOri}</div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            })

            $('.gallery').html(htlm_str.join(""))
        },
        btnFilter: function() {
             //Active btn and show/hide gallery img
            $('.list-products .btn').click(function() {

                $('.list-products .btn').removeClass('btn-danger');
                $(this).addClass('btn-danger');

                let data_btn = $(this).data('filter');

                $('.gallery .box').each(function (index, element) {
                    // element == this
                    let data_item = $(element).data('item');

                    if(data_item == data_btn || data_btn == 'all') {
                        $(element).parent().show(400)
                    }
                    else {
                        $(element).parent().hide(400);  
                    }
                });
            })
        },
        start: function() {
            this.render();
            this.btnFilter();
        }
    }
    gallery.start();
    //Gallery end

    //Show/hide btn to top
    $(window).scroll(function() {
        let location = 100;


        if($(this).scrollTop() > location) {
            $('.btn-to-top').show();
        }
        else {
            $('.btn-to-top').hide();
        }
    })
    //Scroll to top
    $('.btn-to-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    })

    const cart = {
        listCart : JSON.parse(localStorage.getItem('cart')) || [],
        addListCart: function () {
            let _this = this;
            // Khi nhấn nút thêm vào thì thêm vào mảng
            $('.box-cart.box-icon').click(function() {
                let index = $(this).closest('.box').data('index');

                let isMatch = _this.listCart.some(e => {
                    return e.id == index;
                });

                if(isMatch) {
                    listProduct[index].quantity ++;
                }
                else {
                    _this.listCart.push(listProduct[index])
                }
                _this.uploadData();
                _this.renderCart();
            })
        },
        renderCart: function () {
            let _this = this;
            let SUBTOTAL = 0,
            SHIPPING = 10,
            TAXES = 10,
            TOTAL = 0,
            NUMBER = 0;

            let cart_str = _this.listCart.map( (element,index )=> {
                let priSale = element.priceOri - element.priceOri * element.sale;
                SUBTOTAL += priSale * element.quantity;
                NUMBER += element.quantity;

                return `
                    <div class="smcart-item p-3" data-index="${index}">
                        <img src="${element.img}" alt="" class="me-2">
                        <div class="smcart-item-content ms-2">
                            <span class="smcart-name">${element.nameBook}</span>
                            <span class="smcart-price">$${priSale}</span> 
                            <div class="input-wrap">
                                <input type="number" class="input-quantity" value="${element.quantity}" min="1" max="99">
                                <div class="icon-up-down">
                                    <i class="fas fa-angle-up btn-up"></i>
                                    <i class="fas fa-angle-down btn-down"></i>
                                </div>
                            </div>
                        </div>
                        <div class="sm-del ms-auto me-2">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                `
            })
            TOTAL = SUBTOTAL * (TAXES/100) + SUBTOTAL + SHIPPING;
            
            $('.smcart-list').html(cart_str.join(""));
            $('.subtotal').html(`$${+SUBTOTAL.toFixed(2)}`);
            $('.ship').html(`$${SHIPPING}`);
            $('.taxes').html(`%${TAXES}`);
            if(NUMBER == 0){
                TOTAL = 0;
            }
            $('.total').html(`$${+TOTAL.toFixed(2)}`);
            $('.cart-item-count').html(NUMBER);
            $('.price-cart').html(`$${+TOTAL.toFixed(2)}`);
        },
        showCart: function() {
            // Xu ly hide/show mini-cart
            $('.cart').click(function() {
                $('.smcart').slideToggle(500);
            })
        },
        uploadData: function() {
            localStorage.setItem('cart', JSON.stringify(this.listCart))
        },
        handleAction: function() {
            let _this = this;
            //Khi thay doi so luong san pham trong gio hang mini
            $('.smcart').on('change','.input-quantity', function() {
                let index = $(this).closest('.smcart-item').data('index');
                if($(this).val() <= 0) {
                    $(this).val(1)
                }
                if($(this).val() > 99) {
                    $(this).val(99)
                }
                _this.listCart[index].quantity = Number($(this).val());
                _this.uploadData();
                _this.renderCart();
            })

            $('.smcart').on('click','.btn-up',function() {                  
                let index = $(this).closest('.smcart-item').data('index');
                _this.listCart[index].quantity ++;
                _this.uploadData();
                _this.renderCart();
            })
            
            $('.smcart').on('click','.btn-down',function() {                  
                let index = $(this).closest('.smcart-item').data('index');
                _this.listCart[index].quantity --;
                _this.uploadData();
                _this.renderCart();
            })



            //Xoa san pham trong gio hang
            $('.smcart').on('click','.sm-del', function () {
                let index = $(this).closest('.smcart-item').data('index');

                _this.listCart[index].quantity = 1;
                _this.listCart.splice(index,1);

                _this.uploadData();
                _this.renderCart();
            })
        },
        start: function() {
            this.addListCart();
            this.renderCart();
            this.showCart();
            this.handleAction();
        }
    }
    cart.start();


    //Page thu 2 - Page san pham
    const tb = {
        tb_arr: JSON.parse(localStorage.getItem('cart')) || [],
        renderTb: function() {
            let SUBTOTAL = 0,
                SHIPPING = 10,
                TAXES = 10,
                TOTAL = 0,
                _this = this;

            let tb_str = this.tb_arr.map( (element,index) => {
                let priSale = element.priceOri - element.priceOri * element.sale;
                    SUBTOTAL += element.quantity * priSale;
                return  `
                    <tr class="tb-content-item" data-index="${index}">
                        <td>
                                <i class="fas fa-times tb-del" aria-hidden="true"></i>
                        </td>
                        <td>
                            <img src="${element.img}" alt="">
                        </td>
                        <td>
                            <p class="tb-name">${element.nameBook}</p>
                        </td>
                        <td>
                            <p class="tb-price">$${priSale}</p>
                        </td>
                        <td>
                            <div class="input-wrap">
                                <input type="number" class="tb-input" value="${element.quantity}" min="1" max="99">
                                <div class="icon-up-down">
                                    <i class="fas fa-angle-up btn-up"></i>
                                    <i class="fas fa-angle-down btn-down"></i>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p class="tb-item-total">$${+(element.quantity * priSale).toFixed(2)}</p>
                        </td>
                    </tr>
                `
            });
            $('.tb-content').html(tb_str.join(""));

            TOTAL = SUBTOTAL * (TAXES/100) + SUBTOTAL + SHIPPING;
            $('.tb-subtotal').html(`$${+SUBTOTAL.toFixed(2)}`);
            $('.tb-ship').html(`$${SHIPPING}`);
            $('.tb-taxes').html(`%${TAXES}`);
            if(_this.tb_arr.length ==0) {
                TOTAL = 0;
            }
            $('.tb-total').html(`$${+TOTAL.toFixed(2)}`)
        },
        handleAction: function() {
            

            //Xoa san pham
            let _this = this;
            $('.tb-content').on('click','.tb-del',function() {                
                let index = $(this).closest('.tb-content-item').data('index');
                
                _this.tb_arr.splice(index,1);
                _this.uploadData();
                _this.renderTb();
            })

            //Thay doi so luong san pham
            $('.tb-content').on('change','.tb-input',function() {                
                let index = $(this).closest('.tb-content-item').data('index');
                _this.tb_arr[index].quantity = Number($(this).val());

                _this.uploadData();
                _this.renderTb();
            })

            $('.tb-content').on('click','.btn-up',function() {                  
                let index = $(this).closest('.tb-content-item').data('index');
                _this.tb_arr[index].quantity ++;

                _this.uploadData();
                _this.renderTb();
            })
            $('.tb-content').on('click','.btn-down',function() {                  
                let index = $(this).closest('.tb-content-item').data('index');
                _this.tb_arr[index].quantity --;

                _this.uploadData();
                _this.renderTb();
            })
        },
        uploadData: function () {     
            localStorage.setItem('cart',JSON.stringify(this.tb_arr));
        },
        start: function() {
            this.renderTb();
            this.handleAction();
        }
    }
    tb.start();
});


