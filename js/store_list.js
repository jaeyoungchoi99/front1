const STORE_LIST=[
    [
        {item_no:1, src: '1.png', title:'포토카드(일반)', p_text:'', price:'1,000원'},
        {item_no:2, src: '2.png', title:'산리오캐릭터즈 포토카드(3~4월)', p_text:'카드 앞면은 산리오 캐릭터즈 포토카드 템플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.', price:'3,000원'},
        {item_no:3, src: '3.jpg', title:'짱구는못말려 포토카드(3~4월)', p_text:'카드 앞면은 짱구는못말려 포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.', price:'3,000원'},
        {item_no:4, src: '4.png', title:'코코몽 포토카드(4~5월)', p_text:'카드 앞면은 코코몽 포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.', price:'3,000원'},
        {item_no:5, src: '5.png', title:'최종민 포토카드', p_text:'카드 앞면은 최종민 포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.', price:'3,000원'},
        {item_no:6, src: '6.jpg', title:'서리 포토카드', p_text:'카드 앞면은 서리 포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.', price:'3,000원'},
    ],
    [
        {item_no:1, src: '1.jpg', title:'일반 관람권', p_text:'일반 관람권 1매', price:'13,000원'},
        {item_no:2, src: '2.jpg', title:'샤롯데 관람권', p_text:'샤롯데 관람권 1매', price:'35,000원'},
    ],
    [
        {item_no:1, src: '1.jpg', title:'반반팝콘(오리지널/카라멜) L', p_text:'반반팝콘(오리지널+카라멜)L', price:'	7,000원'},
        {item_no:2, src: '2.jpg', title:'카라멜팝콘 M', p_text:'카라멜팝콘M', price:'6,000원'},
        {item_no:3, src: '3.jpg', title:'더블콤보', p_text:'오리지널팝콘M2+탄산음료M2', price:'15,000원'},
        {item_no:4, src: '4.jpg', title:'오리지널팝콘L', p_text:'오리지널팝콘L', price:'6,000원'},
        {item_no:5, src: '5.jpg', title:'스위트콤보', p_text:'오리지널L+탄산음료M2', price:'11,000원'},
        {item_no:6, src: '6.jpg', title:'오리지널팝콘M', p_text:'오리지널팝콘M', price:'5,000원'},
        {item_no:7, src: '7.jpg', title:'사이다M', p_text:'사이다M', price:'3,000원'},
        {item_no:8, src: '8.jpg', title:'카라멜팝콘 L', p_text:'카라멜팝콘L', price:'7,000원'},
        {item_no:9, src: '9.jpg', title:'사이다 L', p_text:'사이다L', price:'3,500원'},
        {item_no:10, src: '10.jpg', title:'콜라 L', p_text:'콜라L', price:'3,500원'},
    ]
]


let photo_length = STORE_LIST[0].length;
let ticket_length = STORE_LIST[1].length;
let eat_legnth = STORE_LIST[2].length;
for(let i=0; i<photo_length; i++){
    let photo = `<div class="photo_item"><img src="./img/photo/${STORE_LIST[0][i].src}" alt="">
                    <h4>${STORE_LIST[0][i].title}</h4>
                    <p>${STORE_LIST[0][i].p_text}</p>
                    <div class="price">${STORE_LIST[0][i].price}</div>
                </div>`
            $('.photo_list_box').append(photo)
    
}
for(let i=0; i<ticket_length; i++){
    let ticket = `<div class="ticket_item"><img src="./img/ticket/${STORE_LIST[1][i].src}" alt="">
    <h4>${STORE_LIST[1][i].title}</h4>
    <p>${STORE_LIST[1][i].p_text}</p>
    <div class="price">${STORE_LIST[1][i].price}</div>
</div>`
$('.ticket_list_box').append(ticket)
}
for(let i=0; i<eat_legnth; i++){
    let eat = `<div class="eat_item"><img src="./img/eat/${STORE_LIST[2][i].src}" alt="">
    <h4>${STORE_LIST[2][i].title}</h4>
    <p>${STORE_LIST[2][i].p_text}</p>
    <div class="price">${STORE_LIST[2][i].price}</div>
</div>`
$('.eat_list_box').append(eat)
}
