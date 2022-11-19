<template>
  <footer id="footer" class="footer">
    <p class="copyright">
      &copy; 2022 - くまなみ KIKUTATAKUYA.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style lang="scss" scoped>
footer {
  background-color: #ffbb5b;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: auto;
    display: block;
    padding: 30px 0;
  }
  .copyright {
    font-size: 12px;
    color: #fff;
    @media screen and (max-width: 767px) {
      text-align: center;
    }
  }
}
</style>
