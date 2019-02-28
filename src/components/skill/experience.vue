<template>
  <div id="experience">
      <carrousel></carrousel> 
  </div>
  
</template>

<script>
import foot from "@/components/foot";
import carrousel from "@/components/skill/carrousel";
export default {
  data() {
    return {};
  },
  components: {
    foot,
    carrousel
  }
};
</script>

<style>
#experience{
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  background: black;
  box-sizing: border-box;
  color: #fff;
}

</style>
