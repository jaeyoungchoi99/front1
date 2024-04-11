const MOVIE_LIST = [
    [
        {movie_no:1, src:'1.jpg', movie_name:'쿵푸팬더4',grade_src:'grade_all.png',per_reserv:'11.3%',dead_line:'D-9'},
        {movie_no:2, src:'2.jpg', movie_name:'듄: 파트2', grade_src:'grade_12.png',per_reserv:'3.0%',dead_line:'D-6'},
        {movie_no:3, src:'3.jpg', movie_name:'파묘', grade_src:'grade_15.png',per_reserv:'14.7%',dead_line:'D-5'},
        {movie_no:4, src:'4.jpg', movie_name:'오멘: 저주의 시작', grade_src:'grade_15.png',per_reserv:'5.3%',dead_line:'D-2'},
        {movie_no:5, src:'5.jpg', movie_name:'댓글부대', grade_src:'grade_15.png',per_reserv:'8.2%',dead_line:'D-2'},
        {movie_no:6, src:'6.jpg', movie_name:'비키퍼', grade_src:'grade_18.png',per_reserv:'14.7%',dead_line:'D-11'},
        {movie_no:7, src:'7.jpg', movie_name:'유미의 세포들', grade_src:'grade_all.png',per_reserv:'20%',dead_line:'D-2'},
        {movie_no:8, src:'8.jpg', movie_name:'씬', grade_src:'grade_15.png',per_reserv:'5.8%',dead_line:'D-2'}
        
    ],
    [
        {movie_no: 1, src: '1.jpg', title: '쿵푸팬더4', open_date:'2024.04.10', movie_time:'93',
        age:'전체관람가',reserv:'1,207', like:'1,185', movie_txt:`오랜만이지! 드림웍스 레전드 시리즈 마침내 컴백!</p><br>
        마침내 내면의 평화… 냉면의 평화…가 찾아왔다고 믿는 용의 전사 ‘포’
        이젠 평화의 계곡의 영적 지도자가 되고, 자신을 대신할 후계자를 찾아야만 한다.<br>
        “이제 용의 전사는 그만둬야 해요?”<br>
        <br>
        용의 전사로의 모습이 익숙해지고 새로운 성장을 하기보다 지금 이대로가 좋은 ‘포’<br>
        하지만 모든 쿵푸 마스터들의 능력을 그대로 복제하는 강력한 빌런 ‘카멜레온’이 나타나고<br>
        그녀를 막기 위해 정체를 알 수 없는 쿵푸 고수 ‘젠’과 함께 모험을 떠나게 되는데…<br>
        <br>
        <p class="movie_txt_p">포는 가장 강력한 빌런과 자기 자신마저 뛰어넘고 진정한 변화를 할 수 있을까?`, movie_genre:'애니메이션, 액션, 코미디 / 미국', movie_direct:'마이크 미첼, 스테파니 스티네', movie_star:'잭 블랙, 아콰피나, 비올라 데이비스, 더스틴 호프만, 제임스 홍, 브라이언 크랜스톤'},
        {movie_no: 2, src: '2.jpg', title: '듄:파트2', open_date:'2024.02.28', movie_time:'165',
        age:'12세이상관람가',reserv:'190.0만명', like:'2,501', movie_txt:`황제의 모략으로 멸문한 가문의 유일한 후계자 폴(티모시 샬라메).</p><br>
        어머니 레이디 제시카(레베카 퍼거슨)와
        간신히 목숨만 부지한 채 사막으로 도망친다.
        그곳에서 만난 반란군들과 숨어 지내다
        그들과 함께 황제의 모든 것을 파괴할 전투를 준비한다.<br>
        한편 반란군들의 기세가 높아질수록 불안해진 황제와 귀족 가문은
        잔혹한 암살자 페이드 로타(오스틴 버틀러)를 보내 반란군을 몰살하려 하는데…
        
        <p class="movie_txt_p"><br>2월, 운명의 반격이 시작된다!</p>`, movie_genre:'액션 / 미국', movie_direct:'드니 빌뇌브', movie_star:'티모시 샬라메, 젠데이아, 레베카 퍼거슨, 조슈 브롤린, 오스틴 버틀러, 플로렌스 퓨, 데이브 바티스타'
        },
        {movie_no: 3, src: '3.jpg', title: '파묘', open_date:'2024.02.22', movie_time:'134',
        age:'15세이상관람가',reserv:'1104.1만명', like:'4,919', movie_txt:`미국 LA, 거액의 의뢰를 받은 무당 ‘화림’(김고은)과 ‘봉길’(이도현)은
        기이한 병이 대물림되는 집안의 장손을 만난다.</p><br>
        조상의 묫자리가 화근임을 알아챈 ‘화림’은 이장을 권하고,
        돈 냄새를 맡은 최고의 풍수사 ‘상덕’(최민식)과 장의사 ‘영근’(유해진)이 합류한다.
        <br>
        “전부 잘 알 거야… 묘 하나 잘못 건들면 어떻게 되는지”
        
        절대 사람이 묻힐 수 없는 악지에 자리한 기이한 묘.
        ‘상덕’은 불길한 기운을 느끼고 제안을 거절하지만,
        ‘화림’의 설득으로 결국 파묘가 시작되고…
        
        <p class="movie_txt_p"><br>나와서는 안될 것이 나왔다.</p>`, movie_genre:'미스터리 / 한국', movie_direct:'장재현', movie_star:' 최민식, 김고은, 유해진, 이도현'
        },
        {movie_no: 4, src: '4.jpg', title: '오멘: 저주의 시작', open_date:'2024.04.03', movie_time:'165',
        age:'15세이상관람가',reserv:'447명', like:'272', movie_txt:`수녀가 되기 위해 로마에 가게 된 ‘마거릿’(넬 타이거 프리).</p><br>
        그곳에서 새로운 삶을 시작하려는 그때,
        믿음을 뒤흔드는 어둠의 그림자를 마주한다.
         
        서서히 조여오는 끔찍한 공포가 마침내 정체를 드러내기 시작하는데 …
        
        <p class="movie_txt_p"><br>
        6월 6일 6시 사탄의 아이가 태어나고,
        믿음이 향하는 곳이 뒤바뀐다!</p>`, movie_genre:'공포(호러) / 미국, 이탈리아', movie_direct:'아르카샤 스티븐슨', movie_star:' 넬 타이거 프리, 타우픽 바롬, 소냐 브라가, 랄프 이네슨, 빌 나이'
        },
        {movie_no: 5, src: '5.jpg', title: '댓글부대', open_date:'2024.03.27', movie_time:'109',
        age:'15세이상관람가',reserv:'61.1만명', like:'2,501', movie_txt:`실력 있지만 허세 가득한 사회부 기자 ‘임상진’
        대기업 ‘만전’의 비리를 취재하지만 오보로 판명되며 정직당한다.
        </p><br>
        “기자님 기사 오보 아니었어요. 다 저희들이 만든 수법이에요”
        그러던 어느 날, 의문의 제보자가 찾아온다.<br>
        자신을 온라인 여론 조작을 주도하는 댓글부대, 일명 ‘팀알렙’의 멤버라고 소개한 제보자는
        돈만 주면 진실도 거짓으로, 거짓도 진실로 만들 수 있다고 하는데…
        <p class="movie_txt_p"><br>
        “불법은 아니에요. 합법인지는 모르겠지만”
        이 제보, 어디부터 진실이고, 어디까지 거짓인가?</p>`, movie_genre:'범죄, 드라마 / 한국', movie_direct:'안국진', movie_star:'손석구, 김성철, 김동휘, 홍경'
        },
        {movie_no: 6, src: '6.jpg', title: '비키퍼', open_date:'2024.04.03', movie_time:'105',
        age:'18세이상관람가',reserv:'3,072명', like:'327', movie_txt:`법 위에 있는 비밀 기관 '비키퍼'</p><br>
        그곳의 전설로 남은 탑티어 에이전트 '애덤 클레이'는
        기관의 눈을 피해 자취를 감추고 양봉가로 살아간다.
        <br>
        그러던 어느 날, 거대 보이스 피싱 조직으로부터
        유일한 친구 '엘로이즈'를 잃게 된 그는 피의 복수를 위해
        잠재웠던 진짜 모습을 드러내기 시작하는데....
        <p class="movie_txt_p"><br>
        4월, 전 세계가 열광할 NEW 킬링 액션 유니버스가 시작된다!</p>`, movie_genre:'액션, 스릴러 / 미국', movie_direct:'데이비드 에이어', movie_star:'제이슨 스타뎀, 조쉬 허처슨, 제레미 아이언스'
        },
        {movie_no: 7, src: '7.jpg', title: '유미의 세포들 더 무비', open_date:'2024.04.03', movie_time:'93',
        age:'전체관람가',reserv:'4,037명', like:'379', movie_txt:`“사랑이의 마음이 나를 웃음 짓게 했고 불안이의 걱정이 나를 나아가게 했어”
        </p><br>
        오랜 꿈이던 작가가 되기 위해 퇴사 후 공모전을 준비하기로 결심한 유미.<br>
        완벽한 글쓰기 일정을 만드는 ‘스케줄 세포’부터 글감을 찾기 위해 뛰어다니는 ‘작가 세포’와
        허리띠를 졸라매는 ‘자린고비 세포’까지 모두가 유미의 꿈을 위해 열심히 노력한다.<br>
        하지만 미래에 대한 걱정이 유미의 ‘불안 세포’를 점점 자라나게 하고
        바비와의 흔들리는 관계로 흑화한 ‘사랑 세포’까지 세포들 사이에 갈등이 고조되며
        <p class="movie_txt_p">
        세포 마을은 절체절명의 위기에 처하는데…</p>`, movie_genre:'애니메이션 / 한국', movie_direct:'김다희', movie_star:'윤아영, 신범식, 송하림, 안소이, 사문영, 안영미'
        },
        {movie_no: 8, src: '8.jpg', title: '씬', open_date:'2024.04.03', movie_time:'102',
        age:'15세이상관람가',reserv:'1,281명', like:'164', movie_txt:`“심연의 가장 깊은 죄가 깨어난다!”</p><br>
        실험적 요소로 내로라하는 해외 유수 영화제에서 이름을 알린 유명 감독 ‘휘욱’은
        춤을 소재로한 새로운 작품 촬영을 위해 신인 배우 ‘시영’, ‘채윤’과 함께
        폐교 옥상에서 촬영을 시작한다.
        <br>
        파격적이고 거친 동작의 춤사위로 촬영이 시작되자
        이내 배우와 제작진들은 오묘한 기운에 휩싸이고
        촬영 현장은 순식간에 아비규환이 되어 버린다.
        <p class="movie_txt_p"><br>
        “악마가 깨어났다!”
        그리고, 깨어나지 말아야할 존재 ‘그것’과 마주하게 되는데…</p>`, movie_genre:'공포(호러) / 한국', movie_direct:'한동석', movie_star:'김윤혜, 송이재, 박지훈, 이상아'
        }
        
    ],
];

    let cate=0;
    let movie_length = MOVIE_LIST[cate].length;
    
    for(let i=0; i<movie_length; i++){
        
        
        let movie =`<div class="movie_info">
                        <img src="./img/movie/${MOVIE_LIST[cate][i].src}" width="184px" height="263px" class="movie_img">
                        <div class="top_info">
                            <img src="./img/${MOVIE_LIST[cate][i].grade_src}">${MOVIE_LIST[cate][i].movie_name}
                        </div>
                        <div class="bot_info">
                            <span class="sub_info">예매율 ${MOVIE_LIST[cate][i].per_reserv}</span>
                            <span class="day_info">${MOVIE_LIST[cate][i].dead_line}</span>
                        </div>
                        <div class="inner_box">
                        <a href="#" class="reservation_a"><div class="reservation">예매하기</div></a>
                            <a href="./detail.html?movie_no=${MOVIE_LIST[cate][i].movie_no}" class="detail_a"><div class="showmore">상세보기</div></a>
                        </div>
                    </div>`
                    $('.movie_list').append(movie)
    }

function get_inf_from_url(keyword){
    let url= location.href; // detail.html?movie_no=2

    url = url.split("?") // detail.html , movie_no=2

    if(url.length>1){
        url=url[1].split("=") //movie_no , 2
        return url=url[1] // 2
    }
}

