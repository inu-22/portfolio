<template>
  <div class="container">
    <!-- 左右にボタン出現 -->
    <div class="works_page">
      <router-link to="/works/uber" class="page_left"><div class="btn"><div class="btn_label">前の作品へ</div></div></router-link>
      <div class="page_center"></div>
      <router-link to="/works/gikkuri" class="page_right"><div class="btn"><div class="btn_label">次の作品へ</div></div></router-link>
    </div>
    <!-- 表紙 -->
    <div class="front_cover">
      <img src="../../../assets/パワポ君_表紙.png" class="image front_cover" alt="表紙">
    </div>

    <!-- APPLICATION -->
    <MyTitle :name="name[0]" :number="number[0]" sub="アプリケーションについて"></MyTitle>
    <div class="contents app">
      <!-- アプリの説明 -->
      <div class="app_exp">
        <div style="font-size: 1.5rem;">らくらくパワポ君とは...</div>
        <div class="exp_box pwp">
          <img src="../../../assets/パワポ君_アイコン.png" class="image icon" alt="見える子ちゃんのアイコン">
          <div class="hukidashi">
            好きな画像を選ぶだけで同じ配色のパワーポイント資料を自動で生成してくれるアプリである！！
          </div>
        </div>
      </div>
      <!-- 説明スライド -->
      <div style="font-size: 1.5rem;">使用方法</div>
      <div class="app_slide_pre">
        <ImgCarousel></ImgCarousel>
      </div> 
    </div>


    <!-- CONCEPT -->
    <MyTitle :name="name[1]" :number="number[1]" sub="コンセプトについて"></MyTitle>
    <div class="contents ccpt">
      <!-- コンセプトの説明 -->
      <div class="ccpt_exp">
        「イメージを実現にする」ことがこのアプリのコンセプトです。
        このアプリは、画像から色を抽出して配色をきめて、その配色通りのパワーポイント資料を自動で作成します。<br>つまり、元の画像と同じ配色のパワポができるということです。<br>事前に用意された画像から選ぶのではなく、ユーザが画像を用意するので、ユーザがパワポに表現したいイメージを自由に再現できます（適当）。<br>
        
        このアプリを作ろうと思ったきっかけは大学での成果物発表会です。発表会に向けてプレゼン資料を作成していた時に、私は自分のデザインに納得ができず、悩んでいました。ふと隣にいた友人のプレゼン資料を見ると、それは目を惹かれる素敵な資料で、特にその配色が印象的だったのです。私は友人の素敵なセンスがとてもうらやましかったです。しかし私は絵が得意ではないので、その友人の配色のどんなところを気に入ったのか、そしてどう真似すればいいのかわかりませんでした。そこで、デザインが良くわからない人でも、好きな画像やイラストを選ぶだけで、元の画像と同じ印象を受け継いだパワーポイント資料が作られれば面白いと思って本アプリを開発することにしました。
        デザインに自信がない人がターゲットなので、色の知識がなくても、直観的でイメージ通りのパワポ資料を作れるようにしたく、このアプリを開発することにしました。
      </div>
      <!-- コンセプトの画像 -->
      <img src="../../../assets/パワポ君_アイコン.png" class="image ccpt_img" alt="作品の関連画像">
    </div>

    <!-- DEVELOP -->
    <MyTitle :name="name[2]" :number="number[2]" sub="構成図と使用技術"></MyTitle>
    <div class="contents dev">
      <!-- 構成図 -->
      <img src="../../../assets/パワポ君_構成図.png" class="image configuration" alt="システム構成図">
      <!-- 使用技術 -->
      <div class="dev_exp">
        <div>
          使用技術<br>python<br><br>
          製作日<br>2021/03            
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import MyTitle from "../../../components/parts/title.vue";

import ImgCarousel from "../../parts/ImgCarousel.vue";


export default {
  components: {
    MyTitle,
    ImgCarousel,
    ImgCarousel
},
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

.app_slide_pre {
  width: 100%;
  height: fit-content; /* 適当 */
  /* background-color: rgb(255, 94, 188); */
  /* aspect-ratio: 5 / 3; */
}
iframe[src$=".pdf" ]{
    width:100%;
    /* height:80%; */
  aspect-ratio: 10 / 51 ;

}
</style>