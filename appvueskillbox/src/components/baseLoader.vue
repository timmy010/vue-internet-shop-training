<template>
  <div class="loader">
    <div class="container">
      <p class="loader_text">{{ text }}</p>
      <div class="bubbles">
        <div class="bubble">
          <div class="circle"></div>
        </div>
        <div class="bubble">
          <div class="circle"></div>
        </div>
        <div class="bubble">
          <div class="circle"></div>
        </div>
        <div class="bubble">
          <div class="circle"></div>
        </div>
        <div class="bubble">
          <div class="circle"></div>
        </div>
        <div class="bubble">
          <div class="circle"></div>
        </div>
        <div class="bubble">
          <div class="circle"></div>
        </div>
        <div class="bubble">
          <div class="circle"></div>
        </div>
        <div class="bubble">
          <div class="circle"></div>
        </div>
        <div class="bubble">
          <div class="circle"></div>
        </div>
        <div class="bubble">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
  .container{
    max-width:600px;
    min-height:200px;
    margin:100px auto;
    text-align:center;
  }
  .loader_text {
    font-size: 1.5em;
    font-weight: 400;
  }
  .bubbles{
    margin-top:50px;
    position:relative;
  }
  .bubble{
    display:inline-block;
    padding:0px 5px;

    @for $i from 1 to 11 {
        &:nth-of-type(#{$i}) .circle{
          animation-delay: $i * 0.1s;
        }
    }
  }
  .bubble .circle{
    width:25px; height:25px;
    border-radius:50%;
    background:#36b;
    animation: pulse 1.5s infinite;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  }

  @keyframes pulse{
    0%{ transform: scale(1); }
    50%{ transform: scale(0.2); opacity:0.75; }
    100%{ transform: scale(1); }
  }
</style>
