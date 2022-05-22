import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Type1() {
    const [ num , setNum] = useState(-1)
    const [urlQueryNo , setUrlQueryNo] = useState(0)
    let no = urlQueryNo;
    const getNum = (urlQueryNo) => {
        console.log(urlQueryNo ,'urlQueryNo')
        if(urlQueryNo == 2) no = 1;
        if(urlQueryNo == 3) no = 3;
        if(urlQueryNo == 4) no = 2;
        if(urlQueryNo == 5) no = 4;
        if(urlQueryNo == 6) no = 5;
        if(!urlQueryNo ||urlQueryNo == 0 || urlQueryNo == 1 || urlQueryNo == 7)  no = 0;
        return no
    }
    const load = async() => {
        setUrlQueryNo( new URLSearchParams(window.location.search).get('no'))
        setNum(no)
    }
    window.onload = function(){
        let btn = document.querySelector(".btn-wrap");
        let visual = document.querySelector(".visual-section");
        let visualHeight = 100
        if(visual) visualHeight = visual.offsetHeight
 
        window.onscroll = function () {
        let windowTop = window.scrollY;
        if (windowTop >= visualHeight) {
            btn.classList.add("active");
        } 
        // 아니면 클래스 'active'을 제거
        else {
            btn.classList.remove("active");
            }
        };
    }

    const onChnageSlide = (idx) => {
        let btn = document.querySelector(".btn-wrap");
        let btns = btn.querySelectorAll('.fix-btn');
        if(!btns) return true
        for(let i =0; i < btns.length; i++){
           btns[i].classList.remove('on')
        }
        btns[idx].classList.add('on')
    }
    useEffect( ()=> {
        load()
    },[num])
    
    
    const slideItem = () => {
        if(num === -1) return <></>
        return <div className="wrapper">
            <Swiper className='visual-section'
                slidesPerView={1}
                initialSlide={Number(urlQueryNo)}
                onSlideChange={(swiper) => onChnageSlide(swiper.activeIndex)}
            >
                <SwiperSlide className='section01'>
                    <img src="/img/img_visual01.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="안심한도조회" className="link"></a>
                </SwiperSlide>
                <SwiperSlide className='section01'>
                    <img src="/img/img_visual02.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="안심한도조회" className="link"></a>
                </SwiperSlide>
                <SwiperSlide className='section01'>
                    <img src="/img/img_visual03.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="안심한도조회" className="link"></a>
                </SwiperSlide>
                <SwiperSlide className='section01'>
                    <img src="/img/img_visual04.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="안심한도조회" className="link"></a>
                </SwiperSlide>
                <SwiperSlide className='section01'>
                    <img src="/img/img_visual05.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="안심한도조회" className="link"></a>
                </SwiperSlide>
                <SwiperSlide className='section01'>
                    <img src="/img/img_visual06.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="안심한도조회" className="link"></a>
                </SwiperSlide>
                <SwiperSlide className='section01'>
                    <img src="/img/img_visual07.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="안심한도조회" className="link"></a>
                </SwiperSlide>
                <SwiperSlide className='section01'>
                    <img src="/img/img_visual08.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="안심한도조회" className="link"></a>
                </SwiperSlide>
            </Swiper>
            <div className="section section02">
                <p className="section-tit">
                    신한저축은행의 <strong>다양한 상품</strong>을<br/>
                        <strong>한번에</strong> 조회해보세요.
                    </p>
                    <div className="product-container">
                        <Swiper className='product-list'
                            slidesPerView={1}
                            initialSlide={getNum(urlQueryNo)}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide className='product-item'>
                                <p className="tit">참신한대출</p>
                                <div className="item-box">
                                    <div className="item01 item">
                                        <strong>최대한도</strong>
                                        <p>1억원</p>
                                    </div>
                                    <div className="item02 item">
                                        <strong>금리</strong>
                                        <p>연 5.8%
                                            ~19.9%</p>
                                    </div>
                                    <div className="item03 item">
                                        <strong>기간</strong>
                                        <p>최장 7년</p>
                                    </div>
                                </div>
                                <div className="notice">
                                    <strong className="bold">* 대출금리 = 기준금리 + 가산금리</strong>
                                    <p>- 기준금리 : 직전반기 신규정기예금 가중평균금리
                                        - 가산금리 : 내부 등급 기준에 따라 차등 적용</p>
                                    <strong className="bold">기타사항</strong>
                                    <p>대상 : 소득증빙이 가능한 만 19세 이상 & NICE신용평점 590점 이상
                                        고객중, 현 직장 재직 5개월 이상 & 연소득 2,000만원 이상 직장인
                                        중도상환수수료 : 최대 1% 내, 3년 경과시 없음
                                        ※ 중도상환금액 X 중도상환수수료율 X (대출잔여일수/대출기간)
                                        이자부과시기 : 매월 납입일에 후취
                                        연체이율: 약정이율+연 3%(법정최고금리 연 20% 이내)
                                        상환방식 : 원(리)금균등분할상환
                                        부대비용 : 
                                        ＊인지세
                                        - 5,000만원 이하 : 없음
                                        - 5,000만원 초과 ~ 1억원 이하 : 7만원(고객 및 저축은행 각 50%부담, 
                                        고객부담 3만5천원)
                                        ※대출 청약철회시 대출금과 이자, 대출과 관련하여 
                                        저축은행이 부담한 인지세 등 모든 비용을 반환해야 합니다</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='product-item'>
                                <p className="tit">사잇돌2대출</p>
                                <div className="item-box">
                                    <div className="item01 item">
                                        <strong>최대한도</strong>
                                        <p>3,000만원</p>
                                    </div>
                                    <div className="item02 item">
                                        <strong>금리</strong>
                                        <p>연 9.0%
                                            ~17.5%</p>
                                    </div>
                                    <div className="item03 item">
                                        <strong>기간</strong>
                                        <p>최장 5년</p>
                                    </div>
                                </div>
                                <div className="notice">
                                    <p>*SGI 서울보증보험 등급별 차등 적용</p>
                                    <strong className="bold">기타사항</strong>
                                    <p>대상
                                        ㆍ만 19세 이상 국내 거주 내국인으로 SGI서울보증보험 보증심사
                                        통과자에 한에서 가능
                                        ㆍ급여소득자 : 연소득 1,200만원 이상, 현 직장 재직 5개월 이상
                                        ㆍ사업소득자 : 연소득 600만원 이상, 현 사업 4개월 이상 영위
                                        ㆍ연금소득자 : 연소득 600만원 이상, 1개월 이상 연금수령자
                                        중도상환수수료 : 없음, 이자부과시기 : 매월 납입일에 후취
                                        연체이율: 약정이율+연3%(법정최고금리 연 20% 이내)
                                        상환방식 : 원(리)금균등분할상환
                                        부대비용 : 인지세 없음(인지세 미발생 구간)
                                        </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='product-item'>
                                <p className="tit">참신한500</p>
                                <div className="item-box">
                                    <div className="item01 item">
                                        <strong>최대한도</strong>
                                        <p>500만원</p>
                                    </div>
                                    <div className="item02 item">
                                        <strong>금리</strong>
                                        <p>연 11.9%
                                            ~19.9%</p>
                                    </div>
                                    <div className="item03 item">
                                        <strong>기간</strong>
                                        <p>최장 5년</p>
                                    </div>
                                </div>
                                <div className="notice">
                                    <strong className="bold">* 대출금리 = 기준금리 + 가산금리</strong>
                                    <p>- 기준금리 : 직전반기 신규정기예금 가중평균금리
                                        - 가산금리 : 내부 등급 기준에 따라 차등 적용</p>
                                    <strong className="bold">기타사항</strong>
                                    <p>대상 : 만 30세 이상 & NICE 신용평점 590점 이상 고객 중, 
                                        신용정보사 추정 연소득이 1,200만원 이상인자(대학(원)생 제외) 
                                        중도상환수수료 : 최대 1% 내, 3년 경과시 없음
                                        ※ 중도상환금액 X 중도상환수수료율 X (대출잔여일수/대출기간)
                                        이자부과시기 : 매월 납입일에 후취
                                        연체이율: 약정이율+연 3% (법정최고금리 연 20% 이내)
                                        (법정최고금리 연20% 이내)
                                        상환방식 : 원리금균등분할상환
                                        부대비용 : 인지세 없음(인지세 미발생 구간)</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='product-item'>
                                <p className="tit">햇살론/온라인햇살론</p>
                                <div className="item-box">
                                    <div className="item01 item">
                                        <strong>최대한도</strong>
                                        <p>2,000만원</p>
                                    </div>
                                    <div className="item02 item">
                                        <strong>금리</strong>
                                        <p>연 7%~9%대</p>
                                    </div>
                                    <div className="item03 item">
                                        <strong>기간</strong>
                                        <p>3년 또는 5년</p>
                                    </div>
                                </div>
                                <div className="notice">
                                    <p>*햇살론 대출금리기준 : 매월 금융감독원에서 통보하는 상한금리
                                        이내에서 금융회사가 자율적으로 결정(최대 10.5% 이하)
                                        ※온라인햇살론으로 진행 시, 기존 햇살론 대비 1.3%p 인하</p>
                                    <strong className="bold">기타사항</strong>
                                    <p>대상
                                        ㆍ현 직장 3개월 이상 근속중인 직장인
                                        ㆍ연소득 3,500만원 이하 또는 연소득 4,500만원 이하이면서
                                        1개사 이상의 개인신용평가사가 산정한 개인신용평점
                                        하위 20/100에 해당하는 자
                                        ※ ‘21년 기준 NICE 744점, KCB 700점 이하
                                        중도상환수수료 : 없음, 이자부과시기 : 매월 납입일에 후취
                                        연체이율 : 대출금리 + 연3%(연13%이내)
                                        상환방식 : 원금균등분할상환
                                        보증비용 : 보증료 연2%이내</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='product-item'>
                                <p className="tit">참신한사업자론</p>
                                <div className="item-box">
                                    <div className="item01 item">
                                        <strong>최대한도</strong>
                                        <p>500만원</p>
                                    </div>
                                    <div className="item02 item">
                                        <strong>금리</strong>
                                        <p>연 11.9%
                                            ~19.9%</p>
                                    </div>
                                    <div className="item03 item">
                                        <strong>기간</strong>
                                        <p>최장 5년</p>
                                    </div>
                                </div>
                                <div className="notice">
                                    <strong className="bold">* 대출금리 = 기준금리 + 가산금리</strong>
                                    <p>- 기준금리 : 직전반기 신규정기예금 가중평균금리
                                        - 가산금리 : 내부 등급 기준에 따라 차등 적용 </p>
                                    <strong className="bold">기타사항</strong>
                                    <p>대상:만 30세 이상 & NICE 신용평점 590점 이상 고객 중, 
                                        신용정보사 추정 연소득이 1,200만원 이상인 개인사업자 
                                        중도상환수수료: 최대 1% 내, 3년 경과시 없음
                                        ※ 중도상환금액 X 중도상환수수료율 X (대출잔여일수/대출기간)
                                        이자부과시기 : 매월 납입일에 후취
                                        연체이율 : 약정이율 + 연 3%(법정최고금리 연20% 이내)
                                        상환방식 : 원리금균등분할상환
                                        부대비용 : 인지세 없음(인지세 미발생 구간)</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='product-item'>
                                <p className="tit">허그론</p>
                                <div className="item-box">
                                    <div className="item01 item">
                                        <strong>최대한도</strong>
                                        <p>1억원</p>
                                    </div>
                                    <div className="item02 item">
                                        <strong>금리</strong>
                                        <p>연 5.2%
                                            ~18.5%</p>
                                    </div>
                                    <div className="item03 item">
                                        <strong>기간</strong>
                                        <p>최장 7년</p>
                                    </div>
                                </div>
                                <div className="notice">
                                    <strong className="bold">* 대출금리 = 기준금리 + 가산금리</strong>
                                    <p>- 기준금리 : 직전반기 신규정기예금 가중평균금리
                                        - 가산금리 : 내부 등급 기준에 따라 차등 적용</p>
                                    <strong className="bold">기타사항</strong>
                                    <p>대상 : 소득증빙이 가능한 만 19세 이상 & NICE 신용평점 590점 이상
                                        고객 중, 제휴기관 거래고객으로 현 직장 3개월 이상 & 
                                        연소득 1,200만원 이상
                                        중도상환수수료: 없음, 이자부과시기: 매월 납입일에 후취
                                        연체이율: 약정이율+연 3%(법정최고금리 연 20% 이내)
                                        상환방식: 원리금균등분할상환
                                        부대비용:
                                        ＊인지세
                                        - 5,000만원 이하 : 없음
                                        - 5,000만원 초과 ~ 1억원 이하 : 7만원(고객 및 저축은행 각 50%부담,
                                        고객부담 3만5천원)
                                        ※대출 청약철회시 대출금과 이자, 대출과 관련하여 저축은행이 부담한
                                        인지세 등 모든 비용을 반환해야 합니다</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                </div>
            </div>
            <div className="section section03">
                <img src="/img/img_app.png" alt="신한은행 app"/>
                <p className="desc">신청부터 송금까지 간편하게 진행하려면<br/>
                    신한저축은행 모바일대출 앱을 다운받으세요</p>
                <div className="app-link">
                    <a  href="https://play.google.com/store/apps/details?id=com.shinhan.smartloan">
                        <img src="/img/google.png" alt=""/>
                    </a>
                    <a  href="https://apps.apple.com/kr/app/id936581060">
                        <img src="/img/apple.png" alt=""/>
                    </a>
                </div>
            </div>
            <div className="notice-wrap">
                <strong className="tit">유의사항</strong>
                <p className="bullet">과도한 대출은 개인신용평점 하락의 원인이 될 수 있습니다.</p>
                <p className="bullet">신용등급 또는 개인신용평점 하락으로 금융거래의 제약 또는 
                불이익이 발생할 수 있습니다.</p>
                <p className="bullet">연체 시 계약기한 만료 전 원리금 변제의무가 발생할 수 있습니다.</p>
                <p className="bullet">대출한도 및 금리는 신용평점에 따라 차등 적용됩니다.</p>
                <p className="bullet">당사는 다수의 대출상품이 존재하며 상품별로 대상, 한도, 금리가 다릅니다.
                    상담과정에서 고객님께 적합한 상품을 안내해드립니다.</p>
                <p className="bullet">대출심사에 필요한 서류의 제출을 요구할 수 있고, 신용평점, 소득, 
                    금융거래 상황 등 심사기준에 따라 심사결과가 달라지거나 
                    대출이 거절될 수 있습니다.</p>
                <p className="bullet">대출 취급일로부터 6개월 이상 경과한 후 본인의 신용상태가 
                    개선되었다고 판단되는 경우 금리인하를 요구할 수 있습니다.
                    (단, 평가결과에 따라서 금리인하가 거절될 수 있습니다.)</p>
                <p className="bullet">계약체결일로부터 14일 이내에 대출계약에 대한 청약을 
                    철회할 수 있으며, 이미 공급받은 금전·재화와 그에 대한 이자 및 수수료는 
                    반환하여야 합니다.</p>
                <p className="bullet">금융회사가 판매원칙을 위반하여 금융상품 계약을 체결한 경우 
                    계약일로부터 5년, 위법사실을 안 날로부터 1년 계약의 해지를 
                    요구할 수 있습니다. (계약종료시 행사 불가)</p>
                <p className="bullet">금융소비자보호법 제19조제1항에 따라 해당 상품에 대해 충분한 
                    사전 설명을 받을 권리가 있으며 설명을 이해한 후 거래하시기 바랍니다.</p>
                <p className="bullet">계약을 체결하기 전 상품설명서 및 여신거래기본약관을 
                    확인하시기 바랍니다.</p>
                <p className="bullet">상품 가입 후 불만(민원)이 있을 경우 고객센터(1644-7777) 또는 
                    인터넷 홈페이지(www.shinhansvings.com) 로 문의하실 수 있으며 
                    분쟁이 발생한 경우에는 금융감독원(국번없이 1332) 등에 
                    도움을 요청하실 수 있습니다.
                    </p>
                <strong className="sub-tit">총 대출비용 예시</strong>
                <p className="desc">
                    1,000만원 14.0%, 36개월 원리금균등분할상환 조건으로 대출 시<br/>
                    총 상환금액은 12,299,263원(납입일에 따라 변동 가능)</p>
                <p className="desc type01">
                    저축은행중앙회 심의필 2022-00000(22.00.00~23.00.00)<br/>
                    준법감시인심의필 리테일 2022-00000(22.00.00~23.00.00)
                </p>
            </div>
            <div className="footer">
                <strong>개인정보처리방침</strong>
                <p>대출문의: 1800-3651｜고객센터: 1644-7777<br/>
                    금융사고신고 야간콜센터: 02-3978-600/800<br/> 
                    ㈜신한저축은행 사업자등록번호: 120-87-90239<br/>
                    서울특별시 중구 청계천로 54, 3층 (신한광교빌딩)</p>
                <div className="copy">Copyright© 2022 shinhansavingsbank. All Right Reserved</div>
            </div>
            <div className="btn-wrap">
                <div className="fix-btn on">
                    <img src="/img/img_fixBtn01.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code" title="대출신청"></a>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="모든 상품 통합 조회"></a>
                </div>
                <div className="fix-btn">
                    <img src="/img/img_fixBtn01.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code" title="대출신청"></a>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="모든 상품 통합 조회"></a>
                </div>
                <div className="fix-btn">
                    <img src="/img/img_fixBtn01.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code" title="대출신청"></a>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="모든 상품 통합 조회"></a>
                </div>
                <div className="fix-btn">
                    <img src="/img/img_fixBtn02.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code" title="대출신청"></a>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="모든 상품 통합 조회"></a>
                </div>
                <div className="fix-btn">
                    <img src="/img/img_fixBtn03.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code" title="대출신청"></a>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="모든 상품 통합 조회"></a>
                </div>
                <div className="fix-btn">
                    <img src="/img/img_fixBtn04.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code" title="대출신청"></a>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="모든 상품 통합 조회"></a>
                </div>
                <div className="fix-btn">
                    <img src="/img/img_fixBtn05.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code" title="대출신청"></a>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="모든 상품 통합 조회"></a>
                </div>
                <div className="fix-btn">
                    <img src="/img/img_fixBtn05.png" alt=""/>
                    <a href="https://m.shinhansavings.com/optimal_goods?code" title="대출신청"></a>
                    <a href="https://m.shinhansavings.com/optimal_goods?code=L3" title="모든 상품 통합 조회"></a>
                </div>
            </div>
        </div>

    }
  return (
    slideItem()
  )
}

export default Type1