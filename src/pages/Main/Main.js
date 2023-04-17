import "./Main.css";

const Main = () => {
  return (
    <>
      <nav>
        <div class="insta">
          <i class="fa-brands fa-instagram fa-xl"></i>
          <span>Westagram</span>
        </div>
        <div class="search">
          <input class="searching" type="text" placeholder="검색" />
          <i class="fa-solid fa-magnifying-glass fa-xs"></i>
        </div>
        <div class="icons">
          <i class="fa-regular fa-compass fa-xl"></i>
          <i class="fa-regular fa-heart fa-xl"></i>
          <i class="fa-regular fa-user fa-xl"></i>
        </div>
      </nav>
      <main>
        <div class="feeds">
          <article>
            <div class="me-fid">
              <div class="me-profile">
                <img alt="내 프로필 이미지" src="/images/나.jpg" />
                <div class="me-Id">
                  <span class="me-name">al_zar_takkarsen</span>
                  <span class="me-desc">🫠</span>
                </div>
                <div class="dots"></div>
              </div>
              <img alt="인서타 피드 이미지" src="/images/싸콘.jpg" />
              <div class="bottom-icon">
                <button id="icon-button">
                  <img
                    id="좋아요"
                    alt="하트 아이콘"
                    class="heart-icon"
                    src="/images/heart.png"
                  />
                </button>
                <img
                  alt="댓글 아이콘"
                  class="comment"
                  src="/images/comments-2.png"
                />
                <img
                  class="upload"
                  alt="업로드 아이콘"
                  src="/images/upload.png"
                />
                <img
                  alt="스크랩 아이콘"
                  class="scrap"
                  src="/images/스크랩.png"
                />
              </div>
              <div class="likey">
                <img alt="내 프로필 이미지" src="/images/나.jpg" />
                <span class="like-comment">
                  <span class="bold">al_zar_takkarsen</span>님
                  <span class="bold">외 10명</span>이 좋아합니다
                </span>
              </div>
              <div class="fid-comment">
                <span class="bold">al_zar_takkarsen</span> 우 나 핫걸 좋은 거
                보고 갈래? 💦
                <div class="comment1">
                  <span class="bold">_sentiers</span> 라인이 예술이네요
                  <button id="댓글좋아요" class="comment-heart">
                    <img
                      alt="좋아요 하트"
                      class="small-heart"
                      src="/images/heart.png"
                    />
                  </button>
                </div>
                <div class="time">55분전</div>
              </div>
              <div class="commentary">
                <input id="댓글창" type="text" placeholder="댓글 달기..." />
                <button id="게시">게시</button>
              </div>
            </div>
          </article>
        </div>
        <div class="main-right">
          <div class="right-me">
            <img alt="내 프로필 이미지" src="/images/나.jpg" />
            <span class="me-name">al_zar_takkarsen</span>
            <span class="me-desc2">🫠</span>
          </div>

          <div class="story-feed">
            <div class="story-top">
              <span class="right-top">스토리</span>
              <button class="모두_보기">모두 보기</button>
            </div>

            <div class="story-people">
              <ul>
                <li id="story1">
                  <img alt="째롱이 프로필 이미지" src="/images/째로이.jpg" />
                  <span class="profile">jrong._</span>
                  <span class="story-time">10분 전</span>
                </li>
                <li id="story2">
                  <img alt="윤지 프로필 이미지" src="/images/윤디.jpg" />
                  <span class="profile">yuuunx</span>
                  <span class="story-time">2시간 전</span>
                </li>
                <li id="story3">
                  <img alt="노찌롱 프로필 이미지" src="/images/노홍철.jpg" />
                  <span class="profile">rohongchul</span>
                  <span class="story-time">11시간 전</span>
                </li>
                <li id="story4">
                  <img alt="예디 프로필 이미지" src="/images/조지.jpg" />
                  <span class="profile">jeo.ji_</span>
                  <span class="story-time">23시간 전</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="recommend-feed">
            <div class="recommend-top">
              <span class="right-top">회원님을 위한 추천</span>
              <button class="모두_보기">모두 보기</button>
            </div>
            <div class="recommend-list">
              <ul>
                <li id="recommend1">
                  <img alt="위코드 프로필 이미지" src="/images/wecode.jpg" />
                  <span class="profile">wecode_bootcamp</span>
                  <span class="recommend-follow">_legend_a님 외 2명이...</span>
                  <button class="follow">팔로우</button>
                </li>
                <li id="recommend2">
                  <img alt="하품 프로필 이미지" src="/images/하품.jpg" />
                  <span class="profile">hapoom_film</span>
                  <span class="recommend-follow">seol_seol_92님 외 3명...</span>
                  <button class="follow">팔로우</button>
                </li>
                <li id="recommend3">
                  <img
                    alt="여행 프로필 이미지"
                    src="/images/여행을 떠나요.jpg"
                  />
                  <span class="profile">pirt._.trip</span>
                  <span class="recommend-follow">jimmylee1220님 외 1...</span>
                  <button class="follow">팔로우</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer">
            Instagram 정보 . 지원 . 홍보 센터 . API . <br />
            채용 정보 . 개인정보처리방침 . 약관 . <br />
            디렉터리 . 프로필 . 해시태그 . 언어
            <p>&copy; 2023 INSTAGRAM</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;