<template>
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle">
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>
      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class='navigation__list'>
          <li class="navigation__item" v-for="(item, i) in items" :key="i">
            <a :href="item.to" class="navigation__link">
              <span>0{{i+1}}</span>{{item.label}}
            </a>
          </li>
        </ul>
      </nav>
    </div>
</template>
<script>
  export default {
    name: 'app-navigation',
    props: [ "items" ]
  }
</script>