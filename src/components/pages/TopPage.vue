<template>
  <div class="container">

    <!-- このページの表紙 -->
    <div class="front_cover name">

      <div class="name_yomi">しらいし　まなえ</div>
      <div class="name_kanji">白石 愛恵</div>
      
      <!-- deeplにて英訳。元の文：これは、喜田研のための白石愛恵のポートフォリオサイトです。愛恵のプロフィールや愛恵が今までに作ったアプリについて知ることができます。最も重要なことですが、このサイトはVue.jsを用いて作成しました。作るのめっちゃ楽しかったです。サンキュー -->
      <div class="discription contents" style="padding-top: 0;">
        Thank you for comming.
        This is a portfolio site of Manae Shiraishi for Kida Lab. <br>
        You can learn about Manae's profile and the apps she has created so far. <br>
        Most importantly, this site was created using Vue.js. It was a lot of fun to create.<br>        
        
      <router-link to="/appdates">Click here for a record of site updates.</router-link>
      </div>
    </div>

    <!-- About me -->
    <MyTitle :number="number[0]" :name="name[0]" sub="私について"></MyTitle>
    <div class="contents">
      
      <!-- 選択要素　:ホバー時に画像は暗くする、moreボタンを出現させる -->
      <router-link to="/about">
        <div class="selection">
              <div class="morebtn"><div class="btn_label more">more ⊳</div></div>
          <img src="../../assets/umi_illust.png" class="image">
        </div>
      </router-link>
      
      <!-- <div>詳細は画像をクリック！</div> -->
    </div>

    <!-- Works -->
    <div class="box">
      <!-- <div class="title">-02 title</div> -->
      <MyTitle :number="number[1]" :name="name[1]" sub="今までに作ったアプリ"></MyTitle>
      <div class="contents works">

        <div class="wk_left">
          <!-- 選択要素 -->
          <router-link to="/works/mieruko">
            <div class="selection">
              <div class="morebtn"><div class="btn_label more">more ⊳</div></div>
              <img src="../../assets/見える子ちゃん_toppage用.png" class="image">
            </div>
            <div style="margin: 0 0 10% 0">見える子ちゃん</div>
          </router-link>


          <!-- 選択要素 -->
          <router-link to="/works/pawapo">
            <div  class="selection">
              <div class="morebtn"><div class="btn_label more">more ⊳</div></div>
              <img src="../../assets/パワポ君_toppage用.png" class="image">
            </div>
            <div>らくらくパワポ君</div>
          </router-link>
        </div>

        <div class="wk_right">
          <!-- 選択要素 -->
          <router-link to="/works/uber">
            <div class="selection">
              <div class="morebtn"><div class="btn_label more">more ⊳</div></div>
              <img src="../../assets/ウーバー_toppage用.png" class="image">
            </div>
            <div style="margin: 0 0 10% 0">Uber EUNCHAE</div>
          </router-link>


          <!-- 選択要素 -->
          <router-link to="/works/gikkuri">
            <div class="selection">
              <div class="morebtn"><div class="btn_label more">more ⊳</div></div>
              <img src="../../assets/ぎっくり腰_toppage用.png" class="image">
            </div>
            <div>ぎっくり腰警報アプリ</div>
          </router-link>

        </div>
        <!-- <div style="margin-top: 5%">詳細は画像をクリック！</div> -->
      
      </div>

    </div>
  </div>
</template>

<script>
import MyTitle from "../../components/parts/title.vue";
export default {
  components: { MyTitle },
  data() {
    return {
      // 見出しの値
      number: ["01", "02"],
      name: ["PROFIEL", "WORKS"]
    }
  }
};
</script>

<style>
/* 名前の部分 */
.name {
  display: grid;
  /* font-family: "UD Digi Kyokasho NK-R"; */
  grid-template-rows: 1fr 3rem 8rem 1fr;
  text-align: center;
  /* color: #000000; */

}
.name_yomi {
  grid-row: 2 / 3;

  font-size: 2rem;
  line-height: 2.1rem;
}
.name_kanji {
  grid-row: 3 / 4;
  
  font-size: 6em;
  line-height: 6.1rem; /*文字の上下の余白が原因で少し下にずれるため、lineheightを設定した*/
  
  white-space: nowrap;
}
.discription {
  grid-row: 4 / 5;
  text-align:end;


  font-size: 1rem;
  line-height: 1.1rem;
  color: #0000006a;
  /* text-shadow: -1px -1px 5px rgba(255, 255, 255, 0); */
      
}
.contents.works {
  width: 100%;

  display: grid; /* 左右に2等分する */
  grid-template-columns: 1fr 7% 1fr;
}
/* 今はグリッドの位置を指定するためにitem要素一個一個にクラス名を与えている */
.wk_left {
  grid-column: 1 / 2;
}
.wk_right {
  grid-column: 3 / 4;
}
.selection {
  /* position: absolute; */
  position: relative;

}

.selection:hover .image {
  filter: brightness(70%);

}
.morebtn {

  height: 5rem;
  width: 5rem;
  opacity: 0;
  border-radius: 100%;

  background-color: rgba(255, 255, 255, 0.572);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25),
              -1px -1px 5px rgba(149, 149, 149, 0.548);

  text-align: center;
  z-index: 50;

  position: absolute;
  /* 上下中央 */
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;

  right: 10px;
  
  aspect-ratio: 1 / 1;
}

.selection:hover .morebtn {
  opacity: 1;

}
.morebtn:hover {
  /* filter: brightness(80%); */
  background-color: rgba(255, 0, 85, 0.274);


}
.btn_label.more {

  text-align: center;
  color: rgba(66, 66, 66, 0.8);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25),
              -1px -1px 3px white;
  padding-top: 1.6rem;

}
</style>