<script>
export default {
  transition: 'fade',
  fetch ({params, redirect}) {
    if (!params.pageSlug) {
      return redirect('/news');
    }
  }
};
</script>
