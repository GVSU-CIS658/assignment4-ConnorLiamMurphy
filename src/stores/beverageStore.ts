import { defineStore } from "pinia";
import temperatures from "../data/temperatures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import { BeverageType } from "../types/beverage";


export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temperatures,
    currentTemp: temperatures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    drinks: [] as BeverageType[],
    count: 0
  }),

  actions: {
    makeBeverage(name: string) {
      if (name){
        this.drinks.push({
          id: this.count,
          name: name,
          temp: this.currentTemp,
          base: this.currentBase,
          syrup: this.currentSyrup,
          creamer: this.currentCreamer,
        })
        this.count++;
      }
      if(name == "clear all drinks"){
        this.drinks = []
        this.count = 0;
      }
      

    },
    showBeverage(id: number) {
      for(let i = 0; i<this.drinks.length; i++){
        if (this.drinks[i].id == id){
          this.currentTemp = this.drinks[i].temp;
          this.currentBase = this.drinks[i].base;
          this.currentCreamer = this.drinks[i].creamer;
          this.currentSyrup = this.drinks[i].syrup;
        }
      }
      
    },
    
  },
  persist: true,
});

