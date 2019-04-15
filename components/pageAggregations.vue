<template>
  <div class="teaching">
    <ul>
      <li class="li1" v-for="recommendArticles in this.recommendArticles">
          <span>
            <nuxt-link
              :to="{path:'particulars',query:{id:recommendArticles.id}}">{{recommendArticles.title}} </nuxt-link>
          </span>
        <hr style="height:1px;border:none;border-top:1px dashed #475c7b;"/>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      recommendArticles: {
        type: Array,
      }
    },
    mounted() {
    },
    methods: {},
  }
</script>

<style scoped>
  .teaching {
    width: 592px;
  }

  .teaching ul {
    margin-left: -30px;
    list-style-type: disc;
  }

  .teaching ul li a {
    color: #475c7b;
    text-decoration: none;
  }

  .teaching ul li a:active {
    color: red;
    text-decoration: underline;
  }

  .teaching ul li span {
    font-size: 23px;
    display: block;
    padding: 5px 0;
  }
</style>
