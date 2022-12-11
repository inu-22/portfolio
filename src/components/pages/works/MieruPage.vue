<template>
  <div class="container">
    <!-- 左右にボタンが出現する -->
    <div class="works_page">
      <router-link to="/works/gikkuri" class="page_left"><div class="btn"><div class="btn_label">前の作品へ</div></div></router-link>
      <router-link to="/works/uber" class="page_right"><div class="btn"><div class="btn_label">次の作品へ</div></div></router-link>
    </div>

    <!-- 表紙 -->
    <div class="front_cover">
      <img src="../../../assets/見える子ちゃん_表紙.png" class="image front_cover" alt="表紙">
    </div>

    <!-- APPLICATION -->
    <MyTitle :number="number[0]" :name="name[0]" sub="アプリについて"></MyTitle>
    <div class="contents app mieru">
        <!-- このアプリについての説明 -->
        <div class="app_exp">
          <div style="font-size: 1.5rem;">評判見える子ちゃんとは...</div>
          <div class="exp_box">

            <img src="../../../assets/見える子ちゃん_アイコン.png" class="image icon" alt="見える子ちゃんのアイコン">

            <div class="hukidashi">
              <p>口コミを可視化するアプリです！<br>インターネット上の口コミを分析して、よく出る単語で一枚のイラストを描きます。</p>
            </div>
          </div>
        </div>

        <!-- このアプリについての説明スライド -->
        <!-- <div class="app_preview">サイトの説明スライド（後々更新）</div> -->
        <!-- このアプリの公開ページへのリンク -->
        <div>
          <div style="margin-top: 5%">★このアプリもデプロイしてます！</div>
          <a href="https://chan-mieruko.web.app/" class="app"><span style="font-size:1.5rem">クリックして公開ページへGO!!</span></a>

        </div>
        <iframe  class= "frame_center" src="https://chan-mieruko.web.app/" width="100%" height="500px"></iframe>
    </div>


    <!-- CONCEPT -->
    <MyTitle :number="number[1]" :name="name[1]" sub="コンセプトについて"></MyTitle>
    <div class="contents ccpt">
      <!-- 左に配置 -->
      <div class="ccpt_exp">
        このアプリを作ろうと思いついたのは、<span style="color:rgb(255, 0, 76);">「化粧品を探すのってしんどい」</span>と気づいたときでした。
        <!-- しんどい原因は<span style="color:rgb(255, 0, 76);">口コミ</span>です。<br> -->
        <br>
        私は化粧品を買うとき、絶対口コミを読むようにしてるんですけど、この読む作業が<span style="color:rgb(255, 0, 76);">めんどくさくて</span>仕方がありません。<br>
        なぜなら、化粧品って商品の種類がめちゃ多いのに購入者も多いから<span style="color:rgb(255, 0, 76);">大量の口コミ</span>が投稿されるからです。1つの商品にたいして1万件の口コミがあるなんてことはよくあります。<br>
        正確な情報を得るためには何百個とか読んで比べるべきでしょうが、現実的ではありませんよね。<br>
        そこで、口コミから<span style="color:rgb(255, 0, 76);">「正確な情報を一瞬で得る」</span>ためにこのアプリを開発しました。<br><br>

        商品を<span style="color:rgb(255, 0, 76);">「楽しく選ぶ」</span>がこのアプリのコンセプトです。今回は化粧品の購入を検討している女性がターゲットなので、サイトの色を淡くしたり、画像をハートにしたりと、<span style="color:rgb(255, 0, 76);">かわいく</span>なるようにデザインを工夫しました。<br><br>
        また、今回は化粧品に限定してアプリを作りましたが、評判見える子ちゃんは<span style="color:rgb(255, 0, 76);">口コミ</span>を対象にしたアプリなので、化粧品以外のどんな商品にも対応できます。
      </div>
      <!-- 右に配置 -->
      <img src="../../../assets/見える子ちゃん_受賞.jpg" class="image ccpt_img" alt="授賞式の写真">
    </div>



    <!-- DEVELOP -->
    <MyTitle :number="number[2]" :name="name[2]" sub="構成図と使用技術"></MyTitle>
    <div class="contents dev">
        <!-- 左に配置 -->
        <img src="../../../assets/見える子ちゃん_構成図.png" class="image configuration" alt="システム構成図">
        
        <!-- 右に配置 -->
        <div class="dev_exp">
          使用技術<br>python<br>vue.js<br>firebase<br><br>
          製作日<br>2022/05 ~ /07
        </div>
    </div>

  </div>
</template>

<script>
import MyTitle from "../../../components/parts/title.vue";
export default {
  components: { MyTitle },
  data() {
    return {
      // 見出しの値
      number: ["01", "02", "03"],
      name: ["APPLICATION", "CONCEPT", "DEVELOP"]
    }
  }
};
</script>


<style>

.app_preview {
  width: 100%;
  height: 40rem; /* 適当 */
  background-color: beige;
}

a.app:hover {
  color: rgba(255, 0, 140, 0.682);
  text-shadow: 10px 10px 5px rgba(0, 0, 0, 0.445),
              -3px -3px 5px rgb(255, 255, 255);
}


</style>