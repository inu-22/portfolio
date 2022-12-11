<template>
  <div class="container">
    <div class="works_page">
      <router-link to="/works/mieruko" class="page_left"><div class="btn"><div class="btn_label">前の作品へ</div></div></router-link>
      <router-link to="/works/pawapo" class="page_right"><div class="btn"><div class="btn_label">次の作品へ</div></div></router-link>
    </div>
    <div class="front_cover">
      <img src="../../../assets/ウーバー_表紙.png" class="image front_cover" alt="表紙">
    </div>

  
    <h1 style="color:red; margin:0 0 100px 0">⚠　このアプリは未完成です。<br><span style="color:black">このページの内容はアプリができ次第、順次更新します。ごめんなさい！</span></h1>
      
    <MyTitle :number="number[0]" :name="name[0]" sub="アプリについて"></MyTitle>
    <div class="contents app">

      <div style="font-size: 1.5rem;">UberEUNCHAEとは...</div>
      <!-- <img src="../../../assets/uber_icon.png" class="image" alt="見える子ちゃんのアイコン"> -->
      <div class="exp_box uber">
        
        
        <div class="hukidashi uber">
          <p>開発者の推しであるKPOPアイドルのEUNCHAEさんのかわいい写真をTwitterから自動で選んで、LINEしてくれるアプリです。</p>
        </div>
        <img src="../../../assets/uber_icon.png" class="image icon uber" alt="見える子ちゃんのアイコン">
      </div>

      <!-- <div class="app_movie"> 動画</div>
      <div class="app_slide">説明スライド</div> -->
      <ImgCarousel_uber></ImgCarousel_uber>

    </div>


    <MyTitle :number="number[1]" :name="name[1]" sub="コンセプトについて"></MyTitle>
    <div class="contents ccpt">

      <div class="ccpt_exp">
        
        「幸せを共有する」ことがこのアプリのコンセプトです。<br>ウンチェさんのことが好きな友人や知り合いがターゲットなので、LINEbotにすることで簡単に画像を共有できるようにしました。<br><br>
        このアプリを作ろうと思った背景に推し活があります。
        わたしは今まで推しのお気に入りの画像を共有するとき、自分がTwitterでいいねした画像を手作業で保存して送信していました。しかし、めんどくさがり屋な私は手作業を自動化したくなってしまったのです。<br>
        このアプリは、私がTwitterでリツイートした画像を自動で保存して、ほしい時にLINEのトーク画面に送信します。
        さらに、私だけではなく推し仲間にとってもメリットがあります。このアプリはLINEbotなのでLINEグループのメンバーならだれでも、そしていつでもウンチェさんの画像を注文することができます。注文する相手が人でなくコンピュータなので遠慮する必要がなくなり、気軽に注文できるというメリットがあります。<br><br>
        このアプリをつかうことでさらにウンチェさんのファンが増えればうれしいです。
      </div>
      <img src="../../../assets/uber_sub.jpg" class="image ccpt_img" alt="作品の関連画像">
    </div>
  


    <MyTitle :number="number[2]" :name="name[2]" sub="構成図と使用技術"></MyTitle>
    <div class="contents dev">

      <img src="../../../assets/ウーバー_構成図.png" class="image configuration" alt="システム構成図">
      <div class="dev_exp">
        <div>
          使用技術<br>python<br>firebase<br><br>
          製作日<br>2022/08 ~
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import MyTitle from "../../../components/parts/title.vue";
import ImgCarousel_uber from "../../../components/parts/ImgCarousel_uber.vue";
export default {
  components: { MyTitle, ImgCarousel_uber},
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
.app_uber {
    background-color: rgb(255, 115, 139);
}

.exp_box.uber {
  display: grid;
  height: fit-content;
  grid-template-columns: 1fr 20%;
  border-bottom: medium solid rgb(0, 255, 115);
  margin-bottom: 30px;
}
.hukidashi.uber {
 grid-column: 1 / 2;

  background-color: transparent;
}
.icon.uber {
 grid-column: 2 / 3;
}

.app_movie {
    background-color: rgb(255, 115, 139);
    width: 100%;
    aspect-ratio: 5 / 3;
    margin: 5% 0 5% 0;
}

.app_slide {
  background-color: #ff3859;
  width: 100%;
  aspect-ratio: 5 / 1;

}

</style>