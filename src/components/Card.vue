<template>
    <div class="card">
        <ul>
            <li><span>Titolo:</span> {{element.title}} </li>
            <li><span>Titolo originale:</span> {{element.original_title}} </li>
            <li><span>Lingua:</span> {{element.original_language}} </li>
            <li><span>Voto:</span> {{element.vote_average}} </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['element'],
}
</script>
<style>
span {
    font-weight: 800;
}
</style>