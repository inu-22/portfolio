<template>
  <div class="container">
    <!-- 表紙 -->
    <div class="front_cover">
      <img src="../../assets/umi_picture.png" class="image front_cover" alt="表紙">
    </div>

    <!-- ABOUT ME -->
    <MyTitle :name="name[0]" :number="number[0]" sub="略歴(?)"></MyTitle>
    <div class="prf_contents">
      <div class="contents profile"> 
        <div class="myname kanji">白石愛恵</div>
        <div class="myname alpha">MANAE SHIRAISHI</div>
        <div class="myhistory">2002年、香川県うまれ。人見知りな性格である一方、小・中学では学級委員長や音楽祭の実行委員を務めていた。高校では吹奏楽部に属し、大人数で行動したり、リーダーをサポートする経験をした。<br><br>
          現在、香川大学の情報システム・セキュリテコースに属している。
          学部一年生のときから、喜田研究室の先輩のもとでプログラミングを学び、授業では習わない技術に触れた。EPCは白石の人生を変えた。誘ってくれた喜田先生と指導してくれた本部さん、サポートしていただいた先輩方には感謝と尊敬の意しかないという。</div>
        <img src="../../assets/自画像.jpg" class="image prof" alt="自画像">
      </div>
    </div>

    <!-- PASSION -->
    <MyTitle :name="name[1]" :number="number[1]" sub="好きなもの"></MyTitle>
    <div class="contents passion">
      <div class="passion_box kpop"><PassionColumn exp_num="0"></PassionColumn></div>
      <div class="passion_box sports"><PassionColumn exp_num="1"></PassionColumn></div>
      <div class="passion_box manga"><PassionColumn exp_num="2"></PassionColumn></div>
    </div>


    <!-- MY SKILL -->
    <MyTitle :name="name[2]" :number="number[2]"  sub="触れた技術と学習度"></MyTitle>
    <div class="contents skill">
      <div class="skill_box left">
        <SkillBar :skill_bar="skills[0]"></SkillBar>
        <SkillBar :skill_bar="skills[1]"></SkillBar>
        <SkillBar :skill_bar="skills[2]"></SkillBar>
        <SkillBar :skill_bar="skills[7]"></SkillBar>
        <SkillBar :skill_bar="skills[3]"></SkillBar>
      </div>
      <div class="skill_box right">
        <SkillBar :skill_bar="skills[6]"></SkillBar>
        <SkillBar :skill_bar="skills[5]"></SkillBar>
        <SkillBar :skill_bar="skills[9]"></SkillBar>
        <SkillBar :skill_bar="skills[8]"></SkillBar>
        <SkillBar :skill_bar="skills[4]"></SkillBar>
      </div>
      <div style="grid-column: 1/4;">

        
        <div class="vue" style="margin-top:5%; margin-bottom:3%">
        私はこのサイトをVue.jsで作りました。<br>
        そして私は<span class="emphasis">フロントエンドが好き</span>です。<br>
        これが私が喜田研を志望する理由です。<br><br>
        
        実は、私はもともとVue.jsが苦手でした。<br>
        なぜなら、デザインが下手で、今までウェブアプリを作るとしてもしょぼい画面しか作れなかったからです。先輩に教えてもらっておきながら恥じさらしな話です。へへ<br>
        <!-- 現に私が過去に作ったウェブアプリの画面は全部しょぼいしダサかった、、、 -->
        <a href="https://gikkuri-alert.web.app/">(参考:ぎっくり腰警報アプリの画面)</a>←これやばいです。絶対みんな「なにこれ？？」って言う<br>
        
        <br>
        
        しかし、今回この<span class="emphasis">ポートフォリオサイト</span>を作るにあたって、<span class="emphasis">要件定義からプロトタイプまで</span>こだわりながら着実に開発を進めてきたことで、
        自分で納得できるくらいのかわいいサイトを作ることができました。<br>
        <!-- プロトタイプをVue.jsでコードにしていく過程がすごく楽しかったです。 -->
        <!-- 今も美しく正しいコードを書いたり、するのはできないけど、胸を張ってフロントエンドが好きだと言えます。そして、このコーディング楽しいという気持ちは忘れません。 -->
        <!-- そして、このコーディングが楽しいという気持ちは忘れません。<br><br> -->

        研究では今回みたいにサイトを作るわけじゃないと思うけど、もっと、フロントエンドという分野に触れていたいと思いました。
        フロントエンドを本気で学べるのは喜田研だけだとおもいます。<br>
        <span class="emphasis">私を喜田研に入れてください、おねがいします！！</span><br>
      </div>
      
    </div>
  </div>
  </div>
</template>
<script>
import PassionColumn from '../parts/PassionColumn.vue';
import MyTitle from "../../components/parts/title.vue";
import SkillBar from "../../components/parts/SkillBar.vue";

export default {
  components: { MyTitle, PassionColumn, SkillBar, SkillBar },
  data() {
    return {
      // 見出しの値
      number: ["01", "02", "03"],
      name: ["ABOUT ME", "PASSION", "MY SKILL"],

      //Passion関連の値
      imgname: ["../../assets/Kpop_アイコン.jpg", "Kpop_アイコン.jpg", "Kpop_アイコン.jpg"],
      ps_title: ["K-POP", "スポーツ観戦", "まんが"],
      // psn_exp: ["韓国アイドルが大好きです!<br>K-POPを聴くと元気が湧き出てくるので、落ち込んだときは推しを見てやる気をチャージしてます。<br><br>ちなみに今はLE SSERAFIM(ルセラフィム)、IVE(アイヴ)、aespa(エスパ)という3つのグループを推してます。"],

      //スキルバー関連の値
      skills: [
        {
          sklname: "Vue.js",
          score: 0.5
        },
        {
          sklname: "HTML/CSS",
          score: 0.5
        },
        {
          sklname: "C",
          score: 0.7
        },
        {
          sklname: "Kotlin",
          score: 0.2
        },
        {
          sklname: "Go",
          score: 0.2
        },
        {
          sklname: "Docker",
          score: 0.4
        },
        {
          sklname: "Python",
          score: 0.6
        },
        {
          sklname: "PHP",
          score: 0.3
        },
        {
          sklname: "Java",
          score: 0.4
        },
        {
          sklname: "SQL",
          score: 0.4
        },
      ]
      
    }
  }
};

</script>
<style>
.image.prof {
  width: 100%;
  border-radius: 3px;
  aspect-ratio: 3 / 2;
}

/* about me */
.contents.profile {
  height: auto;
  padding: 0 20% 10rem 50%;
}
.myname.kanji {
  font-size: 30px;
  font-weight: bold;

  /* font-family: "UD Digi Kyokasho NK-B"; */
}
.myname.alpha {
  font-size: 12px;
}
.myhistory {
  margin: 5% 0 5% 0;
}

/* passion */
.contents.passion {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 7% 1fr 7% 1fr;
}

.passion_box.kpop {
  grid-column: 1/2;
}
.passion_box.sports {
  grid-column: 3/4;
}
.passion_box.manga {
  grid-column: 5/6;
}

/* skill */
.contents.skill {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.skill_box.left {
  grid-column: 1 / 2;
}
.skill_box.right {
  grid-column: 2 / 3;
}

</style>