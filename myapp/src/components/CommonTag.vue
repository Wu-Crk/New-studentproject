<template>
  <div class="tag">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !=='home'"  
      :effect="$route.name === item.name ? 'dark':'plain'" 
      @click="changMenu(item)" 
      @close="handleClose(item,index)">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations }from 'vuex'
export default {
    name:'CommonTag',
    data() {
        return {}
    },
    computed:{
        ...mapState({
            tags:state=>state.tab.tabsList
        })
    },
    methods: {
        ...mapMutations(['closeTag']),
       //点击tag跳转功能 
       changMenu(item){
        // console.log(item);
        this.$router.push({name:item.name})
       },
       //点击tag删除功能
       handleClose(item,index){
            //调用store中的mutation
            this.closeTag(item)
            const length = this.tags.length 
            //删除之后的跳转逻辑
            if(item.name !== this.$router.name){
                return
            }
            if(index===length){
                this.$router.push({
                    name:  this.tags[index -1].name 
                })
            } else{
                this.$router.push({
                    name: this.tags[index].name
                })
            }
       }     
    }
};
</script>

<style lang="less" scoped>
    .tag {
    padding: 20px;
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>