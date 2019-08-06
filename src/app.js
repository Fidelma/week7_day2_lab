import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      worldData: [],
      selectedCountry: null,
      favouriteCountries: []
    },
    mounted() {
      this.getWorldData();
    },
    computed: {
      totalPopulation: function () {
        return this.worldData.reduce((sum, country) => {
          return sum + country.population;
        }, 0);
      }
    },
    methods: {
      getWorldData: function () {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.worldData = data)
      },
      addToFavourites: function () {
        this.favouriteCountries.push(this.selectedCountry);
      }
    }
  })
})
