<script>
import VueResizable from 'vue-resizable'
import {BButton} from "bootstrap-vue-3";
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: 'SideBar',
  components: {
    FontAwesomeIcon,
    BButton,
    VueResizable
  },
  data(){
    return{
      isVisibleSideBar: true,
      rating: ref(0)
    }
  },
  methods: {
    showSideBar(){
      this.isVisibleSideBar = !this.isVisibleSideBar
    },
    setRating(value){
      this.rating = value;
    }
  }
}


</script>

<template>
  <div class="side-bar-wrapper">
    <VueResizable
        class="resizable-side-bar"
        :width="500"
        :min-width="500"
        :max-width="Infinity"
        :active="['r']"
        v-if="isVisibleSideBar"
    >
      <div class="side-bar">
        <div class="title-area">
          <b-form-input placeholder="맛집 이름을 입력해주세요."/>
        </div>
        <div class="image-area">
          <div class="iw-file-input">
            사진을 업로드 해주세요
          </div>
        </div>
        <div class="location-info-area">
          <FontAwesomeIcon icon="location-dot" />
          <b-form-input placeholder="위치 정보 직접 입력하기"/>
        </div>
        <div class="rate-area">
            <span
              v-for="n in 5"
              :key="n"
              class="star"
              :class="{ filled: n <= rating}"
              @click="setRating(n)"
              >
              {{ n <= rating ? '★' : '☆'}}
            </span>
        </div>
        <div class="review-area">
          <b-form-textarea
            ref="textarea"
            placeholder="후기를 입력해주세요."
          />
        </div>
      </div>
    </VueResizable>
    <BButton
        class="side-bar-active-btn"
        size="sm"
        @click="showSideBar">
      <FontAwesomeIcon :icon="isVisibleSideBar ? 'angle-left' : 'angle-right'"/>
    </BButton>
  </div>
</template>

<style lang="scss" scoped>
.side-bar-wrapper{
  display: flex;
  color: #fff;
  > .resizable-side-bar{
    > .side-bar {
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 10px;
      > .title-area {
        padding: 20px 10px;

        input, input::placeholder, input:focus{
          font-family: 'Nanum Square', serif;
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          box-shadow: none;
          background: none;
          border: none;
        }
      }

      > .image-area {
        padding: 0 10px;
        > .iw-file-input {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.3rem;
          border: 5px dashed rgb(255, 255, 255, 0.5);
          border-radius: 10px;
          height: 250px;
          background-color: rgb(255, 255, 255, 0.5);
        }
      }
      .location-info-area{
        padding: 10px 20px;
        display: flex;
        align-items: center;

        input, input::placeholder, input:focus{
          font-size: 1rem;
          color: #fff;
          box-shadow: none;
          background: none;
          border: none;
        }
      }
      > .rate-area{
        padding: 0 20px;
        text-align: center;
        cursor: pointer;
        display: flex;
        justify-content: space-evenly;
        font-size: 3rem;
        color: #ffdd00;

        output{
          font-size: 2rem;
          color: #ffdd00;
          box-shadow: none;
          background: none;
          border: none;
        }
      }

      > .review-area{
        padding: 20px 10px;

        textarea, textarea::placeholder{
          min-height: 300px;
          resize: none;
          color: #fff;
          box-shadow: none;
          background: none;
          border: none;
        }
        /* width */
        ::-webkit-scrollbar{
          width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track{
          background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb{
          background: #888;
        }

        /* Handle on hover*/
        ::-webkit-scrollbar-thumb:hover{
          background: #555;
        }
      }
    }
  }

  > .side-bar-active-btn{
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    padding: 0;
    border: none;
    border-radius: unset;
    collapse: #fff;
    opacity: 0.5;
    width: 40px;
    height: 40px;
  }
}

</style>