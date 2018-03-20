<template>
  <div class="recommended">
    <div class="recommended-part"  v-for="(item, index) in list">
        <div class="recommend-image">
            <div class="recommended-box-img">
               <img v-bind:src="item.picUrl" alt="">
            </div>
        </div>
        <div class="recommend-text">
           <div class="recommended-title">{{item.title}}</div>
           <div class="recommended-box" v-for="(item, index) in item.songList">
                <p class="recommended-info">
                   <span class="song-index">{{index + 1}}</span><span class="song-name">{{item.name}}</span><span class="singer">{{item.singername}}</span>
                </p>
           </div>
           <div class="listenCount">
              <i class="gxs-icon gxs-icon-listenCount"><img style="width: 1.5rem" src="/src/img/listenCount.png" alt=""></i>
              <div class="listenCountNum">{{item.listenCount}}</div>
           </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'recommend',
    data (){
      return{
        list: [
        {
          title: '榜单一',
          picUrl: '/src/img/one.jpg',
          songList: [
            {name:'暧昧',singername:'薛之谦'},
            {name:'远走高飞',singername:'金志文'},
            {name:'山海',singername:'华晨宇'}
          ],
          listenCount: '24323'
        },{
          title: '榜单二',
          picUrl: '/src/img/one.jpg',
          songList: [
            {name:'暧昧',singername:'薛之谦'},
            {name:'远走高飞',singername:'金志文'},
            {name:'山海',singername:'华晨宇'}
          ],
          listenCount: '24323'
        }
        ]
      }
    }
  }
</script>
