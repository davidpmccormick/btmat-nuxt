<script>
export default {
  fetch ({params, redirect}) {
    if (!params.pageSlug) {
      return redirect('/news');
    }
  }
};
</script>
