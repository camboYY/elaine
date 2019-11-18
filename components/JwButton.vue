<template>
  <button
    class="jwbtn"
    :class="{ disabled: disabled, fullwidth: fullWidth, round: round }"
    :disabled="loading || disabled"
  >
    <loader v-if="loading" />
    <div v-else>
      <v-icon v-if="icon">{{ icon }}</v-icon>
      <slot></slot>
    </div>
  </button>
  <!-- <v-btn large class="jw-btn" :class="type">
    <slot></slot>
  </v-btn> -->
</template>

<script>
export default {
  name: 'JwButton',
  props: {
    icon: String,
    loading: Boolean,
    disabled: Boolean,
    fullWidth: Boolean,
    round: Boolean
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/variables.styl';

.jwbtn {
  border-radius: 10px;
  border: none;
  padding: 10px 15px;
  margin: 6px 8px;
  min-width: 110px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  font-weight: 800;
  font-size: 1rem;
  overflow: hidden;
  text-transform: uppercase;
  outline: none;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);

  i {
    margin-right: 3px;
    font-size: 1.2rem;
  }

  &:not(.disabled) {
    &:disabled {
      filter: brightness(0.4);
      cursor: wait;
    }
  }

  &.disabled {
    &:disabled {
      filter: brightness(0.4);
      cursor: not-allowed;
    }
  }

  &.fullwidth {
    width: 100%;
    margin: 6px 0;
  }

  &.round {
    border-radius: 1000px;
  }
}

.jwbtn-primary {
  background-color: $primary !important;
  -webkit-box-shadow: 0 0 0 1px $primary inset;
  box-shadow: 0 0 0 1px $primary inset;
}

.jwbtn-primary:hover:enabled {
  background-color: transparent !important;
}

.jwbtn-blue {
  background-color: $color-blue !important;
  -webkit-box-shadow: 0 0 0 1px $color-blue inset;
  box-shadow: 0 0 0 1px $color-blue inset;
}

.jwbtn-blue:hover:enabled {
  background-color: transparent !important;
}

.jwbtn-green {
  background-color: $color-green !important;
  -webkit-box-shadow: 0 0 0 1px $color-green inset;
  box-shadow: 0 0 0 1px $color-green inset;
}

.jwbtn-green:hover:enabled {
  background-color: transparent !important;
}

.jwbtn-green-border {
  background-color: $color-green !important;
  -webkit-box-shadow: 0 0 0 1px $color-green inset;
  box-shadow: 0 0 0 1px $color-green inset;
}

.jwbtn-primary-transparent {
  background-color: transparent !important;
  -webkit-box-shadow: 0 0 0 1px $primary inset;
  box-shadow: 0 0 0 1px $primary inset;
}

.jwbtn-primary-transparent:hover:enabled {
  background-color: $primary !important;
}

.jwbtn-red {
  background-color: $color-red !important;
  -webkit-box-shadow: 0 0 0 1px $color-red inset;
  box-shadow: 0 0 0 1px $color-red inset;
}

.jwbtn-red:hover {
  background-color: transparent !important;
}

.jwbtn-red-transparent {
  background-color: transparent !important;
  -webkit-box-shadow: 0 0 0 1px $color-red inset;
  box-shadow: 0 0 0 1px $color-red inset;
}

.jwbtn-red-transparent:hover {
  background-color: $color-red !important;
}

.jwbtn-white {
  background-color: $white;
  color: $color-green;
  text-shadow: none;

  i {
    color: $color-green;
  }
}

.jwbtn-pink {
  background-color: $color-pink-7 !important;
  -webkit-box-shadow: 0 0 0 1px $color-pink-7 inset;
  box-shadow: 0 0 0 1px $color-pink-7 inset;
}

.jwbtn-pink:hover {
  background-color: transparent !important;
  color $color-text-pink-1;
}
</style>

<style lang="stylus" scoped>
@import '~assets/variables.styl';

@media only screen and (min-width: 0px) and (max-width: 1600px) {
}

@media only screen and (min-width: 0px) and (max-width: 1300px) {
}

@media only screen and (min-width: 0px) and (max-width: 1280px) {
}

@media only screen and (min-width: 0px) and (max-width: 960px) {
  .jwbtn {
    border-radius: 40px;
  }
}

@media only screen and (min-width: 0px) and (max-width: 800px) {
}

@media only screen and (min-width: 0px) and (max-width: 640px) {
  .jwbtn {
    padding: 8px 10px;
    margin: 0;
  }
}

@media only screen and (min-width: 0px) and (max-width: 480px) {
}
</style>
