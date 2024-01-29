const shareKakao = (route, title) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_APP_KEY);
    }

    kakao.Link.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입
      content: {
        title,
        description: '🌟내 롤링퍼에 놀러와!🙏',
        imageUrl: `https://raw.githubusercontent.com/Dev-Duke-Seo/rolling_team1/1aa9c580f2b1145d6766a9add03b628b5e1489fd/src/assets/images/main_image.png`,
        link: {
          mobileWebUrl: route,
          webUrl: route
        }
      },
      buttons: [
        {
          title,
          link: {
            mobileWebUrl: route,
            webUrl: route
          }
        }
      ]
    });
  }
};

export default shareKakao;
