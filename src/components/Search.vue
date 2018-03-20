<template>
 <div>
  <div class="searchHeader">
    <div class="searchIcon" >
      <i class="gxs-icon gxs-icon-listenCount" v-if="!isSearchHot" v-on:click="menu()"><img src="/src/img/icon.png" alt=""></i>
      <i v-else class="mintui mintui-back backIcon" v-on:click="backToHome('search')" ></i>
    </div>
    <div class="searchInput">
        <input class="gxs-input" v-on:focus="keyUp($event,searchInfo)" type="text" v-model="searchInfo" placeholder="搜索 歌曲/专辑/歌手">
    </div>
  </div>

  <div class="hotSong" v-if="isSearchHot">
    <div style="margin-top:15%">
      <div v-for="(item,index) in hotSong" class="hotSongName">
          <span>{{index+1}}</span>
          <span style="margin-left:2rem">{{item.name}}</span>
          <div style="width:50rem;height:2rem"></div>
      </div>
    </div>
  </div>

  <div class="distinguish" v-show="isMenu">
    <div style="margin-top:40px">
      <i class="mintui mintui-back backIcon" v-on:click="backToHome('distinguish')"></i>
    </div>
    <div class="changeTab">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">听歌识曲</mt-tab-item>
        <mt-tab-item id="2">识别历史</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-spinner type="double-bounce" :size="500"></mt-spinner>
          <div class="loadWord">正在识别音乐... </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="loadWord" v-if="history" style="margin-top:5rem">暂无识别历史</div>
          <div v-else>
              <div v-for="item in historyList" class="historyWord">{{item.name}}</div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
 </div>
</template>
<script>
  export default{
    name: 'search',
    data (){
      return{
         isMenu: false,
         selected: '1',
         isSearchHot: false,
         searchInfo: '',
         history: false,
         result:['133333333333de2',13,4,65,67,87],
         historyList: [
            {name: 'see you again'},
            {name: 'let her go'}
            ],
         hotSong: [
           {name: '长相依'},
           {name: '突然好想你'},
           {name: '体面'}
         ]
      }
    },
      methods:{
        menu(){
         this.isMenu = !this.isMenu;
        },
        backToHome(p){
          switch (p){
             case 'search':
                 this.isSearchHot = false;
                 break;
             case 'distinguish':
                  this.isMenu = !this.isMenu;
                  break;
             default:
                   break;
             }
        },
         keyUp(e){
            this.isSearchHot = true;
            console.log(e);
        },
      },
      computed:{

      }
  }
</script>
