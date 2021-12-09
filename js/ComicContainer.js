const $template = document.createElement('template');
$template.innerHTML = `
<div class="content">
  <div class="comic-container" style = "text-align: center">
      <div class = "item col-lg-3 col-md-4 col-sm-6 mix  ">
          <div class="featured__item" >
                <div class="comic-image" style="width: 260px;height: 355px;">
                      <div class="featured__item__pic " >
                          <ul class="featured__item__pic__hover">
                              <li><a href="#"><i class="fa fa-heart"></i></a></li>
                              <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                              <li><a href="./shop-details.html"><i class="fa fa-shopping-cart"></i></a></li>
                          </ul>
                      </div>
                </div>
                <div class="comic-name" style = "width:260px"></div>
          </div>
      </div>
  </div>
</div>

</div>
`;
export default class ComicContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$name = this.querySelector('.comic-name');
        this.$originalName = this.querySelector('.comic-original-name');
        this.$image = this.querySelector('.comic-image');
        this.$type = this.querySelector('.comic-type');
        this.$duration = this.querySelector('.comic-duration');
        this.$itemBox = this.querySelector('.item')

    }
    // định nghĩa thuộc tính cho thẻ
    static get observedAttributes() {
        return ['name', 'duration', 'image', 'type', 'original-name'];
    }
    // chạy khi giá trị của thuộc tính (được địng nghĩa ở trên) thay đổi
    attributeChangedCallback(attrName1, oldValue, newValue) {
        //console.log("thuộc tính " + attrName1 + ":" + newValue);
        if (attrName1 == 'name') {
            this.$name.innerHTML = newValue;
        }
        
        else if (attrName1 == 'image') {
            this.$image.style.backgroundImage = `url('${newValue}')`;
        }
        else if (attrName1 == 'type') {
            // console.log(newValue);
            
            // let arr = newValue.split(" ");
            // console.log(arr);
            // for(let i = 0; i < 5; i++){
            //     this.$itemBox.classList.add(`'${arr[i]}'`)
            // }
            this.$itemBox.classList.add(`${newValue}`)
        }
        
        // else if (attrName1 == 'hot') {
        //     //console.log(newValue);
        //     if (newValue == "true") {
        //         this.$hot.style.display = "inline-block";
        //     }
        //     else if (newValue == "false") {
        //         this.$hot.style.display = "none";
        //     }
        // }
    }
    //được chạy khi lần đầu tiên xuất hiện trên trang web
    connectedCallback() {

        console.log("lần đầu tiên xuất hiện");
    }
    // được chạy khi component bị xóa khỏi trang web
    disconnectedCallback() {
        console.log("Component đã bị xóa");
    }
}
window.customElements.define('comic-container', ComicContainer);