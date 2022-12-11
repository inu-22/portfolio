<template>
  <div class="passion_container">
    <!-- アイコン画像 -->
    <img src="../../assets/kpop_アイコン.png" alt="趣味のアイコン画像" class="image passion" v-if="exp_num == '0'"> 
    <img src="../../assets/スポーツ_アイコン.jpg" alt="趣味のアイコン画像" class="image passion" v-if="exp_num == '1'"> 
    <img src="../../assets/漫画_アイコン.jpg" alt="趣味のアイコン画像" class="image passion" v-if="exp_num == '2'"> 
    <!-- タイトル -->
    <div class="passion subject" v-if="exp_num == '0'"><span style="color: red;"></span>K-POP</div>
    <div class="passion subject" v-if="exp_num == '1'">スポーツ観戦</div>
    <div class="passion subject" v-if="exp_num == '2'">まんが</div>
    <!-- 説明文 -->
    <div class="passion_exp" v-if="exp_num == '0'"><span class="emphasis">韓国アイドル</span>が大好きです!<br>K-POPを聴くと<span class="emphasis">元気</span>が湧き出てくるので、落ち込んだときや疲れたときは推しを見てやる気をチャージしてます。この前K-POPのライブに行ったんですけど、御師たちが現実のものとは思えないくらい美しくて、ほんともうびっくりしました。<br><br>ちなみに今はLE SSERAFIM(ルセラフィム)、IVE(アイヴ)、aespa(エスパ)という3つのグループを推してます。最高！</div>  
    <div class="passion_exp" v-if="exp_num == '1'">スポーツの試合を見ることがすきです。<br>2021年に開催された<span class="emphasis">東京オリンピック</span>では毎日テレビをつけて応援して、オリンピックの期間をだれよりも楽しみました。<br>もしかしたら、スポーツが好きなだけじゃなくて、応援で<span class="emphasis">わいわいと騒ぐ</span>のが好きなのかもしれません。男子バレーの石川選手が好きです。だってかっこいいもん。</div>  
    <div class="passion_exp" v-if="exp_num == '2'">わたしにとって漫画は<span class="emphasis">命</span>です。<br>私の毎日の<span class="emphasis">ルーティン</span>に、「漫画を読む」ことが組み込まれているくらい私にとってなくてはならないものです。<br>どんなジャンルも読みますが、はらはらしたり怖いシーンがあったり、<span class="emphasis">闇が深い</span>作品が大好きです。だから私は「ちいかわ」が大好きなんです笑</div>  
<!-- 
    <div class="passion_exp" v-if="exp_num == '0'"><span v-html="exp_kp"></span></div>  
    <div class="passion_exp" v-if="exp_num == '1'"><span v-html="exp_sp"></span></div>  
    <div class="passion_exp" v-if="exp_num == '2'"><span v-html="exp_mg"></span></div>   -->
  </div>
</template>
<script>
export default {
  props: ["exp_num", "imgname", "ps_title"],
  data() {
    return {
      link: "/src/assets/Kpop_アイコン.jpg"
    }
  }
}

</script>
<style>
.image.passion {
  object-fit: cover;
  width: 100%;
  border-radius: 33%;
  aspect-ratio: 1 / 1;

}
.subject.passion {
  text-align: center;
  /* font-family: "UD Digi Kyokasho NK-B"; */
  font-size: 1.5rem;
  font-weight: bold;

  /* font-family: ; */
  margin: 8% 0 10% 0 ;
}
.emphasis {
  color: rgb(255, 0, 76);
  /* font-family: "UD Digi Kyokasho NK-B"; */

}
</style>