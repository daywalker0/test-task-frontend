<script setup lang="ts">
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="input-wrap">
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  flex-direction: column;
  label {
    font-family: SourceSansPro;
    display: block;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
    padding-bottom: 4px;
    &::before {
      content: "";
      display: inline-block;
      position: relative;
      width: 4px;
      height: 4px;
      background: #ff8484;
      border-radius: 4px;
      z-index: 99;
      top: -6px;
    }
  }
  input {
		font-family: SourceSansPro;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		color: #3F3F3F;
    padding: 10px 16px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    outline: transparent;
    border: transparent;
    width: 100%;
    &::placeholder {
      font-family: SourceSansPro;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #b4b4b4;
    }
  }
}
form > div:nth-child(1) > label::before {
  right: -108px;
}
form > div:nth-child(2) {
	input {
		height: 108px;
  }
	label::before {
		display: none;
	}
}
form > div:nth-child(3) > label::before {
  right: -150px;
}
form > div:nth-child(4) > label::before {
  right: -62px;
}
input::-webkit-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input::-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:-ms-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus::-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus:-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus:-ms-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>
