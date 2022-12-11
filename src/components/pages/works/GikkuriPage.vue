<template>
  <div class="container">
    
    <div class="works_page">
      <router-link to="/works/pawapo" class="page_left"><div class="btn"><div class="btn_label">前の作品へ</div></div></router-link>
      <router-link to="/works/mieruko" class="page_right"><div class="btn"><div class="btn_label">次の作品へ</div></div></router-link>
    </div>
    <div class="front_cover">
      <img src="../../../assets/ぎっくり腰_表紙.png" class="image front_cover" alt="表紙">
    </div>


    <MyTitle :number="number[0]" :name="name[0]" sub="アプリケーションについて"></MyTitle>
    <div class="contents app">
        
      <div class="app_exp">
        <div style="font-size: 1.5rem;">ぎっくり腰警報アプリとは...</div>

        <div class="exp_box gikkuri">
          <img src="../../../assets/ぎっくり腰_アイコン.png" class="image icon" alt="アイコン">
          <div class="hukidashi gikkuri">
            湿度や気温の変化、運動量からぎっくり腰になる危険性を計算して、ぎっくり腰注意報を発令するアプリである
          </div>
        </div>
        <div>
          <div style="margin-top: 5%">★このアプリもデプロイしてます！</div>
          <a href="https://gikkuri-alert.web.app/" class="app"><span style="font-size:1.5rem">クリックして公開ページへGO!!</span></a>
        </div>
        <iframe  class= "frame_center" src="https://gikkuri-alert.web.app/" width="100%" height="500px"></iframe>

      </div>
    </div>
    


    <MyTitle :number="number[1]" :name="name[1]" sub="コンセプトについて"></MyTitle>
    <div class="contents ccpt">
      <div class="ccpt_exp">
        「暮らしに安心を」がこのアプリのコンセプトです。ぎっくり腰になったことがある人がターゲットです。私はよくぎっくり腰になるため、ぎっくり腰を予測できるアプリが欲しく、自分で開発することにしました。経験上、湿度が高い日や雨の日、気温差が激しい日や運動量が多い日はぎっくり腰になりやすいことがわかっています。しかし、毎日欠かさずこれらの情報をすべてを探すのは面倒だし、つい忘れてはしゃいでぎっくり腰になってしまうことがあります。このアプリは自分で管理しなくても勝手に注意報を出してくれるので、ぎっくり腰もちとしては大変ありがたいものであります。
      </div>
      <img src="../../../assets/ぎっくり腰_アイコン.png" class="image ccpt_img gk" alt="作品の関連画像">
    </div>
    


    <MyTitle :number="number[2]" :name="name[2]" sub="構成図と使用技術"></MyTitle>
    <div class="contents dev">

      <img src="../../../assets/ぎっくり腰_構成図.png" class="image configuration" alt="システム構成図">
      <div class="dev_exp">
        <div>
          使用技術<br>vue.js<br>firebase<br><br>
          製作日<br>2021/08 ~ 10(??)
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import MyTitle from "../../../components/parts/title.vue";
import LinkPrevue from 'link-prevue'
export default {
  components: { MyTitle ,LinkPrevue },
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
.exp_box.gikkuri {
  display: grid;
  height: fit-content;
  grid-template-columns: 30% 5% 1fr;
}

.hukidashi.gikkuri {
  /* background-color: transparent; */
  border-radius: 0%;
}

.ccpt_img.gk {
  aspect-ratio: 1 / 1;
}
</style>