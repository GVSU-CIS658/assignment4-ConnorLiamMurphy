<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" 
    :noCream="beverageStore.currentCreamer.name === 'No Cream'" 
    :noSyrup="beverageStore.currentSyrup.name === 'No Syrup'"/>
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="`r${base}`"
              :value="base"
              v-model="beverageStore.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`r${creamer}`"
              :value="creamer"
              v-model="beverageStore.currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup}`"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    <input type="text" placeholder="Beverage Name" v-model="name"/>
    <button @click="beverageStore.makeBeverage(name)">🍺 Make Beverage</button>
  </div>
  <div id="beverage-container" style="margin-top: 20px">
    <ul v-for="drink in beverageStore.drinks" :key="drink.id">
      <li ><button @click="beverageStore.showBeverage(drink.id)">{{ drink.name }}</button></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();
const name = ref("");
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
